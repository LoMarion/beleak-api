import createError from 'http-errors';
import http from 'http';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import rootRouter from './routes';
import config from './config/app'

export async function init() {
  const app = express();
  app.server = http.createServer(app);

  app.use((req, res, next) => {
    next();
  });

  //Promise.resolve ? 
  return Promise.resolve(app);
}

export async function listen(app) {

  app.get('/', function(req, res) {
      res.send('Hello you, welcome to the api');
  })

  app.use('/', rootRouter)
  app.use((req, res) => res.status(404).json({
      statusCode: 404,
      error: 'Not found',
      message: 'Route not found',
  }));


  // catch other errors
//   app.use((err, req, res, next) => {
//       if (err.message === 'Unauthorized') {
//           const error = {
//               statusCode: 401,
//               error: 'Unauthorized',
//               message: 'Unauthorized',
//           };

//           return res.status(401).json(error);
//       }
//       if (err.message === 'Forbidden') {
//           const error = {
//               statusCode: 403,
//               error: 'Forbidden',
//               message: 'Forbidden',
//           };

//           return res.status(403).json(error);
//       }

//       let error = {
//           statusCode: 500,
//           error: 'Internal error',
//           message: err,
//       };

//       return res.status(500).json(error);
//   });

  return new Promise((resolve, reject) => {
      app.server.listen(config.get('port'), (err) => {
          if (err) return reject(err);
          console.log(`Started on port ${app.server.address().port}`);
          return resolve(app);
      });
  });
}
