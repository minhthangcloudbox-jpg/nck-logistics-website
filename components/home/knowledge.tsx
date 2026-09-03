import { Search } from 'lucide-react'
import { BrandButton, Section, SectionHeading } from '@/components/brand-ui'
import { ArticleCard } from '@/components/cards'
import { featuredGuides } from '@/lib/content'

export function HomeKnowledge() {
  return (
    <Section tone="surface">
      <SectionHeading title="Thư viện Kiến thức" description="Quy trình, chính sách, mã HS và chứng từ được hệ thống hóa để doanh nghiệp dễ tìm, dễ áp dụng." />
      <div className="mt-8 grid gap-4 lg:grid-cols-[repeat(3,minmax(0,1fr))_250px]">
        {featuredGuides.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}
        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-md border border-hairline bg-white p-6 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-tech text-navy"><Search className="size-6" /></span>
          <h3 className="mt-5 text-xl font-extrabold uppercase text-navy">Tra cứu kiến thức</h3>
          <p className="mt-2 text-[14px] leading-relaxed">Tìm nhanh mã HS, chính sách, thủ tục và checklist nghiệp vụ.</p>
          <BrandButton href="/thu-vien-kien-thuc" variant="outline" className="mt-5">Tra cứu ngay</BrandButton>
        </div>
      </div>
    </Section>
  )
}
