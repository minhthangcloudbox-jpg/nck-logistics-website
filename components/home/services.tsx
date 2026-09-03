import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ClipboardList, Globe, KeyRound, ShieldCheck, Ship, Truck } from 'lucide-react'
import { Section, SectionHeading } from '@/components/brand-ui'
import { coreServices } from '@/lib/site'

const icons = {
  ship: Ship,
  clipboard: ClipboardList,
  key: KeyRound,
  shield: ShieldCheck,
  truck: Truck,
  globe: Globe,
}

const media: Record<string, string> = {
  'van-chuyen-quoc-te': '/images/ref/hero-solutions-clean.jpg',
  'khai-bao-tu-van-hai-quan': '/images/customs-declaration-laptop.png',
  'cho-thue-chung-chi-so': '/images/knowledge-hero.png',
  'dai-ly-hai-quan': '/images/policy-review.png',
  'van-chuyen-noi-dia': '/images/v3/hawo-fleet-approved.png',
  'uy-thac-xuat-nhap-khau': '/images/handshake-contract.png',
}

function TechOverlay() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy/10 to-transparent" />
      <div className="tech-grid absolute inset-0 opacity-[.06] mix-blend-screen" />
      <svg viewBox="0 0 360 220" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full text-sky/70 opacity-35">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M-20 72 L78 42 L158 84 L258 38 L380 92" />
          <path d="M-20 158 L96 132 L190 168 L292 128 L380 152" />
        </g>
        <g fill="currentColor">
          <circle cx="78" cy="42" r="2" />
          <circle cx="158" cy="84" r="2" />
          <circle cx="258" cy="38" r="2" />
          <circle cx="96" cy="132" r="2" />
          <circle cx="190" cy="168" r="2" />
          <circle cx="292" cy="128" r="2" />
        </g>
      </svg>
      <span className="absolute top-4 left-4 size-5 border-t border-l border-white/50" />
      <span className="absolute right-4 bottom-4 size-5 border-r border-b border-white/40" />
    </div>
  )
}

export function HomeServices() {
  return (
    <Section className="pt-10 md:pt-14 xl:pt-16">
      <SectionHeading
        title="Dịch vụ & năng lực nghiệp vụ"
        description="Từ vận tải, khai báo đến đại lý hải quan và ủy thác xuất nhập khẩu — mỗi nhu cầu được xử lý theo một phương án rõ ràng."
      />
      <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:mt-10 xl:grid-cols-3 xl:gap-6">
        {coreServices.map((service) => {
          const Icon = icons[service.icon]
          return (
            <li key={service.id}>
              <Link
                href={service.href}
                className="group flex h-full min-h-[430px] flex-col overflow-hidden rounded-[18px] border border-hairline bg-white shadow-[0_8px_28px_rgba(7,59,120,.08)] transition-all duration-300 hover:-translate-y-1 hover:border-sky/35 hover:shadow-[0_22px_56px_rgba(7,59,120,.15)]"
              >
                <div className="relative aspect-[16/9] min-h-[215px] overflow-hidden bg-surface xl:min-h-[235px]">
                  <Image
                    src={media[service.id]}
                    alt={service.title}
                    fill
                    quality={100}
                    sizes="(min-width: 1280px) 32vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <TechOverlay />
                  <span className="absolute left-5 bottom-5 flex size-12 items-center justify-center rounded-xl border border-white/75 bg-white/95 text-navy shadow-[0_8px_22px_rgba(7,59,120,.18)] backdrop-blur">
                    <Icon className="size-6" strokeWidth={1.7} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6 xl:p-7">
                  <h3 className="text-[19px] leading-snug font-extrabold text-navy md:text-[20px] xl:text-[21px]">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.72] text-muted-foreground md:text-[16px]">{service.description}</p>
                  <span className="mt-auto flex items-center gap-1.5 border-t border-hairline pt-5 text-[13px] font-bold tracking-[.04em] text-brand uppercase">
                    Xem chi tiết
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
