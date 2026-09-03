'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NckLogo } from '@/components/nck-logo'
import { siteNav, company } from '@/lib/site'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/96 backdrop-blur supports-[backdrop-filter]:bg-white/92">
      <div className="container-nck flex h-[78px] items-center justify-between gap-5 xl:h-[90px]">
        <NckLogo />
        <nav aria-label="Điều hướng chính" className="hidden xl:block">
          <ul className="flex items-center gap-6 2xl:gap-7">
            {siteNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} className={`relative block py-2 text-[14px] font-semibold whitespace-nowrap transition-colors 2xl:text-[15px] ${isActive(item.href) ? 'text-brand' : 'text-navy-dark hover:text-sky'}`}>
                  {item.label}
                  {isActive(item.href) && <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-brand" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-nav" className="flex size-11 items-center justify-center rounded-md border border-hairline text-navy xl:hidden">
          <span className="sr-only">{open ? 'Đóng menu' : 'Mở menu'}</span>{open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div id="mobile-nav" className="border-t border-hairline bg-white xl:hidden">
          <nav aria-label="Điều hướng chính (mobile)" className="container-nck py-3">
            <ul className="flex flex-col">
              {siteNav.map((item) => (
                <li key={item.href}><Link href={item.href} onClick={() => setOpen(false)} className={`flex items-center justify-between border-b border-hairline/70 py-3.5 text-base font-semibold ${isActive(item.href) ? 'text-brand' : 'text-navy-dark'}`}>{item.label}{isActive(item.href) && <span className="h-[2px] w-6 bg-brand" />}</Link></li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-1 text-sm"><a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="font-semibold text-navy">{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a></div>
          </nav>
        </div>
      )}
    </header>
  )
}
