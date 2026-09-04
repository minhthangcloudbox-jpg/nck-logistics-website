import Image from 'next/image'
import { Section, SectionHeading } from '@/components/brand-ui'

const groups = [
  { label: 'Phân bón', src: '/images/cargo-fertilizer.png', alt: 'Bao phân bón NPK và hạt phân bón trong kho' },
  { label: 'Nông sản', src: '/images/cargo-agri.png', alt: 'Nông sản đóng bao và nguyên liệu nông nghiệp' },
  { label: 'Thức ăn chăn nuôi', src: '/images/cargo-feed.png', alt: 'Bao thức ăn chăn nuôi và nguyên liệu dạng viên' },
  { label: 'Máy móc – Thiết bị', src: '/images/cargo-machinery.png', alt: 'Máy móc và thiết bị công nghiệp' },
  { label: 'Điện tử – Điện lạnh', src: '/images/cargo-electronics.png', alt: 'Bảng mạch điện tử và thiết bị điện lạnh' },
  { label: 'Hóa chất – Nguyên liệu', src: '/images/cargo-chemicals.png', alt: 'Thùng phuy, IBC và nguyên liệu hóa chất công nghiệp' },
  { label: 'Hàng dự án', src: '/images/cargo-project.png', alt: 'Thiết bị dự án được cẩu nâng tại cảng' },
]

export function HomeCargoGroups() {
  return (
    <Section className="py-12 md:py-16 xl:py-18">
      <SectionHeading
        title="Nhóm hàng có kinh nghiệm"
        description="Kinh nghiệm xử lý đa dạng nhóm hàng, từ hàng tiêu dùng – nguyên liệu đến máy móc và hàng dự án."
      />
      <ul className="mx-auto mt-10 grid max-w-[1760px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 xl:gap-5">
        {groups.map((group) => (
          <li
            key={group.label}
            className="group overflow-hidden rounded-[18px] border border-hairline bg-white shadow-[0_8px_24px_rgba(7,59,120,.07)] transition-all duration-300 hover:-translate-y-1 hover:border-sky/35 hover:shadow-[0_18px_42px_rgba(7,59,120,.13)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-surface">
              <Image
                src={group.src}
                alt={group.alt}
                fill
                quality={88}
                sizes="(max-width: 640px) 46vw, (max-width: 1280px) 24vw, 220px"
                className="object-cover saturate-[1.14] contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-dark/28 via-transparent to-sky/5" />
              <div aria-hidden className="tech-grid absolute inset-0 opacity-[.045] mix-blend-screen" />
              <span aria-hidden className="absolute left-4 top-4 size-5 border-l border-t border-white/70" />
              <span aria-hidden className="absolute bottom-4 right-4 size-5 border-b border-r border-white/60" />
            </div>
            <p className="px-3 py-4 text-center text-[13px] leading-snug font-extrabold text-navy-dark sm:text-[14px]">{group.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
