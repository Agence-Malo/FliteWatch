import Image from 'next/image'
import hero from '@/public/graphics/images/fleet/hero.webp'

const Hero = () => (
  <section className={'w-[92vw] h-[32vh] md:h-[52vh] lg:h-[90vh] mt-[4rem]'}>
    <Image
      src={hero}
      alt={'Jet flying in the sky'}
      className={'w-full h-full object-top object-cover rounded-lg drop-shadow-2xl'}
    />
  </section>
)

export default Hero
