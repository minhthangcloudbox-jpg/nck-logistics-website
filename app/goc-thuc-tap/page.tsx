import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/brand-ui'
import { ArticleCard, DownloadCard, IconTile, ProcessTimeline } from '@/components/cards'
import type { IconName } from '@/components/cards'
import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import {
  downloads,
  internshipArticles,
  internshipCases,
  internshipRoadmap,
  internshipStarters,
} from '@/lib/content'

export const metadata: Metadata = {
  title: 'Góc thực tập — Kiến thức thực tế cho người mới vào nghề',
  description:
    'Lộ trình học, kiến thức nền và tình huống thực tế giúp sinh viên, thực tập sinh xuất nhập khẩu bắt đầu đúng hướng.',
}

export default function InternshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Góc thực tập NCK"
        title={
          <>
            Kiến thức thực tế
            <br />
            cho người mới vào nghề
          </>
        }
        description="Bắt đầu từ quy trình tổng thể, bộ chứng từ cơ bản đến khai báo và xử lý tình huống thực tế trong từng lô hàng."
        primary={{ label: 'Bắt đầu từ đâu', href: '#bat-dau' }}
        secondary={{ label: 'Tra cứu kiến thức', href: '/thu-vien-kien-thuc' }}
        image="/images/customs-declaration-laptop.png"
        imagePosition="58% center"
        imageAlt="Tài liệu nghiệp vụ xuất nhập khẩu và sổ tra cứu chính sách trên bàn làm việc"
      />

      <Section id="bat-dau">
        <SectionHeading title="Bắt đầu từ đâu?" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {internshipStarters.map((item) => (
            <li key={item.title}>
              <IconTile title={item.title} text={item.text} icon={item.icon as IconName} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHeading title="Lộ trình học" />
        <ProcessTimeline steps={internshipRoadmap} />
      </Section>

      <Section>
        <SectionHeading title="Kiến thức cho thực tập sinh" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {internshipArticles.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} ctaLabel="Xem bài viết" />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHeading title="Tình huống thực tế" />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {internshipCases.map((item, index) => (
            <li
              key={item.title}
              className="flex h-full gap-5 rounded-md border border-hairline bg-background p-6"
            >
              <span className="text-2xl font-extrabold text-brand tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg leading-snug font-bold text-balance text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading title="Tài liệu dành cho thực tập sinh" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {downloads.slice(0, 4).map((item) => (
            <li key={item.title}>
              <DownloadCard item={item} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Muốn thực hành trên lô hàng thật?"
        description="Gửi câu hỏi nghiệp vụ hoặc mong muốn thực tập, đội ngũ NCK Logistics sẽ phản hồi và hướng dẫn."
        primary={{ label: 'Liên hệ NCK', href: '/lien-he' }}
        secondary={{ label: 'Tài liệu tải về', href: '/tai-lieu-tai-ve' }}
      />
    </>
  )
}
