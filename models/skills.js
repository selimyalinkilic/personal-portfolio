import { base, minifiedRecords } from '../airtable'

class Skills {
  static async allSkills() {
    const records = await base('Skills')
      .select({
        sort: [{ field: 'Created', direction: 'asc' }],
        fields: ['Title', 'Logo', 'CategoryName', 'Created', 'Id']
      })
      .all()
    const data = await minifiedRecords(records)

    return data.filter((o) => !o.Draft)
  }
  static async categories() {
    const records = await base('Skill Categories')
      .select({
        sort: [{ field: 'Created', direction: 'asc' }],
        filterByFormula: 'NOT({Skills} = "")'
      })
      .all()
    const data = await minifiedRecords(records)

    return data.filter((o) => !o.Draft)
  }
}

export default Skills
