import { DateTime } from '../utils/datetime'
import Link from 'next/link'

const FeaturedWorksCard = ({
  name,
  thumbnail,
  created,
  summary,
  category,
  slug
}) => {
  return (
    <div className="flex border-b pb-3.5 mb-8 border-red-100 flex-1">
      <div className="w-60 h-44 overflow-hidden rounded-md mr-4">
        <Link href="/">
          <a>
            {thumbnail?.map((item) => (
              <img
                src={item.thumbnails.large.url}
                className="w-full h-full object-cover"
              />
            ))}
          </a>
        </Link>
      </div>
      <div className="flex flex-col flex-1">
        <div className="mb-4">
          <Link href={`/work/${slug}`}>
            <a>
              <h1 className="text-3xl text-dark font-bold hover:underline">
                {name}
              </h1>
            </a>
          </Link>
        </div>
        <div className="flex items-center mb-4">
          <span className="bg-indigo-900 rounded-3xl py-2 px-3 text-sm text-white font-bold">
            {DateTime(created)}
          </span>
          <span className="text-gray-500 ml-5 text-base font-normal">
            {category}
          </span>
        </div>
        <div className="w-full line-clamp-3">
          <Link href={`/work/${slug}`}>
            <a>
              <p className="text-base text-dark">{summary}</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedWorksCard
