import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/brand-ui'
import { TopicCard } from '@/components/cards'
import type { IconName } from '@/components/cards'
import { CtaBand } from '@/components/cta-band'
import { DownloadLibrary } from '@/components/downloads/download-library'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Tài liệu tải về — Biểu mẫu & checklist dùng ngay',
  description:
    'Checklist chứng từ, mẫu Invoice, Packing List, biểu mẫu hải quan và các tài liệu nghiệp vụ xuất nhập khẩu tải về miễn phí.',
}

const groups: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Chứng từ XNK',
    text: 'Bảng kê chứng từ, hợp đồng uỷ thác và biểu mẫu bàn giao.',
    icon: 'file',
  },
  {
    title: 'Hải quan',
    text: 'Checklist hồ sơ và mẫu uỷ quyền làm thủ tục hải quan.',
    icon: 'shield',
  },
  {
    title: 'Vận tải',
    text: 'Checklist trước khi book tàu và giao nhận tại cảng, kho.',
    icon: 'ship',
  },
  {
    title: 'Invoice / Packing List',
    text: 'Mẫu hóa đơn thương mại và bảng kê đóng gói hàng hóa.',
    icon: 'barcode',
  },
  {
    title: 'Checklist',
    text: 'Danh mục kiểm tra theo từng loại hình và phương thức.',
    icon: 'clipboard',
  },
  {
    title: 'Biểu mẫu nghiệp vụ',
    text: 'Phiếu phân tích mặt hàng và bảng thông tin lô hàng.',
    icon: 'package',
  },
]

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tài liệu NCK"
        title={
          <>
            Biểu mẫu & checklist
            <br />
            dùng ngay
          </>
        }
        description="Bộ tài liệu nghiệp vụ được chuẩn hóa từ thực tế xử lý lô hàng, tải về và dùng ngay cho doanh nghiệp."
        primary={{ label: 'Xem tài liệu', href: '#tai-lieu' }}
        secondary={{ label: 'Tra cứu kiến thức', href: '/thu-vien-kien-thuc' }}
        image="/images/ref/hero-knowledge-clean.jpg"
        imageAlt="Các tập biểu mẫu và checklist chứng từ xuất nhập khẩu"
      />

      <Section>
        <SectionHeading title="Nhóm tài liệu" />
        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <li key={group.title}>
              <TopicCard
                title={group.title}
                text={group.text}
                icon={group.icon}
                href="#tai-lieu"
                ctaLabel="Xem tài liệu"
              />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" id="tai-lieu">
        <SectionHeading title="Biểu mẫu và checklist dùng ngay" />
        <DownloadLibrary />
      </Section>

      <CtaBand
        title="Cần biểu mẫu riêng cho mặt hàng của bạn?"
        description="NCK Logistics hỗ trợ chuẩn hóa biểu mẫu và checklist theo đặc thù từng nhóm hàng."
        primary={{ label: 'Hỏi NCK', href: '/lien-he' }}
        secondary={{ label: 'Góc thực tập', href: '/goc-thuc-tap' }}
      />
    </>
  )
}
