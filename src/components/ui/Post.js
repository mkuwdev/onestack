import { Card, CardBody } from './Card'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Link from 'next/link'
import Jdenticon from 'react-jdenticon'


const Post = ({ post }) => {
  return (
    <Card className="mb-3">
        <CardBody>
          <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full">
                  <Jdenticon value={post.address} />
                </div>
                <div>
                  <div className="flex text-sm items-center gap-1 font-bold font-mono">
                    <div>{post.name}</div>
                  </div>
                  <div className="flex items-center gap-1 text-sm overflow-hidden text-ellipsis w-20 font-mono">
                    <div className="truncate">{post.address}</div>
                  </div>
                </div>
              </div>
          </div>
          <div className="mt-2">
            <div className="font-bold text-2xl">
              {post.title}
            </div>
            <div className="text-md">
              {post.content}
            </div>
          </div>
        </CardBody>
        <CardBody className="border-t py-1">
          <Link href={`/question/${post.id}`}>
            <div className="flex cursor-pointer text-indigo-900 py-2">
              <ChatBubbleOutlineIcon />
              <div className="ml-1 font-mono">
                Answers
              </div>
            </div>
          </Link>
        </CardBody>
    </Card>
  )
}

export default Post