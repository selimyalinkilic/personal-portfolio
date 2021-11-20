import RecentSkillsCard from './recentSkillsCard'

const RecentSkills = ({ all, categories }) => {
  return (
    <section className="bg-blue-light py-8">
      <div className="container mx-auto px-6 sm:px-0">
        <div className="flex items-center justify-between">
          <h5 className="text-xl text-dark font-normal">Skills & Used Techs</h5>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          {categories?.map((item) => (
            <RecentSkillsCard
              categoryName={item.Name}
              key={item.Id}
              skill={all.filter((cat) => cat.CategoryName[0] === item.Name)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentSkills
