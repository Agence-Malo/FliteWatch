import Image from 'next/image'
import team from '@/public/graphics/images/about-us/team.webp'

const Team = () => (
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
      <p>Meet the Team</p>
      <h3 className={'leading-tight'}>Experienced Professionals with a Personal Touch</h3>
      <p className={'text-justify'}>
        Behind FliteWatch is a team of honest individuals who bring dedication, knowledge and a
        genuine care for our clients to every project. Led by our founder Alice Tropoe, a well known
        figure in charter industry, the team is united by a shared vision of excellence in private
        aviation. Each team member combines specialized skills with a deep commitment to the
        FliteWatch mission, ensuring that your experience is safe, seamless and precise.
      </p>
    </div>
    <div className="hidden lg:block w-1/2 relative">
      <Image
        src={team}
        alt={
          'Two professionals shaking hands and holding a signed document in front of a backdrop featuring various aviation company logos.'
        }
        fill
        className={'object-cover object-center'}
      />
    </div>
    <Image
      src={team}
      alt={
        'Two professionals shaking hands and holding a signed document in front of a backdrop featuring various aviation company logos.'
      }
      className={'w-full object-cover object-center h-[36vh] md:h-[48vh] lg:hidden'}
    />
  </section>
)

export default Team
