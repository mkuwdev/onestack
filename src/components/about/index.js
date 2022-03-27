import React from 'react'
import Head from 'next/head'

import { useAccount } from "wagmi";
import { profiles } from "../../pages/api/getProfiles"
import { gql, useMutation } from "@apollo/client";

import { getAddress, signText } from './ethers-service';
import { generateChallenge } from './generate-challenge'
import { authenticate } from './authenticate'

import { useState } from 'react'
import { login } from './login'

const home = () => {
  
  // const [{ data: accountData }, disconnect] = useAccount();
  // try {
  //   const address = accountData.address
  //   console.log("Address: ", address)
  // } catch (err) {
  //   console.log("Address not loaded yet")
  // }
  // console.log(accountData?.address)

  // const data = profiles(userAddress)
  // console.log(data)

  // let profileId

  // data.then(result => {
  //   console.log(result)
  //   profileId = result.profiles.items[0].id
  //   console.log("profileId: ", profileId)
  // }).catch( err => console.log(err));

  // TRIAL FOR AUTHENTICATION
  // const address = await getAddress();
  // console.log(address)

  // try {
  //   const challengeResponse = generateChallenge(address);
  // } catch (err) {
  //   console.log("Challenge not made yet")
  // }
    // const signature = signText(challengeResponse.data.challenge.text)

    // login();

  return (
    <div>
      <Head>
        <title>onestack | web3 developer hub</title>
        <meta name="description" content="Made with love 💘" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="text-xl font-mono font-bold">Landing Page</div>
    </div>
  )
}

export default home
