import Hero from 'components/sections/Hero'
import CatalystSection from 'components/sections/CatalystSection'
import MidoriEarthNKP from 'components/sections/MidoriEarthNKP'
import NKPValuePortfolio from 'components/sections/NKPValuePortfolio'
import MidoriMining from 'components/sections/MidoriMining'
import WhyNKP from 'components/sections/WhyNKP'
import Phases from 'components/sections/Phases'
import Team from 'components/sections/Team'
import Partners from 'components/sections/Partners'
import Newsletter from './Newsletter'
function Landing() {
  return (
    <>
        <Hero />
        <CatalystSection />
        <MidoriEarthNKP />
        <NKPValuePortfolio />
        <MidoriMining />
        <WhyNKP />
        <Phases />
        {/* <Team /> */}
        <Partners />
        <Newsletter />
    </>
  )
}

export default Landing
