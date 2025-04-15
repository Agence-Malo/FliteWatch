'use client'

import Button from '@/components/ui/button'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { IFleet } from '@/app/(frontend)/actions/jets'
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { useCallback } from 'react'

const Fleet = ({ data }: { data: IFleet[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
      WheelGesturesPlugin(),
    ],
  )

  const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]),
    scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

  return (
    <section className={'w-full h-[90vh] md:h-[80vh] flex justify-center items-center'}>
      <div
        className={
          'w-[92vw] md:w-2/3 flex flex-col lg:flex-row justify-center items-center lg:items-stretch rounded-lg overflow-clip drop-shadow-2xl'
        }
      >
        <article
          className={
            'w-full lg:w-1/2 flex flex-col justify-center items-start gap-[4vh] bg-grey-50 p-[6vw]'
          }
        >
          <h2>Our Fleet</h2>
          <p className={'text-justify'}>
            Our fleet opens with the Dassault Falcon 7X, remarkable for its exceptional fuel
            efficiency and performance. Each aircraft in our line-up is curated to ensure the
            highest standards in safety, comfort, and operational efficiency. Click below to explore
            technical specifications and learn more about each model.
          </p>
          <Button as={Link} href={'/fleet'} dark>
            Learn More
          </Button>
        </article>
        <aside className={'embla w-full lg:w-1/2 h-[28vh] lg:h-auto -z-10 relative'}>
          <div className={'embla__viewport w-full h-full overflow-hidden -z-10'} ref={emblaRef}>
            <div className={'embla__container flex w-full h-full'}>
              {data.map(
                (jet) =>
                  typeof jet.images.hero !== 'number' && (
                    <Link
                      href={`/fleet/${jet.id}`}
                      key={jet.id}
                      className={'embla__slide w-full h-full flex-[0_0_100%] cursor-grab'}
                    >
                      <Image
                        src={`${jet.images.hero.url}`}
                        alt={jet.images.hero.alt}
                        width={parseInt(`${jet.images.hero.width}`)}
                        height={parseInt(`${jet.images.hero.height}`)}
                        className={
                          'object-cover object-bottom w-full h-full absolute grayscale -z-20'
                        }
                      />
                      <div
                        className={'w-full h-full absolute -z-10'}
                        style={{
                          backgroundSize: '100% 100%',
                          backgroundPosition: '0px 0px',
                          backgroundImage:
                            'radial-gradient(100% 125% at 50% 0%, rgb(0 0 0 / 0) 40%, rgba(0 0 0 / 1) 100%)',
                        }}
                      />
                      <p
                        className={
                          'w-full font-bold text-white absolute bottom-0 text-center p-[2vh]'
                        }
                      >
                        {jet.manufacturer} {jet.name}
                      </p>
                    </Link>
                  ),
              )}
            </div>
          </div>
          <button
            type={'button'}
            className={'embla__prev absolute inset-y-0 left-0 translate-x-[1vh]'}
            onClick={(e) => {
              e.stopPropagation()
              scrollPrev()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 72 72"
              className={'size-[2.44rem] fill-white'}
            >
              <path d="M46.023,59.542c-1.008,0-2.016-0.378-2.794-1.137L23.183,38.844c-0.771-0.752-1.206-1.785-1.206-2.863	s0.435-2.11,1.206-2.863L43.19,13.596c1.582-1.542,4.113-1.512,5.657,0.069c1.542,1.581,1.512,4.114-0.069,5.656l-17.074,16.66	l17.113,16.698c1.581,1.542,1.611,4.075,0.069,5.656C48.103,59.138,47.063,59.542,46.023,59.542z"></path>
            </svg>
          </button>
          <button
            type={'button'}
            className={'embla__next absolute inset-y-0 right-0 -translate-x-[1vh]'}
            onClick={(e) => {
              e.stopPropagation()
              scrollNext()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 72 72"
              className={'size-[2.44rem] fill-white'}
            >
              <path d="M25.977,59.542c-1.04,0-2.079-0.403-2.863-1.207c-1.542-1.581-1.512-4.114,0.069-5.656l17.113-16.698l-17.074-16.66	c-1.581-1.542-1.611-4.075-0.069-5.656c1.544-1.582,4.076-1.612,5.657-0.069l20.008,19.522c0.771,0.752,1.206,1.785,1.206,2.863	s-0.435,2.11-1.206,2.863L28.771,58.404C27.992,59.164,26.984,59.542,25.977,59.542z"></path>
            </svg>
          </button>
        </aside>
      </div>
    </section>
  )
}

export default Fleet
