import { Card, CardHeader, CardBody } from '../ui/Card'
import Link from 'next/link'
import clsx from 'clsx'

import { useRouter } from 'next/router'

const Tags = () => {

    const router = useRouter()

    const TagItem = ({ topic, url, current }) => {
        return (
            <Link href={url}>
                <a
                    href={url}
                    className={clsx('px-3 py-1 font-mono cursor-pointer', {
                        'text-black': current,
                        'text-gray-700': !current
                    })}
                    aria-current={current ? 'page' : undefined}
                >
                    {topic}
                </a>
            </Link>
        )
    }

  return (
    <>
        <Card>
            <CardHeader>
                <div className="font-bold font-mono">📌 Tags</div>
            </CardHeader>
            <CardBody className="space-y-4">
                <div className=" rounded-xl hover:bg-slate-300 cursor-pointer">
                    <TagItem topic="# web3" url="/explore/t/web3" current={router.pathname == '/explore/t/web3'}/>
                </div>
                <div className=" rounded-xl hover:bg-slate-300 cursor-pointer">
                    <TagItem topic="# solidity" url="/explore/t/solidity" current={router.pathname == '/explore/t/solidity'}/>
                </div>
                <div className=" rounded-xl hover:bg-slate-300 cursor-pointer">
                    <TagItem topic="# rust" url="/explore/t/rust" current={router.pathname == '/explore/t/solidity'}/>
                </div>
                <div className=" rounded-xl hover:bg-slate-300 cursor-pointer">
                    <TagItem topic="# graphql" url="/explore/t/graphql" current={router.pathname == '/explore/t/graphql'}/>
                </div>
            </CardBody>
        </Card>
    </>
  )
}

export default Tags