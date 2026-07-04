import Hero from './components/Hero'
import ComparisonSection from './components/ComparisonSection'
import WhySection from './components/WhySection'
import HowItWorks from './components/HowItWorks'
import DashboardShowcase from './components/DashboardShowcase'
import FeatureCards from './components/FeatureCards'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Hero />
      <ComparisonSection />
      <WhySection />
      <HowItWorks />
      <DashboardShowcase />
      <FeatureCards />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
