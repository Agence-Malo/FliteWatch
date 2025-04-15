'use client'

import { Jet } from '@/payload-types'
import { useState } from 'react'
import Image from 'next/image'

const Cabin = ({ cabin }: { cabin: Jet['images']['cabin'] }) => {
  const [nightConfig, setNightConfig] = useState<boolean>(false)

  return (
    <section className={'w-full flex flex-col justify-center items-center gap-[4vh] my-[4vh] z-0'}>
      <h2>Configuration</h2>
      <button
        type={'button'}
        onClick={() => setNightConfig(!nightConfig)}
        className={
          'w-[32vw] md:w-[18vw] h-max bg-black rounded-full flex justify-between items-baseline relative text-center py-[1.5vh]'
        }
      >
        <div
          className={`absolute inset-y-0 w-[16vw] md:w-[9vw] h-full bg-white border-[0.25vh] border-black rounded-full ${nightConfig ? 'translate-x-full' : 'translate-x-0'} transition-transform duration-300 ease-in-out`}
        />
        {['Day', 'Night'].map((label) => (
          <p
            key={label}
            className={'w-[16vw] md:w-[9vw] cursor-pointer mix-blend-difference text-white z-10'}
          >
            {label}
          </p>
        ))}
      </button>
      <div
        className={'containerize flex flex-col justify-start items-center text-center gap-[2vh]'}
      >
        <p>
          {nightConfig
            ? `Night configuration – ${cabin.night.beds} bedding${cabin.night.beds > 1 ? 's' : ''}`
            : `Day configuration – ${cabin.day.seats} seat${cabin.day.seats > 1 ? 's' : ''}`}
        </p>
        {typeof cabin.day.image !== 'number' && typeof cabin.night.image !== 'number' && (
          <Image
            src={nightConfig ? `${cabin.night.image.url}` : `${cabin.day.image.url}`}
            alt={nightConfig ? cabin.night.image.alt : cabin.day.image.alt}
            width={(nightConfig ? cabin.night.image.width : cabin.day.image.width) || 2560}
            height={(nightConfig ? cabin.night.image.height : cabin.day.image.height) || 1440}
          />
        )}
      </div>
    </section>
  )
}

export default Cabin
