import React, { useState } from "react";

const COLORS = ["white", "green", "red"];

function App() {
  const [data, setData] = useState([
    Array(7).fill(0),
    Array(7).fill(0),
    Array(7).fill(0),
    Array(7).fill(0),
    Array(7).fill(0),
  ]);

  const handleClick = (row, col) => {
    const newData = [...data];
    newData[row][col] = (data[row][col] + 1) % 3;
    setData(newData);
    // console.log(newData[row][col]);
    console.log(row, col);
  };

  return (
    <table>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((col, colIdx) => (
              <td key={colIdx}>
                <button
                  style={{ backgroundColor: COLORS[col] }}
                  onClick={
                    () => {
                      const newData = [...data];
                      newData[rowIdx][colIdx] = (data[rowIdx][colIdx] + 1) % 3;
                      setData(newData);
                    }

                    // handleClick(rowIdx, colIdx)
                  }
                >
                  {col}
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
