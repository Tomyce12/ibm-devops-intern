import express from 'express';
import expressSession from "express-session"
import expressVisitorCounter from 'express-visitor-counter';
import {createClient} from "redis"
import 'dotenv/config'

const app = express();

const counters = {};
const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

(async () => {
  await redisClient.connect();

  app.enable('trust proxy');

  app.use(expressSession({ 
    secret: 'secret',
    resave: false,
    saveUninitialized: true 
  }));

  app.use(expressVisitorCounter({
    hook: counterId => counters[counterId] = (counters[counterId] || 0) + 1, redisClient 
  }));

  app.get('/', (req, res) => {
    res.send(counters);
    // dummy comment
    // another dummy comment
    // asdasdasd
    // asdasdasdsd
    // asdasdasdas
    // dateFormatasd
    // asd
    // asz
    // dateFormatzxc
    // z

  });

  app.listen(process.env.WEB_PORT, ()=>{
      console.log(`Running on http://localhost:${process.env.WEB_PORT}`);
  });
})();