const Solution = (props: { solution: number[] }) => {
  return (
    <div className="mr-3 mt-2 whitespace-nowrap">
      {props.solution.map((number, index) => (
        <span
          key={index}
          className="text-sm px-2 py-1 bg-slate-200 text-slate-900 rounded-md mr-1 mt-1 whitespace-nowrap"
        >
          {number}
        </span>
      ))}
    </div>
  );
};

export default Solution;
