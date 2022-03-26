import { Card, CardHeader, CardBody } from '../ui/Card'
import { mockRecommendations  } from '../../mockdata'

import ProfileUser from '../universal/ProfileUser'

const FollowSuggestions = () => {
  return (
    <>
        <div className="flex items-center gap-2 mb-2">
            <div className="font-bold font-mono">👪 Follow other devs!</div>
        </div>
        <Card>
            <CardBody className="space-y-4">
                {mockRecommendations.length == 0 && 
                    <div>No recommendations as of now!</div>
                }
                {mockRecommendations.map((user, index) => (
                    <ProfileUser profile={user}/>
                ))}
            </CardBody>
        </Card>
    </>
  )
}

export default FollowSuggestions