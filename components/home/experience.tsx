import Image from 'next/image'
import { Section, SectionHeading } from '@/components/brand-ui'
import { experienceCards } from '@/lib/content'

export function HomeExperience() {
  return (
    <Section tone="surface">
      <SectionHeading title="Kinh nghiệm từ những lô hàng thực tế" />
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {experienceCards.map((card) => (
          <li key={card.title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-background shadow-[0_8px_28px_rgba(7,59,120,.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(7,59,120,.13)]">
            <div className="relative aspect-[16/10] overflow-hidden bg-surface">
              <Image src={card.image} alt={card.imageAlt} fill quality={95} sizes="(max-width: 768px) 100vw, 460px" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/22 via-transparent to-sky/5" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-navy">{card.title}</h3>
              <p className="mt-2.5 text-base leading-relaxed text-muted-foreground">{card.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
