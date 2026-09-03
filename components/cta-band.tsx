import Image from 'next/image'
import { BrandButton } from '@/components/brand-ui'

export function CtaBand({
  title = 'Trao đổi về lô hàng của bạn',
  description = 'Đội ngũ NCK Logistics luôn sẵn sàng lắng nghe và đề xuất giải pháp tối ưu cho doanh nghiệp.',
  primary = { label: 'Hỏi NCK', href: '/lien-he' },
  secondary = { label: 'Tra cứu kiến thức', href: '/thu-vien-kien-thuc' },
}: {
  title?: string
  description?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="bg-background pb-14 md:pb-20">
      <div className="container-nck">
        <div className="tech-backdrop relative overflow-hidden rounded-lg border border-hairline">
          <Image
            src="/images/handshake-contract.png"
            alt=""
            aria-hidden
            width={900}
            height={600}
            className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[38%] object-cover opacity-25 lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-tech via-tech/85 to-transparent lg:block"
          />
          <div className="relative flex flex-col items-start gap-6 px-6 py-8 md:px-10 md:py-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-xl font-extrabold tracking-tight text-balance uppercase md:text-[26px]">
                {title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-pretty text-muted-foreground">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <BrandButton href={primary.href}>{primary.label}</BrandButton>
              <BrandButton href={secondary.href} variant="outline" className="bg-background">
                {secondary.label}
              </BrandButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
