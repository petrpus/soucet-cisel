export const getSolutions = (
  sum: number,
  count: number,
  allowedNumbers: number[]
) => {
  if (count < 2 || sum < 3 || allowedNumbers.length < count) return [];
  const combinations = getCombinations(allowedNumbers, count);
  const solutions = combinations.filter((combination) => {
    return combination.reduce((acc, value) => acc + value, 0) === sum;
  });
  return solutions;
};

const getCombinations = (arr: number[], n: number) => {
  const result: number[][] = [];
  const f = (prefix: number[], arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
      result.push([...prefix, arr[i]]);
      f([...prefix, arr[i]], arr.slice(i + 1));
    }
  };
  f([], arr);
  return result.filter((x) => x.length === n);
};
