import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/brand-ui'
import { ArticleCard, DownloadCard, TopicCard, UpdateCard } from '@/components/cards'
import type { IconName } from '@/components/cards'
import { CtaBand } from '@/components/cta-band'
import { KnowledgeSearchPanel } from '@/components/knowledge/search-panel'
import { LookupTabs } from '@/components/knowledge/lookup-tabs'
import { PageHero } from '@/components/page-hero'
import { downloads, featuredGuides, knowledgeTopics, policyUpdates } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Thư viện Kiến thức — Tra cứu kiến thức xuất nhập khẩu',
  description:
    'Quy trình, chính sách, mã HS, chứng từ và kinh nghiệm thực tế được hệ thống hóa để dễ tìm – dễ hiểu – dễ áp dụng.',
}

export default function KnowledgePage() {
  return (
    <>
      <PageHero
        eyebrow="Thư viện nghiệp vụ NCK"
        title={
          <>
            Tra cứu kiến thức
            <br />
            xuất nhập khẩu
          </>
        }
        description="Quy trình, chính sách, mã HS, chứng từ và kinh nghiệm thực tế được hệ thống hóa để dễ tìm – dễ hiểu – dễ áp dụng."
        image="/images/knowledge-hero.png"
        imagePosition="56% center"
        imageAlt="Chứng từ xuất nhập khẩu, sổ tra cứu chính sách và kính lúp trên bàn làm việc"
      >
        <KnowledgeSearchPanel />
      </PageHero>

      <Section>
        <SectionHeading title="Tra cứu theo nhu cầu" />
        <LookupTabs />
      </Section>

      <Section tone="surface">
        <SectionHeading title="Hướng dẫn được quan tâm" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featuredGuides.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </Section>

      <Section id="chu-de">
        <SectionHeading title="Kiến thức theo chủ đề" />
        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {knowledgeTopics.map((topic) => (
            <li key={topic.title}>
              <TopicCard
                title={topic.title}
                text={topic.text}
                icon={topic.icon as IconName}
                href="/blog"
              />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHeading title="Cập nhật chính sách mới" />
        <ul className="mt-10 grid gap-4 lg:grid-cols-3">
          {policyUpdates.map((update) => (
            <li key={update.title}>
              <UpdateCard
                title={update.title}
                text={update.text}
                date={update.date}
                isNew={update.isNew}
                icon={update.icon as IconName}
              />
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading title="Biểu mẫu và checklist dùng ngay" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {downloads.slice(0, 4).map((item) => (
            <li key={item.title}>
              <DownloadCard item={item} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Chưa tìm thấy thủ tục bạn cần?"
        description="Gửi tên hàng và thông tin lô hàng để NCK gợi ý nội dung phù hợp."
        primary={{ label: 'Hỏi NCK', href: '/lien-he' }}
        secondary={{ label: 'Tài liệu tải về', href: '/tai-lieu-tai-ve' }}
      />
    </>
  )
}
