import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  originalurl: { type: String, required: true },
  shortcode: { type: String, required: true, unique: true },
  createdat: { type: Date, default: Date.now },
  expiresat: { type: Date },
  clicks: { type: Number, default: 0 }
});

const Url = mongoose.model('Url', urlSchema);

export default Url;
