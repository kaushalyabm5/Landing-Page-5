import React from 'react'
import PricingHero from './PricingHero'
import PricingSection from './PricingSection'
import PricingComparison from './PricingComparison'
import ROICalculator from './ROICalculator'
import FAQSection from './FAQSection'

const PricingPage = () => {
  return (
    <div>
        
        <PricingHero />
        <PricingSection />
        <PricingComparison />
        <ROICalculator />
        <FAQSection />
    </div>
  )
}

export default PricingPage