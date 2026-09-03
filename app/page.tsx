import { CtaBand } from '@/components/cta-band'
import { HomeCapability } from '@/components/home/capability'
import { HomeCargoGroups } from '@/components/home/cargo-groups'
import { CustomsAgentSection } from '@/components/home/customs-agent'
import { HomeIntro } from '@/components/home/intro'
import { HomeExperience } from '@/components/home/experience'
import { HomeKnowledge } from '@/components/home/knowledge'
import { HomeNetwork } from '@/components/home/network'
import { HomePartners } from '@/components/home/partners'
import { HomeServices } from '@/components/home/services'
import { PageHero } from '@/components/page-hero'

export default function HomePage() {
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
      <HomeServices />
      <HomeIntro />
      <CustomsAgentSection />
      <HomeCapability />
      <HomeCargoGroups />
      <HomeExperience />
      <HomePartners />
      <HomeNetwork />
      <HomeKnowledge />
      <CtaBand />
    </>
  )
}
