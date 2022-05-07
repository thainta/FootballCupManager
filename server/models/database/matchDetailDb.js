const mongoose = require('mongoose')

const url = require('../../utils/connection')

const { Schema } = mongoose
// const { ObjectId } = Schema

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {})
  .catch((err) => {
    throw err
  })

const MatchDetailSchema = new Schema(
  {
    club1Goal: {type: Number},
    club2Goal: {type: Number},
    typeMatch: {type: String},
    club1Id: { type: Schema.Types.ObjectId, ref: 'club'},
    club2Id: { type: Schema.Types.ObjectId, ref: 'club'},
    matchId: { type: Schema.Types.ObjectId, ref: 'match'}
  },
  {
    collection: 'match_detail',
  },
)
module.exports = mongoose.model('match_detail', MatchDetailSchema)
