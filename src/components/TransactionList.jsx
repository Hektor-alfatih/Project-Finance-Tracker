function TransactionList({ transactions }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">Daftar Transaksi</h2>
      {transactions.length === 0 ? (
        <p>Belum ada transaksi.</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t.id} className="mb-2 border-b pb-2">
              <span className="font-medium">{t.description}</span> - Rp {t.amount} (
              {t.type})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
