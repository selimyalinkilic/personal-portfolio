import Link from 'next/link'
const RecentExperiencesCard = ({
  title,
  company,
  logo,
  url,
  type,
  started,
  end,
  location,
  positionClassName
}) => {
  return (
    <div
      className={`flex my-6 ${
        positionClassName === 'positive' ? 'md:justify-start' : 'md:justify-end'
      }`}
    >
      <div
        className={`w-full md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 flex p-4 bg-white rounded shadow-sm ${
          positionClassName === 'positive'
            ? 'md:flex-row'
            : 'md:flex-row-reverse md:text-right'
        }`}
      >
        <Link href={url}>
          <a target="_blank" className="w-20 h-20 overflow-hidden">
            <img
              src={logo[0].url}
              className="w-full h-auto max-h-full object-cover"
              alt={title}
              title={title}
            />
          </a>
        </Link>
        <div
          className={`w-auto flex flex-col ${
            positionClassName === 'positive' ? 'pl-4' : 'pr-4'
          }`}
        >
          <Link href={url}>
            <a
              className="flex flex-col justify-center text-black	hover:underline"
              target="_blank"
            >
              <h4 className="text-2xl font-bold">{title}</h4>
              <p className="text-sm py-1 opacity-75 font-medium">
                <span> {company} </span> - <span> {type} </span>
              </p>
              <p className="text-sm py-1 opacity-50 font-normal">
                <span> {started} </span> - <span> {end} </span>
              </p>
              <p className="text-sm py-1 opacity-50 font-normal">
                {' '}
                {location}{' '}
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecentExperiencesCard
