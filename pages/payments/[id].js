import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import httpClient from '../../api/httpClient';
import { useRouter } from 'next/router';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

export default function Payments() {
  const router = useRouter();
  const userId = router.query.id;
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState('');
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await httpClient.get(`/users?id=${router.query.id}`);
        setUser(data[0]);
      } catch (error) {
        console.error('failed to fetch:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) getUser();
  }, [userId]);
  console.log(user);
  if (isLoading) return <Loading />;
  return (
    <div>
      <p>Post: {user.name}</p>
      <div id="total">{total}</div>
      <div id="calculator">
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              setTotal((previous) => previous + number);
            }}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => {
            setTotal('');
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
