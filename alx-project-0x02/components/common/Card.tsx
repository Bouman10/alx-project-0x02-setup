import React from 'react';

export interface CardProps {
  title: string;
  content: string;
  author?: string;
}

export default function Card({ title, content, author }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{content}</p>
      {author && <p className="text-sm text-gray-500">By {author}</p>}
    </div>
  );
}
