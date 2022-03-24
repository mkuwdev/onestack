import '../styles/globals.css'

import { providers } from "ethers";
import { Connector, Provider, chain, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { INFURA_ID } from '../constants';
import { ApolloProvider} from '@apollo/client';
import { apolloClient } from "../lib/apollo-client";
import { ExampleQuery } from '../examples/ping';
import { ExampleText } from '../examples/text';
import { ExampleAuthenticate } from '../examples/authentication';




import Layout from '../components/Layout'

const chains = [chain.polygonTestnetMumbai];
const defaultChain = chain.mainnet;

const connectors = ({ chainId }) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    defaultChain.rpcUrls[0]

  return [
    new InjectedConnector({
      chains: chains,
      options: { shimDisconnect: true }
    }),
    // new WalletConnectConnector({
    //   options: { infuraId: INFURA_ID, chainId: chain.polygonTestnetMumbai.id }
    // }),
    // new WalletLinkConnector({
    //   options: {
    //     appName: 'Lenster',
    //     jsonRpcUrl: `${rpcUrl}/${INFURA_ID}`
    //   }
    // })
  ]
}

const provider = ({ chainId }) => new providers.InfuraProvider(chainId, INFURA_ID)

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
    <Provider
      autoConnect
      connectors={connectors}
      provider={provider}
    >
      <Layout>
        <Component {...pageProps} />
        <ExampleQuery/>
        <ExampleText/>
        <ExampleAuthenticate/>
      </Layout>
    </Provider>
    </ApolloProvider>
  )
}

export default MyApp
