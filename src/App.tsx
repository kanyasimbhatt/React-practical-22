import React from "react";
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Hello World {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count
      </button>
    </div>
  );
};

export default App;
