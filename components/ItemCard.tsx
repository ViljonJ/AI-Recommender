import React from 'react';
import { Item } from '../types';

interface ItemCardProps {
  item: Item;
  reason?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, reason }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-36 object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://picsum.photos/300/200?blur=5'; // Fallback image
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.category} • {item.genres.join(', ')}</p>
        <p className="text-gray-700 text-sm line-clamp-3 mb-3">{item.description}</p>
        {reason && (
          <div className="mt-3 text-xs text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Reason: {reason}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;