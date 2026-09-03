import Image from 'next/image'
import { Section, SectionHeading } from '@/components/brand-ui'

export function HomeNetwork() {
  return (
    <Section className="py-16 md:py-20 xl:py-24">
      <SectionHeading title="Mạng lưới đại lý & tuyến vận chuyển" description="Kết nối mạng lưới đại lý và đối tác vận chuyển trên nhiều thị trường." />
      <div className="relative mx-auto mt-10 max-w-[1380px] overflow-hidden rounded-2xl border border-hairline bg-[#eaf6fd] shadow-[0_14px_40px_rgba(7,59,120,.08)]">
        <div aria-hidden className="tech-grid absolute inset-0 opacity-[.08]" />
        <div className="relative aspect-[2.2/1] min-h-[360px] w-full md:min-h-[430px]">
          <Image src="/images/route-map.png" alt="Bản đồ minh hoạ mạng lưới tuyến vận chuyển của NCK Logistics" fill quality={100} sizes="1380px" className="object-contain p-3 md:p-6" />
        </div>
      </div>
    </Section>
  )
}
