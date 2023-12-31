import e from 'express';
import mongoose from 'mongoose';
import countModel from './count.js';

const port = process.env.PORT ?? 3000;
const MONGO_URL = process.env.MONGO_URL ?? 'mongodb://localhost:27017';
const app = e();

app.get('/', async (req, res) => {
  const count = await countModel.findOneAndUpdate(
    {},
    { $inc: { number: 1 } },
    { new: true, upsert: true }
  );

  res.send(`hello world!<br/>counts in mongodb ->${count.number}`);
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log('server on');
    });
  })
  .catch((err) => {
    console.err(err);
  });
