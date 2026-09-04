import Image from 'next/image'
import { Section, SectionHeading } from '@/components/brand-ui'

export function HomeNetwork() {
  return (
    <Section className="py-12 md:py-16 xl:py-18">
      <SectionHeading title="Mạng lưới đại lý & tuyến vận chuyển" description="Kết nối mạng lưới đại lý và đối tác vận chuyển trên nhiều thị trường." />
      <div className="relative mx-auto mt-9 max-w-[1580px] overflow-hidden rounded-2xl border border-hairline bg-[#eaf6fd] shadow-[0_12px_34px_rgba(7,59,120,.08)]">
        <div aria-hidden className="tech-grid absolute inset-0 opacity-[.06]" />
        <div className="relative aspect-[3.15/1] min-h-[300px] w-full md:min-h-[360px] xl:min-h-[400px]">
          <Image src="/images/route-map.png" alt="Bản đồ minh hoạ mạng lưới tuyến vận chuyển của NCK Logistics" fill quality={100} sizes="(max-width: 1600px) 94vw, 1580px" className="object-cover object-center mix-blend-multiply" />
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(234,246,253,.08)_70%,rgba(234,246,253,.30)_100%)]" />
        </div>
      </div>
    </Section>
  )
}
