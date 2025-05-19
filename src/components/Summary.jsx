function Summary({ transactions }) {
  const pemasukan = transactions
    .filter((t) => t.type === "pemasukan")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const pengeluaran = transactions
    .filter((t) => t.type === "pengeluaran")
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="bg-gray-100 p-4 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-2">Ringkasan Keuangan</h2>
      <p>Total Pemasukan: Rp {pemasukan}</p>
      <p>Total Pengeluaran: Rp {pengeluaran}</p>
      <p>Saldo Akhir: Rp {pemasukan - pengeluaran}</p>
    </div>
  );
}

export default Summary;
