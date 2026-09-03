import Image from 'next/image'
import { ClipboardCheck, FileSearch, MonitorUp, ShieldCheck } from 'lucide-react'
import { Section, SectionHeading } from '@/components/brand-ui'

const items = [
  { icon: FileSearch, title: 'Kiểm tra chính sách', text: 'Rà soát mã HS, thuế suất, điều kiện và quy định liên quan.' },
  { icon: ClipboardCheck, title: 'Chuẩn hóa chứng từ', text: 'Chuẩn hóa, hoàn thiện bộ hồ sơ đúng quy định và yêu cầu.' },
  { icon: MonitorUp, title: 'Khai báo hải quan', text: 'Khai báo chính xác, tuân thủ quy định quản lý chuyên ngành.' },
  { icon: ShieldCheck, title: 'Phối hợp kiểm tra chuyên ngành', text: 'Phối hợp với cơ quan chức năng và hỗ trợ kiểm tra, thông quan.' },
]

function CompetencyCard({ item }: { item: (typeof items)[number] }) {
  const Icon = item.icon
  return (
    <div className="rounded-2xl border border-hairline bg-white p-5 shadow-[0_8px_28px_rgba(7,59,120,.07)]">
      <div className="flex size-11 items-center justify-center rounded-xl border border-sky/25 bg-sky/5 text-navy">
        <Icon className="size-5" strokeWidth={1.7} />
      </div>
      <h3 className="mt-4 text-[18px] font-bold text-navy">{item.title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground md:text-[15px]">{item.text}</p>
    </div>
  )
}

export function CustomsAgentSection({ certificateSrc }: { certificateSrc?: string }) {
  return (
    <Section id="dai-ly-hai-quan" tone="surface" className="overflow-hidden py-14 md:py-20">
      <SectionHeading
        title="Đại lý làm thủ tục hải quan"
        description="Năng lực nghiệp vụ được tổ chức quanh một đầu mối rõ ràng — từ kiểm tra chính sách đến khai báo và phối hợp chuyên ngành."
      />

      <div className="mt-9 grid items-stretch gap-5 xl:grid-cols-[1fr_1.45fr_1fr]">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
          {items.slice(0, 2).map((item) => <CompetencyCard key={item.title} item={item} />)}
        </div>

        <div className="relative min-h-[430px] overflow-hidden rounded-3xl border border-sky/25 bg-navy-dark shadow-[0_24px_70px_rgba(7,59,120,.18)]">
          <Image
            src={certificateSrc || '/images/customs-documents.png'}
            alt={certificateSrc ? 'Chứng nhận đại lý làm thủ tục hải quan của NCK Logistics' : 'Hồ sơ và chứng từ nghiệp vụ hải quan'}
            fill
            quality={95}
            sizes="(max-width: 1280px) 100vw, 620px"
            className="object-cover opacity-80"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/55 to-sky/15" />
          <div aria-hidden className="tech-grid absolute inset-0 opacity-[.12] mix-blend-screen" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <div className="max-w-[520px] rounded-2xl border border-white/25 bg-white/92 p-6 text-navy shadow-[0_18px_50px_rgba(0,0,0,.2)] backdrop-blur-md md:p-7">
              <p className="text-[12px] font-bold tracking-[.18em] text-brand uppercase">NCK Logistics</p>
              <h3 className="mt-2 text-[28px] leading-tight font-extrabold uppercase md:text-[34px]">Đại lý làm thủ tục hải quan</h3>
              <div className="mt-4 inline-flex rounded-lg border border-navy/15 bg-white px-4 py-2 text-[15px] font-extrabold">Số 0239/2023/KHQ</div>
              <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground md:text-[14px]">
                Khi có ảnh chứng nhận chính thức, chỉ cần truyền đường dẫn vào <code>certificateSrc</code> để thay thế hình minh họa này.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
          {items.slice(2).map((item) => <CompetencyCard key={item.title} item={item} />)}
        </div>
      </div>
    </Section>
  )
}
