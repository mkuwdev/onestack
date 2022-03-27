import { gql } from '@apollo/client/core';
import { apolloClient } from './apollo-client';
// import { argsBespokeInit } from '../config';
import { getAddress, signText } from './ethers-service';
// import { prettyJSON } from '../helpers';
import { getAuthenticationToken, setAuthenticationToken } from './state';
import { useAccount } from "wagmi";
import { useEffect } from 'react'

const GET_CHALLENGE = `
  query($request: ChallengeRequest!) {
    challenge(request: $request) { text }
  }
`;

export const generateChallenge = (address) => {
  return apolloClient.query({
    query: gql(GET_CHALLENGE),
    variables: {
      request: {
        address,
      },
    },
  });
};

const AUTHENTICATION = `
  mutation($request: SignedAuthChallenge!) { 
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
 }
`;

const authenticate = (address, signature) => {
  return apolloClient.mutate({
    mutation: gql(AUTHENTICATION),
    variables: {
      request: {
        address,
        signature,
      },
    },
  });
};

export const login = async () => {
  if (getAuthenticationToken()) {
    console.log('login: already logged in');
    return;
  }

  let address, challengeResponse, signature


//   const [{ data: accountData }, disconnect] = await useAccount();
//   const address = await accountData?.address;  
//      address = await getAddress();
//     if (!address) console.log("HAHA");

//   // we request a challenge from the server
//     console.log('login: address', address);
//     challengeResponse = await generateChallenge(address);
//     console.log("Generated: ", challengeResponse)
  
  // sign the text with the wallet
//   const signature = await signText(challengeResponse.data.challenge.text);
//   console.log("Signature: ", signature);

//   const accessTokens = await authenticate(address, signature);
//   prettyJSON('login: result', accessTokens.data);

// //   setAuthenticationToken(accessTokens.data.authenticate.accessToken);

//   return accessTokens.data;
};