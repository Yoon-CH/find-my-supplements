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
  const {
    query: { length, text },
  } = req;
  const lengthNum = Number(length);
  const filteredList = sortedResult.filter((item: DataTypes) => {
    const regex = new RegExp(`${text}`, 'gi');
    const filterName = item.name.match(regex);
    const filterBrand = item.brand.match(regex);
    return filterName || filterBrand;
  });
  const slicedResult = filteredList.slice(0, lengthNum);
  res.status(200).json({ requests: JSON.parse(JSON.stringify(slicedResult)) });
  return;
}
