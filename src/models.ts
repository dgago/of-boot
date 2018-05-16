import * as express from "express";

export interface IOfServerOptions {
  models?: IOfModelOptions;
  routers?: IOfRouter[];
  useLogger?: boolean;
  urlencodedExtended?: boolean;
  [key: string]: any;
}

export interface IOfModelOptions {
  [key: string]: IOfModel;
}

export interface IOfModel {
  id: string;
}

export interface IOfRouter {
  path: string;
  router: express.Router;
}
