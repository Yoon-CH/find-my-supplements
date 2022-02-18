// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from 'db/db.json';
import { DataTypes } from '@types';
import { mergeSort } from '@utils/mergeSort';

type Data = {
  requests: DataTypes[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { requests: result } = JSON.parse(JSON.stringify(db));
  const sortedResult = mergeSort(result);
  res.status(200).json({ requests: JSON.parse(JSON.stringify(sortedResult)) });
}
