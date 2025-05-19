function TransactionList({ transactions, onDelete }) {
  return (
    <div>
      <h2>Daftar Transaksi</h2>
      <ul>
        {transactions.map(t => (
          <li key={t.id}>
            {t.description} - Rp {t.amount.toLocaleString()} ({t.type})
            <button onClick={() => onDelete(t.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList