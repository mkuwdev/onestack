import Head from 'next/head'

import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'

import Navbar from './universal/Navbar'

// TODO apollo, toast, loading

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        {children}
    </div>
  )
}

export default Layout