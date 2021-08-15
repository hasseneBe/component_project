import './App.css';
import React from 'react';
import Address from './profile/Address';
import Fullname from './profile/FullName';
import Profile from './profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
<Profile />
<div className="details">
<Fullname />
<Address />
    </div>
    </div>
  );
}

export default App;
