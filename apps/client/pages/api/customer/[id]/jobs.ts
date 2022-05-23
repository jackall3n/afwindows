import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../db';

export async function jobs(request: NextApiRequest, response: NextApiResponse) {
  const id = request.query.id as string;

  const jobs = await db.job.findMany({
    where: {
      customerId: Number(id),
    },
  });

  response.json(jobs);
}
