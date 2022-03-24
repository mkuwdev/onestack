import { gql } from '@apollo/client';

export const text = gql`
query ($request: ChallengeRequest!) {
  challenge(request: $request) {
    text
  }
}
`;

/*export const text = gql`
query ($request: ChallengeRequest!) {
  challenge(request: $request) {
    text
  }
}
`;*/