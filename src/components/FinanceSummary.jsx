function FinanceSummary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "pemasukan")
    .reduce((total, t) => total + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "pengeluaran")
    .reduce((total, t) => total + t.amount, 0);

  const balance = income - expense;

  return (
    <div>
      <h2>Ringkasan Keuangan</h2>
      <p>Total Pemasukan: Rp {income.toLocaleString()}</p>
      <p>Total Pengeluaran: Rp {expense.toLocaleString()}</p>
      <p>Saldo Akhir: Rp {balance.toLocaleString()}</p>
    </div>
  );
}

export default FinanceSummary;
