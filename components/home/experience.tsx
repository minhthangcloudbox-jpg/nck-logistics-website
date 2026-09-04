import { Section, SectionHeading } from '@/components/brand-ui'
import { experienceCards } from '@/lib/content'

const atlasPositions = ['0% 0%', '50% 0%', '100% 0%']

export function HomeExperience() {
  return (
    <Section tone="surface" className="py-12 md:py-16 xl:py-18">
      <SectionHeading title="Kinh nghiệm từ những lô hàng thực tế" />
      <ul className="mx-auto mt-9 grid max-w-[1580px] gap-5 lg:grid-cols-3 xl:gap-6">
        {experienceCards.map((card, index) => (
          <li key={card.title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-background shadow-[0_10px_30px_rgba(7,59,120,.08)] transition-all duration-300 hover:-translate-y-1 hover:border-sky/35 hover:shadow-[0_20px_46px_rgba(7,59,120,.14)]">
            <div
              role="img"
              aria-label={card.imageAlt}
              className="relative aspect-[16/8.8] overflow-hidden bg-[#eaf5fc] bg-no-repeat transition-transform duration-700 group-hover:scale-[1.015]"
              style={{
                backgroundImage: "url('/images/home-modern-atlas.jpg')",
                backgroundSize: '300% 200%',
                backgroundPosition: atlasPositions[index],
              }}
            >
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-5 md:p-6 xl:p-7">
              <h3 className="text-[20px] leading-snug font-extrabold text-navy xl:text-[21px]">{card.title}</h3>
              <p className="mt-2.5 text-[14px] leading-[1.7] text-muted-foreground md:text-[15px] xl:text-[16px]">{card.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
