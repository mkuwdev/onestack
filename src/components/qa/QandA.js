import { useRouter } from 'next/router'
import { mockFeed, mockComments } from '../../mockdata'
import Jdenticon from 'react-jdenticon'
import { Card, CardHeader, CardBody } from '../ui/Card'
import CommentPost from '../ui/CommentPost'
import CreateCommentButton from '../sidebars/CreateCommentButton'

const QandA = () => {

    const { query: { id } } = useRouter()

  return (
    <>
      <Card>
        <CardHeader>
        <div className=" items-center gap-2">
            <div className="font-bold font-mono text-4xl mb-2">
                {mockFeed[0].title}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full">
                  <Jdenticon value={mockFeed[0].address} />
                </div>
                <div>
                  <div className="flex text-sm items-center gap-1 font-bold font-mono">
                    <div>{mockFeed[0].name}</div>
                  </div>
                  <div className="flex items-center gap-1 text-sm overflow-hidden text-ellipsis w-20 font-mono">
                    <div className="truncate">{mockFeed[0].address}</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        </CardHeader>
        <CardBody>
            <div className="text-md">
              {mockFeed[0].content}
            </div>
        </CardBody>
      </Card>
      <div className="w-full flex justify-between	align-middle mt-5 mb-5">
      <div className="font-bold font-mono text-3xl ">
          🙋‍♀️ Answers
      </div>
        <CreateCommentButton/>
      </div>
      
      {mockComments.length == 0 && 
        <div className="font-semibold font-semibold">Be the first to make a comment!</div>
      }
      {mockComments.map((post, index) => (
        <CommentPost comment={post}/>
      ))}
    </>
    

  )
}

export default QandA