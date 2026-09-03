import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { Section, SectionHeading } from '@/components/brand-ui'
import { ArticleCard, BrandIcon, IconTile, ProcessTimeline } from '@/components/cards'
import type { IconName } from '@/components/cards'
import { PageHero } from '@/components/page-hero'
import { SolutionBlock } from '@/components/solution-block'
import { ShipmentEnquiryBand } from '@/components/shipment-enquiry-band'
import {
  customerGroups,
  featuredGuides,
  problemCards,
  processSteps,
  solutionBlocks,
} from '@/lib/content'

export const metadata: Metadata = {
  title: 'Giải pháp & Dịch vụ — Giải quyết đúng vấn đề của từng lô hàng',
  description:
    'Từ kiểm tra chính sách, chuẩn bị chứng từ đến vận chuyển và giao nhận – NCK Logistics xây dựng phương án phù hợp với từng nhu cầu thực tế.',
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Giải pháp Logistics"
        title={
          <>
            Giải quyết đúng
            <br />
            vấn đề của từng
            <br />
            lô hàng
          </>
        }
        description="Từ kiểm tra chính sách, chuẩn bị chứng từ đến vận chuyển và giao nhận – NCK xây dựng phương án phù hợp với từng nhu cầu thực tế."
        primary={{ label: 'Chọn giải pháp', href: '#chon-giai-phap' }}
        secondary={{ label: 'Trao đổi lô hàng', href: '/lien-he' }}
        image="/images/v3/hawo-fleet-approved.png"
        imagePosition="69% center"
        imageAlt="Xe đầu kéo container, tàu hàng và máy bay chở hàng minh hoạ giải pháp logistics đa phương thức"
      />

      <Section>
        <SectionHeading title="Bạn đang cần xử lý vấn đề nào?" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {problemCards.map((card) => (
            <li key={card.title}>
              <IconTile
                title={card.title}
                text={card.text}
                icon={card.icon as IconName}
                href={card.href}
              />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" id="giai-phap">
        <SectionHeading title="Giải pháp theo từng nhu cầu" />
        <div className="mt-10 flex flex-col gap-5">
          {solutionBlocks.map((block, index) => (
            <SolutionBlock
              key={block.id}
              id={block.id}
              letter={block.letter}
              title={block.title}
              image={block.image}
              imageAlt={block.imageAlt}
              problems={block.problems}
              solutions={block.solutions}
              flip={index % 2 === 1}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Một đầu mối từ chứng từ đến giao hàng" />
        <ProcessTimeline steps={processSteps} />
      </Section>

      <Section tone="surface" id="chon-giai-phap">
        <SectionHeading title="Chọn giải pháp phù hợp" />
        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {customerGroups.map((group) => (
            <li
              key={group.title}
              className="flex h-full flex-col rounded-md border border-hairline bg-background p-6"
            >
              <span className="flex size-12 items-center justify-center rounded-md bg-tech text-navy">
                <BrandIcon name={group.icon as IconName} />
              </span>
              <h3 className="mt-4 text-xl leading-snug font-bold text-balance text-navy">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading title="Hiểu thủ tục trước khi sử dụng dịch vụ" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.slice(0, 3).map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </Section>

      <ShipmentEnquiryBand />
    </>
  )
}
