import Layout from '../components/layout'
import Head from 'next/head'
const Blog = () => {
  return (
    <Layout>
      <Head>
        <title> Blog | Selim Yalinkilic </title>
      </Head>
      <div className="container mx-auto text-center h-screen">
        <h1 className="text-2xl">Welcome to Blog Page</h1>
      </div>
    </Layout>
  )
}

export default Blog
