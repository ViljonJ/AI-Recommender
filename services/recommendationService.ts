import { Item, Recommendation, FilteringMethod } from '../types';
import { ITEMS, POPULAR_ITEM_IDS } from '../constants';

/**
 * Generates content-based recommendations based on a user's text preference.
 * Matches the preference against item categories, genres, and tags.
 * Includes cold-start logic for empty or unmatched preferences.
 */
export const getRecommendationsByPreference = (
  preference: string,
  limit: number = 5,
): Recommendation[] => {
  const normalizedPreference = preference.trim().toLowerCase();
  const preferenceKeywords = normalizedPreference.split(/\s+/).filter(Boolean); // Split by whitespace, remove empty strings

  const recommendations: Recommendation[] = [];

  if (preferenceKeywords.length === 0) {
    // Cold start: No preference entered
    const popularItems = ITEMS.filter(item => POPULAR_ITEM_IDS.includes(item.id));
    return popularItems.slice(0, limit).map(item => ({
      item,
      score: 0.5,
      reason: 'Popular item (no preference entered)',
      method: FilteringMethod.CONTENT_BASED,
    }));
  }

  ITEMS.forEach(item => {
    let matchScore = 0;
    const matchReasons: string[] = [];

    const itemAttributes = [
      { type: 'category', value: item.category },
      ...item.genres.map(g => ({ type: 'genre', value: g })),
      ...item.tags.map(t => ({ type: 'tag', value: t })),
    ];

    preferenceKeywords.forEach(keyword => {
      let keywordMatched = false;
      itemAttributes.forEach(attr => {
        if (attr.value.toLowerCase().includes(keyword)) {
          matchScore += 1; // Increment score for each keyword match
          if (!matchReasons.some(r => r.includes(`${attr.type}: ${attr.value}`))) {
            matchReasons.push(`${attr.type}: ${attr.value}`);
          }
          keywordMatched = true;
        }
      });
    });

    if (matchScore > 0) {
      recommendations.push({
        item,
        score: matchScore,
        reason: `Matches ${matchReasons.join(', ')}`,
        method: FilteringMethod.CONTENT_BASED,
      });
    }
  });

  recommendations.sort((a, b) => b.score - a.score);

  if (recommendations.length === 0) {
    // Cold start: Preference entered but no direct matches found
    const popularItems = ITEMS.filter(item => POPULAR_ITEM_IDS.includes(item.id));
    return popularItems.slice(0, limit).map(item => ({
      item,
      score: 0.4, // Slightly lower default score
      reason: 'Popular item (no direct matches found)',
      method: FilteringMethod.CONTENT_BASED,
    }));
  }

  return recommendations.slice(0, limit);
};
