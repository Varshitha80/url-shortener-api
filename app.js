import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import urlRoutes from './routes/urlRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.use('/', urlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
