import Image from 'next/image'
import { Section, SectionHeading } from '@/components/brand-ui'

const groups = [
  { label: 'Phân bón', src: '/images/cargo-fertilizer.png', alt: 'Bao phân bón hạt' },
  { label: 'Nông sản', src: '/images/cargo-agri.png', alt: 'Ngô, đậu và nông sản khô' },
  { label: 'Thức ăn chăn nuôi', src: '/images/cargo-feed.png', alt: 'Bao thức ăn chăn nuôi dạng viên' },
  { label: 'Máy móc – Thiết bị', src: '/images/cargo-machinery.png', alt: 'Máy móc và thiết bị công nghiệp' },
  { label: 'Điện tử – Điện lạnh', src: '/images/cargo-electronics.png', alt: 'Bảng mạch điện tử và vi mạch' },
  { label: 'Hóa chất – Nguyên liệu', src: '/images/cargo-chemicals.png', alt: 'Thùng và bồn chứa hóa chất công nghiệp' },
  { label: 'Hàng dự án', src: '/images/cargo-project.png', alt: 'Thiết bị dự án được cẩu nâng' },
]

export function HomeCargoGroups() {
  return (
    <Section>
      <SectionHeading title="Nhóm hàng có kinh nghiệm" />
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {groups.map((group) => (
          <li key={group.label} className="group overflow-hidden rounded-xl border border-hairline bg-white shadow-[0_6px_20px_rgba(7,59,120,.06)] transition-all duration-300 hover:-translate-y-1 hover:border-sky/35 hover:shadow-[0_16px_38px_rgba(7,59,120,.12)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-surface">
              <Image src={group.src} alt={group.alt} fill quality={95} sizes="(max-width: 640px) 45vw, 230px" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/18 via-transparent to-sky/5" />
            </div>
            <p className="px-3 py-3.5 text-center text-[13px] leading-snug font-bold text-navy-dark sm:text-[14px]">{group.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
