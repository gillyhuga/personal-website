// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { name, description, image, url, tags } = req.body;

  switch (method) {
    case "GET":
      try {
        const result = await prisma.portfolio.findMany({});
        res.status(200).json(result);
        res.end();
      } catch (error) {
        if (error instanceof Error) res.status(422).json({ message: error.message });
        res.end();
      }
    case "POST":
      try {
        const result = await prisma.portfolio.create({
          data: {
            name: name,
            description: description,
            image: image,
            url: url,
            tags: tags,
          },
        })
        res.status(200).json({ message: "success" });
        res.end();
      } catch (error) {
        if (error instanceof Error) res.status(422).json({ message: error.message });
        res.end();
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }

}

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }