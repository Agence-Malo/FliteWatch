'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useState } from 'react'
import Button from '@/components/ui/button'
import Link from 'next/link'
import IList from '@/types/list'

const Services = () => {
  const services: IList[] = [
      {
        title: 'Aircraft Management',
        description:
          'Comprehensive, no-nonsense management solutions that maximize the value and performance of your asset.',
      },
      {
        title: 'Flight Charters',
        description:
          'Chartering services led by expertise and driven by relationships, offering a reliable and customized travel experience.',
      },
      {
        title: 'Aircraft Sales',
        description:
          'Clear and tailored guidance for buying or selling your aircraft, ensuring seamless and valuable outcomes.',
      },
      {
        title: 'Additional Services',
        description:
          'From ground transportation to catering, we handle every detail to enhance your aviation experience.',
      },
    ],
    [currentAccordionItem, setCurrentAccordionItem] = useState<number>(0)
  return (
    <section
      className={
        'm-[4vw] w-[92vw] h-[80vh] md:h-[90vh] bg-index-services bg-cover bg-[25%_50%] grayscale rounded-lg drop-shadow-2xl'
      }
    >
      <div
        className={
          'w-full h-full p-[6vw] flex flex-col justify-end items-start gap-[4vh] bg-gradient-to-tr from-black/75 rounded-lg'
        }
      >
        <Accordion
          showDivider={false}
          defaultExpandedKeys={['0']}
          hideIndicator
          className={'w-full md:w-1/2'}
        >
          {services.map((service, i) => (
            <AccordionItem
              key={i}
              indicator={({ isOpen }) => {
                if (isOpen) setCurrentAccordionItem(i)
                return null
              }}
              title={<h2 className={'cursor-pointer'}>{service.title}</h2>}
              classNames={{
                title: `text-white ${currentAccordionItem === i ? 'opacity-100' : 'opacity-50'} transition-opacity duration-200 ease-in-out`,
                content: 'text-white',
              }}
            >
              <p>{service.description}</p>
            </AccordionItem>
          ))}
        </Accordion>
        <Button as={Link} href={'/services'}>
          Learn More
        </Button>
      </div>
    </section>
  )
}

export default Services
