const Quote = ({
  subtitle,
  title,
  description,
}: {
  subtitle: string
  title: string
  description: string
}) => (
  <section
    className={
      'containerize md:w-[64vw] lg:w-[56vw] my-[8vh] flex flex-col justify-center items-center text-center gap-[2vh]'
    }
  >
    <div
      className={
        'w-full flex flex-col justify-center items-center gap-[0.25vh] whitespace-pre-wrap'
      }
    >
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
    <p>{description}</p>
  </section>
)

export default Quote
