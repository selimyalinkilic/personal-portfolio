import AboutMe from '../components/aboutMe'
import FeaturedWorks from '../components/featuredWorks'
import Layout from '../components/layout'
import RecentPosts from '../components/recentPosts'
import Posts from '../models/posts'
import Works from '../models/works'

const HomePage = ({ recentPosts, featuredWorks }) => {
  return (
    <Layout>
      <AboutMe />
      {recentPosts.length > 0 && <RecentPosts recentPosts={recentPosts} />}
      <FeaturedWorks featuredWorks={featuredWorks} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const recentPosts = Posts.recentPosts()
  const featuredWorks = Works.featuredWorks()
  const response = await Promise.all([recentPosts, featuredWorks])
  return {
    props: {
      recentPosts: response[0],
      featuredWorks: response[1]
    },
    revalidate: 600
  }
}

export default HomePage
