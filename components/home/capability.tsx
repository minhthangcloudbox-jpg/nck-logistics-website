import Image from 'next/image'
import { Building2, Container, Truck, TruckElectric } from 'lucide-react'
import { Section, SectionHeading } from '@/components/brand-ui'

const stats = [
  { icon: Truck, strong: '14', label: 'xe vận hành' },
  { icon: TruckElectric, strong: '02', label: 'HOWO MAX 400 – 2026' },
  { icon: Container, strong: 'Container', label: "20' & 40'" },
  { icon: Building2, strong: 'Cảng', label: '– Kho – Nhà máy' },
]

export function HomeCapability() {
  return (
    <Section tone="surface" id="nang-luc">
      <SectionHeading title="Năng lực vận hành thực tế" />
      <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_330px]">
        <div className="relative aspect-[16/6.3] min-h-[270px] overflow-hidden rounded-md border border-hairline bg-background lg:min-h-[340px]">
          <Image src="/images/v3/hawo-fleet-approved.png" alt="Đội đầu kéo HOWO MAX 400 màu cam của NCK Logistics và container NCK Logistics tại cảng" fill sizes="(max-width: 1024px) 100vw, 1100px" className="object-cover object-center" />
        </div>
        <ul className="grid grid-cols-2 gap-3 lg:flex lg:flex-col">
          {stats.map((stat) => { const Icon = stat.icon; return (
            <li key={stat.strong + stat.label} className="flex min-h-[74px] flex-1 items-center gap-3 rounded-md border border-hairline bg-white px-4 py-3.5">
              <Icon className="size-6 shrink-0 text-navy" strokeWidth={1.6} />
              <p className="text-[13px] font-semibold tracking-[0.02em] text-navy-dark uppercase sm:text-[14px]"><span className="font-extrabold">{stat.strong}</span>{' '}<span>{stat.label}</span></p>
            </li>
          )})}
        </ul>
      </div>
    </Section>
  )
}
