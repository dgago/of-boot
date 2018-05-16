import { IOfServerOptions } from "./models";
import * as of from "./of";

const options: IOfServerOptions = {};

const server: of.OfServer = new of.OfServer(options);
server.listen();
