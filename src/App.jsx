import { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import FinanceSummary from "./components/FinanceSummary";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (t) => {
    setTransactions([...transactions, t]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Personal Finance Tracker</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <FinanceSummary transactions={transactions} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;
