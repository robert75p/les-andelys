'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, User } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import FadeInView from '@/components/ui/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Contact() {
  const { t } = useLanguage()
  const f = t.contact.fields
  const agent = t.contact.agent

  const [form, setForm] = useState({
    name: '', email: '', phone: '', message: '', consent: false,
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-[#FAF8F4] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: image */}
          <FadeInView direction="left" className="relative hidden lg:block">
            <div className="relative w-full h-full min-h-[600px] rounded-sm overflow-hidden">
              <Image
                src="/pictures/house/loft-entrance.jpeg"
                alt="Loft des Andelys — entrée et salon"
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

            {sent ? (
              <div className="bg-[#8A9E7A]/20 border border-[#8A9E7A]/30 rounded-sm p-8 text-center">
                <p className="font-cormorant italic text-2xl text-stone-700">Merci !</p>
                <p className="font-dm text-sm text-stone-500 mt-2">Votre demande a bien été envoyée.</p>
              </div>
            ) : (
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
                      className="bg-white border border-stone-200 rounded-sm px-4 py-3 font-dm text-sm text-stone-800 focus:outline-none focus:border-[#C4A882] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-dm text-xs uppercase tracking-widest text-stone-400">{f.email}</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      required
                      className="bg-white border border-stone-200 rounded-sm px-4 py-3 font-dm text-sm text-stone-800 focus:outline-none focus:border-[#C4A882] transition-colors"
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
                    className="bg-white border border-stone-200 rounded-sm px-4 py-3 font-dm text-sm text-stone-800 focus:outline-none focus:border-[#C4A882] transition-colors"
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
                    className="bg-white border border-stone-200 rounded-sm px-4 py-3 font-dm text-sm text-stone-800 focus:outline-none focus:border-[#C4A882] transition-colors resize-none"
                  />
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
                    className="mt-0.5 w-4 h-4 accent-[#C4A882]"
                  />
                  <span className="font-dm text-xs text-stone-500">{f.consent}</span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-[#C4A882] text-white font-dm text-sm py-4 rounded-sm hover:bg-[#b8956d] transition-colors duration-300"
                >
                  {f.submit}
                </button>
              </form>
            )}

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
