import { mockFeed  } from '../../mockdata'
import Post from '../ui/Post'

const Feed = () => {
  return (
    <div>
        <div className="flex items-center gap-2 mb-5">
            <div className="font-bold font-mono text-4xl">EXPLORE</div>
        </div>
        <div>
            {mockFeed.length == 0 && 
                <div className="font-semibold font-mono">Be the first to make a post!</div>
            }
            {mockFeed.map((post, index) => (
                <Post post={post}/>
            ))}
        </div>
    </div>
  )
}

export default Feed