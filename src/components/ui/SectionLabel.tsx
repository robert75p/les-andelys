interface Props {
  children: string
}
export default function SectionLabel({ children }: Props) {
  return (
    <p className="font-dm text-xs uppercase tracking-[0.25em] text-[#C4A882] mb-4">{children}</p>
  )
}
