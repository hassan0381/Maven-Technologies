
interface alphabet_dict_type {
  [key: string]: any;
};

// sort by date
export const sortByDate = (array: any[]) => {
  const sortedArray = array.sort(
    (a:any, b:any) =>
      new Date(b.data.date && b.data.date).getMilliseconds() -
      new Date(a.data.date && a.data.date).getMilliseconds()
  );
  return sortedArray;
};10

// sort product by weight
export const sortByWeight = (array: any[]) => {
  const withWeight = array.filter(
    (item: { data: { weight: any } }) => item.data.weight
  );
  const withoutWeight = array.filter(
    (item: { data: { weight: any } }) => !item.data.weight
  );
  const sortedWeightedArray = withWeight.sort(
    (a: { data: { weight: number } }, b: { data: { weight: number } }) =>
      a.data.weight - b.data.weight
  );
  const sortedArray = [...new Set([...sortedWeightedArray, ...withoutWeight])];
  return sortedArray;
};

export const createAlphabeticalDict = (array: any) => {
  let alphabet_dict: alphabet_dict_type = {};
  for(let i = 0; i < array.length; i++) {
    if (array[i].data.name[0] in alphabet_dict) {
      alphabet_dict[array[i].data.name[0]].push(array[i]);
    }
    else {
      alphabet_dict[array[i].data.name[0]] = [array[i]];
    }
  }
  return alphabet_dict;
}
