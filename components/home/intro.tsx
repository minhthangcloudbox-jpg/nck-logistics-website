import Image from 'next/image'
import { BrandButton, Section, SectionHeading } from '@/components/brand-ui'

const paragraphs = [
  'NCK Logistics là đơn vị giao nhận – vận chuyển – làm thủ tục hải quan, đồng hành cùng doanh nghiệp trong toàn bộ chuỗi cung ứng quốc tế và nội địa.',
  'Chúng tôi am hiểu chính sách, chuẩn hóa chứng từ, tuân thủ quy định và phối hợp chặt chẽ với các cơ quan chức năng để đảm bảo lô hàng thông quan nhanh chóng, an toàn và hiệu quả.',
  'NCK Logistics cam kết mang đến giải pháp tối ưu, linh hoạt và minh bạch, giúp doanh nghiệp tập trung vào hoạt động kinh doanh cốt lõi.',
]

const images = [
  { src: '/images/customs-declaration-laptop.png', alt: 'Hồ sơ hải quan và khai báo trên máy tính' },
  { src: '/images/ref/hero-solutions-clean.jpg', alt: 'Vận tải container và hệ thống cảng hiện đại' },
  { src: '/images/v3/hawo-fleet-approved.png', alt: 'Đội xe HOWO MAX màu cam của NCK Logistics' },
  { src: '/images/ref/capability-howomax-clean.jpg', alt: 'Năng lực vận hành xe container NCK Logistics' },
]

export function HomeIntro() {
  return (
    <Section className="py-16 md:py-20 xl:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,.72fr)_minmax(0,1.28fr)] lg:gap-14 xl:gap-20">
        <div className="max-w-[620px]">
          <SectionHeading align="left" title="NCK Logistics là ai?" />
          <div className="mt-6 flex flex-col gap-4 text-[15px] leading-[1.82] md:text-[16px] xl:text-[17px]">
            {paragraphs.map((text) => <p key={text}>{text}</p>)}
          </div>
          <BrandButton href="/giai-phap-dich-vu" variant="outline" className="mt-8">Tìm hiểu giải pháp</BrandButton>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div key={image.src} className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-hairline bg-surface shadow-[0_14px_38px_rgba(7,59,120,.10)]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={100}
                sizes="(max-width: 1024px) 50vw, 520px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/22 via-transparent to-sky/5" />
              <span aria-hidden className="absolute left-4 top-4 size-5 border-l border-t border-white/65" />
              <span aria-hidden className="absolute bottom-4 right-4 size-5 border-b border-r border-white/55" />
              {index === 2 && <span className="absolute right-3 bottom-3 rounded-full border border-white/70 bg-white/92 px-3 py-1 text-[11px] font-bold tracking-[.04em] text-navy uppercase backdrop-blur">NCK Fleet</span>}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
