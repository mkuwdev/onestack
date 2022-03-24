import {useQuery} from '@apollo/client';
import { query } from '../queries/query-ping';

export const ExampleQuery = () => {
    const { loading, error, data} = useQuery(query);
    

    return (
        <div>{data?data.ping:"test"}</div>
    )
}