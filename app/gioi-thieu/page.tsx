import type { Metadata } from 'next'
import { CtaBand } from '@/components/cta-band'
import { HomeCapability } from '@/components/home/capability'
import { HomeCargoGroups } from '@/components/home/cargo-groups'
import { CustomsAgentSection } from '@/components/home/customs-agent'
import { HomeExperience } from '@/components/home/experience'
import { HomeIntro } from '@/components/home/intro'
import { HomeServices } from '@/components/home/services'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Giới thiệu — Hiểu nghiệp vụ, chủ động phương án',
  description:
    'NCK Logistics là đơn vị giao nhận – vận chuyển – làm thủ tục hải quan, đồng hành cùng doanh nghiệp từ chứng từ đến giao nhận hàng hoá.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="NCK Logistics"
        title={
          <>
            Hiểu nghiệp vụ –<br />
            Chủ động phương án
          </>
        }
        description="Đồng hành cùng doanh nghiệp từ chứng từ, thủ tục hải quan đến vận chuyển và giao nhận."
        primary={{ label: 'Khám phá năng lực', href: '#nang-luc' }}
        secondary={{ label: 'Hỏi NCK về lô hàng', href: '/lien-he' }}
        image="/images/v3/hawo-fleet-approved.png"
        imagePosition="68% center"
        imageAlt="Xe đầu kéo HOWO MAX kéo container NCK Logistics tại cảng biển"
      />
      <HomeIntro />
      <CustomsAgentSection />
      <HomeServices />
      <HomeCapability />
      <HomeCargoGroups />
      <HomeExperience />
      <CtaBand />
    </>
  )
}
