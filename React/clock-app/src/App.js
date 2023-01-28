import React, { useState } from 'react';
import Clock from "./Components/Clock"

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(updateTime, 1000);
  
  return (
    <div>
      <Clock time={time} />
    </div>
  );
}

export default App;
