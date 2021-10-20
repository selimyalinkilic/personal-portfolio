import Airtable from 'airtable'
import { base, minifiedRecords } from '../airtable'

class Works {
  static async featuredWorks() {
    const records = await base('Works')
      .select({
        maxRecords: 3,
        sort: [{ field: 'Created', direction: 'desc' }]
      })
      .all()
    const data = await minifiedRecords(records)

    return data.filter((o) => !o.Draft)
  }
}

export default Works
