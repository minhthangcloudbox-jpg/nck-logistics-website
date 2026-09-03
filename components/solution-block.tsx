import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function SolutionBlock({
  id,
  letter,
  title,
  image,
  imageAlt,
  problems,
  solutions,
  flip = false,
}: {
  id: string
  letter: string
  title: string
  image: string
  imageAlt: string
  problems: string[]
  solutions: string[]
  flip?: boolean
}) {
  return (
    <article
      id={id}
      className="grid scroll-mt-28 overflow-hidden rounded-md border border-hairline bg-background lg:grid-cols-2"
    >
      <div className={cn('relative min-h-[270px] lg:min-h-[300px]', flip ? 'lg:order-2' : 'lg:order-1')}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-cover"
        />
      </div>

      <div className={cn('p-6 md:p-8', flip ? 'lg:order-1' : 'lg:order-2')}>
        <h3 className="text-xl font-extrabold tracking-tight text-navy uppercase md:text-2xl">
          {letter}. {title}
        </h3>
        <span className="mt-3 flex h-[3px] w-12 rounded-full bg-brand" />

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="text-[13px] font-bold tracking-[0.1em] text-muted-foreground uppercase">
              Vấn đề thường gặp
            </h4>
            <ul className="mt-3 flex flex-col gap-2.5">
              {problems.map((p) => (
                <li key={p} className="flex gap-2.5 text-[15px] leading-relaxed">
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-bold tracking-[0.1em] text-sky uppercase">
              NCK đề xuất
            </h4>
            <ul className="mt-3 flex flex-col gap-2.5">
              {solutions.map((s) => (
                <li key={s} className="flex gap-2.5 text-[15px] leading-relaxed">
                  <Check className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href="/lien-he"
          className="mt-7 inline-flex items-center gap-2 rounded-md border border-brand px-5 py-2.5 text-xs font-bold tracking-[0.08em] text-brand uppercase transition-colors hover:bg-brand hover:text-white"
        >
          Xem chi tiết
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  )
}
