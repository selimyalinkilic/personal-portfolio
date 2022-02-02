import Layout from '../components/layout'
import Head from 'next/head'
import Posts from '../models/posts'
import BlogCard from '../components/blogCard'
import { useEffect, useState } from 'react'
import BlogSkeleton from '../components/blogSkeleton'
const Blog = ({ posts }) => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(false)
  console.log(posts)
  useEffect(() => {
    if (posts.length >= 1) {
      setLoading(true)
      setMessage(false)
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    } else {
      setMessage(true)
    }
  }, [])
  return (
    <Layout>
      <Head>
        <title> Blog | Selim Yalinkilic </title>
      </Head>
      <div className="container mx-auto px-6 sm:px-0 text-center min-h-screen">
        <div className="flex mt-10">
          <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Blog
          </h1>
        </div>
        <div className="flex flex-col mt-20">
          {message && (
            <div className="flex flex-col mt-40">
              <p className="text-3xl">Stay tuned, see you soon !</p>
            </div>
          )}
          {loading && (
            <>
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
            </>
          )}
          {!loading &&
            posts.map((item, index) => (
              <BlogCard
                key={index}
                title={item.Title}
                image={item.Thumbnail}
                date={item.Created}
                categories={item.CategoryNames}
                summary={item.Summary}
                slug={item.Slug}
                recordId={item.RecordId}
              />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const all = Posts.all()

  const response = await Promise.all([all])
  return {
    props: {
      posts: response[0]
    },
    revalidate: 600
  }
}

export default Blog
