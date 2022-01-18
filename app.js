import express from 'express';
import expressSession from "express-session"
import expressVisitorCounter from 'express-visitor-counter';
import redis from "redis"

const app = express();

const port = 8080;

const counters = {};

(async () => {
    await redisClient.connect();
    const redisClient = redis.createClient({ database: 1 });

  app.enable('trust proxy');
  app.use(expressSession({ secret: 'secret', resave: false, saveUninitialized: true }));
  app.use(expressVisitorCounter({ hook: counterId => counters[counterId] = (counters[counterId] || 0) + 1, redisClient }));
  app.get('/', (req, res, next) => {
    res.json(counters);
  });
  app.listen(port, ()=>{
      console.log(`Running on http://localhost:${port}`);
  });
})();
