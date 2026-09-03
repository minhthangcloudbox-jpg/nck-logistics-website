import Image from 'next/image'
import Link from 'next/link'

export function NckLogo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  if (variant === 'dark') {
    return (
      <Link href="/" className="inline-flex flex-col" aria-label="NCK Logistics — về trang chủ">
        <span className="text-xl font-extrabold tracking-tight text-white">NCK LOGISTICS CO., LTD</span>
        <span className="mt-1 text-[10px] font-medium tracking-[0.08em] text-white/65">
          Global Freight Forwarding | Customs Procedure Consultation
        </span>
      </Link>
    )
  }

  return (
    <Link href="/" className="block shrink-0" aria-label="NCK Logistics — về trang chủ">
      <Image
        src="/images/ref/nck-logo-trimmed.png"
        alt="NCK Logistics Co., Ltd"
        width={964}
        height={357}
        priority
        quality={100}
        sizes="(min-width: 1280px) 208px, (min-width: 640px) 188px, 148px"
        className="h-auto w-[148px] object-contain sm:w-[188px] xl:w-[208px]"
      />
    </Link>
  )
}
