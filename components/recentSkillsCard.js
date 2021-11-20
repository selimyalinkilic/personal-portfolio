const RecentSkillsCard = ({ categoryName, skill, logoBg }) => {
  return (
    <div className="flex flex-col">
      <p className="text-base">{categoryName} :</p>
      <div className="flex flex-wrap mt-1">
        {skill.map((item) => (
          <div
            key={item.Id}
            className={`mt-2 mr-2 w-11 h-11 rounded-lg flex items-center justify-center shadow-sm ${
              logoBg === 'white' ? 'bg-blue-light' : 'bg-white'
            }`}
          >
            <img
              src={item.Logo[0].url}
              width="24px"
              height="24px"
              alt={item.Title}
              title={item.Title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentSkillsCard
