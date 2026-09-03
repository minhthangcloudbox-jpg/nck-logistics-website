import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Barcode,
  Building2,
  CheckCircle2,
  ClipboardList,
  Construction,
  Container,
  Download,
  Factory,
  FileSpreadsheet,
  FileText,
  Globe,
  Headset,
  Inbox,
  Package,
  Scale,
  ShieldCheck,
  Ship,
  Truck,
} from 'lucide-react'
import type { Article, DownloadItem } from '@/lib/content'
import { cn } from '@/lib/utils'

export const iconMap = {
  package: Package,
  barcode: Barcode,
  file: FileText,
  shield: ShieldCheck,
  truck: Truck,
  headset: Headset,
  globe: Globe,
  scale: Scale,
  ship: Ship,
  inbox: Inbox,
  clipboard: ClipboardList,
  crane: Construction,
  check: CheckCircle2,
  building: Building2,
  container: Container,
  factory: Factory,
} as const

export type IconName = keyof typeof iconMap

export function BrandIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = iconMap[name]
  return <Icon className={cn('size-6', className)} strokeWidth={1.7} aria-hidden />
}

/* ---------------------------------------------------------------- ArticleCard */

export function ArticleCard({
  article,
  ctaLabel = 'Xem hướng dẫn',
  href,
  meta,
}: {
  article: Article
  ctaLabel?: string
  href?: string
  meta?: string
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border border-hairline bg-background">
      <div className="relative aspect-16/10">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          quality={86}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="w-fit rounded-sm bg-tech px-2.5 py-1 text-xs font-bold tracking-wide text-navy uppercase">
          {article.category}
        </span>
        <h3 className="mt-3 text-lg leading-snug font-bold text-balance text-navy-dark">
          {article.title}
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed">{article.excerpt}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          {article.readTime}
          {meta ? ` · ${meta}` : ''}
        </p>
        <Link
          href={href ?? `/thu-vien-kien-thuc#${article.slug}`}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-md border border-brand px-4 py-2.5 text-xs font-bold tracking-[0.08em] text-brand uppercase transition-colors hover:bg-brand hover:text-white"
        >
          {ctaLabel}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  )
}

/* ------------------------------------------------------------------ TopicCard */

export function TopicCard({
  title,
  text,
  icon,
  href,
  ctaLabel = 'Xem bài viết',
}: {
  title: string
  text: string
  icon: IconName
  href: string
  ctaLabel?: string
}) {
  return (
    <Link
      href={href}
      className="group flex h-full gap-4 rounded-md border border-hairline bg-background p-5 transition-colors hover:border-sky/50 hover:bg-surface"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-tech text-navy">
        <BrandIcon name={icon} className="size-5" />
      </span>
      <div>
        <h3 className="text-lg font-bold text-navy-dark">{title}</h3>
        <p className="mt-1.5 text-[15px] leading-relaxed">{text}</p>
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand">
          {ctaLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

/* ----------------------------------------------------------------- IconTile */

export function IconTile({
  title,
  text,
  icon,
  href,
}: {
  title: string
  text: string
  icon: IconName
  href?: string
}) {
  const inner = (
    <>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-tech text-navy">
        <BrandIcon name={icon} className="size-5" />
      </span>
      <div className="mt-4">
        <h3 className="text-lg leading-snug font-bold text-balance text-navy">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed">{text}</p>
      </div>
      {href && (
        <span className="mt-5 flex size-9 items-center justify-center rounded-full border border-brand/40 text-brand">
          <ArrowRight className="size-4" />
        </span>
      )}
    </>
  )

  const base =
    'flex h-full flex-col rounded-md border border-hairline bg-background p-5 transition-colors'

  return href ? (
    <Link href={href} className={cn(base, 'hover:border-sky/50 hover:bg-surface')}>
      {inner}
    </Link>
  ) : (
    <div className={base}>{inner}</div>
  )
}

/* --------------------------------------------------------------- UpdateCard */

export function UpdateCard({
  title,
  text,
  date,
  isNew,
  icon,
}: {
  title: string
  text: string
  date: string
  isNew?: boolean
  icon: IconName
}) {
  return (
    <article className="flex h-full gap-4 rounded-md border border-hairline bg-background p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-tech text-navy">
        <BrandIcon name={icon} className="size-5" />
      </span>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg leading-snug font-bold text-balance text-navy-dark">
            {title}
          </h3>
          {isNew && (
            <span className="rounded-sm bg-brand px-2 py-0.5 text-[11px] font-bold tracking-wide text-white uppercase">
              Mới
            </span>
          )}
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground">{date}</p>
        <p className="mt-2.5 text-[15px] leading-relaxed">{text}</p>
        <Link
          href="/blog"
          className="mt-4 inline-flex items-center gap-2 rounded-md border border-brand px-4 py-2 text-xs font-bold tracking-[0.08em] text-brand uppercase transition-colors hover:bg-brand hover:text-white"
        >
          Đọc chi tiết
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  )
}

/* ------------------------------------------------------------- DownloadCard */

const formatStyles = {
  PDF: { icon: FileText, className: 'text-brand' },
  XLSX: { icon: FileSpreadsheet, className: 'text-[#1f7a4d]' },
  DOCX: { icon: FileText, className: 'text-sky' },
} as const

export function DownloadCard({ item }: { item: DownloadItem }) {
  const style = formatStyles[item.format]
  const Icon = style.icon
  return (
    <article className="flex h-full flex-col rounded-md border border-hairline bg-background p-5">
      <div className="flex items-start gap-4">
        <span className="flex flex-col items-center gap-1">
          <Icon className={cn('size-8', style.className)} strokeWidth={1.6} aria-hidden />
          <span className={cn('text-[10px] font-extrabold tracking-wide', style.className)}>
            {item.format}
          </span>
        </span>
        <div className="min-w-0">
          <h3 className="text-base leading-snug font-bold text-balance text-navy-dark">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {item.format} · {item.size}
          </p>
        </div>
      </div>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed">{item.text}</p>
      <a
        href={item.file}
        className="mt-5 inline-flex w-fit items-center gap-2 rounded-md border border-brand px-4 py-2.5 text-xs font-bold tracking-[0.08em] text-brand uppercase transition-colors hover:bg-brand hover:text-white"
      >
        Tải về
        <Download className="size-4" />
      </a>
    </article>
  )
}

/* ------------------------------------------------------------ ProcessTimeline */

export function ProcessTimeline({
  steps,
}: {
  steps: readonly { step: string; title: string; icon: string }[]
}) {
  return (
    <ol className="relative mt-10 grid gap-6 lg:grid-cols-5 lg:gap-4">
      <span
        aria-hidden
        className="pointer-events-none absolute top-7 left-7 hidden h-[calc(100%-3.5rem)] w-px border-l-2 border-dashed border-sky/40 sm:block lg:top-7 lg:left-[10%] lg:h-0 lg:w-[80%] lg:border-t-2 lg:border-l-0"
      />
      {steps.map((item) => (
        <li key={item.step} className="relative flex items-center gap-4 lg:flex-col lg:text-center">
          <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-sky/40 bg-background text-navy shadow-[0_4px_18px_rgba(7,59,120,0.1)]">
            <BrandIcon name={item.icon as IconName} className="size-6" />
          </span>
          <div className="lg:mt-4">
            <p className="text-xl font-extrabold text-brand">{item.step}</p>
            <p className="mt-1 text-base leading-snug font-bold text-balance text-navy-dark">
              {item.title}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}
