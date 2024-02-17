const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');



const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
  );
  // console.log(process.env.DATABASE);
  
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected successfully');
    });
  const port = process.env.PORT || 3000;
  app.listen(port, '127.0.0.1', () => {
    console.log('sha8al ya kber');
  });