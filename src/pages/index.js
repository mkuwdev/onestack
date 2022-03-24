import Head from 'next/head'
import { ConnectWallet, SwitchNetwork } from "../components/wallet";

export default function Home() {
  return (
    <div>
      <Head>
        <title>onestack | web3 developer hub</title>
        <meta name="description" content="Made with love 💘" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* <div className="m-4 flex justify-between">
        <div></div>
        <div className="flex space-between">
          <SwitchNetwork />
          <ConnectWallet />
        </div>
      </div> */}
      <h1 className="text-3xl font-bold">
        The start of many things to come..
      </h1>
    </div>
  )
}
