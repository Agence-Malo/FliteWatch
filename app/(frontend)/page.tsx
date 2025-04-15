import dynamic from 'next/dynamic'
import { getFleet } from '@/app/(frontend)/actions/jets'

import View from '@/components/ui/view'
import Hero from '@/components/index/hero'

const AboutUs = dynamic(() => import('@/components/index/about-us')),
  Services = dynamic(() => import('@/components/index/services')),
  Fleet = dynamic(() => import('@/components/index/fleet')),
  WhyFlitewatch = dynamic(() => import('@/components/index/flitewatch')),
  Contact = dynamic(() => import('@/components/ui/contact')),
  Footer = dynamic(() => import('@/components/ui/footer'))

const Home = async () => (
  <main className="w-full flex flex-col items-center overflow-hidden justify-start">
    <View />
    <Hero />
    <AboutUs />
    <Services />
    <Fleet data={await getFleet()} />
    <WhyFlitewatch />
    <Contact />
    <Footer />
  </main>
)

export default Home
