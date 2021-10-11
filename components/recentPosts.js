import Link from 'next/link'

const RecentPosts = () => {
  return (
    <section className="bg-blue-light py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h5 className="text-xl text-dark font-normal">Recent Posts</h5>
          <Link href="/blog">
            <a className="text-base text-secondary hover:underline">View All</a>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="flex flex-col p-6 box-border bg-white rounded shadow">
            <div className="w-full h-64">
              <img
                src="https://res.cloudinary.com/selimyal/image/upload/v1633991066/lukas-blazek-GnvurwJsKaY-unsplash_fg1hdi.jpg"
                className="w-full h-full object-cover	"
              />
            </div>
            <h4 className="text-xl font-bold text-dark truncate mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              ullamcorper ipsum.
            </h4>
            <div className="flex items-center text-lg text-dark font-normal space-x-4 mt-5">
              <span>12 Feb 2020</span>
            </div>
            <p className="text-base text-dark font-normal mt-5 line-clamp-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="mt-5">
              <Link href="/">
                <a className="underline text-dark hover:text-secondary">
                  Read more
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col p-6 box-border bg-white rounded shadow">
            <div className="w-full h-64">
              <img
                src="https://res.cloudinary.com/selimyal/image/upload/v1633991310/martin-shreder-5Xwaj9gaR0g-unsplash_yimybj.jpg"
                className="w-full h-full object-cover	"
              />
            </div>
            <h4 className="text-xl font-bold text-dark truncate mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              ullamcorper ipsum.
            </h4>
            <div className="flex items-center text-lg text-dark font-normal space-x-4 mt-5">
              <span>12 Feb 2020</span>
            </div>
            <p className="text-base text-dark font-normal mt-5 line-clamp-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="mt-5">
              <Link href="/">
                <a className="underline text-dark hover:text-secondary">
                  Read more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentPosts
