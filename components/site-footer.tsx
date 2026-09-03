import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, LinkedinIcon, YoutubeIcon } from '@/components/brand-icons'
import { company, footerColumns } from '@/lib/site'

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FacebookIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: LinkedinIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: YoutubeIcon },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#06366d] text-white/75">
      <Image src="/images/route-map.png" alt="" aria-hidden fill sizes="50vw" className="pointer-events-none object-cover object-left opacity-[.08]" />
      <div className="relative container-nck grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-[1.55fr_.85fr_.85fr_.75fr] xl:py-12">
        <div>
          <h2 className="text-lg font-extrabold text-white">NCK LOGISTICS CO., LTD</h2>
          <p className="mt-2 text-[12px] leading-relaxed text-white/65">{company.tagline}</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-[13px]">
            <li className="flex items-start gap-2.5"><Mail className="mt-0.5 size-4 shrink-0 text-sky" /><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
            <li className="flex items-start gap-2.5"><Phone className="mt-0.5 size-4 shrink-0 text-sky" /><a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="hover:text-white">{company.phone}</a></li>
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0 text-sky" /><span className="max-w-md leading-relaxed">{company.address}</span></li>
          </ul>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}><h2 className="text-[12px] font-bold tracking-[.12em] text-white uppercase">{col.title}</h2><ul className="mt-4 flex flex-col gap-2.5 text-[13px]">{col.links.map((link) => <li key={link.label}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>)}</ul></div>
        ))}
        <div><h2 className="text-[12px] font-bold tracking-[.12em] text-white uppercase">Kết nối</h2><ul className="mt-4 flex gap-2.5">{socialLinks.map((social) => { const Icon=social.icon; return <li key={social.label}><a href={social.href} target="_blank" rel="noopener noreferrer" className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand"><Icon className="size-4" /><span className="sr-only">{social.label}</span></a></li> })}</ul><p className="mt-4 text-[12px] text-white/60">WeChat: {company.wechat}</p></div>
      </div>
      <div className="relative border-t border-white/15"><div className="container-nck py-4 text-center text-[11px] text-white/55">{company.copyright}</div></div>
    </footer>
  )
}
