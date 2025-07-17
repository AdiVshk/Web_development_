import React, { useEffect, useState } from 'react';
export default function StopWatch() {
  const [Start, setStart] = useState(false);
  const [count, setCounter] = useState(0);

  useEffect(() => {
    if (!Start) return;

    const ID = setInterval(() => {
      console.log('Counter Started');
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(ID);
      console.log('counter Stopped');
    };
  }, [Start]);

  return (
    <div>
      <p>{count == 4 || count == 8 ? '💀' : count}</p>
      <button
        onClick={() => {
          setStart(!Start);
        }}
      >
        {Start ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}
