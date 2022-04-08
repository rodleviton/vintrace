import PropTypes from 'prop-types';
import { forwardRef, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import groupBy from '../../../utils/groupBy';
import useLocalStorage from '../../../hooks/useLocalStorage';
import ChevronDownIcon from '../../../components/icons/ChevronDownIcon';

const DEFAULT_ITEMS_TO_SHOW = 5;

const WineDetailsTabs = forwardRef(({ wine }, ref) => {
  const [expandedView, setExpandedView] = useState(false);

  const groupComponentsBy = useCallback(
    (key) => {
      const grouped = groupBy(wine.components, key);
      const groupedAndSorted = Object.keys(groupBy(wine.components, key))
        .map((x) => ({
          key: x,
          percentage: grouped[x].reduce(
            (acc, curr) => curr.percentage + acc,
            0,
          ),
        }))
        .sort((a, b) => b.percentage - a.percentage);

      return groupedAndSorted;
    },
    [wine],
  );

  const tabs = [
    { id: 'year', label: 'Year', data: groupComponentsBy('year') },
    { id: 'variety', label: 'Variety', data: groupComponentsBy('variety') },
    { id: 'region', label: 'Region', data: groupComponentsBy('region') },
    {
      id: 'year-and-variety',
      label: 'Year & Variety',
      data: groupComponentsBy((x) => `${x.year} - ${x.variety}`),
    },
  ];

  const [preferredTab, setPreferredTab] = useLocalStorage(
    'preferred-wine-details-tab-view',
    tabs[0].key,
  );

  const [activeTab, setActiveTab] = useState(preferredTab || tabs[0].key);

  const toggleExpandedView = () => {
    setExpandedView(!expandedView);
  };

  const Tab = ({ label, id }) => (
    <button
      type="button"
      role="tab"
      className={[
        'font-light px-3 py-2 md:px-4 md:py-3 text-sm md:text-body',
        activeTab === id ? 'border-b-2 border-aqua' : '',
      ].join(' ')}
      tabIndex={activeTab === id ? -1 : 0}
      onClick={() => {
        setActiveTab(id);
        setPreferredTab(id);
      }}
      aria-selected="true"
      aria-controls={`${id}-tab`}
      id={id}>
      {label}
    </button>
  );

  const TabPanel = ({ id, children }) => (
    <div
      tabIndex={activeTab === id ? -1 : 0}
      role="tabpanel"
      id={`${id}-tab`}
      aria-labelledby={id}>
      {children}
    </div>
  );

  const Row = ({ label, value }) => (
    <div className="flex py-2 px-3 md:px-4 md:py-3 justify-between border-b border-gray-100">
      <div className="font-light text-sm">{label}</div>
      <div className="text-right font-light text-sm">{Math.round(value)}%</div>
    </div>
  );

  return (
    <div className="flex flex-col gap-2" ref={ref}>
      <div
        role="tablist"
        aria-label="Wine Details"
        className="border-b border-gray-200">
        {tabs.map((tab) => (
          <Tab label={tab.label} id={tab.id} key={`tab-${tab.id}`} />
        ))}
      </div>

      <div className="bg-white shadow-sm rounded-sm border border-gray-200">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <TabPanel id={tab.id} key={`tab-panel-${tab.id}`}>
                {tab.data
                  .slice(
                    0,
                    expandedView
                      ? tab.data.length.length
                      : DEFAULT_ITEMS_TO_SHOW,
                  )
                  .map((item) => (
                    <Row
                      label={item.key}
                      value={item.percentage}
                      key={uuid()}
                    />
                  ))}

                {tab.data.length > DEFAULT_ITEMS_TO_SHOW && (
                  <button
                    onClick={toggleExpandedView}
                    className="w-full flex text-center justify-center px-3 py-2 md:px-4 md:py-3 text-xs text-aqua">
                    <div className="flex items-center gap-2">
                      {expandedView ? 'Show less' : 'Show more'}
                      <ChevronDownIcon
                        size={8}
                        className={expandedView ? 'rotate-180' : ''}
                      />
                    </div>
                  </button>
                )}
              </TabPanel>
            ),
        )}
      </div>
    </div>
  );
});

WineDetailsTabs.displayName = 'WineSearch';
WineDetailsTabs.propTypes = {
  /** Wine details */
  wine: PropTypes.object,
};

export default WineDetailsTabs;
