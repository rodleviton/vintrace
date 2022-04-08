import PropTypes from 'prop-types';
import { forwardRef, useCallback } from 'react';
import { useNavigate } from 'react-router';
import AutoComplete from '../../../components/elements/AutoComplete';
import useLocale from '../../../hooks/useLocale';

const WineSearch = forwardRef(({ suggestions }, ref) => {
  const navigate = useNavigate();
  const locale = useLocale();

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
              <p className="text-sm">
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
    <AutoComplete
      ref={ref}
      id="wine-autocomplete"
      suggestions={suggestions}
      onFilterOptions={onFilterOptions}
      onGetLabel={onGetLabel}
      onGetKey={onGetKey}
      onSelect={onSelect}
      placeholder="Search by lot code and description......"
      autoFocus
    />
  );
});

WineSearch.displayName = 'WineSearch';
WineSearch.propTypes = {
  /** List of possible autocomplete suggestions */
  suggestions: PropTypes.array,
};

export default WineSearch;
