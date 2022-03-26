import React from 'react'
import Head from 'next/head'


const home = () => {
  return (
    <div>
      <Head>
        <title>onestack | web3 developer hub</title>
        <meta name="description" content="Made with love 💘" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1 className="text-3xl font-bold">
        Landing Page
      </h1>
    </div>
  )
}

export default home