import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

export default function App() {
  const [light, setlight] = useState(false);
  const Clickme = () => setlight(!light);

  const Buttonstyle = {
    backgroundColor: light ? '#000000' : '#ffffff',
    color: light ? '#ffffff' : '#000000',
    fontSize: '18px',
    width: '300px',
    height: '300px',
    padding: '30px',
  };

  const textstyle = {
    color: light ? '#ffffff' : '#000000',
  };

  const pageStyle = {
    backgroundColor: light ? '#000000' : '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={pageStyle}>
      <Background light={light} textstyle={textstyle} />
      <Button light={light} onClick={Clickme} style={Buttonstyle} />
    </div>
  );
}

function Background(props) {
  return <h1 style={props.textstyle}>{props.light ? 'Light' : 'Dark'}</h1>;
}

function Button(props) {
  return (
    <button onClick={props.onClick} style={props.style}>
      {props.light ? 'Light' : 'Dark'}
    </button>
  );
}
