import Image from 'next/image'
import { Section, SectionHeading } from '@/components/brand-ui'

export function HomeNetwork() {
  return (
    <Section>
      <SectionHeading title="Mạng lưới đại lý & tuyến vận chuyển" description="Kết nối mạng lưới đại lý và đối tác vận chuyển trên nhiều thị trường." />
      <div className="relative mx-auto mt-8 max-w-[1160px] overflow-hidden rounded-md border border-hairline bg-[#edf8ff]">
        <div className="relative aspect-[2.45/1] w-full bg-[#edf8ff]"><Image src="/images/route-map.png" alt="Bản đồ minh hoạ mạng lưới tuyến vận chuyển của NCK Logistics" fill sizes="1160px" className="object-contain p-3 md:p-5" /></div>
      </div>
    </Section>
  )
}
