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
    <section className="relative overflow-hidden border-b border-hairline bg-[#edf7fd]">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_14%,rgba(51,133,198,.16),transparent_38%),linear-gradient(90deg,#fff_0%,#fff_29%,rgba(255,255,255,.86)_35%,rgba(238,248,254,.18)_57%,rgba(234,245,252,.08)_100%)]" />
      <div aria-hidden className="tech-grid pointer-events-none absolute inset-0 opacity-[.065]" />

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[68%] lg:block">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          quality={100}
          sizes="68vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/65 via-7% to-transparent to-28%" />
        <div aria-hidden className="absolute inset-y-0 right-0 w-[16%] bg-gradient-to-l from-[#edf7fd]/75 to-transparent" />
      </div>

      <div className="container-nck relative grid items-center gap-8 py-11 md:py-14 lg:min-h-[545px] lg:grid-cols-[minmax(0,39%)_minmax(0,61%)] lg:py-16 xl:min-h-[585px] 2xl:min-h-[610px]">
        <div className="order-1 max-w-[620px] py-2 lg:py-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-3 text-[31px] leading-[1.06] font-extrabold tracking-[-0.035em] uppercase sm:text-[38px] lg:text-[43px] xl:text-[50px] 2xl:text-[54px]">
            {title}
          </h1>
          <p className="mt-5 max-w-[600px] text-[16px] leading-[1.7] text-muted-foreground sm:text-[17px] lg:text-[18px] xl:text-[19px]">
            {description}
          </p>
          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primary && <BrandButton href={primary.href}>{primary.label}</BrandButton>}
              {secondary && <BrandButton href={secondary.href} variant="outline" className="bg-white/92">{secondary.label}</BrandButton>}
            </div>
          )}
          {children}
        </div>

        <div className="order-2 relative aspect-[16/10] overflow-hidden rounded-xl border border-hairline bg-background shadow-[0_18px_48px_rgba(7,59,120,.14)] lg:hidden">
          <Image src={image} alt={imageAlt} fill priority={priority} quality={100} sizes="100vw" className="object-cover" style={{ objectPosition: imagePosition }} />
        </div>
      </div>
    </section>
  )
}
