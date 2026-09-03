import { Section, SectionHeading } from '@/components/brand-ui'

const carriers = [
  { name: 'MAERSK', accent: 'bg-[#42B0D5]', text: 'text-[#0b315b]', mark: '✦' },
  { name: 'CMA CGM', accent: 'bg-[#0C4DA2]', text: 'text-[#0C4DA2]', mark: '◒' },
  { name: 'PIL', accent: 'bg-[#E31E24]', text: 'text-[#123E7C]', mark: '◆' },
  { name: 'MSC', accent: 'bg-black', text: 'text-black', mark: 'msc' },
  { name: 'CLF', accent: 'bg-[#0D5EA6]', text: 'text-[#0D5EA6]', mark: 'CLF' },
  { name: 'EVERGREEN', accent: 'bg-[#009A44]', text: 'text-[#008B3D]', mark: 'E' },
]

export function HomePartners() {
  return (
    <Section tone="surface" className="py-12 md:py-16">
      <SectionHeading
        title="Đối tác hãng tàu"
        description="Hệ thống logo dạng vector/CSS để luôn sắc nét; có thể thay trực tiếp bằng SVG chính thức khi anh cung cấp file logo gốc."
      />
      <ul className="mx-auto mt-8 grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
        {carriers.map((carrier) => (
          <li key={carrier.name} className="group relative flex h-24 items-center justify-center overflow-hidden rounded-xl border border-hairline bg-white px-4 shadow-[0_6px_22px_rgba(7,59,120,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(7,59,120,.12)]">
            <span aria-hidden className={`absolute inset-x-0 top-0 h-[3px] ${carrier.accent}`} />
            <div className="flex items-center gap-2.5">
              <span className={`text-[20px] font-black ${carrier.text}`}>{carrier.mark}</span>
              <span className={`text-[17px] font-extrabold tracking-[0.02em] ${carrier.text}`}>{carrier.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
