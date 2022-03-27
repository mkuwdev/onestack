import Head from 'next/head'
import Publication from './post'
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
      <Publication />
    </div>
  )
}
