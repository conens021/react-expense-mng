import React, { useState, useEffect } from 'react'
import axios from 'axios';

import NewExpence from './components/NewExpences/NewExpence';
import ExpenceFIlter from './components/expence/ExpenceFilter'
import ExpenseChart from './components/ExpenseChart';
import ExpenseList from './components/expence/ExpenseList';

import './App.css';


function App() {

  const [expences, setExpences] = useState([])
  const [selectedYear, setSelectedYear] = useState('2021')

  useEffect(() => {

    axios.get('http://localhost:8080/expenses').then(r => {

      const data = r.data

      const expenseData = data.map(e => {
        const date = new Date(e.date)
        e.date = date
        return e
      })

      setExpences(expenseData)

    }).catch(e => {
      console.log(e)
    })

  }, []);


  const expenceCreatedHandler = (data) => {
   

    axios.post('http://localhost:8080/create-new', {
      "title": data.title, "date": data.date, "value": data.value
    }).then(function (response) {
      console.log(response);
      const newExpense = {...response.data,date: new Date(response.data.date)}

      setExpences(prevState => ([
        newExpense,...prevState
      ]))
    }).catch(function (error) {
      console.log(error);
    });
  }


  const yearChangeHandler = (data) => {
    setSelectedYear(data)
  }

  return (
    <div className="App">
      <div className="card">
        <NewExpence expenceCreated={expenceCreatedHandler} />
      </div>
      <div class="card">
        <ExpenseChart selectedYear={selectedYear} expences={expences} />
      </div>
      <div className="card">
        <ExpenceFIlter selected={selectedYear} yearChangeHandler={yearChangeHandler} expences={expences} />
        <div id="expence-list">
          <ExpenseList expences={expences} selectedYear={selectedYear} />
        </div>
      </div>

    </div>
  );
}

export default App;
