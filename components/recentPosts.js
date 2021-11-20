import Link from 'next/link'
import RecentPostsCard from './recentPostsCard'

const RecentPosts = ({ recentPosts }) => {
  return (
    <section className="bg-blue-light py-8">
      <div className="container mx-auto px-6 sm:px-0">
        <div className="flex items-center justify-between">
          <h5 className="text-xl text-dark font-normal">Recent Posts</h5>
          <Link href="/blog">
            <a className="text-base text-secondary hover:underline">View All</a>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          {recentPosts &&
            recentPosts.map((post) => (
              <RecentPostsCard
                key={post.Id}
                thumbnail={post.Thumbnail}
                title={post.Title}
                summary={post.Summary}
                created={post.Created}
                slug={post.Slug}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default RecentPosts
