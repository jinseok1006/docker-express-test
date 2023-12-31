import { Schema, model } from 'mongoose';

const countSchema = new Schema({
  number: Number,
});

const countModel = model('count', countSchema);
export default countModel;
