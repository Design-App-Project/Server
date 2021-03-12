import { Request, Response } from "express";

import path from "path";

export class IndexController {
  constructor() {}

  async sendIndex(req: Request, res: Response) {
    const root = path.join(__dirname, "../../client/public");
    console.log("root:", root);
    console.log("__dirname:", __dirname);

    // res.sendFile("index.html", { root });
    res.sendFile("index.html", { root }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("not error");
      }
    });
  }
}
