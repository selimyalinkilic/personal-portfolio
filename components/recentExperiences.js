import ExperiencesCard from './recentExperiencesCard'

const RecentExperiences = ({ experiences }) => {
  return (
    <section className="bg-blue-light py-8" id="blog">
      <div className="container mx-auto px-6 sm:px-0">
        <div className="flex items-center justify-between">
          <h5 className="text-xl text-dark font-normal">Recent Experiences</h5>
        </div>
        <div className="flex flex-col mt-5">
          {experiences?.map((item, index) => (
            <ExperiencesCard
              key={item.Id}
              title={item.Title}
              company={item.Company}
              logo={item.Company_Logo}
              url={item.Url}
              type={item.Job_Type}
              started={item.Started}
              end={item.End || 'Present'}
              location={item.Location}
              positionClassName={index % 2 === 0 ? 'positive' : 'negative'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentExperiences
