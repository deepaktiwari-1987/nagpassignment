import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import welcomeRoute from './routes/welcomeRoute';

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log('Error coming', error.reason));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/welcome', welcomeRoute);

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5001');
});
