import Layout from '../components/layout'
import Head from 'next/head'
import Works from '../models/works'
import FeaturedWorksCard from '../components/featuredWorksCard'
const WorksPage = ({ works }) => {
  return (
    <Layout>
      <Head>
        <title> Works | Selim Yalinkilic </title>
      </Head>
      <div className="container mx-auto px-6 sm:px-0 text-center h-screen">
        <div className="flex mt-10">
          <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Works
          </h1>
        </div>
        <div className="flex flex-col mt-10">
          {works &&
            works.map((work) => (
              <FeaturedWorksCard
                key={work.Id}
                name={work.Name}
                thumbnail={work.Thumbnail}
                created={work.Created}
                summary={work.Summary}
                category={work.Category}
                url={work.Url}
              />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const all = Works.all()

  const response = await Promise.all([all])
  return {
    props: {
      works: response[0]
    },
    revalidate: 600
  }
}

export default WorksPage
