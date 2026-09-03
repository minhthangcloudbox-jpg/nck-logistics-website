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
    <Section className="py-16 md:py-20">
      <SectionHeading title="Nhóm hàng có kinh nghiệm" />
      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {groups.map((group) => (
          <li key={group.label} className="group overflow-hidden rounded-2xl border border-hairline bg-white shadow-[0_8px_24px_rgba(7,59,120,.07)] transition-all duration-300 hover:-translate-y-1 hover:border-sky/35 hover:shadow-[0_18px_42px_rgba(7,59,120,.13)]">
            <div className="relative aspect-[1/1] overflow-hidden bg-surface">
              <Image src={group.src} alt={group.alt} fill quality={100} sizes="(max-width: 640px) 45vw, 260px" className="object-cover transition-transform duration-700 group-hover:scale-[1.055]" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/26 via-transparent to-sky/5" />
              <span aria-hidden className="absolute left-3 top-3 size-4 border-l border-t border-white/60" />
              <span aria-hidden className="absolute bottom-3 right-3 size-4 border-b border-r border-white/55" />
            </div>
            <p className="px-3 py-4 text-center text-[13px] leading-snug font-extrabold text-navy-dark sm:text-[14px]">{group.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
