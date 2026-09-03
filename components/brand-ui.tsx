import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-[12px] font-bold tracking-[0.08em] uppercase transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:text-[13px]'

const buttonVariants = {
  solid: 'bg-brand text-white shadow-[0_5px_16px_rgba(240,68,50,.18)] hover:bg-[#d63a29]',
  outline: 'border border-brand text-brand hover:bg-brand hover:text-white',
  navy: 'bg-navy text-white hover:bg-navy-dark',
  ghostLight: 'border border-white/70 text-white hover:bg-white hover:text-navy',
}

export function BrandButton({ href, children, variant = 'solid', className }: { href: string; children: ReactNode; variant?: keyof typeof buttonVariants; className?: string }) {
  return <Link href={href} className={cn(buttonBase, buttonVariants[variant], className)}>{children}</Link>
}

export function SectionHeading({ title, description, align = 'center', className }: { title: ReactNode; description?: ReactNode; align?: 'center' | 'left'; className?: string }) {
  return (
    <div className={cn('flex flex-col', align === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
      <h2 className="text-[28px] leading-[1.15] font-extrabold tracking-[-0.025em] uppercase md:text-[35px] xl:text-[38px]">{title}</h2>
      <span className="mt-3 h-[3px] w-12 bg-brand" />
      {description && <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground md:text-[16px]">{description}</p>}
    </div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-[12px] font-bold tracking-[0.17em] text-sky uppercase sm:text-[13px]">{children}</p>
}

export function Section({ children, className, id, tone = 'white' }: { children: ReactNode; className?: string; id?: string; tone?: 'white' | 'surface' }) {
  return (
    <section id={id} className={cn('py-12 md:py-[60px] xl:py-[68px]', tone === 'surface' ? 'bg-surface' : 'bg-background', className)}>
      <div className="container-nck">{children}</div>
    </section>
  )
}
