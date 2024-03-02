import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import UserForm from "./forms/user";



function App() {

  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;
