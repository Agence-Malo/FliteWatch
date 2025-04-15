import payload from '@/lib/payload'
import dynamic from 'next/dynamic'

import View from '@/components/ui/view'
import Hero from '@/components/fleet/[slug]/hero'

const Quote = dynamic(() => import('@/components/ui/quote'))
const Features = dynamic(() => import('@/components/fleet/[slug]/features'))
const Information = dynamic(() => import('@/components/fleet/[slug]/information'))
const Cabin = dynamic(() => import('@/components/fleet/[slug]/cabin'))
const Gallery = dynamic(() => import('@/components/fleet/[slug]/gallery'))
const Contact = dynamic(() => import('@/components/ui/contact'))
const Footer = dynamic(() => import('@/components/ui/footer'))

const Aircraft = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const data = await payload.findByID({
    id: slug,
    collection: 'jets',
  })
  return (
    <main className={'w-full flex flex-col items-center overflow-hidden justify-start'}>
      <View />
      <Hero images={data.images} />
      <Quote subtitle={data.manufacturer} title={data.name} description={data.description} />
      <Features data={data} />
      <Information information={data.information} />
      <Cabin cabin={data.images.cabin} />
      <Gallery gallery={data.images.gallery} />
      <Contact />
      <Footer />
    </main>
  )
}

export default Aircraft
