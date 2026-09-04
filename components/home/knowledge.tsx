import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import { BrandButton, Section, SectionHeading } from '@/components/brand-ui'
import { featuredGuides } from '@/lib/content'

const knowledgeImages = [
  '/images/customs-declaration-laptop.png',
  '/images/customs-documents.png',
  '/images/cargo-ship.png',
]

export function HomeKnowledge() {
  return (
    <Section tone="surface" className="py-12 md:py-16 xl:py-20">
      <SectionHeading
        title="Thư viện Kiến thức"
        description="Quy trình, chính sách, mã HS và chứng từ được hệ thống hóa để doanh nghiệp dễ tìm, dễ áp dụng."
      />
      <div className="mx-auto mt-10 grid max-w-[1760px] gap-6 md:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_320px] xl:gap-7">
        {featuredGuides.slice(0, 3).map((article, index) => (
          <article
            key={article.slug}
            className="group overflow-hidden rounded-[22px] border border-hairline bg-white shadow-[0_12px_34px_rgba(7,59,120,.08)] transition-all duration-300 hover:-translate-y-1 hover:border-sky/35 hover:shadow-[0_22px_52px_rgba(7,59,120,.14)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-[#eaf5fc]">
              <Image
                src={knowledgeImages[index]}
                alt={article.imageAlt}
                fill
                quality={92}
                sizes="(max-width: 1280px) 50vw, 25vw"
                className="object-cover saturate-[1.08] contrast-[1.04] transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-dark/36 via-transparent to-sky/5" />
              <div aria-hidden className="tech-grid absolute inset-0 opacity-[.05] mix-blend-screen" />
              <span aria-hidden className="absolute left-5 top-5 size-6 border-l border-t border-white/70" />
              <span aria-hidden className="absolute bottom-5 right-5 size-6 border-b border-r border-white/60" />
            </div>
            <div className="p-6 xl:p-7">
              <span className="inline-flex rounded-md bg-tech px-2.5 py-1 text-[11px] font-extrabold tracking-[.04em] text-navy uppercase">{article.category}</span>
              <h3 className="mt-4 text-[20px] leading-[1.3] font-extrabold text-navy xl:text-[21px]">{article.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-muted-foreground">{article.excerpt}</p>
              <p className="mt-4 text-[13px] text-muted-foreground">{article.readTime}</p>
              <Link href={`/thu-vien-kien-thuc/${article.slug}`} className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold tracking-[.04em] text-brand uppercase transition-all hover:gap-3">
                Xem hướng dẫn <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        ))}

        <div className="flex min-h-[410px] flex-col items-center justify-center rounded-[22px] border border-hairline bg-[radial-gradient(circle_at_50%_24%,rgba(51,133,198,.15),transparent_34%),linear-gradient(180deg,#fff,#f2f8fd)] p-8 text-center shadow-[0_12px_34px_rgba(7,59,120,.08)]">
          <span className="flex size-16 items-center justify-center rounded-full border border-sky/15 bg-white text-navy shadow-[0_8px_22px_rgba(7,59,120,.08)]"><Search className="size-7" /></span>
          <h3 className="mt-6 text-[22px] font-extrabold uppercase text-navy">Tra cứu kiến thức</h3>
          <p className="mt-3 max-w-[240px] text-[15px] leading-relaxed">Tìm nhanh mã HS, chính sách, thủ tục và checklist nghiệp vụ.</p>
          <BrandButton href="/thu-vien-kien-thuc" variant="outline" className="mt-7 bg-white">Tra cứu ngay</BrandButton>
        </div>
      </div>
    </Section>
  )
}
