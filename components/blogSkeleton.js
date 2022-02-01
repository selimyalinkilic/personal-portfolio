import React from 'react'

const BlogSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row mb-8 flex-1 text-left animate-pulse">
      <div className="w-full h-40 sm:h-52 md:w-60 md:h-44 overflow-hidden rounded-md mr-6 bg-gray-300"></div>
      <div className="flex flex-col flex-1 mt-3 md:mt-0">
        <div className="mb-4 bg-gray-300 h-7 rounded-md"></div>
        <div className="flex mb-4 items-center h-6">
          <div className="h-full bg-gray-300 w-24 rounded-md"></div>
          <div className="mx-3 h-full bg-gray-300 w-1 rounded-md"></div>
          <div className="h-full bg-gray-300 w-24 rounded-md"></div>
        </div>
        <div className="flex flex-col w-full lg:w-5/6">
          <div className="h-5 bg-gray-300 w-full rounded-md mb-2"></div>
          <div className="h-5 bg-gray-300 w-full lg:w-5/6 rounded-md mb-1"></div>
        </div>
      </div>
    </div>
  )
}

export default BlogSkeleton
