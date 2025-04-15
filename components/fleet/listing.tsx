'use client'

import { Jet } from '@/payload-types'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { useCallback } from 'react'
import Image from 'next/image'
import { PaginatedDocs } from 'payload'
import Link from 'next/link'

const Listing = ({ data }: { data: PaginatedDocs<Jet> }) => {
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
    <section className={'w-full flex flex-col justify-start items-center'}>
      {data.docs.map((doc) => {
        const images = [{ image: doc.images.hero }, ...doc.images.gallery]

        const Feature = ({
          type,
          value,
        }: {
          type: 'seats' | 'beds' | 'range' | 'wifi'
          value: number | boolean | null | undefined
        }) => {
          const card = ({ className }: { className?: string }) => {
            switch (type) {
              case 'seats':
                return {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 72 72"
                      className={className}
                    >
                      <path d="M16 20.5c3.584 0 6.5 3.14 6.5 7s-2.916 7-6.5 7-6.5-3.14-6.5-7S12.416 20.5 16 20.5zM24.737 39.415c-6.124 2.962-9.001 7.702-9.562 10.585h-7.59c-2.347 0-3.746-2.109-3.568-3.966C4.561 40.314 9.712 36 16 36 19.445 36 22.544 37.302 24.737 39.415zM66.983 46.026C67.165 47.932 65.74 50 63.409 50c-1.896 0-7.584 0-7.584 0-.564-2.899-3.452-7.63-9.562-10.585C48.455 37.302 51.554 36 55 36 61.282 36 66.439 40.31 66.983 46.026zM55 20.5c3.584 0 6.5 3.14 6.5 7s-2.916 7-6.5 7-6.5-3.14-6.5-7S51.416 20.5 55 20.5zM51.422 49.369C53.326 53.006 50.37 57 46.431 57c-5.465 0-16.396 0-21.861 0-3.782 0-6.969-3.851-4.991-7.63C22.24 44.285 28.488 41 35.5 41S48.761 44.285 51.422 49.369zM35.5 19c5.238 0 9.5 4.486 9.5 10s-4.262 10-9.5 10S26 34.514 26 29 30.262 19 35.5 19z"></path>
                    </svg>
                  ),
                  label: 'Passengers',
                }
              case 'beds':
                return {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 72 72"
                      className={className}
                    >
                      <path d="M 25 13 C 19.486 13 15 17.486 15 23 L 15 27 L 24 27 C 24 25.895 24.896 25 26 25 L 31 25 C 32.104 25 33 25.895 33 27 L 39 27 C 39 25.895 39.896 25 41 25 L 46 25 C 47.104 25 48 25.895 48 27 L 57 27 L 57 23 C 57 17.486 52.514 13 47 13 L 25 13 z M 18 31 C 13.582 31 10 34.582 10 39 L 10 50 C 10 51.861621 11.277785 53.411326 13 53.857422 L 13 55 C 13 57.209 14.791 59 17 59 C 19.209 59 21 57.209 21 55 L 21 54 L 51 54 L 51 55 C 51 57.209 52.791 59 55 59 C 57.209 59 59 57.209 59 55 L 59 53.857422 C 60.722215 53.411326 62 51.861621 62 50 L 62 39 C 62 34.582 58.418 31 54 31 L 18 31 z"></path>
                    </svg>
                  ),
                  label: 'Sleeps',
                }
              case 'range':
                return {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 72 72"
                      className={className}
                    >
                      <path d="M 36 11 C 24.42 11 15 20.42 15 32 C 15 45.68 31.259375 59.440937 33.109375 60.960938 C 33.919375 61.630938 34.95 62 36 62 C 37.05 62 38.070859 61.630703 38.880859 60.970703 C 40.740859 59.440703 57 45.66 57 32 C 57 20.42 47.58 11 36 11 z M 36 22 C 41.51 22 46 26.49 46 32 C 46 37.51 41.51 42 36 42 C 30.49 42 26 37.51 26 32 C 26 26.49 30.49 22 36 22 z M 36 25.009766 C 32.13 25.009766 29 28.14 29 32 C 29 35.86 32.13 38.990234 36 38.990234 C 39.87 38.990234 43 35.86 43 32 C 43 31.28 42.889453 30.579687 42.689453 29.929688 C 42.149453 31.149688 40.92 32 39.5 32 C 37.57 32 36 30.439766 36 28.509766 C 36 27.089766 36.850313 25.870313 38.070312 25.320312 C 37.420312 25.120312 36.72 25.009766 36 25.009766 z"></path>
                    </svg>
                  ),
                  label: 'Range',
                }
              case 'wifi':
                return {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 72 72"
                      className={className}
                    >
                      <path d="M 36.015625 15.25 C 32.178625 15.25 28.404406 15.786375 24.691406 16.859375 C 20.978406 17.932375 17.548344 19.453828 14.402344 21.423828 C 11.256344 23.393828 8.6117969 25.708141 6.4667969 28.369141 C 6.1367969 28.720141 5.9809531 29.138047 6.0019531 29.623047 C 6.0229531 30.108047 6.2188438 30.525953 6.5898438 30.876953 L 10.210938 34.589844 C 10.602938 35.001844 11.083391 35.201406 11.650391 35.191406 C 12.217391 35.181406 12.697844 34.960344 13.089844 34.527344 C 16.162844 31.309344 19.637625 28.864359 23.515625 27.193359 C 27.394625 25.522359 31.561578 24.6875 36.017578 24.6875 C 40.493578 24.6875 44.676453 25.522359 48.564453 27.193359 C 52.452453 28.864359 55.933813 31.330844 59.007812 34.589844 C 59.378813 34.981844 59.841437 35.167484 60.398438 35.146484 C 60.955437 35.125484 61.430266 34.919344 61.822266 34.527344 L 65.441406 30.876953 C 65.792406 30.525953 65.977047 30.108047 65.998047 29.623047 C 66.019047 29.138047 65.875406 28.720141 65.566406 28.369141 C 63.421406 25.707141 60.769281 23.393828 57.613281 21.423828 C 54.457281 19.453828 51.023547 17.932375 47.310547 16.859375 C 43.597547 15.786375 39.831625 15.25 36.015625 15.25 z M 36.015625 30.410156 C 33.437625 30.410156 30.926422 30.736719 28.482422 31.386719 C 26.037422 32.036719 23.783703 32.958297 21.720703 34.154297 C 19.657703 35.350297 17.915187 36.775781 16.492188 38.425781 C 16.162188 38.776781 16.011969 39.168563 16.042969 39.601562 C 16.073969 40.034562 16.275484 40.426344 16.646484 40.777344 L 20.699219 44.521484 C 21.132219 44.913484 21.621922 45.10475 22.169922 45.09375 C 22.716922 45.08375 23.207625 44.850484 23.640625 44.396484 C 25.249625 42.766484 27.152609 41.499797 29.349609 40.591797 C 31.546609 39.684797 33.769578 39.230469 36.017578 39.230469 C 38.286578 39.230469 40.533719 39.699672 42.761719 40.638672 C 44.989719 41.576672 46.918828 42.871484 48.548828 44.521484 C 48.919828 44.933484 49.368531 45.133047 49.894531 45.123047 C 50.420531 45.113047 50.899031 44.913484 51.332031 44.521484 L 55.386719 40.777344 C 55.736719 40.426344 55.926031 40.034562 55.957031 39.601562 C 55.988031 39.168563 55.848062 38.776781 55.539062 38.425781 C 54.095063 36.775781 52.342297 35.350297 50.279297 34.154297 C 48.216297 32.958297 45.963531 32.036719 43.519531 31.386719 C 41.075531 30.736719 38.573625 30.410156 36.015625 30.410156 z M 36.046875 44.677734 C 34.313875 44.677734 32.606781 45.083438 30.925781 45.898438 C 29.243781 46.713438 27.846422 47.864609 26.732422 49.349609 C 26.485422 49.679609 26.41825 50.055516 26.53125 50.478516 C 26.64425 50.900516 26.857016 51.267172 27.166016 51.576172 L 33.353516 57.548828 C 33.910516 58.064828 34.390969 58.435109 34.792969 58.662109 C 35.194969 58.889109 35.613875 59.001953 36.046875 59.001953 C 36.459875 59.001953 36.871156 58.887109 37.285156 58.662109 C 37.697156 58.435109 38.181281 58.064828 38.738281 57.548828 L 44.896484 51.576172 C 45.247484 51.225172 45.443375 50.803594 45.484375 50.308594 C 45.525375 49.813594 45.380781 49.370516 45.050781 48.978516 C 43.957781 47.637516 42.607047 46.585266 40.998047 45.822266 C 39.389047 45.059266 37.737875 44.677734 36.046875 44.677734 z"></path>
                    </svg>
                  ),
                  label: 'On Board',
                }
            }
          }

          const preset = card({ className: 'size-[4vh]' })
          if (type === 'wifi' && !value) return null

          return (
            <div className={'flex justify-start items-center gap-[1vh]'}>
              {preset.icon}
              <div className={'flex flex-col justify-center items-start'}>
                <small className={'font-bold text-black'}>
                  {type === 'wifi'
                    ? 'Wifi'
                    : type === 'range' && typeof value === 'number'
                      ? `${new Intl.NumberFormat('en-US').format(value)} nm`
                      : value}
                </small>
                <small className={'text-black'}>{preset.label}</small>
              </div>
            </div>
          )
        }

        return (
          <section key={doc.id} className={'w-full flex justify-center items-center my-[8vh]'}>
            <div
              className={
                'w-[92vw] md:w-2/3 flex flex-col lg:flex-row justify-center items-center lg:items-stretch rounded-lg overflow-clip drop-shadow-2xl'
              }
            >
              <Link
                href={`/fleet/${doc.id}`}
                className={
                  'w-full lg:w-1/2 flex flex-col justify-center items-start gap-[4vh] bg-grey-50 lg:pl-[6vw] lg:py-[4vh] lg:pr-[2vw] p-[6vw]'
                }
              >
                <div className={'flex flex-col justify-start items-start gap-[2vh]'}>
                  <div className={'flex flex-col justify-start items-start gap-[0.25vh]'}>
                    <h2 className={'cursor-pointer'}>{doc.manufacturer}</h2>
                    <h2 className={'cursor-pointer'}>{doc.name}</h2>
                  </div>
                  <h2 className={'font-normal'}>{doc.plate}</h2>
                </div>
                <p className={'text-justify cursor-pointer'}>{doc.introduction}</p>
                <div className={'w-full grid grid-cols-2 grid-rows-2 gap-[2vh]'}>
                  <Feature type={'seats'} value={doc.images.cabin.day.seats} />
                  <Feature type={'range'} value={doc.information.range} />
                  <Feature type={'beds'} value={doc.images.cabin.night.beds} />
                  <Feature type={'wifi'} value={doc.information.wifi} />
                </div>
              </Link>
              <aside className={'embla w-full lg:w-1/2 h-[28vh] lg:h-auto -z-10 relative'}>
                <div
                  className={'embla__viewport w-full h-full overflow-hidden -z-10'}
                  ref={emblaRef}
                >
                  <div className={'embla__container flex w-full h-full'}>
                    {images.map(
                      (media, i) =>
                        typeof media.image !== 'number' && (
                          <Link
                            href={`/fleet/${doc.id}`}
                            key={i}
                            className={'embla__slide w-full h-full flex-[0_0_100%]'}
                          >
                            <Image
                              src={`${media.image.url}`}
                              alt={media.image.alt}
                              width={parseInt(`${media.image.width}`)}
                              height={parseInt(`${media.image.height}`)}
                              className={
                                'object-cover object-center w-full h-full absolute grayscale -z-20'
                              }
                            />
                            <div
                              className={
                                'w-full h-full absolute -z-10 bg-gradient-to-r from-black/50 via-transparent to-black/50'
                              }
                            />
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
      })}
    </section>
  )
}

export default Listing
