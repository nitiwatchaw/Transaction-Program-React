import Transaction from './components/Transaction';
import Description from './components/Description';
import FormComponent from './components/FormComponents';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';


const Title = () => <h1>Income and Expenses Accounting Program</h1>

function App() {

  const init = [
    {
      title: "ค่าอาหาร", amount: -400
    },
    {
      title: "ค่าทำงาน", amount: 5000
    },
    {
      title: "ค่าขายของ", amount: 6000
    },
    {
      title: "ค่าเดินทาง", amount: -600
    }
  ]
  const [items, setItems] = useState(init)
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)



  const onAddNewItem = (newItem) => {
    setItems((prevItem) => [newItem, ...prevItem]); //display 
  }

  useEffect(() => {
    const TotalAmount = items.map(e => e.amount)
    const TotalIncome = TotalAmount.filter(e => e > 0).reduce((total, e) => total += e, 0)
    const TotalExpense = (TotalAmount.filter(e => e < 0).reduce((total, e) => total += e, 0)) * -1
    setReportIncome(TotalIncome.toFixed(2))
    setReportExpense(TotalExpense.toFixed(2))
  }, [items, reportIncome, reportExpense])





  return (
    <DataContext.Provider value={{ income: reportIncome, expense: reportExpense }}>
      <div className='container'>
        <Title />
        <Router>
          <ul className='menu'>
            <li>
              <Link to="/">Report</Link>
            </li>
            <li>
              <Link to="/insert">Transaction </Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<ReportComponent />} />
            <Route
              path="/insert"
              element={
                <>
                  <FormComponent onAddItem={onAddNewItem} />
                  <Transaction initDataProp={items} />
                </>
              }
            />
          </Routes>
        </Router>

        <Description />



      </div>
    </DataContext.Provider>

  );
}

export default App;
