import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export const revalidate = 3600; // revalidate every hour


type Data = {
  name: String;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();
  const listPost = await prisma.post.findMany()
  res.status(200).json(listPost);
}
