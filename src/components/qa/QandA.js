import { useRouter } from 'next/router'
import { mockFeed, mockComments } from '../../mockdata'
import Jdenticon from 'react-jdenticon'
import { Card, CardHeader, CardBody } from '../ui/Card'
import CommentPost from '../ui/CommentPost'
import CreateCommentButton from '../sidebars/CreateCommentButton'
import { useQuery } from "@apollo/client";
import { GET_PUBLICATION } from "../../pages/api/getPublication";


const QandA = () => {

  const { query: { id } } = useRouter()

  console.log(id)

  const { loading, error, data } = useQuery(GET_PUBLICATION, {
    variables: {
      request: {
        publicationId: id
      },
    },
  });

  console.log(data);

  return (
    <>
      <Card>
        <CardHeader>
        <div className=" items-center gap-2">
            {loading &&
                <h1>Loading..</h1>
            }
            {!loading &&
              <>
                <div className="font-bold font-mono text-4xl mb-2">
                    {data.publication.metadata.content}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full">
                      <Jdenticon value={data.publication.profile.ownedBy} />
                    </div>
                    <div>
                      <div className="flex text-sm items-center gap-1 font-bold font-mono">
                        <div>{data.publication.profile.handle} </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm overflow-hidden text-ellipsis w-20 font-mono">
                        <div className="truncate">{data.publication.profile.ownedBy} </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
        </div>
        </CardHeader>
        <CardBody>
            {loading &&
                <h1>Loading..</h1>
            }
            {!loading &&
              <div className="text-md">
              {data.publication.metadata.description}
            </div>
            }
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