import { UserProps } from '@/interfaces';

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-sm text-gray-500">{address.street}, {address.city}</p>
    </div>
  );
}
