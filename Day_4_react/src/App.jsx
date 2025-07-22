import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        width: '100vw',

        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '300px',
          height: '500px',
          // display: 'flex',
          // justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p style={contentStyle}>{count}</p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '100px',
          }}
        >
          <AddButtonComp count={count} onClick={() => setCount(count + 1)}>
            +
          </AddButtonComp>
          <SubButtonComp
            count={count}
            onClick={count <= 0 ? 0 : () => setCount(count - 1)}
          >
            -
          </SubButtonComp>
        </div>
      </div>
    </div>
  );
}

function AddButtonComp({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function SubButtonComp({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

const contentStyle = {
  width: '100px',
  height: '100px',
  backgroundColor: 'grey',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '29px',
};
