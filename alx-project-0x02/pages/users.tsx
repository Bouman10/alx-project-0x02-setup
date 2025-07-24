import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      const formatted = data.map((user: any) => ({
        name: user.name,
        email: user.email,
        address: {
          street: user.address.street,
          city: user.address.city,
        },
      }));
      setUsers(formatted);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <main className="p-6 bg-gray-50 min-h-screen space-y-4">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        {users.map((user, idx) => (
          <UserCard key={idx} name={user.name} email={user.email} address={user.address} />
        ))}
      </main>
    </>
  );
}
