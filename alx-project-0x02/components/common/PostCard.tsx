import { PostProps } from '@/interfaces';

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
}
