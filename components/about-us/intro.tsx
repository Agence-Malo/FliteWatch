import Image from 'next/image'
import intro from '@/public/graphics/images/about-us/intro.webp'

const Intro = () => (
  <section
    className={
      'containerize mt-[4rem] lg:mt-[8rem] flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-[4vw]'
    }
  >
    <Image
      src={intro}
      alt={
        'Luxurious private jet interior with plush cream-colored seating, black and white Hermes pillows, a built-in TV, wooden cabinetry, and elegant lighting.'
      }
      className={'w-full lg:w-1/2 h-[45vh] lg:h-[64vh] rounded-lg object-cover object-center'}
    />
    <div
      className={
        'w-full lg:w-1/2 h-[45vh] lg:h-[64vh] flex flex-col justify-center items-center text-center gap-[2vh]'
      }
    >
      <div className={'w-full flex flex-col justify-center items-center gap-[0.25vh]'}>
        <p>About us</p>
        <h3>A Journey Built on Precision and Integrity</h3>
      </div>
      <p>
        FliteWatch was founded with a clear vision: to bring transparency, efficiency and common
        sense back in private aviation. Recognizing a gap in the industry, we set out to create a
        service that goes beyond the superlatives and focuses on real value and authentic
        relationships. Today, FliteWatch continues to grow, driven by a commitment to providing
        no-nonsense aviation solutions tailored to the unique needs of each client.
      </p>
    </div>
  </section>
)

export default Intro
