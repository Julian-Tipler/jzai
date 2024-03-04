import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <h1 style={{ color: "white" }}>Hello, World!</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <h1 style={{ color: "white" }}>{count}</h1>
      </div>
    </>
  );
}

export default App;
