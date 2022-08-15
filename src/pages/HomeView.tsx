import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { Feature, MapboxResult } from '../types';

function HomeView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mapboxResults, setMapboxResults] = useState<Array<Feature>>([]);
  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    async function getSearchResults() {
      if (debouncedSearch.trim() === '') return setMapboxResults([]);
      const result = await axios.get<MapboxResult>(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${debouncedSearch}.json?access_token=${
          import.meta.env.VITE_MAPBOX_API_KEY
        }&types=place`
      );
      setMapboxResults(result.data.features);
      console.log(mapboxResults);
    }
    getSearchResults();
  }, [debouncedSearch]);

  return (
    <main className='container text-white'>
      <div className='pt-4 mb-8 relative'>
        <input
          type='text'
          placeholder='Search for a city or a state'
          className='py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {mapboxResults.length > 0 && (
          <ul className='absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66]'>
            {mapboxResults.map(result => (
              <li className='py-2 cursor-pointer' key={result.id}>
                {result.place_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default HomeView;
