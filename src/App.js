import { useState } from 'react';
import { DashBoard } from './components/DashBoard/DashBoard';
import { HomePage } from './components/HomePage/HomePage';
import "./reset.css";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [listTransactions, setListTransactions] = useState([])

  return (
    <div className="App">
      {isLoggedIn ?
          <DashBoard setIsLoggedIn={setIsLoggedIn} listTransactions={listTransactions} setListTransactions={setListTransactions}/>
          :
          <HomePage setIsLoggedIn={setIsLoggedIn} />
        }
    </div>
  );
}

export default App;
