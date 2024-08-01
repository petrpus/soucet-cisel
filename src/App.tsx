import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Numbers from "./components/Numbers";
import { useRecoilState, useRecoilValue } from "recoil";
import { countState, sumState, solutionsState } from "./state";
import Solution from "./components/Solution";

function App() {
  const [sum, setSum] = useRecoilState(sumState);
  const [count, setCount] = useRecoilState(countState);
  const solutions = useRecoilValue(solutionsState);

  return (
    <>
      <div className="text-3xl text-center my-6 w-screen">
        Vyhledání sčítanců
      </div>
      <div className="flex">
        <div className="w-48 px-8 flex flex-col grow-0">
          <div className="my-4 text-lg">Zadání</div>
          <div className="flex flex-col">
            <div className="grid max-w-fit">
              <Label htmlFor="sum">součet</Label>
              <Input
                type="number"
                id="sum"
                className="w-16 mt-2"
                min={3}
                max={45}
                value={sum}
                onChange={(e) =>
                  setSum(e.target.value ? parseInt(e.target.value) : 3)
                }
              />
            </div>
            <div className="grid max-w-fit mt-2">
              <Label htmlFor="count">počet sčítanců</Label>
              <Input
                type="number"
                id="count"
                className="w-16 mt-2"
                min={2}
                max={9}
                value={count}
                onChange={(e) =>
                  setCount(e.target.value ? parseInt(e.target.value) : 2)
                }
              />
            </div>
          </div>
          <Numbers />
        </div>
        <div className="px-8 flex flex-col">
          <div className="my-4 text-lg">Nalezené kombinace</div>
          {solutions.length === 0 &&
            `Pro součet ${sum} a počet sčítanců ${count} nebyly nalezeny žádné kombinace`}
          <div className="mt-4 flex flex-wrap">
            {solutions.map((solution, index) => (
              <div key={index}>
                <Solution solution={solution} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
