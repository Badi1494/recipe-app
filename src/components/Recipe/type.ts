export interface Recipe {
  id: number;
  name: string;
  instructions?: string;
  ingredients: string[];
  tags: string[];
  rating: number;
  prepTimeMinutes?: number;
  cookTimeMinutes?: number;
  image: string;
  mealType: string;
  reviewCount: number;
  cuisine: string;
  difficulty: string;
}
