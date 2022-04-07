import logo from '../assets/logo.svg';
import AutoComplete from '@vintrace/ui/elements/AutoComplete';
import useLocale from '@vintrace/ui/hooks/useLocale';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function Search() {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const locale = useLocale();

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

  const onFilterOptions = useCallback(
    (value) => {
      return suggestions.filter(
        (x) =>
          // Match substring to lotCode or description
          x.lotCode?.toLowerCase().includes(value.toLowerCase()) ||
          x.description?.toLowerCase().includes(value.toLowerCase()),
      );
    },
    [suggestions],
  );

  const onSelect = useCallback(
    (value) => {
      navigate(`/details/${value.lotCode}`);
    },
    [navigate],
  );

  const getHighlightedText = (str, match) =>
    str.replace(
      new RegExp(match, 'gi'),
      (str) => `<span class="text-aqua">${str}</span>`,
    );

  const onGetLabel = useCallback(
    (suggestion, match) => {
      return (
        <div className="flex justify-between">
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: getHighlightedText(suggestion.lotCode, match),
              }}
            />
            {suggestion.description ? (
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: getHighlightedText(suggestion.description, match),
                }}
              />
            ) : (
              <p>
                <em>No description provided</em>
              </p>
            )}
          </div>
          <div>
            <p className="text-sm text-right text-dark/60 capitalize">
              {suggestion.volume.toLocaleString(locale, {
                style: 'unit',
                unit: 'liter',
                unitDisplay: 'short',
              })}
            </p>
            <p className="text-sm text-right text-dark/60">
              {suggestion.tankCode}
            </p>
          </div>
        </div>
      );
    },
    [locale],
  );

  const onGetKey = useCallback((suggestion) => {
    return suggestion?.lotCode || '';
  }, []);

  return (
    <div className="flex flex-col items-center pt-36 gap-6">
      <header>
        <h1 className="flex gap-4 items-center text-h3 font-light">
          Wine search
          <img src={logo} alt="Vintrace" />
        </h1>
      </header>
      <main className="max-w-sm w-full">
        <AutoComplete
          id="wine-autocomplete"
          suggestions={suggestions}
          onFilterOptions={onFilterOptions}
          onGetLabel={onGetLabel}
          onGetKey={onGetKey}
          onSelect={onSelect}
          placeholder="Search by lot code and description......"
          autoFocus
        />
      </main>
    </div>
  );
}

export default Search;
