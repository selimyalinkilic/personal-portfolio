const AboutMe = () => {
  return (
    <section className="mt-8 mb-12 lg:mt-32 lg:mb-20">
      <div className="container mx-auto px-6 md:px-0 border-box">
        <div className="flex w-full flex-col-reverse lg:flex-row items-center lg:items-start">
          <div className="w-full lg:w-2/3 flex flex-col mt-9 lg:mt-0">
            <h1 className="text-3xl lg:text-5xl text-dark font-bold text-center lg:text-left">
              Hi, I am Selim
            </h1>
            <p className="text-xl lg:text-3xl text-dark font-bold mt-5 lg:mt-6 text-center lg:text-left">
              A frontend developer from Turkey
            </p>
            <div className="w-full lg:w-9/12 mt-5 lg:mt-10">
              <p className="text-base lg:text-xl text-dark font-medium leading-normal text-center lg:text-left">
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
            <div className="flex mt-7 lg:mt-20">
              <a
                href="/"
                className="transition-colors rounded-sm bg-primary py-2 px-5 lg:py-4 lg:px-10 font-medium text-white text-lg hover:bg-red-500 mx-auto lg:mx-0"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative flex justify-end rounded-full max-w-xs w-28 h-28 md:w-full md:h-screen md:max-h-64 lg:max-h-72 xl:max-h-80">
              <div className="w-full h-full bg-blue-light rounded-full"></div>
              <img
                src="/my.JPG"
                alt="Selim Yalinkilic"
                className="w-full h-full rounded-full absolute -right-1 -top-2 lg:-top-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
