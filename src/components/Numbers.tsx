import { numbersState } from "@/state";
import { useRecoilState } from "recoil";

const Numbers = () => {
  const [numbers, setNumbers] = useRecoilState(numbersState);

  const toggleNumber = (index: number) => {
    setNumbers((oldNumbers) => {
      const newNumbers = [...oldNumbers];
      newNumbers[index] = !newNumbers[index];
      return newNumbers;
    });
  };

  const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number: number) => {
    return (
      <div
        key={number}
        onClick={() => toggleNumber(number - 1)}
        className={`flex items-center justify-center w-8 h-8 rounded-md shadow-sm cursor-pointer ${
          numbers[number - 1]
            ? "bg-white text-gray-900"
            : "bg-slate-500 text-slate-800"
        } `}
      >
        {number}
      </div>
    );
  });

  return (
    <div className="flex flex-col mt-6">
      <div className="text-md">Povolená čísla</div>
      <div className="grid grid-cols-3 gap-2 max-w-fit mt-2">{tiles}</div>
    </div>
  );
};

export default Numbers;
