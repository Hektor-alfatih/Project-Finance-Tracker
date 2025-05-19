import { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!desc || !amount || !type || Number(amount) <= 0) return;

    const newTransaction = {
      id: Date.now(),
      description: desc,
      amount: Number(amount),
      type
    };
    onAddTransaction(newTransaction);
    setDesc("");
    setAmount("");
    setType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Deskripsi" value={desc} onChange={e => setDesc(e.target.value)} />
      <input type="number" placeholder="Jumlah" value={amount} onChange={e => setAmount(e.target.value)} />
      <label>
        <input type="radio" value="pemasukan" checked={type === "pemasukan"} onChange={e => setType(e.target.value)} /> Pemasukan
      </label>
      <label>
        <input type="radio" value="pengeluaran" checked={type === "pengeluaran"} onChange={e => setType(e.target.value)} /> Pengeluaran
      </label>
      <button type="submit">Tambah Transaksi</button>
    </form>
  );
}
