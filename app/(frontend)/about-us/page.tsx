import dynamicImport from 'next/dynamic'
import { getPosts } from '@/app/(frontend)/actions/posts'

import View from '@/components/ui/view'
import Intro from '@/components/about-us/intro'
import Values from '@/components/about-us/values'
import Image from 'next/image'

import hero from '@/public/graphics/images/about-us/hero.webp';

const Team = dynamicImport(() => import('@/components/about-us/team'))
const Certifications = dynamicImport(() => import('@/components/about-us/certifications'))
const Teaser = dynamicImport(() => import('@/components/blog/teaser'))
const Contact = dynamicImport(() => import('@/components/ui/contact'))
const Footer = dynamicImport(() => import('@/components/ui/footer'))

const AboutUs = async () => (
  <main className={'w-full flex flex-col items-center overflow-hidden justify-start'}>
    <View />
    <Intro />
    <Values />
    <Team />
    <Certifications />
    <Teaser posts={await getPosts(3)} variant={'trio'} />
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

export const dynamic = 'force-dynamic';
