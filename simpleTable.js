import React, { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 0,
      day: { num: 1, date: 1, month: 2, name: "středa" },
      alcohol: 1,
      meditation: 1,
      sport: 1,
      habit1: 0,
      habit2: 2,
      habit3: 1,
    },
    //...
  ]);

  const handleClick = (id, field) => {
    const newData = [...data];
    newData[id][field] = data[id][field] === 0 ? 1 : 0;
    setData(newData);
  };

  return (
    <>
      {data.map((item, idx) => (
        <div key={item.id}>
          <button onClick={() => handleClick(idx, "alcohol")}>
            {item.alcohol ? "Stop" : "Start"} alcohol
          </button>
          <button onClick={() => handleClick(idx, "meditation")}>
            {item.meditation ? "Stop" : "Start"} meditation
          </button>
          <button onClick={() => handleClick(idx, "sport")}>
            {item.sport ? "Stop" : "Start"} sport
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
