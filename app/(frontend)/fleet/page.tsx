import dynamic from 'next/dynamic'
import payload from '@/lib/payload'

import View from '@/components/ui/view'
import Hero from '@/components/fleet/hero'

const Quote = dynamic(() => import('@/components/fleet/quote'))
const Listing = dynamic(() => import('@/components/fleet/listing'))
const Contact = dynamic(() => import('@/components/ui/contact'))
const Footer = dynamic(() => import('@/components/ui/footer'))

const Fleet = async () => (
  <main className={'w-full flex flex-col items-center overflow-hidden justify-start'}>
    <View />
    <Hero />
    <Quote />
    <Listing
      data={await payload.find({
        collection: 'jets',
        limit: 0,
        pagination: false,
      })}
    />
    <Contact />
    <Footer />
  </main>
)

export default Fleet
