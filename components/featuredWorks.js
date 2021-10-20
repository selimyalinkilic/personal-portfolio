import Link from 'next/link'
import FeaturedWorksCard from './featuredWorksCard'

const FeaturedWorks = ({ featuredWorks }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h5 className="text-xl text-dark font-normal">Featured Posts</h5>
          <Link href="/blog">
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
                slug={work.Slug}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWorks
