import { Section, SectionHeading } from '@/components/brand-ui'

const carriers = [
  { name: 'MAERSK', accent: '#42B0D5', text: '#0b315b', mark: '✦' },
  { name: 'CMA CGM', accent: '#0C4DA2', text: '#0C4DA2', mark: '◜' },
  { name: 'PIL', accent: '#E31E24', text: '#123E7C', mark: 'PIL' },
  { name: 'MSC', accent: '#111111', text: '#111111', mark: 'msc' },
  { name: 'CLF', accent: '#0D5EA6', text: '#0D5EA6', mark: 'CLF' },
  { name: 'EVERGREEN', accent: '#009A44', text: '#008B3D', mark: 'E' },
]

export function HomePartners() {
  return (
    <Section tone="surface" className="py-12 md:py-14">
      <SectionHeading title="Đối tác hãng tàu" />
      <ul className="mx-auto mt-8 grid max-w-[1280px] grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
        {carriers.map((carrier) => (
          <li key={carrier.name} className="group relative flex h-20 items-center justify-center overflow-hidden rounded-lg border border-hairline bg-white px-4 shadow-[0_5px_16px_rgba(7,59,120,.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(7,59,120,.10)]">
            <span aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ backgroundColor: carrier.accent }} />
            <div className="flex items-center gap-2.5">
              <span className="text-[18px] font-black leading-none" style={{ color: carrier.text }}>{carrier.mark}</span>
              <span className="text-[16px] font-extrabold tracking-[0.01em]" style={{ color: carrier.text }}>{carrier.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
