import { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("pemasukan");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc || !amount) return;

    const newTransaction = {
      id: Date.now(),
      description: desc,
      amount: Number(amount),
      type,
    };

    onAddTransaction(newTransaction);
    setDesc("");
    setAmount("");
    setType("pemasukan");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-3">Tambah Transaksi</h2>
      <input
        type="text"
        placeholder="Deskripsi"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />
      <input
        type="number"
        placeholder="Jumlah"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />
      <div className="mb-3">
        <label className="mr-4">
          <input
            type="radio"
            value="pemasukan"
            checked={type === "pemasukan"}
            onChange={(e) => setType(e.target.value)}
          />{" "}
          Pemasukan
        </label>
        <label>
          <input
            type="radio"
            value="pengeluaran"
            checked={type === "pengeluaran"}
            onChange={(e) => setType(e.target.value)}
          />{" "}
          Pengeluaran
        </label>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Tambah
      </button>
    </form>
  );
}

export default TransactionForm;
