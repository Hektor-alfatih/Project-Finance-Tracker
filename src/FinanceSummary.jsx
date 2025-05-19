function FinanceSummary({ transactions }) {
  const income = transactions
    .filter(t => t.type === "pemasukan")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "pengeluaran")
    .reduce((acc, t) => acc + t.amount, 0);

  const saldo = income - expense;

  return (
    <div>
      <h2>Ringkasan Keuangan</h2>
      <p>Total Pemasukan: Rp {income.toLocaleString()}</p>
      <p>Total Pengeluaran: Rp {expense.toLocaleString()}</p>
      <p>Saldo Akhir: Rp {saldo.toLocaleString()}</p>
    </div>
  );
}
