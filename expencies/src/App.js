import logo from './logo.svg';
import './App.css';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { Transaction } from './components/Transaction';
import { AddTraction } from './components/AddTraction';
import { GlobalProvider } from './context/GlobalState';
import { TractionList } from './components/TransactionList';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TractionList />
        <AddTraction />
      </div>
    </GlobalProvider>
  );
}

export default App;
