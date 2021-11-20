import { base, minifiedRecords } from '../airtable'

class Experiences {
  static async all() {
    const records = await base('Experiences')
      .select({
        sort: [{ field: 'Created', direction: 'desc' }]
      })
      .all()
    const data = await minifiedRecords(records)

    return data.filter((o) => !o.Draft)
  }
}

export default Experiences
