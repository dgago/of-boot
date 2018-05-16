import * as express from "express";
import { IOfServerOptions } from "./models";
// import * as morgan from "morgan";

export const createApp = (options: IOfServerOptions): express.Application => {
  const app: express.Application = express();

  if (options.useLogger) {
    // app.use(morgan(process.env.NODE_ENV || "dev"));
  }

  app.use(express.json());
  app.use(
    express.urlencoded({ extended: options.urlencodedExtended || false })
  );

  // Dummy route for GET /
  // TODO: esta debería ser la home page
  app.get(
    "/",
    (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      res.send({ status: "OK" });
    }
  );

  // Routers setup
  if (options.routers) {
    for (const r of options.routers) {
      app.use(r.path, r.router);
    }
  }

  app.use(
    (
      err: any,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      if (req.xhr) {
        res.status(500).json(err);
      } else {
        next(err);
      }
    }
  );

  return app;
};
