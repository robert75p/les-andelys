'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, User, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import FadeInView from '@/components/ui/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'
import type { PropertyContactData } from '@/lib/propertyTypes'

type SubmitState = 'idle' | 'submitting' | 'submitted' | 'error'

async function translateToFrench(text: string): Promise<string | null> {
  if (!text.trim()) return null
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=autodetect|fr`
    )
    const data = await res.json() as {
      responseData?: { translatedText?: string }
      responseStatus?: number
    }
    const translated = data?.responseData?.translatedText
    // Only include translation if it actually differs from the original (i.e. wasn't already French)
    if (data?.responseStatus === 200 && translated && translated.trim() !== text.trim()) {
      return translated
    }
    return null
  } catch {
    return null
  }
}

export default function Contact({ data }: { data?: PropertyContactData }) {
  const { t } = useLanguage()
  const f = t.contact.fields

  const backgroundImage = data?.backgroundImage ?? '/pictures/house/loft-entrance.jpeg'
  const agent = data?.agent ?? t.contact.agent
  const formEndpoint = data?.formEndpoint

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', consent: false })
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitState === 'submitted') return

    setSubmitState('submitting')

    // Always attempt translation — auto-detect source language from message content,
    // regardless of which UI language the user has selected
    let composedMessage = form.message
    const translation = await translateToFrench(form.message)
    if (translation) {
      composedMessage =
        `Message original :\n${form.message}\n\n` +
        `─── Traduction française ───\n${translation}`
    }

    if (formEndpoint) {
      try {
        const res = await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone || undefined,
            message: composedMessage,
          }),
        })
        setSubmitState(res.ok ? 'submitted' : 'error')
      } catch {
        setSubmitState('error')
      }
    } else {
      // No endpoint configured (e.g. Les Andelys) — simulate success
      setSubmitState('submitted')
    }
  }

  const buttonLabel =
    submitState === 'submitting' ? f.submitting :
    submitState === 'submitted'  ? f.submitted  :
    f.submit

  return (
    <section id="contact" className="bg-[#FAF8F4] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: image */}
          <FadeInView direction="left" className="relative hidden lg:block">
            <div className="relative w-full h-full min-h-[600px] rounded-sm overflow-hidden">
              <Image
                src={backgroundImage}
                alt="Adresse Privée — contact"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </FadeInView>

          {/* Right: form */}
          <FadeInView delay={0.1}>
            <SectionLabel>{t.contact.label}</SectionLabel>
            <p className="font-dm text-stone-600 leading-relaxed text-sm md:text-base mb-8">
              {t.contact.title}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-dm text-xs uppercase tracking-widest text-stone-400">{f.name}</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    required
                    disabled={submitState === 'submitted'}
                    className="bg-white border border-stone-200 rounded-sm px-4 py-3 font-dm text-sm text-stone-800 focus:outline-none focus:border-[#C4A882] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-dm text-xs uppercase tracking-widest text-stone-400">{f.email}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    required
                    disabled={submitState === 'submitted'}
                    className="bg-white border border-stone-200 rounded-sm px-4 py-3 font-dm text-sm text-stone-800 focus:outline-none focus:border-[#C4A882] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="font-dm text-xs uppercase tracking-widest text-stone-400">{f.phone}</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  disabled={submitState === 'submitted'}
                  className="bg-white border border-stone-200 rounded-sm px-4 py-3 font-dm text-sm text-stone-800 focus:outline-none focus:border-[#C4A882] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-dm text-xs uppercase tracking-widest text-stone-400">{f.message}</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder={f.messagePlaceholder}
                  disabled={submitState === 'submitted'}
                  className="bg-white border border-stone-200 rounded-sm px-4 py-3 font-dm text-sm text-stone-800 focus:outline-none focus:border-[#C4A882] transition-colors resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
                  disabled={submitState === 'submitted'}
                  className="mt-0.5 w-4 h-4 accent-[#C4A882]"
                />
                <span className="font-dm text-xs text-stone-500">{f.consent}</span>
              </label>

              {/* Error message */}
              {submitState === 'error' && (
                <p className="font-dm text-xs text-red-600 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
                  {f.errorMessage}
                </p>
              )}

              {/* Success confirmation */}
              {submitState === 'submitted' && (
                <div className="flex items-start gap-3 bg-[#8A9E7A]/15 border border-[#8A9E7A]/30 rounded-sm px-4 py-3">
                  <CheckCircle className="w-4 h-4 text-[#8A9E7A] shrink-0 mt-0.5" />
                  <p className="font-dm text-sm text-stone-700">{f.successMessage}</p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={submitState === 'submitting' || submitState === 'submitted'}
                className="w-full flex items-center justify-center gap-2 bg-[#C4A882] text-white font-dm text-sm py-4 rounded-sm hover:bg-[#b8956d] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-[#C4A882]"
              >
                {submitState === 'submitted' && <CheckCircle className="w-4 h-4" />}
                {buttonLabel}
              </button>
            </form>

            {/* Agent card */}
            <div className="mt-8 flex items-center gap-4 p-5 bg-white border border-stone-200 rounded-sm">
              <div className="w-12 h-12 bg-[#F0ECE4] rounded-full flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-[#C4A882]" />
              </div>
              <div>
                <p className="font-cormorant text-lg text-stone-900">{agent.name}</p>
                <p className="font-dm text-xs text-stone-400 mb-1">{agent.title}</p>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-1.5 font-dm text-sm text-[#C4A882] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {agent.email}
                </a>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
