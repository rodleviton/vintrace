import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useLocale from '../../hooks/useLocale';
import WineIcon from '../../components/icons/WineIcon';
import EditIcon from '../../components/icons/EditIcon';
import LeftArrowIcon from '../../components/icons/LeftArrowIcon';
import WineDetailsTabs from './components/WineDetailsTabs';
import fireworks from '../../utils/fireworks';

function Details() {
  const locale = useLocale();
  const navigate = useNavigate();
  const { lotCode } = useParams();
  const [wine, setWine] = useState({});

  const onNavigateToSearch = useCallback(() => {
    navigate(`/`);
  }, [navigate]);

  useEffect(() => {
    const data = ['11YVCHAR001', '11YVCHAR002', '15MPPN002-VK'];

    if (data.includes(lotCode)) {
      const fetchWineDetails = async () => {
        const result = await fetch(`/data/${lotCode}.json`).then((x) =>
          x.json(),
        );

        setWine(result);
      };

      fetchWineDetails();
    } else {
      // redirect back to search if wine `lotCode` is not valid
      onNavigateToSearch();
    }
  }, [setWine, lotCode, onNavigateToSearch]);

  const AttributeRow = ({ label, value }) => (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="text-sm md:text-h5">{label}</div>
      <div className="text-sm md:text-h5 font-light md:text-right capitalize">
        {value}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center pt-36 ">
      <div className="max-w-md w-full gap-6 flex flex-col">
        <header className="flex flex-col gap-4">
          <div>
            <button onClick={onNavigateToSearch}>
              <LeftArrowIcon />
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <div>
                  <WineIcon size={32} />
                </div>

                <h1 className="text-h3 md:text-h1 font-light">
                  {wine.lotCode}
                </h1>
              </div>
              {wine.description && (
                <p className="text-h6 md:text-h4 font-light">
                  {wine.description}
                </p>
              )}
            </div>
            <div>
              <button className="text-white p-4 bg-aqua shadow-lg rounded-full -mt-4 transition-all filter hover:brightness-90">
                <EditIcon onClick={fireworks} />
              </button>
            </div>
          </div>
        </header>
        <main className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            {wine.volume && (
              <AttributeRow
                label="Volume"
                value={wine.volume.toLocaleString(locale, {
                  style: 'unit',
                  unit: 'liter',
                  unitDisplay: 'short',
                })}
              />
            )}

            {wine.tankCode && (
              <AttributeRow label="Tank code" value={wine.tankCode} />
            )}

            {wine.productState && (
              <AttributeRow label="Product state" value={wine.productState} />
            )}

            {wine.ownerName && (
              <AttributeRow label="Owner" value={wine.ownerName} />
            )}
          </div>

          <WineDetailsTabs wine={wine} />
        </main>
      </div>
    </div>
  );
}

export default Details;
