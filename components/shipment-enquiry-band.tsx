import { Headset, MapPin, Package } from 'lucide-react'

const fields = [
  { icon: Package, placeholder: 'Tên hàng', name: 'ten-hang' },
  { icon: MapPin, placeholder: 'Tuyến vận chuyển', name: 'tuyen-van-chuyen' },
  { icon: Headset, placeholder: 'Nhu cầu hỗ trợ', name: 'nhu-cau' },
]

export function ShipmentEnquiryBand() {
  return (
    <section className="bg-background pb-14 md:pb-20">
      <div className="container-nck">
        <div className="rounded-lg border border-navy/20 bg-navy px-6 py-8 md:px-10 md:py-10">
          <h2 className="text-center text-xl font-extrabold tracking-tight text-balance text-white uppercase md:text-[26px]">
            Gửi thông tin lô hàng – nhận phương án phù hợp
          </h2>
          <form
            action="/lien-he"
            className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))_auto]"
          >
            {fields.map((field) => {
              const Icon = field.icon
              return (
                <div key={field.name} className="relative">
                  <label htmlFor={field.name} className="sr-only">
                    {field.placeholder}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type="text"
                    placeholder={field.placeholder}
                    className="h-12 w-full rounded-md border border-hairline bg-background pr-11 pl-4 text-[15px] text-foreground placeholder:text-muted-foreground focus:border-sky focus:outline-2 focus:outline-offset-2 focus:outline-sky"
                  />
                  <Icon
                    aria-hidden
                    className="pointer-events-none absolute top-1/2 right-3.5 size-4.5 -translate-y-1/2 text-sky"
                  />
                </div>
              )
            })}
            <button
              type="submit"
              className="flex h-12 items-center justify-center rounded-md bg-brand px-7 text-[13px] font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-[#d63a29]"
            >
              Gửi yêu cầu
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-white/70">
            Hoặc gọi trực tiếp để được tư vấn nhanh về lô hàng của bạn.
          </p>
        </div>
      </div>
    </section>
  )
}
