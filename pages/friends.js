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
        console.log({ data });
        setUsers(data);
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
        <FriendCard key={user.id} name={user.name} username={user.username} />
      ))}
    </div>
  );
}
