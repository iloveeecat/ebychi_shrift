export type Category = {
    id: number;
    title: string;
    image: string;
    animals: Animal[];
}

export type Animal = {
  id: string;
  name: string;
  age: number;
  price: number;
  description: string;
  image: string;
  breed: string;
};