'use client'

import { motion } from 'motion/react'
import Logo from '@/components/ui/logo'

const Hero = () => (
  <section
    className={
      'w-full h-[80vh] md:h-[90vh] flex flex-col justify-center items-center gap-[2vh] mt-[4rem] relative z-0'
    }
  >
    <video
      className={`w-[92vw] h-full object-cover md:object-center absolute top-0 rounded-lg -z-10 drop-shadow-2xl`}
      autoPlay
      muted
      preload={'none'}
      playsInline
      loop
    >
      <source src={'../graphics/videos/aerial.webm'} type={'video/webm'} />
    </video>
    <motion.span
      initial={{ y: '-6vh', opacity: 0, scale: 1.05 }}
      animate={{ y: '0', opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut', delay: 2.5 }}
    >
      <Logo className={'size-[16vh]'} />
    </motion.span>
    <motion.h1
      initial={{ y: '6vh', opacity: 0, scale: 1.05 }}
      animate={{ y: '0', opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut', delay: 2.5 }}
      className={'text-white text-center w-full px-[8vw]'}
    >
      Precision <br className={'md:hidden'} />
      Every Time
    </motion.h1>
    <motion.h4
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1.5, ease: 'easeOut', delay: 4 }}
      className={'text-white text-center w-full px-[8vw] font-light leading-tight'}
    >
      Delivering excellence with integrity, efficiency <br className={'md:hidden'} />
      and a personal touch to every flight.
    </motion.h4>
  </section>
)

export default Hero
