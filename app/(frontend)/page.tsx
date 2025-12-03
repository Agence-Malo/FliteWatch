import dynamicImport from 'next/dynamic'
import { getFleet } from '@/app/(frontend)/actions/jets'

import View from '@/components/ui/view'
import Hero from '@/components/index/hero'

const AboutUs = dynamicImport(() => import('@/components/index/about-us')),
  Services = dynamicImport(() => import('@/components/index/services')),
  Fleet = dynamicImport(() => import('@/components/index/fleet')),
  WhyFlitewatch = dynamicImport(() => import('@/components/index/flitewatch')),
  Contact = dynamicImport(() => import('@/components/ui/contact')),
  Footer = dynamicImport(() => import('@/components/ui/footer'))

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

export const dynamic = 'force-dynamic';