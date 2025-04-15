'use client'

import { useView } from '@/context/view'
import { Link } from '@heroui/react'
import { usePathname } from 'next/navigation'
import Logo from '@/components/ui/logo'
import { paths } from '@/components/ui/nav'

const Footer = () => {
  const currentPath = usePathname(),
    { setView } = useView()

  return (
    <footer className="w-[92vw] mt-[8vh] mb-[2vh] flex items-center justify-between bg-black py-[2vh] px-[4vw] rounded-lg drop-shadow-2xl">
      <div className={'w-full flex justify-between items-stretch lg:items-end gap-[2vw]'}>
        <div
          className={
            'flex flex-col lg:flex-row justify-start items-baseline md:gap-[2vw] gap-[4vw] flex-wrap w-1/3'
          }
        >
          {paths.map((path) => (
            <Link
              key={path.name}
              href={path.href}
              className={`${path.href === currentPath && 'font-bold'}`}
            >
              <small>{path.name}</small>
            </Link>
          ))}
          <Link as={'button'} onPress={() => setView('contact')}>
            <small>Contact</small>
          </Link>
        </div>
        <div className={'w-1/3 flex justify-center items-center'}>
          <Logo className={'w-[12vh]'} />
        </div>
        <div
          className={
            'flex flex-col lg:flex-row justify-center lg:justify-end items-end lg:items-baseline md:gap-[2vw] gap-[4vw] flex-wrap w-1/3'
          }
        >
          <Link as={'button'}>
            <small>terms</small>
          </Link>
          <Link as={'button'}>
            <small>privacy</small>
          </Link>
          <Link href={'https://agencemalo.com/'}>
            <small>credits</small>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
