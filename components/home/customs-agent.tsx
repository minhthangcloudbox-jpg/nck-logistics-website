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
    <div className="flex min-h-[170px] flex-col justify-center rounded-2xl border border-hairline bg-white p-5 shadow-[0_10px_32px_rgba(7,59,120,.07)]">
      <div className="flex size-12 items-center justify-center rounded-full border border-sky/25 bg-[#f5fbff] text-navy shadow-sm">
        <Icon className="size-5.5" strokeWidth={1.7} />
      </div>
      <h3 className="mt-4 text-[18px] font-extrabold text-navy">{item.title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground md:text-[15px]">{item.text}</p>
    </div>
  )
}

export function CustomsAgentSection({ certificateSrc }: { certificateSrc?: string }) {
  return (
    <Section id="dai-ly-hai-quan" tone="surface" className="overflow-hidden py-16 md:py-20 xl:py-24">
      <SectionHeading
        title="Đại lý làm thủ tục hải quan"
        description="Một đầu mối nghiệp vụ rõ ràng — từ kiểm tra chính sách, chuẩn hóa chứng từ đến khai báo và phối hợp chuyên ngành."
      />

      <div className="mt-10 grid items-center gap-5 xl:grid-cols-[.86fr_1.58fr_.86fr] xl:gap-6">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
          {items.slice(0, 2).map((item) => <CompetencyCard key={item.title} item={item} />)}
        </div>

        <div className="relative min-h-[500px] overflow-hidden rounded-[28px] border border-sky/25 bg-navy-dark shadow-[0_28px_80px_rgba(7,59,120,.20)]">
          <Image
            src={certificateSrc || '/images/customs-documents.png'}
            alt={certificateSrc ? 'Chứng nhận đại lý làm thủ tục hải quan của NCK Logistics' : 'Hồ sơ và chứng từ nghiệp vụ hải quan'}
            fill
            quality={100}
            sizes="(max-width: 1280px) 100vw, 700px"
            className="object-cover opacity-88"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/38 to-sky/5" />
          <div aria-hidden className="tech-grid absolute inset-0 opacity-[.08] mix-blend-screen" />

          <div className="absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7">
            <div className="mx-auto max-w-[570px] rounded-2xl border border-white/55 bg-white/94 p-6 text-center text-navy shadow-[0_22px_55px_rgba(0,0,0,.22)] backdrop-blur-md md:p-8">
              <p className="text-[12px] font-bold tracking-[.20em] text-brand uppercase">NCK Logistics</p>
              <h3 className="mt-2 text-[30px] leading-tight font-extrabold uppercase md:text-[38px]">Đại lý làm thủ tục hải quan</h3>
              <div className="mt-5 inline-flex rounded-lg border border-navy/15 bg-[#f8fbff] px-5 py-2.5 text-[16px] font-extrabold">Số 0239/2023/KHQ</div>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground md:text-[15px]">
                Năng lực nghiệp vụ được tổ chức để doanh nghiệp có một đầu mối xử lý xuyên suốt hồ sơ và phối hợp thông quan.
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
