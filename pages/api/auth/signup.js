import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    // before we insert the data, we should be validating the data first
    // for example:
    // - does all the required data exist
    // - is the user/email address already in the database
    // - etc.
    req.body.password = await hash(req.body.password, 12);

    const user = await prisma.user.create({
      data: { name: req.body.name, email: req.body.email, password: req.body.password },
    });

    if (user) {
      res.status(201).send();
    }
  } else {
    res.status(405).send();
  }
}
