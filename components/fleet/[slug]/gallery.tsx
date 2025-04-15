'use client'

import { Jet } from '@/payload-types'
import { EmblaOptionsType } from 'embla-carousel'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

const Gallery = ({ gallery }: { gallery: Jet['images']['gallery'] }) => {
  type ThumbPropType = {
    selected: boolean
    index: Jet['images']['gallery'][number]
    onClick: () => void
  }

  const Thumb: React.FC<ThumbPropType> = (props) => {
    const { selected, index, onClick } = props

    return (
      <button
        onClick={onClick}
        type="button"
        className={'[flex:_0_0_33%] h-[10vh] md:h-[16vh] lg:h-[24vh] flex-shrink-0'}
      >
        {typeof index.image !== 'number' && (
          <Image
            src={`${index.image.url}`}
            alt={index.image.alt}
            width={index.image.width || 2560}
            height={index.image.height || 1440}
            className={`rounded-xl shadow-inner ${selected ? 'opacity-100' : 'opacity-50'} transition-opacity duration-200 ease-in-out size-full object-cover object-center`}
          />
        )}
      </button>
    )
  }

  type CarouselPropType = {
    slides: Jet['images']['gallery']
    options?: EmblaOptionsType
  }

  const EmblaCarousel: React.FC<CarouselPropType> = (props) => {
    const { slides, options } = props
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [
      Autoplay({ playOnInit: true, delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }),
    ])
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
      containScroll: 'keepSnaps',
      dragFree: true,
    })

    const onThumbClick = useCallback(
      (index: number) => {
        if (!emblaMainApi || !emblaThumbsApi) return
        emblaMainApi.scrollTo(index)
      },
      [emblaMainApi, emblaThumbsApi],
    )

    const onSelect = useCallback(() => {
      if (!emblaMainApi || !emblaThumbsApi) return
      setSelectedIndex(emblaMainApi.selectedScrollSnap())
      emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
      if (!emblaMainApi) return
      onSelect()

      emblaMainApi.on('select', onSelect).on('reInit', onSelect)
    }, [emblaMainApi, onSelect])

    return (
      <div className="w-full flex flex-col justify-center items-center gap-[2vh]">
        <div className="w-4/5 overflow-hidden" ref={emblaMainRef}>
          <div className="flex">
            {slides.map(
              (image, i) =>
                typeof image.image !== 'number' && (
                  <Image
                    key={i}
                    src={`${image.image.url}`}
                    alt={image.image.alt}
                    width={image.image.width || 2560}
                    height={image.image.height || 1440}
                    className={
                      'rounded-lg drop-shadow-xl cursor-grab h-[32vh] md:h-[48vh] lg:h-[64vh] object-cover object-center [flex:_0_0_100%] ml-[2vh]'
                    }
                  />
                ),
            )}
          </div>
        </div>

        <div className="w-4/5 rounded-xl overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex gap-[2vh]">
            {slides.map((image, i) => (
              <Thumb
                key={i}
                onClick={() => onThumbClick(i)}
                selected={i === selectedIndex}
                index={image}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className={'my-[4vh] w-full'}>
      <EmblaCarousel slides={gallery} options={{ loop: true }} />
    </section>
  )
}

export default Gallery
