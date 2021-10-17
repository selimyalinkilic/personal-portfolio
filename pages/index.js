import AboutMe from '../components/aboutMe'
import Layout from '../components/layout'
import RecentPosts from '../components/recentPosts'
import Posts from '../models/posts'

const HomePage = ({ recentPosts }) => {
  return (
    <Layout>
      <AboutMe />
      <RecentPosts recentPosts={recentPosts} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const recentPosts = Posts.recentPosts()
  const response = await Promise.all([recentPosts])
  return {
    props: {
      recentPosts: response[0]
    },
    revalidate: 600
  }
}

export default HomePage
