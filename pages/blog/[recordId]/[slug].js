import React from 'react'
import Head from 'next/head'
import Layout from '../../../components/layout'
import Posts from '../../../models/posts'
import { BsCalendar2Event, BsClock } from 'react-icons/bs'
import { DateTime } from '../../../utils/datetime'
import ReactMarkdown from 'react-markdown'

const BlogDetail = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>Blog | {post.Title}</title>
      </Head>
      <div className="container mx-auto px-6 sm:px-0 text-center min-h-screen mt-14">
        <h1 className="lg:text-4xl xl:text-5xl font-bold">{post.Title}</h1>
        <div className="flex justify-center mt-4">
          <div className="flex items-center">
            <BsCalendar2Event size="18px" color="black" />
            <span className="text-xs font-medium ml-2">
              {DateTime(post.Created)}
            </span>
            <span className="text-base font-medium mx-4">-</span>
            <BsClock size="18px" color="black" />
            <span className="text-xs font-medium ml-2">6 min.</span>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <ReactMarkdown children={post.Content} />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const all = Posts.all()

  const res = await Promise.all([all])
  return {
    paths: res[0].map((item) => {
      return {
        params: {
          recordId: item.RecordId,
          slug: item.Slug
        }
      }
    }),
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  // data fetch
  const param = Posts.getPost(params.recordId)

  const result = await Promise.all([param])
  const data = result[0]
  return {
    props: {
      post: data
    }
  }
}

export default BlogDetail
