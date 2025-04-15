'use client'

import IList from '@/types/list'
import { useState } from 'react'
import { Divider } from '@heroui/react'
import Image from 'next/image'

import image from '@/public/graphics/images/services.webp'

const Service = () => {
  const services: IList[] = [
    {
      tab: 'Aircraft Management',
      title: 'Precision in Managing Your Asset',
      description:
        'Discover the right management plan for you! There is no such approach as one fits all in business aviation and that’s where a smaller operation can truly deliver. FliteWatch takes a straightforward, effective approach to aircraft management, focusing on delivering exactly what’s needed to maximize the value and utility of your asset. Our services encompass everything required to maintain, operate and optimize your aircraft, tailored around your specific goals and without unnecessary frills. We understand the importance of transparency and efficiency in aircraft ownership and strive to make management as simple as possible.',
      subtitle: 'Our Aircraft Management Services Include',
      sublist: [
        {
          title: 'Maintenance Coordination',
          description:
            'Comprehensive oversight of all maintenance activities to ensure your aircraft meets the highest safety and regulatory standards.',
        },
        {
          title: 'Crew and Staffing',
          description:
            'Full-service recruitment, training and management of crew members, selected based on your profile in order to meet your operational and comfort needs.',
        },
        {
          title: 'Regulatory Compliance',
          description:
            'Proactive monitoring and management of compliance to international standards and aviation regulations.',
        },
        {
          title: 'Cost Optimization',
          description:
            'Tailored cost management strategies that prioritize essential services, helping you achieve a strong return on your investment. We start with your geographical area, your travels and your interests and build an operational profile for the aircraft that really suits your needs. ',
        },
      ],
      note: 'With FliteWatch, you can expect aircraft management that is both precise and practical, allowing you to enjoy ownership with confidence',
    },
    {
      tab: 'Flight Charters',
      title: 'Smart Chartering with Integrity and Care',
      description:
        'FliteWatch brings a thoughtful approach to the world of private charters, led by our founder Alice Tropoe, a trusted expert in the field. Our philosophy focuses on transparency, fairness and the best interests of both our clients and aircraft owners. In the last few years the common approach of many operators is to simply look at the revenues, without any cost comprehension or value to the owners, we tailor each charter to fit the owner’s profile and meet the client’s needs, offering a balanced, respectful experience.',
      subtitle: 'Our Charter Services Include',
      sublist: [
        {
          title: 'Customized Itineraries',
          description:
            'Personalized flight routes designed to maximize convenience and efficiency.',
        },
        {
          title: 'Flexible Booking Options',
          description:
            'Fast, responsive booking for both scheduled and last-minute flights, using our network to adapt as needed.',
        },
        {
          title: 'Transparent Pricing',
          description:
            'Fair, honest pricing that respects all parties involved, with a clear understanding of costs and routes.',
        },
        {
          title: 'Comprehensive Coordination',
          description:
            'End-to-end management of all logistics, including flight permits, ground services, and any additional requests for a seamless journey.',
        },
      ],
      note: 'FliteWatch charters are more than just a service; they are a reflection of our commitment to meaningful, long-term relationships built on trust and understanding.',
    },
    {
      tab: 'Aircraft Sales',
      title: 'Expert Support for Buying and Selling Your Aircraft',
      description:
        'FliteWatch offers tailored solutions for aircraft transactions, ensuring a smooth and transparent process from start to finish. Whether you are acquiring your first jet or selling an existing one, our team provides clear guidance, market expertise, and practical advice to help you achieve the best value.',
      subtitle: 'Our Aircraft Sales Services Include',
      sublist: [
        {
          title: 'Market Analysis',
          description:
            'Comprehensive insights to determine the right value and timing for your transaction.',
        },
        {
          title: 'Buyer and Seller Representation',
          description: 'Skilled negotiation and advocacy to protect your interests.',
        },
        {
          title: 'Transaction Management',
          description:
            'End-to-end support, including due diligence, contract management, and regulatory compliance.',
        },
        {
          title: 'Tailored Recommendations',
          description:
            'Identifying the right aircraft based on your operational and financial goals.',
        },
      ],
      note: 'At FliteWatch, we simplify the complexities of aircraft sales, ensuring each transaction aligns with your objectives and delivers exceptional results.',
    },
    {
      tab: 'Additional Services',
      title: 'Supporting Every Step of Your Journey',
      description:
        'Beyond our core Aircraft Management and Charter services, FliteWatch offers a range of supplementary services that enhance and complete the client experience:',
      sublist: [
        {
          title: 'Ground Transportation',
          description: 'Coordinated transfers that ensure a smooth connection from air to ground.',
        },
        {
          title: 'Catering and Amenities',
          description:
            'Thoughtfully selected catering options that align with our commitment to responsible sourcing and minimizing waste.',
        },
        {
          title: 'Concierge Services',
          description:
            'Personalized assistance to meet last-minute or custom requests, ensuring every detail of your journey is taken care of.',
        },
        {
          title: 'Safety and Compliance Audits',
          description:
            'Continuous monitoring and auditing of service providers to uphold the highest standards of safety and quality.',
        },
      ],
      note: 'Every service we provide reflects FliteWatch’s dedication to a streamlined, efficient, and client-focused approach to private aviation.',
    },
  ]

  const [currentTab, setCurrentTab] = useState<IList>(services[0]),
    [fade, setFade] = useState<boolean>(false)

  const changeTab = (tab: IList) => {
    setFade(true)
    setTimeout(() => {
      setCurrentTab(tab)
      setTimeout(() => setFade(false), 200)
    }, 500)
  }

  return (
    <div
      className={
        'w-[92vw] px-[4vw] py-[4vw] h-full mt-[4rem] bg-grey-50 rounded-lg drop-shadow-2xl flex flex-col justify-start items-center gap-[4vh]'
      }
    >
      <div className={'w-full flex flex-col justify-start items-center lg:gap-[2vh]'}>
        <div
          className={'w-full flex flex-col lg:flex-row justify-start items-start lg:items-baseline'}
        >
          <h1 className={'lg:w-2/12'}>Services</h1>
          <div
            className={
              'w-full lg:w-9/12  pr-[4vw] lg:pr-0 flex justify-start lg:justify-end items-baseline gap-[8vw] overflow-y-hidden overflow-x-auto [mask-image:_linear-gradient(to_right,_black,_black_90%,_transparent)] lg:[mask-image:none]'
            }
          >
            {services.map((service) => (
              <button
                key={service.tab}
                type={'button'}
                onClick={() => {
                  setCurrentTab({ ...currentTab, tab: service.tab })
                  changeTab(service)
                }}
              >
                <p
                  className={`${currentTab.tab === service.tab ? 'font-bold' : 'hover:opacity-75 transition-opacity duration-200 ease-in-out'} whitespace-nowrap py-[2vh] lg:py-0 cursor-pointer`}
                >
                  {service.tab}
                </p>
              </button>
            ))}
          </div>
        </div>
        <Divider className={'w-full bg-grey-500'} />
      </div>
      <div
        className={`w-full lg:w-10/12 flex flex-col justify-start items-start gap-[2vh] ${fade ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 ease-in-out`}
      >
        <p className={'font-bold'}>{currentTab.title}:</p>
        <p className={'text-xs md:text-sm text-justify'}>{currentTab.description}</p>
      </div>
      <div
        className={`w-full h-max lg:w-10/12 flex flex-col lg:flex-row-reverse justify-between items-start gap-[2vh] lg:gap-[2vw] ${fade ? 'opacity-0' : 'opacity-100'}`}
      >
        <Image
          src={image}
          alt={'The back of a jet towards an opening hangar from the inside'}
          className={
            'w-full lg:w-1/2 h-[32vh] md:h-[64vh] lg:h-[40vh] rounded-xl drop-shadow-lg object-cover object-center'
          }
        />
        <div className={'w-1/2 flex flex-col justify-start items-start gap-[2vh]'}>
          {currentTab.subtitle && <p className={'font-bold'}>{currentTab.subtitle}:</p>}
          {currentTab.sublist && (
            <ul className={'list-disc pl-4'}>
              {currentTab.sublist.map((item, i) => (
                <li
                  key={i}
                  className={`${currentTab.sublist && i !== currentTab.sublist.length - 1 && 'mb-[2vh]'}`}
                >
                  <p className={'text-xs md:text-sm'}>
                    <b>{item.title}:</b> {item.description}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <p className={`w-full lg:w-10/12 text-xs md:text-sm ${fade ? 'opacity-0' : 'opacity-100'}`}>
        {currentTab.note}
      </p>
    </div>
  )
}

export default Service
