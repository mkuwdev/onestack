import { gql } from '@apollo/client';

export const authenticate = gql`
 mutation($request: SignedAuthChallenge!) { 
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
 }
`;

