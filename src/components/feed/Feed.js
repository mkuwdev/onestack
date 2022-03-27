import { mockFeed  } from '../../mockdata'
import Post from '../ui/Post'
import { EXPLORE_PUBLICATIONS } from "../../pages/api/publication";
import { useQuery } from "@apollo/client";

const Feed = () => {

    const { loading, error, data } = useQuery(EXPLORE_PUBLICATIONS, {
        variables: {
          request: {
            sortCriteria: "TOP_COMMENTED",
            sources: ["onestacktest3"],
            limit: 20,
            },
        },
    });
    
    console.log(data);



  return (
    <div>
        <div className="flex items-center gap-2 mb-5">
            <div className="font-bold font-mono text-4xl">EXPLORE</div>
        </div>
        <div>
            {loading &&
                <h1>Loading..</h1>
            }
            {!loading && data.explorePublications.items.length == 0 && 
                <div className="font-semibold font-mono">Be the first to make a post!</div>
            }
            {!loading && data.explorePublications.items.map((item, index) => (
                <Post post={item}/>
            ))}
        </div>
    </div>
  )
}

export default Feed