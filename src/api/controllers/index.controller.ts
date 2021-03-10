import { Request, Response } from "express";

import path from "path";

export class IndexController {
  constructor() {}

  async sendIndex(req: Request, res: Response) {
    const root = path.join(__dirname, "../../client/public");
    res.sendFile("index.html", { root });
  }
}
