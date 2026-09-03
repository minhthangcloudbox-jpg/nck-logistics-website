import type { Metadata } from 'next'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Section, SectionHeading } from '@/components/brand-ui'
import { ContactForm } from '@/components/contact/contact-form'
import { PageHero } from '@/components/page-hero'
import { company } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Liên hệ — Trao đổi về lô hàng của bạn',
  description: 'Liên hệ NCK Logistics để được tư vấn về chứng từ, thủ tục hải quan, vận chuyển quốc tế và nội địa cho lô hàng của doanh nghiệp.',
}

const telHref = `tel:${company.phone.replace(/[^\d+]/g, '')}`
const channels = [
  { title: 'Zalo / Viber / WhatsApp', value: company.zalo, href: `https://zalo.me/${company.zalo.replace(/[^\d]/g, '')}`, icon: MessageCircle },
  { title: 'Email', value: company.email, href: `mailto:${company.email}`, icon: Mail },
  { title: 'Điện thoại', value: company.phone, href: telHref, icon: Phone },
  { title: 'WeChat', value: company.wechat, href: '#', icon: MessageCircle },
]
const offices = [
  { title: 'Văn phòng Hồ Chí Minh', address: company.address },
  { title: 'Văn phòng Hải Phòng', address: company.haiPhong },
  { title: 'Văn phòng Hà Nội', address: company.haNoi },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Liên hệ NCK Logistics"
        title={<>Trao đổi về<br />lô hàng của bạn</>}
        description="Gửi thông tin lô hàng hoặc gọi trực tiếp – NCK Logistics sẽ rà soát chính sách và đề xuất phương án phù hợp."
        primary={{ label: 'Gửi yêu cầu', href: '#gui-yeu-cau' }}
        secondary={{ label: 'Gọi ngay', href: telHref }}
        image="/images/v3/hawo-fleet-approved.png"
        imagePosition="68% center"
        imageAlt="Hoạt động logistics và vận chuyển container của NCK Logistics"
      />

      <Section id="gui-yeu-cau">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] lg:gap-8">
          <div className="rounded-md border border-hairline bg-surface p-6 md:p-8">
            <SectionHeading align="left" title="Thông tin liên hệ" />
            <p className="mt-6 text-xl font-extrabold text-navy-dark">{company.name}</p>
            <p className="mt-2 text-[15px] leading-relaxed">{company.tagline}</p>
            <ul className="mt-7 flex flex-col gap-5">
              <li className="flex gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-tech text-navy"><Mail className="size-5" /></span><div><p className="text-xs font-bold tracking-wide uppercase">Email</p><a href={`mailto:${company.email}`} className="font-bold text-navy hover:text-brand">{company.email}</a></div></li>
              <li className="flex gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-tech text-navy"><Phone className="size-5" /></span><div><p className="text-xs font-bold tracking-wide uppercase">Điện thoại</p><a href={telHref} className="font-bold text-navy hover:text-brand">{company.phone}</a></div></li>
              <li className="flex gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-tech text-navy"><MapPin className="size-5" /></span><div><p className="text-xs font-bold tracking-wide uppercase">Trụ sở</p><p className="max-w-md text-[15px] leading-relaxed">{company.address}</p></div></li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title="Kết nối với chúng tôi" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {channels.map((item) => { const Icon = item.icon; return <li key={item.title}><a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex h-full items-center gap-4 rounded-md border border-hairline bg-white p-5 hover:border-sky/50"><span className="flex size-12 items-center justify-center rounded-full bg-tech text-navy"><Icon className="size-5" /></span><div><h3 className="font-bold text-navy-dark">{item.title}</h3><p className="mt-1 text-[14px]">{item.value}</p></div></a></li> })}
        </ul>
      </Section>

      <Section>
        <SectionHeading title="Văn phòng & địa điểm liên hệ" />
        <ul className="mt-8 grid gap-4 lg:grid-cols-3">
          {offices.map((office) => <li key={office.title} className="rounded-md border border-hairline bg-white p-6"><span className="flex size-11 items-center justify-center rounded-md bg-tech text-navy"><MapPin className="size-5" /></span><h3 className="mt-4 text-lg font-bold text-navy-dark">{office.title}</h3><p className="mt-2 text-[15px] leading-relaxed">{office.address}</p></li>)}
        </ul>
      </Section>
    </>
  )
}
