import { firestore } from 'firebase/app'

// empty interface to allow referencing Timestamps without firestore
export interface ITimestamp extends firestore.Timestamp {}

// by default all documents should be populated with the following fields
export interface IDbDoc {
  _id: string
  _created: firestore.Timestamp
  _modified: firestore.Timestamp
  _deleted: boolean
  _createdBy: userId
}

type userId = string
