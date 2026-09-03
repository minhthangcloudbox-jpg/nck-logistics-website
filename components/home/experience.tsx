import Image from 'next/image'
import { Section, SectionHeading } from '@/components/brand-ui'
import { experienceCards } from '@/lib/content'

export function HomeExperience() {
  return (
    <Section tone="surface" className="py-12 md:py-16 xl:py-18">
      <SectionHeading title="Kinh nghiệm từ những lô hàng thực tế" />
      <ul className="mx-auto mt-8 grid max-w-[1340px] gap-5 md:grid-cols-3">
        {experienceCards.map((card) => (
          <li key={card.title} className="group flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-background shadow-[0_8px_24px_rgba(7,59,120,.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(7,59,120,.12)]">
            <div className="relative aspect-[16/8.8] overflow-hidden bg-surface">
              <Image src={card.image} alt={card.imageAlt} fill quality={100} sizes="(max-width: 768px) 100vw, 430px" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/18 via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-5 md:p-6">
              <h3 className="text-[19px] leading-snug font-extrabold text-navy">{card.title}</h3>
              <p className="mt-2.5 text-[14px] leading-[1.68] text-muted-foreground md:text-[15px]">{card.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
