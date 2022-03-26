import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import Search from './Search'

import { ConnectWallet, SwitchNetwork } from "../../wallet";

const Navbar = () => {

    const NavItem = ({ url, name, current }) => {
    return (
      <Link href={url}>
        <a
          href={url}
          className={clsx('px-3 py-1 font-mono cursor-pointer', {
            'text-black border-b-4 border-indigo-800': current,
            'text-gray-700 hover:text-black hover:border-b-4': !current
          })}
          aria-current={current ? 'page' : undefined}
        >
          {name}
        </a>
      </Link>
    )
  }

  const NavItems = () => {
    const router = useRouter()

    return (
      <>
        <NavItem 
          url="/explore" 
          name="Explore" 
          current={router.pathname == '/explore'} 
        />
        <NavItem
          url="/about"
          name="About"
          current={router.pathname == '/about'}
        />
      </>
    )
  }

  return (
    <nav className="sticky top-0 z-10 w-full bg-white border-b drop-shadow">
      <div className="container max-w-screen-xl px-5 mx-auto">
        <div className="relative flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center justify-start flex-1">
            <div className="flex items-center flex-shrink-0 space-x-3">
              <Link href="/">
                <a href="/">
                  <div className="text-3xl font-black">
                    <img className="h-10" src="/banner.png" alt="Logo" />
                  </div>
                </a>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex items-center space-x-4">
                <div className="hidden md:block">
                  <Search />
                </div>
                <NavItems />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center gap-5 pr-2 sm:static sm:inset-auto sm:pr-0 sm:ml-6">
            {/* <div className="flex items-center gap-5">
              <Menu indexerData={indexerData} />
            </div> */}
            <div className="m-4 flex justify-between">
              <div></div>
              <div className="flex space-between align-bottom">
                <SwitchNetwork />
                <ConnectWallet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar