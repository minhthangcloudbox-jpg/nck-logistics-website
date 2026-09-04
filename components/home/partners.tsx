import { Section, SectionHeading } from '@/components/brand-ui'

const carriers = [
  { name: 'Maersk', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Maersk_Group_Logo.svg' },
  { name: 'CMA CGM', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/CMA_CGM_logo.svg' },
  { name: 'Pacific International Lines (PIL)', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/PIL_logo2.jpeg' },
  { name: 'MSC', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mediterranean_Shipping_Company_logo.svg' },
  { name: 'Evergreen', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Evergreen_Logo.svg' },
  { name: 'RCL', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Regional-container-lines-rcl.png' },
  { name: 'Interasia Lines (IAL)', logo: 'https://trackingstatus.my/wp-content/uploads/2023/12/Interasia-Lines-Tracking.webp' },
  { name: 'Ocean Network Express (ONE)', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ocean_Network_Express_logo.svg' },
  { name: 'Hapag-Lloyd', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Hapag-Lloyd.svg' },
]

export function HomePartners() {
  return (
    <Section tone="surface" className="py-12 md:py-16">
      <SectionHeading
        title="Đối tác hãng tàu"
        description="Kết nối linh hoạt với các hãng tàu và đối tác vận chuyển trên nhiều tuyến quốc tế."
      />
      <ul className="mx-auto mt-8 grid max-w-[1380px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {carriers.map((carrier) => (
          <li
            key={carrier.name}
            className="group flex h-24 items-center justify-center overflow-hidden rounded-xl border border-hairline bg-white px-5 shadow-[0_6px_20px_rgba(7,59,120,.06)] transition-all duration-300 hover:-translate-y-1 hover:border-sky/35 hover:shadow-[0_16px_38px_rgba(7,59,120,.12)] md:h-28"
          >
            <img
              src={carrier.logo}
              alt={`${carrier.name} logo`}
              loading="lazy"
              className="max-h-12 max-w-[165px] object-contain transition-transform duration-300 group-hover:scale-[1.035] md:max-h-14"
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}
