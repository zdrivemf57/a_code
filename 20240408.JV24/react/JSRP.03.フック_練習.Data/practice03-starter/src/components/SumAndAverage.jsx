import { useEffect, useRef, useState } from "react";

export default function SumAndAverage () {
  const numberRef = useRef();

  const [numbers, setNumbers] = useState([100, 80, 90]);
  const [sum, setSum] = useState(0);
  const [average, setAverage] = useState(0);

  const handleClick = e => {
    const strNum = numberRef.current.value;
    setNumbers(prev => [...prev, Number(strNum)]);
    numberRef.current.value = 0;
  };

  useEffect(() => {
    const total = numbers.reduce((accum, num) => accum + num, 0);
    setSum(total);
    if (numbers.length > 0) {
      setAverage(total / numbers.length);
    }
  }, [numbers]);

  return (
    <div>
      <h2>合計と平均</h2>
      <div className="mb-3">
        <input
          type="number"
          className="me-3"
          ref={numberRef}
          defaultValue={0}
        />
        <button className="btn btn-danger" onClick={handleClick}>
          数値を加える
        </button>
      </div>
      <table className="table table-bordered" style={{ maxWidth: "200px" }}>
        <tbody>
          {numbers.map((num, index) => (
            <tr key={index}>
              <td className="text-end" colSpan={2}>
                {num}
              </td>
            </tr>
          ))}
          <tr style={{ borderTop: "2px solid #000" }}>
            <td>合計</td>
            <td className="text-end">{sum}</td>
          </tr>
          <tr>
            <td>平均</td>
            <td className="text-end">{average.toFixed(1)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
