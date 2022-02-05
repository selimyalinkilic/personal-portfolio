import AboutMe from '../components/aboutMe'
import RecentExperiences from '../components/recentExperiences'
import FeaturedWorks from '../components/featuredWorks'
import RecentPosts from '../components/recentPosts'
import Layout from '../components/layout'
import RecentSkills from '../components/recentSkills'
import Skills from '../models/skills'
import Works from '../models/works'
import Experiences from '../models/experiences'
import Posts from '../models/posts'

const HomePage = ({
  featuredWorks,
  allSkills,
  skillsCategories,
  recentExperiences,
  recentPosts
}) => {
  return (
    <Layout>
      <AboutMe />
      <RecentExperiences experiences={recentExperiences} />
      <FeaturedWorks featuredWorks={featuredWorks} />
      <RecentSkills all={allSkills} categories={skillsCategories} />
      {recentPosts.length >= 1 && <RecentPosts recentPosts={recentPosts} />}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const featuredWorks = Works.featuredWorks()
  const allSkills = Skills.allSkills()
  const skillsCategories = Skills.categories()
  const recentExperiences = Experiences.all()
  const recentPosts = Posts.recentPosts()
  const response = await Promise.all([
    recentExperiences,
    featuredWorks,
    allSkills,
    skillsCategories,
    recentPosts
  ])
  return {
    props: {
      recentExperiences: response[0],
      featuredWorks: response[1],
      allSkills: response[2],
      skillsCategories: response[3],
      recentPosts: response[4]
    },
    revalidate: 600
  }
}

export default HomePage
