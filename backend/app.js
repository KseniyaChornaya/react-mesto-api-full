const express = require('express');

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const routes = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/error-handler');
const cors = require('./middlewares/cors');

const { PORT = 3000, MONGO_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
const app = express();
app.use(cors);
app.use(cookieParser());
app.use(express.json());
app.use(requestLogger);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use(routes);

async function connect() {
  await mongoose.connect(MONGO_URL);

  app.listen(PORT);
}
connect();
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
