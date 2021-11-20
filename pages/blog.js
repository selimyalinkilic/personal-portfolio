import Layout from '../components/layout'
import Head from 'next/head'
const Blog = () => {
  return (
    <Layout>
      <Head>
        <title> Blog | Selim Yalinkilic </title>
      </Head>
      <div className="container mx-auto px-6 sm:px-0 text-center h-screen">
        <div className="flex mt-10">
          <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Blog
          </h1>
        </div>
        <div className="flex flex-col mt-40">
          <p className="text-3xl">Stay tuned, see you soon !</p>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
