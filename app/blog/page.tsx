import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/brand-ui'
import { UpdateCard } from '@/components/cards'
import type { IconName } from '@/components/cards'
import { BlogPostList } from '@/components/blog/post-list'
import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { blogPosts, policyUpdates } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog / Tin tức — Cập nhật nghiệp vụ và chính sách xuất nhập khẩu',
  description:
    'Tin hải quan, tin logistics, cập nhật chính sách và các case thực tế từ hoạt động giao nhận của NCK Logistics.',
}

const featured = blogPosts[0]

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog / Tin tức NCK"
        title={
          <>
            Cập nhật nghiệp vụ
            <br />
            và chính sách xuất nhập khẩu
          </>
        }
        description="Theo dõi các thay đổi chính sách, tin hải quan, tin logistics và kinh nghiệm xử lý lô hàng thực tế."
        primary={{ label: 'Xem bài viết', href: '#bai-viet' }}
        secondary={{ label: 'Tra cứu kiến thức', href: '/thu-vien-kien-thuc' }}
        image="/images/ref/hero-solutions-clean.jpg"
        imageAlt="Tài liệu chính sách xuất nhập khẩu và sổ tra cứu trên bàn làm việc"
      />

      <Section>
        <SectionHeading title="Bài viết nổi bật" />
        <article className="mt-10 grid overflow-hidden rounded-md border border-hairline bg-background lg:grid-cols-2">
          <div className="relative min-h-[240px]">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 660px"
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <span className="w-fit rounded-sm bg-tech px-2.5 py-1 text-xs font-bold tracking-wide text-navy uppercase">
              {featured.category}
            </span>
            <h3 className="mt-4 text-2xl leading-snug font-extrabold text-balance text-navy-dark md:text-[28px]">
              {featured.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed">{featured.excerpt}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              {featured.readTime} · {featured.date}
            </p>
            <Link
              href={`/blog#${featured.slug}`}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-[13px] font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-[#d63a29]"
            >
              Đọc bài viết
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </article>
      </Section>

      <Section tone="surface">
        <SectionHeading title="Cập nhật chính sách mới nhất" />
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

      <Section id="bai-viet">
        <SectionHeading title="Tất cả bài viết" />
        <BlogPostList />
      </Section>

      <CtaBand
        title="Cần tư vấn cho lô hàng cụ thể?"
        description="Gửi thông tin lô hàng để đội ngũ NCK Logistics rà soát chính sách và đề xuất phương án."
        primary={{ label: 'Hỏi NCK', href: '/lien-he' }}
        secondary={{ label: 'Tra cứu kiến thức', href: '/thu-vien-kien-thuc' }}
      />
    </>
  )
}
