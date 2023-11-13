import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (val: string) => {
    if (val === "=") {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("Error");
      }
    } else if (val === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + val);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-64">
        <input
          type="text"
          value={input}
          disabled
          className="w-full p-2 text-right border-2 border-gray-200 rounded-md"
        />
        <input
          type="text"
          value={result}
          disabled
          className="w-full p-2 text-right border-2 border-gray-200 rounded-md"
        />
      </div>
      <div className="grid grid-cols-4 gap-2 w-64">
        {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "=", "/", "C"].map(
          (val, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(val)}
              className="p-2 text-white bg-blue-500 rounded-md"
            >
              {val}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;