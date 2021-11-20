import Link from 'next/link'
import FeaturedWorksCard from './featuredWorksCard'

const FeaturedWorks = ({ featuredWorks }) => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-6 sm:px-0">
        <div className="flex items-center justify-between">
          <h5 className="text-xl text-dark font-normal">Featured Works</h5>
          <Link href="/works">
            <a className="text-base text-secondary hover:underline">View All</a>
          </Link>
        </div>
        <div className="flex flex-col mt-5">
          {featuredWorks &&
            featuredWorks.map((work) => (
              <FeaturedWorksCard
                key={work.Id}
                name={work.Name}
                thumbnail={work.Thumbnail}
                created={work.Created}
                summary={work.Summary}
                category={work.Category}
                url={work.Url}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWorks
