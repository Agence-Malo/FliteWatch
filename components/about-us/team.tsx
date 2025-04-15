'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import carousel2 from '@/public/graphics/images/about-us/who-we-are/2.webp'
import carousel3 from '@/public/graphics/images/about-us/who-we-are/3.webp'

const Team = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: false,
    },
    [
      Autoplay({
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  )

  return (
    <section
      className={
        'w-4/5 h-max flex flex-col lg:flex-row justify-center items-center lg:items-stretch rounded-lg overflow-clip drop-shadow-2xl'
      }
    >
      <div
        className={
          'w-full lg:w-1/2 flex flex-col justify-center items-start gap-[1vh] bg-grey-50 p-[6vw]'
        }
      >
        <p>Who we are</p>
        <h3 className={'leading-tight'}>Experienced Professionals with a Personal Touch</h3>
        <p className={'text-justify'}>
          Behind FliteWatch is a team of honest individuals who bring dedication, knowledge and a
          genuine care for our clients to every project. Led by our founder Alice Tropoe, a well
          known figure in charter industry, the team is united by a shared vision of excellence in
          private aviation. Each team member combines specialized skills with a deep commitment to
          the FliteWatch mission, ensuring that your experience is safe, seamless and precise.
        </p>
      </div>
      <div
        className="w-full h-[36vh] md:h-[48vh] lg:h-auto lg:w-1/2 lg:relative embla__viewport lg:overflow-clip"
        ref={emblaRef}
      >
        <div className={'embla__container flex w-full h-full'}>
          {[
            {
              image: carousel2,
              alt: 'Black-and-white photo of nine people gathered in an office, each holding a champagne glass, with pastries and flutes on the table in front of them.',
            },
            {
              image: carousel3,
              alt: 'Black-and-white photo of two adults and a child standing in front of a backdrop covered with aviation logos. The child holds a document while all three smile at the camera.',
            },
          ].map((media, i) => (
            <Image
              key={i}
              src={media.image}
              className={'embla__slide w-full h-full flex-[0_0_100%] object-cover object-center'}
              width={media.image.width}
              height={media.image.height}
              alt={media.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
