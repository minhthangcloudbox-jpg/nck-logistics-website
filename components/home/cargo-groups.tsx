import Image from 'next/image'
import { Section, SectionHeading } from '@/components/brand-ui'

const groups = [
  { label: 'Phân bón', src: '/images/generated/cargo-fertilizer-v2.webp', alt: 'Bao phân bón NPK nhiều màu sắc trong kho hiện đại' },
  { label: 'Nông sản', src: '/images/generated/cargo-agri-v2.webp', alt: 'Gạo, cà phê, hồ tiêu, điều và nông sản xuất khẩu đóng bao' },
  { label: 'Thức ăn chăn nuôi', src: '/images/generated/cargo-feed-v2.webp', alt: 'Bao thức ăn chăn nuôi nhiều màu sắc trong kho hiện đại' },
  { label: 'Máy móc – Thiết bị', src: '/images/cargo-machinery.png', alt: 'Máy móc và thiết bị công nghiệp' },
  { label: 'Điện tử – Điện lạnh', src: '/images/cargo-electronics.png', alt: 'Bảng mạch điện tử và thiết bị điện lạnh' },
  { label: 'Hóa chất – Nguyên liệu', src: '/images/cargo-chemicals.png', alt: 'Thùng phuy, IBC và nguyên liệu hóa chất công nghiệp' },
  { label: 'Hàng dự án', src: '/images/cargo-project.png', alt: 'Thiết bị dự án được cẩu nâng tại cảng' },
]

export function HomeCargoGroups() {
  return (
    <Section className="py-12 md:py-16">
      <SectionHeading title="Nhóm hàng có kinh nghiệm" />
      <ul className="mx-auto mt-8 grid max-w-[1420px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {groups.map((group) => (
          <li key={group.label} className="group overflow-hidden rounded-xl border border-hairline bg-white shadow-[0_6px_18px_rgba(7,59,120,.06)] transition-all duration-300 hover:-translate-y-1 hover:border-sky/35 hover:shadow-[0_14px_34px_rgba(7,59,120,.11)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-surface">
              <Image src={group.src} alt={group.alt} fill quality={100} sizes="(max-width: 640px) 45vw, 220px" className="object-cover transition-transform duration-700 group-hover:scale-[1.045]" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/18 via-transparent to-transparent" />
              <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sky via-brand to-sky/40 opacity-75" />
            </div>
            <p className="px-3 py-3 text-center text-[13px] leading-snug font-extrabold text-navy-dark sm:text-[14px]">{group.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
