import { DateTime } from '../utils/datetime'
import Link from 'next/link'

const FeaturedWorksCard = ({
  name,
  thumbnail,
  created,
  summary,
  category,
  url
}) => {
  return (
    <div className="flex flex-col sm:flex-row border-b pb-3.5 mb-8 border-red-100 flex-1 text-left">
      <div className="w-full h-40 sm:w-60 sm:h-44 overflow-hidden rounded-md mr-4">
        <Link href={url}>
          <a target="_blank">
            {thumbnail?.map((item, index) => (
              <img
                src={item.thumbnails.large.url}
                className="w-full h-full object-cover"
                key={index}
              />
            ))}
          </a>
        </Link>
      </div>
      <div className="flex flex-col flex-1 mt-3 sm:mt-0">
        <div className="mb-4">
          <Link href={url}>
            <a target="_blank">
              <h1 className="text-base md:text-xl lg:text-2xl text-dark font-bold hover:underline">
                {name}
              </h1>
            </a>
          </Link>
        </div>
        <div className="flex items-center mb-4">
          <span className="bg-indigo-900 rounded-3xl p-1.5 lg:py-2 lg:px-3 text-xs lg:text-sm text-white font-medium lg:font-bold">
            {DateTime(created)}
          </span>
          <span className="text-gray-500 ml-5 text-sm lg:text-base font-normal">
            {category}
          </span>
        </div>
        <div className="w-full line-clamp-3">
          <Link href={url}>
            <a target="_blank">
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

export default FeaturedWorksCard
