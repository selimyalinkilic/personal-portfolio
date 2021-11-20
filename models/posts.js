import { base, minifiedRecords } from '../airtable'

class Posts {
  static async recentPosts() {
    const records = await base('Posts')
      .select({
        maxRecords: 2,
        sort: [{ field: 'Created', direction: 'desc' }]
      })
      .all()
    const data = await minifiedRecords(records)

    return data.filter((o) => !o.Draft)
  }
}

export default Posts
