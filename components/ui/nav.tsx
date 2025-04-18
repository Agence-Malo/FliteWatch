'use client'

import { useState } from 'react'
import { useView } from '@/context/view'
import Link from 'next/link'
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react"
import { usePathname } from 'next/navigation'
import Logo from '@/components/ui/logo'

export const paths = [
  {
    name: 'Home',
    href: '/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
        className={'size-full'}
      >
        <path d="M 15.962891 3 A 1.0001 1.0001 0 0 0 15.552734 3.1054688 C 15.552734 3.1054688 7.3270249 7.1912131 2.1523438 15.470703 A 1.0001 1.0001 0 1 0 3.8476562 16.529297 C 3.9216267 16.410944 4.0010542 16.301976 4.0761719 16.185547 C 3.8596183 19.873503 4.2744744 23.792833 5.0664062 25.857422 C 5.1734063 26.136422 5.3986406 26.352266 5.6816406 26.447266 C 8.2246406 27.299266 10.375094 27.73525 12.871094 27.90625 C 12.893094 27.90725 12.917453 27.908203 12.939453 27.908203 C 13.195453 27.908203 13.440953 27.811766 13.626953 27.634766 C 13.829953 27.441766 13.943453 27.172578 13.939453 26.892578 C 13.901453 24.710578 14.032109 23.335609 14.412109 22.099609 C 15.308109 21.966609 16.686937 21.965609 17.585938 22.099609 C 17.964938 23.336609 18.098594 24.745625 18.058594 26.890625 C 18.053594 27.170625 18.165141 27.439812 18.369141 27.632812 C 18.572141 27.825813 18.850906 27.92525 19.128906 27.90625 C 21.624906 27.73525 23.773406 27.298266 26.316406 26.447266 C 26.599406 26.352266 26.826594 26.136422 26.933594 25.857422 C 27.726367 23.791993 28.140581 19.871942 27.923828 16.183594 C 27.999246 16.300474 28.078082 16.410478 28.152344 16.529297 A 1.0001 1.0001 0 1 0 29.847656 15.470703 C 24.672975 7.1912131 16.447266 3.1054688 16.447266 3.1054688 A 1.0001 1.0001 0 0 0 15.962891 3 z M 16 12 C 17.1 12 18 12.9 18 14 C 18 15.1 17.1 16 16 16 C 14.9 16 14 15.1 14 14 C 14 12.9 14.9 12 16 12 z"></path>
      </svg>
    ),
  },
  {
    name: 'Services',
    href: '/services',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
        className={'size-full'}
      >
        <path d="M26.498 20.406C25.909 19.513 24.908 19 23.752 19c-1.479 0-2.377.804-3.244 1.58-.18.161-.366.324-.559.487-.035.399-.112.795-.272 1.173C19.145 23.499 17.686 25 13.75 25c-.553 0-1-.447-1-1s.447-1 1-1c2.215 0 3.665-.546 4.084-1.537.182-.431.172-.948.049-1.457-.172-.173-.363-.333-.57-.477-2.737-1.896-7.124-2.113-10.198-.501C5.106 20.08 4 21.757 4 23.75 4 26.071 6.1 30 13.969 30c7.461 0 12.043-5.008 12.782-6.734C27.154 22.326 27.06 21.257 26.498 20.406zM16 14.753c.468.39.965.75 1.488 1.081.233.147.522.205.789.139.996-.245 1.908-.771 2.618-1.514.189-.198.282-.474.273-.747-.021-.621-.079-1.233-.183-1.832.57-.213 1.128-.463 1.673-.751.246-.13.442-.355.519-.622.284-.986.284-2.027 0-3.013-.077-.267-.273-.492-.519-.622-.545-.288-1.102-.538-1.673-.751.104-.599.166-1.21.189-1.831.01-.274-.084-.551-.273-.749-.71-.742-1.627-1.268-2.623-1.513-.268-.066-.556-.008-.789.139C16.965 2.496 16.468 2.857 16 3.246c-.468-.39-.965-.75-1.488-1.081-.233-.147-.522-.205-.789-.139-.996.245-1.908.771-2.618 1.514-.189.198-.282.474-.273.747.021.621.079 1.233.183 1.832-.57.213-1.128.463-1.673.751C9.096 7.001 8.9 7.226 8.823 7.493c-.284.986-.284 2.027 0 3.013.077.268.273.493.519.623.545.288 1.102.538 1.673.751-.104.599-.166 1.21-.189 1.831-.01.274.084.551.273.749.71.742 1.623 1.264 2.619 1.507.266.065.553.008.786-.138C15.029 15.5 15.532 15.144 16 14.753zM14 9c0-1.104.895-2 2-2s2 .896 2 2-.895 2-2 2S14 10.104 14 9z"></path>
      </svg>
    ),
  },
  {
    name: 'Fleet',
    href: '/fleet',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
        className={'size-full'}
      >
        <path d="M21.087,29.405c-2.587,0.765-7.78,0.815-10.205,0.019c-0.402-0.132-0.682-0.508-0.685-0.932 c-0.012-1.816,1.721-3.592,3.107-4.492c-1.247-4.229-1.82-7.555-1.552-12.403C12.089,5.482,13.843,2,16,2s3.911,3.482,4.249,9.597 c0.268,4.847-0.305,8.174-1.552,12.403c1.378,0.896,3.1,2.657,3.107,4.463C21.805,28.899,21.505,29.281,21.087,29.405z"></path>
        <path d="M9.759,11.571c0.01-0.225-0.222-0.386-0.425-0.291c-4.466,2.092-8.096,4.991-8.277,6.363 c-0.094,0.708-0.063,2.657,1.202,3.16c0.355,0.141,0.989,0.198,1.778,0.198c1.66,0,3.998-0.253,5.896-0.507 c0.226-0.03,0.371-0.236,0.33-0.46C9.806,17.572,9.619,14.702,9.759,11.571z"></path>
        <path d="M30.944,17.644c-0.181-1.372-3.812-4.273-8.277-6.366c-0.204-0.096-0.435,0.066-0.425,0.291 c0.14,3.131-0.047,6.003-0.504,8.466c-0.042,0.224,0.105,0.43,0.33,0.46c2.802,0.375,6.575,0.746,7.674,0.308 C31.006,20.3,31.038,18.351,30.944,17.644z"></path>
      </svg>
    ),
  },
  {
    name: 'About us',
    href: '/about-us',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
        className={'size-full'}
      >
        <path d="M29.483,11.335c-0.812-3.806-4.227-6.568-8.122-6.568c-1.968,0-3.876,0.712-5.371,1.981	c-1.495-1.269-3.403-1.981-5.371-1.981c-3.698,0-6.983,2.487-7.989,6.048C2.095,12.72,2.254,14.755,3.061,16.5	c2.239,5.617,8.402,10.733,12.931,10.733c4.587,0,10.766-5.148,12.963-10.801c0.461-1.187,0.705-2.327,0.723-3.388	C29.687,12.422,29.618,11.831,29.483,11.335z"></path>
      </svg>
    ),
  },
]

const Nav = () => {
  const currentPath = usePathname(),
    [isMenuOpen, setIsMenuOpen] = useState<boolean>(false),
    { setView } = useView()

  return (
    <Navbar
      position={'sticky'}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        wrapper: `max-w-full containerize`,
        content: 'w-1/3',
        brand: 'w-1/3 flex justify-center items-center',
      }}
    >
      <NavbarContent justify={'start'}>
        <NavbarMenuToggle className={'lg:hidden'} />
        {paths.map((path) => (
          <NavbarItem
            className={'hidden lg:flex'}
            key={path.name}
            isActive={currentPath === path.href}
          >
            <Link href={path.href}>{path.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarBrand>
        <Link href={'/'}>
          <Logo mode={'heading'} className={'w-[16vh]'} dark />
        </Link>
      </NavbarBrand>
      <NavbarContent justify={'end'}>
        <NavbarItem>
          <Button
            as={'button'}
            variant={'light'}
            onPress={() => {
              setIsMenuOpen(false)
              setView('contact')
            }}
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu
        className={
          isMenuOpen
            ? 'justify-center gap-[4vh]'
            : '-translate-y-[110%] transition-transform duration-[400ms] ease-in-out'
        }
      >
        {paths.map((path) => (
          <NavbarMenuItem key={path.name} isActive={currentPath === path.href}>
            <Link
              href={path.href}
              className={
                'group hover:font-semibold flex justify-start items-center gap-[0.5rem] text-2xl'
              }
            >
              <div
                className={
                  '-translate-y-[0.25rem] h-[2.44rem] w-0 invisible transition-size duration-200 ease-in-out'
                }
              >
                {path.icon}
              </div>
              <div
                className={
                  '-translate-y-[0.25rem] size-[0rem] group-hover:size-[2.44rem] transition-size duration-200 ease-in-out'
                }
              >
                {path.icon}
              </div>
              {path.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Nav
