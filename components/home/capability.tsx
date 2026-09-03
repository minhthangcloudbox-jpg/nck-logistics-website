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
    <Section tone="surface" id="nang-luc" className="py-16 md:py-20 xl:py-24">
      <SectionHeading title="Năng lực vận hành thực tế" />
      <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_330px] xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-hairline bg-background shadow-[0_16px_46px_rgba(7,59,120,.10)] lg:min-h-[400px]">
          <Image src="/images/v3/hawo-fleet-approved.png" alt="Đội đầu kéo HOWO MAX 400 màu cam của NCK Logistics và container NCK Logistics tại cảng" fill quality={100} sizes="(max-width: 1024px) 100vw, 1200px" className="object-cover object-center" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy/6" />
        </div>
        <ul className="grid grid-cols-2 gap-3 lg:flex lg:flex-col lg:gap-4">
          {stats.map((stat) => { const Icon = stat.icon; return (
            <li key={stat.strong + stat.label} className="flex min-h-[86px] flex-1 items-center gap-4 rounded-2xl border border-hairline bg-white px-5 py-4 shadow-[0_8px_26px_rgba(7,59,120,.06)]">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#f3f9fe] text-navy"><Icon className="size-6" strokeWidth={1.6} /></span>
              <p className="text-[13px] font-semibold tracking-[0.02em] text-navy-dark uppercase sm:text-[14px]"><span className="font-extrabold">{stat.strong}</span>{' '}<span>{stat.label}</span></p>
            </li>
          )})}
        </ul>
      </div>
    </Section>
  )
}
