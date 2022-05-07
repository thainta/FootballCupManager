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

const PlayerSchema = new Schema(
  {
    playerName: { type: String, maxlength: 255 },
    playerRole: {type: String, maxlength: 255},
    dayOfBirth: { type: Date },
    nationality: { type: String},
    avatar: { type: String},
    clubId: { type: Schema.Types.ObjectId, ref: 'club'}
  },
  {
    collection: 'player',
  },
)
module.exports = mongoose.model('player', PlayerSchema)
