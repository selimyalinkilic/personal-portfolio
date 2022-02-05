import React from 'react'
import Link from 'next/link'
import { DateTime } from '../utils/datetime'
const BlogCard = ({
  title,
  image,
  date,
  categories,
  summary,
  recordId,
  slug
}) => {
  return (
    <div className="flex flex-col md:flex-row border-b pb-6 mb-8 border-red-100 flex-1 text-left">
      <Link href={`/blog/${recordId}/${slug}`}>
        <a className="w-full h-40 sm:h-52 md:w-60 md:h-44 overflow-hidden rounded-md mr-6">
          <figure className="w-full h-full overflow-hidden">
            <img
              src={image[0].thumbnails.large.url}
              alt={image[0].filename}
              className="w-full h-full object-cover block"
              loading="lazy"
            />
          </figure>
        </a>
      </Link>
      <div className="flex flex-col flex-1 mt-3 md:mt-0">
        <div className="mb-4">
          <Link href={`/blog/${recordId}/${slug}`}>
            <a>
              <h1 className="text-xl md:text-2xl xl:text-3xl text-dark font-bold hover:underline">
                {title}
              </h1>
            </a>
          </Link>
        </div>
        <div className="flex mb-4 items-center text-base lg:text-lg">
          <span className="text-dark">{DateTime(date)}</span>
          <span className="px-3 text-dark">|</span>
          <div className="text-light">
            {categories.map((item, index) => (
              <span
                key={index}
                className="after:content-[','] after:mr-0.5 last:after:hidden"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="w-100 lg:w-5/6">
          <Link href={`/blog/${recordId}/${slug}`}>
            <a>
              <p className="text-sm lg:text-base text-dark hover:underline">
                {summary}
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
