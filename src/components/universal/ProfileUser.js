import Link from 'next/link'
import Jdenticon from 'react-jdenticon'

const ProfileUser = ({profile}) => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/explore">
        <a>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full">
              <Jdenticon value={profile.address} />
            </div>
            <div>
              <div className="flex items-center gap-1 font-bold font-mono">
                <div>{profile.name}</div>
              </div>
              <div className="flex items-center gap-1 text-sm overflow-hidden text-ellipsis w-20 font-mono">
                <div className="truncate">{profile.address}</div>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <button class="bg-transparent text-sm hover:bg-indigo-900 text-indigo-900 font-semibold hover:text-white py-2 px-4 border border-indigo-900 hover:border-transparent rounded-xl font-mono">
        Follow
      </button>
    </div>
  )
}

export default ProfileUser