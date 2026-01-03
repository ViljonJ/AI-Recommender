import React from 'react';
import { Item } from '../types';
import ItemCard from './ItemCard';

interface TrendingItemsProps {
  items: Item[];
}

const TrendingItems: React.FC<TrendingItemsProps> = ({ items }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mb-10 p-6 bg-blue-50 rounded-xl shadow-inner border border-blue-100">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
        🔥 Trending Now
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map(item => (
          <ItemCard key={item.id} item={item} reason="Popular choice" />
        ))}
      </div>
    </section>
  );
};

export default TrendingItems;
