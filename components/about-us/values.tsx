import Quote from '@/components/ui/quote'

const Values = () => (
  <section className={'my-[8vh]'}>
    <Quote
      subtitle={'Our Values'}
      title={'Precision, Transparency, \n' + 'and Responsibility'}
      description={
        'At FliteWatch, we believe that success is in the details. Our approach combines operational efficiency with an ethical mindset, ensuring that every choice we make respects both our clients and the environment in which we operate. From pre-empting our clients’ needs to making smart, responsible decisions and ensuring we minimize waste, our values are reflected in every aspect of our service. We aim to provide a straightforward, personalized experience that truly reflects what private aviation should be: using the asset in the smartest way possible and delivering an impeccable service to users. '
      }
    />
  </section>
)

export default Values
