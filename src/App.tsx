import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [backendCount, setBackendCount] = useState(0);

  const increaseBackendCounter = () => {
    setBackendCount(backendCount + 1);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Simple Frontend App</h1>
      <div className="card">
        <h2>local</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <h2>server-side</h2>
        <button onClick={() => increaseBackendCounter()}>
          backend count is {backendCount}
        </button>
      </div>
    </>
  );
}

export default App;
