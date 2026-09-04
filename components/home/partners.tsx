import { Section, SectionHeading } from '@/components/brand-ui'

const carriers = [
  { name: 'Maersk', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Maersk_Group_Logo.svg' },
  { name: 'CMA CGM', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/CMA_CGM_logo.svg' },
  { name: 'PIL', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/PIL_logo2.jpeg' },
  { name: 'MSC', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mediterranean_Shipping_Company_logo.svg' },
  { name: 'Evergreen', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Evergreen_Logo.svg' },
  { name: 'RCL', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Regional-container-lines-rcl.png' },
  { name: 'Interasia Lines', logo: 'https://trackingstatus.my/wp-content/uploads/2023/12/Interasia-Lines-Tracking.webp' },
  { name: 'ONE', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ocean_Network_Express_logo.svg' },
  { name: 'Hapag-Lloyd', logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Hapag-Lloyd.svg' },
]

export function HomePartners() {
  return (
    <Section tone="surface" className="py-12 md:py-16 xl:py-18">
      <SectionHeading
        title="Đối tác hãng tàu"
        description="Kết nối linh hoạt với các hãng tàu và đối tác vận chuyển trên nhiều tuyến quốc tế."
      />
      <ul className="mx-auto mt-10 grid max-w-[1760px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:gap-5">
        {carriers.map((carrier) => (
          <li
            key={carrier.name}
            className="group relative flex h-28 flex-col items-center justify-center overflow-hidden rounded-[18px] border border-hairline bg-white px-5 shadow-[0_8px_24px_rgba(7,59,120,.07)] transition-all duration-300 hover:-translate-y-1 hover:border-sky/35 hover:shadow-[0_18px_42px_rgba(7,59,120,.13)] md:h-32"
          >
            <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky via-brand to-sky" />
            <img
              src={carrier.logo}
              alt={`${carrier.name} logo`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="max-h-12 max-w-[175px] object-contain transition-transform duration-300 group-hover:scale-[1.04] md:max-h-14"
            />
            <span className="mt-3 text-[11px] font-bold tracking-[.04em] text-navy/70 uppercase">{carrier.name}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
