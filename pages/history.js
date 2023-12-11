import React, { useEffect, useState } from 'react';
import httpClient from '../api/httpClient';
import Loading from '../components/Loading';
import TransactionCard from '../components/transactionCard';

function combineTransactionsWithUsers(users, transactions) {
  const combinedTransactions = transactions
    .filter((transaction) => transaction.isPaid)
    .map((transaction) => {
      const fromUser = users.find((user) => user.id === transaction.from);
      const toUser = users.find((user) => user.id === transaction.to);

      return {
        ...transaction,
        from: fromUser,
        to: toUser,
      };
    });

  return combinedTransactions;
}

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getTransactions = async () => {
      try {
        const { data: fetchedTransactions } = await httpClient.get('/transactions');
        const { data: fetchedUsers } = await httpClient.get('/users');
        const combined = combineTransactionsWithUsers(fetchedUsers, fetchedTransactions);
        setTransactions(combined);
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
        <TransactionCard key={transaction.id} date={transaction.date} from={transaction.from} to={transaction.to} description={transaction.description} amount={transaction.amount} />
      ))}
    </div>
  );
}
