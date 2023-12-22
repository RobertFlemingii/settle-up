import React from "react";

import logo from "./logo.svg";
import "./App.css";

import FriendsButton from "./FriendsButton";
import GroupsButton from "./GroupsButton";
import AddButton from "./AddButton";
import ActivityButton from "./ActivityButton";
import AccountButton from "./AccountButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FriendsButton></FriendsButton>
      <GroupsButton></GroupsButton>
      <AddButton></AddButton>
      <ActivityButton></ActivityButton>
      <AccountButton></AccountButton>
    </div>
  );
}

export default App;
