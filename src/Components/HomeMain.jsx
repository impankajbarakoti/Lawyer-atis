import React from 'react'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import AboutAtisSection from './AboutAtisSection'
import PracticeAreasSection from './PracticeAreasSection'
import FeatureGridSection from './FeatureGridSection'
import MeetTheExpertsSection from './MeetTheExpertsSection'
import CaseResultsSection from './CaseResultsSection'
import TestimonialSlider from './TestimonialSlider'
import CallToActionBanner from './CallToActionBanner'

const HomeMain = () => {
  return (
    <div>
          <HeroSection />
          <ServicesSection />
          <AboutAtisSection />
          <PracticeAreasSection />
          <FeatureGridSection />
          <MeetTheExpertsSection />
          <CaseResultsSection />
          <TestimonialSlider />
          <CallToActionBanner/>
    </div>
  )
}

export default HomeMain
