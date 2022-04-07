import logo from '../../assets/logo.svg';
import { useEffect, useState } from 'react';
import WineSearch from './components/WineSearch';

function Search() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const data = ['11YVCHAR001', '11YVCHAR002', '15MPPN002-VK'];

    const fetchAllSuggestions = async () => {
      const results = await Promise.all(
        data.map((x) => fetch(`/data/${x}.json`).then((x) => x.json())),
      );

      setSuggestions(results);
    };

    fetchAllSuggestions();
  }, [setSuggestions]);

  return (
    <div className="flex flex-col items-center pt-36 gap-6">
      <header>
        <h1 className="flex gap-4 items-center text-h3 font-light">
          Wine search
          <img src={logo} alt="Wine glass" />
        </h1>
      </header>
      <main className="max-w-sm w-full">
        <WineSearch suggestions={suggestions} />
      </main>
    </div>
  );
}

export default Search;
