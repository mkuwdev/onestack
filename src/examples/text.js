import {useQuery} from '@apollo/client';
import { text } from '../queries/query-text';

export const ExampleText = () => {
    const { loading, error, data} = useQuery(text, {
        variables: {
            request: {
             address: "0xdfd7D26fd33473F475b57556118F8251464a24eb" // Ez ugyanaz amit a playGroundba beirtunk
            },
        },
    });
    

    return (
        <div>{data?data.challenge.text:"test"}</div>
    )
}