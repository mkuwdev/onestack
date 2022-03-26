import Head from 'next/head'

import { useRouter } from 'next/router'
import { ParentGrid, GridNine, GridThree } from '../../../components/Grid'

import CreatePostButton from '../../../components/sidebars/CreatePostButton'
import Tags from '../../../components/sidebars/Tags'
import FollowSuggestions from '../../../components/sidebars/FollowSuggestions'
import QandA from '../../../components/qa/QandA'


const Question = () => {

  const { query: { id } } = useRouter()


  return (
    <div>
        <Head>
            <title>onestack | web3 developer hub</title>
            <meta name="description" content="Made with love 💘" />
            <link rel="icon" href="/logo.png" />
        </Head>
        <ParentGrid>
            <GridNine>
                <QandA/>
            </GridNine>
            <GridThree>
                <CreatePostButton/>
                <div className="mb-5">
                    <Tags/>
                </div>
                <FollowSuggestions/>
            </GridThree>
        </ParentGrid>
    </div>
  )
}

export default Question