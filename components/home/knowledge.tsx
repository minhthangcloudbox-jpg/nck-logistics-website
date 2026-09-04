import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import { BrandButton, Section, SectionHeading } from '@/components/brand-ui'
import { featuredGuides } from '@/lib/content'

const atlasPositions = ['0% 100%', '50% 100%', '100% 100%']

export function HomeKnowledge() {
  return (
    <Section tone="surface" className="py-12 md:py-16 xl:py-18">
      <SectionHeading title="Thư viện Kiến thức" description="Quy trình, chính sách, mã HS và chứng từ được hệ thống hóa để doanh nghiệp dễ tìm, dễ áp dụng." />
      <div className="mx-auto mt-9 grid max-w-[1580px] gap-5 md:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_300px] xl:gap-6">
        {featuredGuides.slice(0, 3).map((article, index) => (
          <article key={article.slug} className="group overflow-hidden rounded-2xl border border-hairline bg-white shadow-[0_10px_30px_rgba(7,59,120,.08)] transition-all duration-300 hover:-translate-y-1 hover:border-sky/35 hover:shadow-[0_20px_46px_rgba(7,59,120,.14)]">
            <div
              role="img"
              aria-label={article.imageAlt}
              className="relative aspect-[16/9] bg-[#eaf5fc] bg-no-repeat transition-transform duration-700 group-hover:scale-[1.015]"
              style={{
                backgroundImage: "url('/images/home-modern-atlas.jpg')",
                backgroundSize: '300% 200%',
                backgroundPosition: atlasPositions[index],
              }}
            >
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/18 via-transparent to-transparent" />
            </div>
            <div className="p-5 md:p-6">
              <span className="inline-flex rounded-md bg-tech px-2.5 py-1 text-[11px] font-extrabold tracking-[.04em] text-navy uppercase">{article.category}</span>
              <h3 className="mt-4 text-[19px] leading-[1.3] font-extrabold text-navy xl:text-[20px]">{article.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.68] text-muted-foreground md:text-[15px]">{article.excerpt}</p>
              <p className="mt-4 text-[13px] text-muted-foreground">{article.readTime}</p>
              <Link href={`/thu-vien-kien-thuc/${article.slug}`} className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold tracking-[.04em] text-brand uppercase transition-all hover:gap-3">
                Xem hướng dẫn <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        ))}

        <div className="flex min-h-[390px] flex-col items-center justify-center rounded-2xl border border-hairline bg-[radial-gradient(circle_at_50%_28%,rgba(51,133,198,.12),transparent_34%),linear-gradient(180deg,#fff,#f4f9fd)] p-7 text-center shadow-[0_10px_30px_rgba(7,59,120,.08)]">
          <span className="flex size-16 items-center justify-center rounded-full border border-sky/15 bg-white text-navy shadow-[0_8px_22px_rgba(7,59,120,.08)]"><Search className="size-7" /></span>
          <h3 className="mt-6 text-[22px] font-extrabold uppercase text-navy">Tra cứu kiến thức</h3>
          <p className="mt-3 max-w-[230px] text-[14px] leading-relaxed md:text-[15px]">Tìm nhanh mã HS, chính sách, thủ tục và checklist nghiệp vụ.</p>
          <BrandButton href="/thu-vien-kien-thuc" variant="outline" className="mt-7 bg-white">Tra cứu ngay</BrandButton>
        </div>
      </div>
    </Section>
  )
}
