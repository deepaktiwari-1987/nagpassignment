import express from 'express';
import {WebhookClient,Card, Suggestion} from 'dialogflow-fulfillment';
import mongoose from 'mongoose';
import config from './config';
//import welcomeRoute from './routes/welcomeRoute';

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
app.get('/', (req, res) => {
  res.send("Server Is Working......")
})
app.post('/webhook', (req, res) => {
  // get agent from request
  let agent = new WebhookClient({request: req, response: res})
  // create intentMap for handle intent
  let intentMap = new Map();
  // add intent map 2nd parameter pass function
  intentMap.set('Send Course Detail to User',handleSendCourseDetailToUser)
  // now agent is handle request and pass intent map
  agent.handleRequest(intentMap)
})
function handleSendCourseDetailToUser(agent){
  agent.add("Hello I am Webhook demo your course details sent your mail id.")
}

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:'+config.PORT);
});