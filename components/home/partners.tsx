import { Section, SectionHeading } from '@/components/brand-ui'

const carriers = [
  { name: 'MAERSK', accent: '#42B0D5', text: '#0b315b' },
  { name: 'CMA CGM', accent: '#0C4DA2', text: '#0C4DA2' },
  { name: 'PIL', accent: '#E31E24', text: '#123E7C' },
  { name: 'MSC', accent: '#111111', text: '#111111' },
  { name: 'CLF', accent: '#0D5EA6', text: '#0D5EA6' },
  { name: 'EVERGREEN', accent: '#009A44', text: '#008B3D' },
]

export function HomePartners() {
  return (
    <Section tone="surface" className="py-14 md:py-18">
      <SectionHeading
        title="Đối tác hãng tàu"
        description="Kết nối linh hoạt với các hãng tàu và đối tác vận chuyển trên nhiều tuyến quốc tế."
      />
      <ul className="mx-auto mt-9 grid max-w-[1380px] grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
        {carriers.map((carrier) => (
          <li key={carrier.name} className="group relative flex h-28 items-center justify-center overflow-hidden rounded-2xl border border-hairline bg-white px-5 shadow-[0_8px_26px_rgba(7,59,120,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(7,59,120,.12)]">
            <span aria-hidden className="absolute inset-x-0 top-0 h-[4px]" style={{ backgroundColor: carrier.accent }} />
            <div className="flex flex-col items-center gap-2 text-center">
              <span aria-hidden className="h-1.5 w-8 rounded-full opacity-85" style={{ backgroundColor: carrier.accent }} />
              <span className="text-[19px] font-black tracking-[0.025em]" style={{ color: carrier.text }}>{carrier.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
