import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <p>Button clicked {count} times.</p>
      <button onClick={handleCount}>Click Button</button>
    </div>
  );
};

export default App;
