import mongoose from 'mongoose';

import url from '../../utils/connection';

const { Schema } = mongoose
// const { ObjectId } = Schema

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {})
  .catch((err) => {
    throw err
  })

const MatchSchema = new Schema(
  {
    timeStart: { type: String },
    date: { type: Date},
    status: { type: String},
    stadiumId: { type: Schema.Types.ObjectId, ref: 'stadium'}
  },
  {
    collection: 'Match',
  },
)
module.exports = mongoose.model('match', MatchSchema)
