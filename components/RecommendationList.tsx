import React from 'react';
import { Recommendation } from '../types';
import ItemCard from './ItemCard';

interface RecommendationListProps {
  recommendations: Recommendation[];
  isLoading: boolean;
}

const RecommendationList: React.FC<RecommendationListProps> = ({ recommendations, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12 text-blue-600">
        <svg className="animate-spin h-8 w-8 mr-3" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Generating recommendations...</span>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 text-lg">
        No recommendations available for the selected user/method. Try another selection!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-6">
      {recommendations.map((rec, index) => (
        <ItemCard key={rec.item.id} item={rec.item} reason={rec.reason} />
      ))}
    </div>
  );
};

export default RecommendationList;