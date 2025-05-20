import { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import Summary from "./components/Summary";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Load dari localStorage sekali saat awal
  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    console.log("Data dari localStorage:", saved);
    if (saved && saved !== "[]") {
      const parsed = JSON.parse(saved);
      console.log("Memuat transaksi ke state:", parsed);
      setTransactions(parsed);
    }
    setIsInitialLoad(false);
  }, []);

  // Simpan ke localStorage setelah data berubah (bukan saat pertama load)
  useEffect(() => {
    if (!isInitialLoad) {
      console.log("Menyimpan ke localStorage:", transactions);
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions, isInitialLoad]);

  const handleAddTransaction = (transaction) => {
    console.log("Menambahkan transaksi ke state:", transaction);
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
