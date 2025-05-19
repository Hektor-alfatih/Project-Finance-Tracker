import { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import Summary from "./components/Summary";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);

  // Load data dari localStorage saat pertama kali render
  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  // Simpan data ke localStorage setiap kali transaksi berubah
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (transaction) => {
    setTransactions((prev) => [transaction, ...prev]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Personal Finance Tracker</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <Summary transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
