// import { gql } from '@apollo/client/core';
// import { apolloClient } from '../apollo-client';
// import { login } from '../authentication/login';
// import { argsBespokeInit } from '../config';
// import { getAddressFromSigner } from '../ethers.service';
// import { prettyJSON } from '../helpers';
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const GET_PROFILES = gql`
  query($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        id
        name
        bio
        location
        website
        twitterUrl
        picture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
          __typename
        }
        handle
        coverPicture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
          __typename
        }
        ownedBy
        depatcher {
          address
          canUseRelay
        }
        stats {
          totalFollowers
          totalFollowing
          totalPosts
          totalComments
          totalMirrors
          totalPublications
          totalCollects
        }
        followModule {
          ... on FeeFollowModuleSettings {
            type
            amount {
              asset {
                symbol
                name
                decimals
                address
              }
              value
            }
            recipient
          }
          __typename
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
`;

// export interface ProfilesRequest {
//   profileIds?: string[];
//   ownedBy?: string;
//   handles?: string[];
//   whoMirroredPublicationId?: string;
// }

// const getProfilesRequest = (address) => {
//   return useQuery(EXPLORE_PUBLICATIONS, {
//     variables: {
//       request: {
//         sortCriteria: "TOP_COMMENTED",
//         sources: ["onestacktest3"],
//         limit: 20,
//         },
//     }

export const profiles = async (address) => {
  console.log('profiles: address', address);
  console.log('hehe')
//    login(address);
    // request = { ownedBy: address };
  // only showing one example to query but you can see from request
  // above you can query many
    // const profilesFromProfileIds = await getProfilesRequest(address);
    const profilesFromProfileIds = await useQuery(GET_PROFILES, {
        variables: {
          request: {
            ownedBy: address
          },
        },
    });
//   prettyJSON('profiles: result', profilesFromProfileIds.data);

    return profilesFromProfileIds.data;
};
