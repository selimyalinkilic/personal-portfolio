import React from 'react'
import Head from 'next/head'
import Layout from '../../../components/layout'
import Posts from '../../../models/posts'
import { BsCalendar2Event, BsClock } from 'react-icons/bs'
import { DateTime } from '../../../utils/datetime'
import ReactMarkdown from 'react-markdown'
import { readingTime } from '../../../utils/readingTime'

const BlogDetail = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>Blog | {post.Title}</title>
        <meta name="title" content={post.Title} />
        <meta name="description" content={post.Summary} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://selimyalinkilic.com/blog/${post.RecordId}/${post.Slug}`}
        />
        <meta property="og:title" content={post.Title} />
        <meta property="og:description" content={post.Summary} />
        <meta
          property="og:image"
          content={post.Thumbnail[0].thumbnails.large.url}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://selimyalinkilic.com/blog/${post.RecordId}/${post.Slug}`}
        />
        <meta property="twitter:title" content={post.Title} />
        <meta property="twitter:description" content={post.Summary} />
        <meta
          property="twitter:image"
          content={post.Thumbnail[0].thumbnails.large.url}
        ></meta>
      </Head>
      <div
        className="mx-auto px-4 sm:px-5 md:px-6 lg:px-0 min-h-screen mt-14"
        style={{ maxWidth: '850px' }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-dark">
          {post.Title}
        </h1>
        <div className="flex justify-center mt-5">
          <div className="flex items-center">
            <BsCalendar2Event size="20px" className="text-gray-600" />
            <span className="text-sm font-medium ml-2 text-gray-600">
              {DateTime(post.Created)}
            </span>
            <span className="text-sm font-medium mx-4 text-gray-600">-</span>
            <BsClock size="20px" className="text-gray-600" />
            <span className="text-sm font-medium ml-2 text-gray-600">
              {readingTime(post.Content)} min read
            </span>
          </div>
        </div>
        <div className="text-center mt-10">
          {post.CategoryNames.map((cat, i) => (
            <span
              className="text-sm text-primary after:content-['|'] after:px-3 last:after:hidden"
              key={i}
            >
              {cat}
            </span>
          ))}
        </div>
        <figure className="w-100 rounded-2xl overflow-hidden mt-12">
          <img
            src={post.Thumbnail[0].url}
            className="w-100 h-100 block"
            loading="lazy"
          />
        </figure>
        <ReactMarkdown
          children={post.Content}
          className="prose prose-sm mx-auto my-14 w-full max-w-none"
        />
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
