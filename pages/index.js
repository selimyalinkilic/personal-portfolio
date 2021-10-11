import AboutMe from '../components/aboutMe'
import Layout from '../components/layout'
import RecentPosts from '../components/recentPosts'

const HomePage = () => {
  return (
    <Layout>
      <AboutMe />
      <RecentPosts />
    </Layout>
  )
}

export default HomePage
