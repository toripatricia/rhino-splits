import React, { useEffect, useState } from 'react';
import httpClient from '../api/httpClient';
import Loading from '../components/Loading';
import TransactionCard from '../components/transactionCard';

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getTransactions = async () => {
      try {
        const { data } = await httpClient.get('/transactions');
        console.log({ data });
        setTransactions(data);
      } catch (error) {
        console.error('failed to fetch', error);
      } finally {
        setIsLoading(false);
      }
    };
    getTransactions();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.payerId} payerName={transaction.payerName} payerUsername={transaction.payerUsername} />
      ))}
    </div>
  );
}
