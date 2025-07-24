import React from 'react'
import { type CardProps } from '@/interfaces' 

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
