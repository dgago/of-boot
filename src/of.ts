import * as express from "express";
import * as http from "http";

import { initConfig } from "./config/config";
import { createApp } from "./express";
import { IOfServerOptions } from "./models";
import { createServer } from "./server";

export class OfServer {
  public app: express.Application;
  public server: http.Server;

  constructor(public options: IOfServerOptions) {
    initConfig();

    this.app = createApp(options);
  }

  public listen(): void {
    this.server = createServer(this.app);
  }
}
