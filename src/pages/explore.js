import Head from 'next/head'
import { ParentGrid, GridTwo, GridSeven, GridThree } from '../components/Grid'

import FollowSuggestions from '../components/sidebars/FollowSuggestions'
import Tags from '../components/sidebars/Tags'
import CreatePostButton from '../components/sidebars/CreatePostButton'
import Feed from '../components/feed/Feed'

const explore = () => {
  return (
    <div>
      <Head>
        <title>onestack | web3 developer hub</title>
        <meta name="description" content="Made with love 💘" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <ParentGrid>
        <GridTwo>
          <Tags/>
        </GridTwo>
        <GridSeven>
          <Feed/>
        </GridSeven>
        <GridThree>
          <CreatePostButton/>
          <FollowSuggestions/>
        </GridThree>
      </ParentGrid>
    </div>
  )
}

export default explore