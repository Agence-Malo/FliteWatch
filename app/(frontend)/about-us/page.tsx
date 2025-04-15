import dynamic from 'next/dynamic'

import View from '@/components/ui/view'
import Intro from '@/components/about-us/intro'
import Values from '@/components/about-us/values'
import Image from 'next/image'

import hero from '@/public/graphics/images/about-us/hero.webp';

const Team = dynamic(() => import('@/components/about-us/team'))
const Certifications = dynamic(() => import('@/components/about-us/certifications'))
const Contact = dynamic(() => import('@/components/ui/contact'))
const Footer = dynamic(() => import('@/components/ui/footer'))

const AboutUs = () => (
  <main className={'w-full flex flex-col items-center overflow-hidden justify-start'}>
    <View />
    <Intro />
    <Values />
    <Team />
    <Certifications />
    <Image
      src={hero}
      alt={'A sleek private jet parked on the tarmac with mountains in the background'}
      className={
        'w-[92vw] h-[32vh] md:h-[52vh] lg:h-[90vh] my-[2vh] rounded-lg object-cover object-center'
      }
    />
    <Contact />
    <Footer />
  </main>
)

export default AboutUs
