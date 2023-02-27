import { useEffect, useState } from 'react';
import { Restaurnant } from '../types/restaurants';

export default function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurnant[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/restaurants')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.log(err, 'error'));
  }, []);

  return restaurants;
}
