//import logo from './logo.svg';
//import './App.css';
import React from "react"
import EntryRow from "./EntryRow"
import ExpenseTable from "./ExpenseTable"

function App() {
  return (
    <div>
      <h2>Expense Tracker</h2>
        <EntryRow />
        <ExpenseTable />       
    </div>
  );
}

export default App;
