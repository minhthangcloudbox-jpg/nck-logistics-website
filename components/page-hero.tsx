import Image from 'next/image'
import type { ReactNode } from 'react'
import { BrandButton, Eyebrow } from '@/components/brand-ui'

type Cta = { label: string; href: string }

export function PageHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  image,
  imageAlt,
  children,
  priority = true,
  imagePosition = 'center',
}: {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  primary?: Cta
  secondary?: Cta
  image: string
  imageAlt: string
  children?: ReactNode
  priority?: boolean
  imagePosition?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-[#eef8ff]">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_14%,rgba(51,133,198,.14),transparent_40%),linear-gradient(90deg,#fff_0%,#fff_34%,rgba(255,255,255,.55)_44%,rgba(234,245,252,.15)_100%)]" />
      <div aria-hidden className="tech-grid pointer-events-none absolute inset-0 opacity-[.09]" />

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[64%] lg:block">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="64vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/80 via-6% to-transparent to-34%" />
        <div aria-hidden className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#eef8ff] to-transparent" />
      </div>

      <div className="container-nck relative grid items-center gap-7 py-10 md:py-12 lg:min-h-[500px] lg:grid-cols-[minmax(0,42%)_minmax(0,58%)] lg:py-14 xl:min-h-[530px]">
        <div className="order-1 max-w-[600px] py-2 lg:py-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-3 text-[30px] leading-[1.08] font-extrabold tracking-[-0.03em] uppercase sm:text-[36px] lg:text-[40px] xl:text-[46px]">
            {title}
          </h1>
          <p className="mt-5 max-w-[590px] text-[16px] leading-[1.72] text-muted-foreground sm:text-[17px] lg:text-[18px]">
            {description}
          </p>
          {(primary || secondary) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {primary && <BrandButton href={primary.href}>{primary.label}</BrandButton>}
              {secondary && <BrandButton href={secondary.href} variant="outline" className="bg-white/95">{secondary.label}</BrandButton>}
            </div>
          )}
          {children}
        </div>

        <div className="order-2 relative aspect-[16/10] overflow-hidden rounded-md border border-hairline bg-background shadow-[0_14px_40px_rgba(7,59,120,.12)] lg:hidden">
          <Image src={image} alt={imageAlt} fill priority={priority} sizes="100vw" className="object-cover" style={{ objectPosition: imagePosition }} />
        </div>
      </div>
    </section>
  )
}
