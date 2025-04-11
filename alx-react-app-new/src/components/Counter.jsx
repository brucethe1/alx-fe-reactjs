import React, { useState } from 'react';

const Counter = () => {
  // Initialize state using useState
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ marginRight: '10px' }}>Reset</button>
    </div>
  );
};

export default Counter;
