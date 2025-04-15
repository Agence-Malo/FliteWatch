import Image from 'next/image'
import { Jet } from '@/payload-types'

const Hero = ({ images }: { images: Jet['images'] }) =>
  typeof images.hero !== 'number' && (
    <section className={'w-[92vw] h-[32vh] md:h-[52vh] lg:h-[90vh] mt-[4rem]'}>
      <Image
        src={`${images.hero.url}`}
        alt={images.hero.alt}
        width={images.hero.width || 2560}
        height={images.hero.height || 1440}
        className={'w-full h-full object-top object-cover rounded-lg drop-shadow-2xl'}
      />
    </section>
  )

export default Hero
