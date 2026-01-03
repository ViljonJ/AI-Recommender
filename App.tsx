import React, { useState, useEffect, useCallback } from 'react';
import { Recommendation } from './types';
import { getRecommendationsByPreference } from './services/recommendationService';
import RecommendationList from './components/RecommendationList';
import TrendingItems from './components/TrendingItems'; // Import the new component
import { ITEMS, POPULAR_ITEM_IDS } from './constants'; // Import ITEMS and POPULAR_ITEM_IDS

const App: React.FC = () => {
  const [userPreference, setUserPreference] = useState<string>('');
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [debouncedPreference, setDebouncedPreference] = useState<string>(userPreference);

  // Debounce the user input to avoid excessive API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedPreference(userPreference);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [userPreference]);

  const fetchRecommendations = useCallback(async () => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const newRecommendations = getRecommendationsByPreference(debouncedPreference, 8); // Get top 8 recommendations
    setRecommendations(newRecommendations);
    setIsLoading(false);
  }, [debouncedPreference]);

  useEffect(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  const handlePreferenceChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPreference(event.target.value);
  }, []);

  // Filter ITEMS to get actual item objects for popular items
  const trendingItems = ITEMS.filter(item => POPULAR_ITEM_IDS.includes(item.id));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-6xl text-center py-8 mb-8 bg-white rounded-xl shadow-md border-b-2 border-blue-100">
        <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight sm:text-5xl">
          Simple AI Recommendation System
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Enter a preference to get personalized suggestions.
        </p>
      </header>

      <main className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <div className="mb-8 text-center">
          <label htmlFor="user-preference-input" className="block text-xl font-semibold text-gray-700 mb-3">
            What are you looking for?
          </label>
          <input
            id="user-preference-input"
            type="text"
            value={userPreference}
            onChange={handlePreferenceChange}
            placeholder="e.g., Sci-Fi, Book, productivity, fantasy"
            className="w-full md:w-2/3 px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg transition duration-150 ease-in-out bg-white"
            aria-label="Enter your preference for recommendations"
          />
        </div>

        {/* Trending Now Section */}
        <TrendingItems items={trendingItems} />

        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            Recommendations
          </h2>
          <RecommendationList recommendations={recommendations} isLoading={isLoading} />
        </section>
      </main>

      <footer className="w-full max-w-6xl text-center py-6 text-gray-500 text-sm">
        <p>&copy; 2024 AI Recommendation System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;