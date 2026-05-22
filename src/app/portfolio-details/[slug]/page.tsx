import AboutHomeFour from '@/components/about/AboutHomeFour';
import PortfolioDetailsArea from '@/components/details/PortfolioDetailsArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import { portfolioDatabase } from '@/data/portfolioData'; // <-- Data import kiya

export const metadata = {
  title: "Portfolio Details Vixan - Digital Creative Agency Next js Template",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Component ka naam Capital se 'Page' ya 'PortfolioDetails' rakhna standard hai
const PortfolioDetailsPage = async ({ params }: PageProps) => {
  // 1. URL segment se slug ko safely resolve kiya (e.g., "machain-3")
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;

  // 2. Database file mein se key match kar ke single matching object nikala
  const projectData = portfolioDatabase[currentSlug];

  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        {/* 3. Match kiya hua specific project data prop ke zariye pass kar diya */}
        <PortfolioDetailsArea project={projectData} />
        <AboutHomeFour />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsPage;