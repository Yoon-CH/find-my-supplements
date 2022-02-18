import { DataTypes } from '@types';

export const mergeSort = (data: DataTypes[]) => {
  const merge = (left: DataTypes[], right: DataTypes[]) => {
    let mergedArr: DataTypes[] = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i].registCount >= right[j].registCount) {
        mergedArr.push(left[i]);
        i++;
      } else {
        mergedArr.push(right[j]);
        j++;
      }
    }
    while (i < left.length) {
      mergedArr.push(left[i]);
      i++;
    }
    while (j < right.length) {
      mergedArr.push(right[j]);
      j++;
    }
    return mergedArr;
  };
  if (data.length <= 1) return data;
  let middle = Math.floor(data.length / 2);
  let leftArr: DataTypes[] = mergeSort(data.slice(0, middle)) as DataTypes[];
  let rightArr: DataTypes[] = mergeSort(data.slice(middle)) as DataTypes[];
  return merge(leftArr, rightArr);
};
