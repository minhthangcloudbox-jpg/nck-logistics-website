import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const _beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'NCK Logistics — Giao nhận, vận chuyển & thủ tục hải quan',
    template: '%s | NCK Logistics',
  },
  description:
    'NCK Logistics đồng hành cùng doanh nghiệp từ chứng từ, thủ tục hải quan đến vận chuyển và giao nhận trong nước và quốc tế.',
  keywords: [
    'NCK Logistics',
    'thủ tục hải quan',
    'vận chuyển quốc tế',
    'vận chuyển nội địa',
    'ủy thác xuất nhập khẩu',
  ],
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#073b78',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="bg-background">
      <body className="bg-background font-sans text-base leading-relaxed antialiased">
        <SiteHeader />
        <main id="noi-dung">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
