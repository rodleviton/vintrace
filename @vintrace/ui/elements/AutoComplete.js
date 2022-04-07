import PropTypes from 'prop-types';
import React, { forwardRef, useCallback, useRef, useState } from 'react';
import TextField from '../form/TextField';
import useOnExit from '../../hooks/useOnExit';
import TimesIcon from '../icons/TimesIcon';
import SearchIcon from '../icons/SearchIcon';

const AutoComplete = forwardRef(
  (
    {
      id,
      suggestions,
      onFilterOptions,
      onGetLabel,
      onGetKey,
      placeholder,
      autoFocus,
      onSelect,
      ...props
    },
    ref,
  ) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState('');
    const inputRef = useRef();

    /** Close expanded dropdown when user clicks away */
    const dropdownRef = useRef();
    useOnExit(dropdownRef, () => {
      setShowSuggestions(false);
    });

    const defaultOnFilterOptions = useCallback(
      (value) => {
        suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase()),
        );
      },
      [suggestions],
    );

    const getLabel = useCallback(
      (suggestion) => {
        return onGetLabel ? onGetLabel(suggestion, input) : suggestion;
      },
      [onGetLabel, input],
    );

    const getKey = useCallback(
      (suggestion) => {
        return onGetKey ? onGetKey(suggestion) : suggestion;
      },
      [onGetKey],
    );

    const onChange = useCallback(
      ({ target: { value } }) => {
        const result = onFilterOptions
          ? onFilterOptions(value)
          : defaultOnFilterOptions(value);

        setInput(value);
        setFilteredSuggestions(result);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
      },
      [onFilterOptions, defaultOnFilterOptions],
    );

    const onClick = useCallback(
      (key, suggestion) => {
        setFilteredSuggestions([]);
        setInput(key);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);

        onSelect && onSelect(suggestion);
      },
      [onSelect],
    );

    const clearInput = useCallback(
      (e) => {
        e.preventDefault();
        setInput('');

        // Refocus on input
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
      [setInput],
    );

    const onKeyDown = useCallback(
      ({ keyCode }) => {
        if (keyCode === 13) {
          // Enter key
          setInput(getKey(filteredSuggestions[activeSuggestionIndex]));
          setActiveSuggestionIndex(0);
          setShowSuggestions(false);

          onSelect && onSelect(filteredSuggestions[activeSuggestionIndex]);
        } else if (keyCode === 38) {
          // Up arrow
          if (activeSuggestionIndex === 0) {
            return;
          }

          setActiveSuggestionIndex(activeSuggestionIndex - 1);
        } else if (keyCode === 40) {
          // Down arrow
          if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
            return;
          }

          setActiveSuggestionIndex(activeSuggestionIndex + 1);
        }
      },
      [activeSuggestionIndex, filteredSuggestions, getKey, onSelect],
    );

    const SuggestionsList = () => (
      <>
        <ul
          className="bg-white rounded-b-sm overflow-hidden border border-gray-200 -mt-1"
          ref={dropdownRef}>
          {filteredSuggestions.length ? (
            filteredSuggestions.map((suggestion, index) => {
              return (
                <li
                  className={`px-3 py-3 border-t border-gray-200 ${
                    index === activeSuggestionIndex ? 'bg-blue-50' : ''
                  }`}
                  key={getKey(suggestion)}
                  onClick={() => onClick(getKey(suggestion), suggestion)}>
                  {getLabel(suggestion)}
                </li>
              );
            })
          ) : (
            <li className="px-3 py-5 border-t border-gray-200 ">
              <em>No wines match your search query.</em>
            </li>
          )}
        </ul>
      </>
    );

    return (
      <div
        className={`w-full ${showSuggestions && input ? 'shadow-sm' : ''}`}
        ref={ref}
        {...props}>
        <TextField
          id={id}
          inputRef={inputRef}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          value={input}
          autoComplete="off"
          autoFocus={autoFocus}
          role="combobox"
          aria={{
            'aria-autocomplete': 'list',
            'aria-expanded': !!(showSuggestions && input),
          }}
          iconStart={<SearchIcon className="text-gray-400" />}
          iconEnd={
            <button
              className="focus:outline-none focus:ring ring-offset-0 ring-blue-400 rounded-sm"
              onClick={clearInput}
              disabled={!input}>
              <TimesIcon />
            </button>
          }
        />
        {showSuggestions && input && <SuggestionsList />}
      </div>
    );
  },
);

AutoComplete.displayName = 'AutoComplete';
AutoComplete.propTypes = {
  /** React node */
  children: PropTypes.node,
  /** HTML id attribute */
  id: PropTypes.string,
  // Array of autocomplete suggestions
  suggestions: PropTypes.array,
  // Optional filter override method for custom filtering
  onFilterOptions: PropTypes.func,
  // Method for returning a custom label
  onGetLabel: PropTypes.func,
  // Method for customising item select handler
  onSelect: PropTypes.func,
  // Method for returning a custom key
  onGetKey: PropTypes.func,
  /** AutoComplete field placeholder option */
  placeholder: PropTypes.string,
  /** Autofocus on input */
  autoFocus: PropTypes.bool,
};

export default AutoComplete;
