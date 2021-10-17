import Airtable from 'airtable'

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID

export const base = new Airtable({ apiKey: `${AIRTABLE_API_KEY}` }).base(
  `${AIRTABLE_BASE_ID}`
)

export const minifiedRecords = (records) => {
  return records.map((record) => minifiedRecord(record))
}

const minifiedRecord = (record) => {
  return {
    Id: record.id,
    ...record.fields
  }
}
