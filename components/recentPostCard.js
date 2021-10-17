import Link from 'next/link'
import { DateTime } from '../utils/datetime'

const RecentPostCard = ({ id, thumbnail, title, created, summary, slug }) => {
  return (
    <div
      className="flex flex-col p-6 box-border bg-white rounded shadow"
      key={id}
    >
      <div className="w-full h-64">
        {thumbnail?.map((item) => (
          <img
            src={item.thumbnails.large.url}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
      <h4 className="text-xl font-bold text-dark truncate mt-5">{title}</h4>
      <div className="flex items-center text-lg text-dark font-normal space-x-4 mt-5">
        <span> {DateTime(created)} </span>
      </div>
      <p className="text-base text-dark font-normal mt-5 line-clamp-4">
        {summary}
      </p>
      <div className="mt-5">
        <Link href="/">
          <a className="underline text-dark hover:text-secondary">Read more</a>
        </Link>
      </div>
    </div>
  )
}

export default RecentPostCard
