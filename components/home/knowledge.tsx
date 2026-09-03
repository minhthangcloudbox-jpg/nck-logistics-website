import { Search } from 'lucide-react'
import { BrandButton, Section, SectionHeading } from '@/components/brand-ui'
import { ArticleCard } from '@/components/cards'
import { featuredGuides } from '@/lib/content'

export function HomeKnowledge() {
  return (
    <Section tone="surface" className="py-12 md:py-16">
      <SectionHeading title="Thư viện Kiến thức" description="Quy trình, chính sách, mã HS và chứng từ được hệ thống hóa để doanh nghiệp dễ tìm, dễ áp dụng." />
      <div className="mx-auto mt-8 grid max-w-[1340px] gap-5 md:grid-cols-2 xl:grid-cols-4">
        {featuredGuides.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}
        <div className="flex min-h-[360px] flex-col items-center justify-center rounded-xl border border-hairline bg-white p-7 text-center shadow-[0_8px_24px_rgba(7,59,120,.06)]">
          <span className="flex size-14 items-center justify-center rounded-full bg-tech text-navy"><Search className="size-6" /></span>
          <h3 className="mt-5 text-[21px] font-extrabold uppercase text-navy">Tra cứu kiến thức</h3>
          <p className="mt-3 max-w-[220px] text-[14px] leading-relaxed">Tìm nhanh mã HS, chính sách, thủ tục và checklist nghiệp vụ.</p>
          <BrandButton href="/thu-vien-kien-thuc" variant="outline" className="mt-6">Tra cứu ngay</BrandButton>
        </div>
      </div>
    </Section>
  )
}
