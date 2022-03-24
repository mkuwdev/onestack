import {useMutation} from '@apollo/client';
import { authenticate } from '../queries/query-authenticate';

export const ExampleAuthenticate = (address, signature) => {
    const { loading, error, data} = useMutation(authenticate, {
        variables: {
            request: {
                address: "0xE395793777e5619296b804b29b1E7f4E81524e0b",
                signature: "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
            },
          },
    });
    

    return (
        <div>{data?data.accessToken:"InvalidSignature"}</div>
    )
}