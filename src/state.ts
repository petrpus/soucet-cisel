import { atom, selector } from "recoil";
import { getSolutions } from "./utils";

export const sumState = atom({
  key: "sum",
  default: 3,
});

export const countState = atom({
  key: "count",
  default: 2,
});

export const numbersState = atom<boolean[]>({
  key: "numbers",
  default: [true, true, true, true, true, true, true, true, true],
});

export const allowedNumbersState = selector<number[]>({
  key: "allowedNumbers",
  get: ({ get }) => {
    const numbers = get(numbersState);
    const allowedNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i]) {
        allowedNumbers.push(i + 1);
      }
    }
    return allowedNumbers;
  },
});

export const solutionsState = selector<number[][]>({
  key: "solutions",
  get: ({ get }) => {
    const sum = get(sumState);
    const count = get(countState);
    const allowedNumbers = get(allowedNumbersState);
    const solutions = getSolutions(sum, count, allowedNumbers);
    return solutions;
  },
});
