import React, { useEffect, useState } from 'react';
import httpClient from '../api/httpClient';
import Loading from '../components/Loading';
import FriendCard from '../components/friendCard';

export default function Friends() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await httpClient.get('/users');
        const filterUsers = data.filter((user) => user.id !== 'mainuser');
        setUsers(filterUsers);
      } catch (error) {
        console.error('failed to fetch:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div>
      {users.map((user) => (
        <FriendCard key={user.id} {...user} />
      ))}
    </div>
  );
}
