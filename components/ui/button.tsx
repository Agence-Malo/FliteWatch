import { Button as NextUIButton } from '@heroui/react'

const Button = ({
  children,
  dark,
  as,
  href,
}: {
  children: React.ReactNode
  dark?: boolean
  as?: React.ElementType<any>
  href?: string
}) => (
  <NextUIButton
    as={as}
    href={href}
    radius={'sm'}
    variant={'solid'}
    className={`text-base font-bold tracking-wider ${dark ? 'bg-black text-white' : 'bg-white'}`}
  >
    {children}
  </NextUIButton>
)

export default Button
