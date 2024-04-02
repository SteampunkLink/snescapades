export const copy = (arr: string[]) => {
  let clone = [];
  for (let i = 0; i < arr.length; i++) {
    clone.push(arr[i]);
  }
  return clone;
};

export const shuffle = (arr: string[]) => {
  let copiedArr = copy(arr);
  for (let i = copiedArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = copiedArr[i];
    copiedArr[i] = copiedArr[j];
    copiedArr[j] = temp;
  }
  return copiedArr;
};

export const flatten = (multi: string[][]) => {
  let result: string[] = [];
  multi.forEach((arr) => {
    const shuffled = shuffle(arr);
    result = result.concat(shuffled);
  });
  return result;
};
