'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import Image from 'next/image'
import whyFlitewatch from '@/public/graphics/images/index/whyFlitewatch.webp'

const WhyFlitewatch = () => {
  const accordionItems = [
    {
      title: 'Efficient and Ethical Operations',
      content:
        'We streamline every aspect of flight operations, focusing on smart resource use and thoughtful decision-making.',
    },
    {
      title: 'Aircraft Management with Integrity',
      content:
        "Our approach is simple: once we get to know you, we provide you with the right management plan for you and what is needed to maximize your asset's value.",
    },
    {
      title: 'Precision in Chartering',
      content:
        'Guided by expertise and strong industry relationships, we ensure fair pricing and tailored chartering that respects both clients and owners.',
    },
    {
      title: 'Keeping our promises',
      content:
        'Our team is guided by the founder’s philosophy: our word is gold! We always take full responsibility for what is within our control and we do our utmost to keep the same standards on our suppliers behalf.',
    },
  ]

  return (
    <section
      className={
        'w-full lg:h-[90vh] flex flex-col lg:flex-row justify-center items-center gap-[6vh]'
      }
    >
      <article className={'w-[92vw] lg:w-2/5 flex flex-col justify-end items-start gap-[4vh]'}>
        <h2>Why FliteWatch</h2>
        <Accordion defaultExpandedKeys={['0']}>
          {accordionItems.map((item, i) => (
            <AccordionItem
              key={i}
              title={<h3 className={'cursor-pointer'}>{item.title}</h3>}
              indicator={({ isOpen }) =>
                isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 72 72"
                    className={'size-[1.81rem] -rotate-90'}
                  >
                    <path d="M55,40H17c-2.209,0-4-1.791-4-4s1.791-4,4-4h38c2.209,0,4,1.791,4,4S57.209,40,55,40z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 72 72"
                    className={'size-[1.81rem]'}
                  >
                    <path d="M 36 13 C 33.791 13 32 14.791 32 17 L 32 32 L 17 32 C 14.791 32 13 33.791 13 36 C 13 38.209 14.791 40 17 40 L 32 40 L 32 55 C 32 57.209 33.791 59 36 59 C 38.209 59 40 57.209 40 55 L 40 40 L 55 40 C 57.209 40 59 38.209 59 36 C 59 33.791 57.209 32 55 32 L 40 32 L 40 17 C 40 14.791 38.209 13 36 13 z"></path>
                  </svg>
                )
              }
            >
              <p>{item.content}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </article>
      <Image
        src={whyFlitewatch}
        alt={"Jet nose with another jet's back in a hangar"}
        className={
          'w-[92vw] lg:w-2/5 h-[56vh] rounded-lg drop-shadow-2xl object-cover object-center'
        }
      />
    </section>
  )
}

export default WhyFlitewatch
