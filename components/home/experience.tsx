import Image from 'next/image'
import { Section, SectionHeading } from '@/components/brand-ui'
import { experienceCards } from '@/lib/content'

const experienceImages = [
  '/images/policy-review.png',
  '/images/customs-documents.png',
  '/images/capability-fleet.png',
]

export function HomeExperience() {
  return (
    <Section tone="surface" className="py-12 md:py-16 xl:py-20">
      <SectionHeading
        title="Kinh nghiệm từ những lô hàng thực tế"
        description="Kinh nghiệm được hình thành từ quá trình rà soát chính sách, chuẩn hóa hồ sơ và phối hợp giao nhận trên từng lô hàng cụ thể."
      />
      <ul className="mx-auto mt-10 grid max-w-[1760px] gap-6 lg:grid-cols-3 xl:gap-7">
        {experienceCards.map((card, index) => (
          <li
            key={card.title}
            className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-hairline bg-white shadow-[0_12px_34px_rgba(7,59,120,.08)] transition-all duration-300 hover:-translate-y-1 hover:border-sky/35 hover:shadow-[0_22px_52px_rgba(7,59,120,.14)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-[#eaf5fc]">
              <Image
                src={experienceImages[index]}
                alt={card.imageAlt}
                fill
                quality={92}
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover saturate-[1.08] contrast-[1.04] transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-dark/34 via-transparent to-sky/5" />
              <div aria-hidden className="tech-grid absolute inset-0 opacity-[.05] mix-blend-screen" />
              <span aria-hidden className="absolute left-5 top-5 size-6 border-l border-t border-white/70" />
              <span aria-hidden className="absolute bottom-5 right-5 size-6 border-b border-r border-white/60" />
            </div>
            <div className="flex flex-1 flex-col p-6 xl:p-7">
              <div className="mb-4 h-[3px] w-10 bg-brand" />
              <h3 className="text-[20px] leading-snug font-extrabold text-navy xl:text-[22px]">{card.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.72] text-muted-foreground xl:text-[16px]">{card.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
