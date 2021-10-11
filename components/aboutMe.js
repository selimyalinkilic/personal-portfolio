const AboutMe = () => {
  return (
    <section className="mt-32 mb-20">
      <div className="container mx-auto">
        <div className="flex w-full">
          <div className="w-2/3 flex flex-col">
            <h1 className="text-5xl text-dark font-bold">Hi, I am Selim</h1>
            <p className="text-3xl text-dark font-bold mt-6">
              A frontend developer from Turkey
            </p>
            <div className="w-9/12 mt-10">
              <p className="text-xl text-dark font-medium leading-normal	">
                I am a front end developer working at{' '}
                <a
                  href="https://www.shopier.com/"
                  target="_blank"
                  className="text-primary underline font-bold"
                >
                  Shopier
                </a>
                . Also love to improving myself about to new techs.
              </p>
            </div>
            <div className="flex mt-20">
              <a
                href="/"
                className="transition-colors rounded-sm bg-primary py-4 px-10 font-medium text-white text-lg hover:bg-red-500"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="w-1/3">
            <div className="relative flex justify-end w-full rounded-full h-screen max-w-xs md:max-h-64 lg:max-h-72 xl:max-h-80">
              <div className="w-full h-full bg-blue-light rounded-full"></div>
              <img
                src="/my.JPG"
                alt="Selim Yalinkilic"
                className="w-full h-full rounded-full absolute -right-1 -top-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
