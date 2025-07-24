import { CardProps } from '@/interfaces';

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full max-w-md mx-auto my-4 border">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
