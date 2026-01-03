export interface User {
  id: string;
  name: string;
}

export interface Item {
  id: string;
  name: string;
  category: 'Movie' | 'Book' | 'Product';
  genres: string[];
  tags: string[];
  description: string;
  imageUrl: string;
}

export interface Rating {
  userId: string;
  itemId: string;
  score: number; // e.g., 1-5
}

export interface Recommendation {
  item: Item;
  score: number;
  reason?: string;
  method: FilteringMethod;
}

export enum FilteringMethod {
  CONTENT_BASED = 'Content-Based Filtering',
  COLLABORATIVE = 'Collaborative Filtering',
}
