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
  if (text) {
    const filteredList = sortedResult.filter((item: DataTypes) => {
      const nameRegex = new RegExp(`${text}`, 'gi');
      const brandRegex = new RegExp(`${text}`, 'gi');
      const filterName = item.name.match(nameRegex);
      const filterBrand = item.brand.match(brandRegex);
      return filterName || filterBrand;
    });

    const slicedResult = filteredList.slice(0, lengthNum);
    res
      .status(200)
      .json({ requests: JSON.parse(JSON.stringify(slicedResult)) });
    return;
  }
  const slicedResult = sortedResult.slice(0, lengthNum);
  res.status(200).json({ requests: JSON.parse(JSON.stringify(slicedResult)) });
}
