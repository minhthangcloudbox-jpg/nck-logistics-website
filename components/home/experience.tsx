import Image from 'next/image'
import { Section, SectionHeading } from '@/components/brand-ui'
import { experienceCards } from '@/lib/content'

export function HomeExperience() {
  return (
    <Section tone="surface" className="py-16 md:py-20 xl:py-24">
      <SectionHeading title="Kinh nghiệm từ những lô hàng thực tế" />
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {experienceCards.map((card) => (
          <li key={card.title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-background shadow-[0_10px_34px_rgba(7,59,120,.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(7,59,120,.14)]">
            <div className="relative aspect-[16/9] overflow-hidden bg-surface">
              <Image src={card.image} alt={card.imageAlt} fill quality={100} sizes="(max-width: 768px) 100vw, 520px" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/28 via-transparent to-sky/5" />
              <span aria-hidden className="absolute left-4 top-4 size-5 border-l border-t border-white/60" />
              <span aria-hidden className="absolute bottom-4 right-4 size-5 border-b border-r border-white/50" />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-7">
              <h3 className="text-[21px] leading-snug font-extrabold text-navy">{card.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-muted-foreground md:text-[16px]">{card.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
