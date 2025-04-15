'use client'

import Button from '@/components/ui/button'
import Link from 'next/link'
import { motion, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useScroll, useSpring } from 'framer-motion'

const AboutUs = () => {
  const ref = useRef<null>(null),
    { scrollYProgress } = useScroll({ target: ref }),
    opacity = useTransform(
      // @ts-ignore
      useSpring(scrollYProgress, { stiffness: 10 }),
      [1, 0.9, 0.1, 0],
      [0, 1, 1, 0],
    )

  return (
    <motion.section
      initial={{
        transform: 'translateX(-100%)',
        opacity: 0,
      }}
      animate={{
        transform: 'translateX(0)',
        opacity: 1,
      }}
      className={
        'containerize md:w-[64vw] lg:w-[56vw] h-[72vh] flex flex-col justify-center items-center text-center gap-[3vh]'
      }
      ref={ref}
      style={{ opacity }}
    >
      <h2>About Us</h2>
      <p>
        We are driven by a straightforward mission: to bring transparency and precision to private
        aviation. Our team will listen to your needs and understand your story, then come up with
        genuinely tailored solutions and build lasting relationships grounded in trust and
        authenticity.
      </p>
      <Button dark as={Link} href={'/about-us'}>
        Learn More
      </Button>
    </motion.section>
  )
}

export default AboutUs
