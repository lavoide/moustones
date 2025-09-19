export type Stone = {
  id: number;
  name: string;
  description: string;
  image: string;
  origin: string;
  dateAcquired: string;
  category: string;
}

export type StoneCollection = {
  stones: Stone[];
}