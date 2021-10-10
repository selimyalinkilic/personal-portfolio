import { useRouter } from 'next/dist/client/router'
import NextLink from 'next/link'

const NavLink = ({ to, children }) => {
  const router = useRouter()
  return (
    <NextLink href={to}>
      <a
        className={`mr-8 last:mr-0 font-body font-medium text-xl hover:underline ${
          router.pathname === to ? 'text-primary' : 'text-dark'
        }`}
      >
        {children}
      </a>
    </NextLink>
  )
}

export default NavLink
