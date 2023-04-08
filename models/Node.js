
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  key: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
});

const nodeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  properties: [propertySchema],
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Node'
    }
  ]
});

module.exports = mongoose.model('Node', nodeSchema);
