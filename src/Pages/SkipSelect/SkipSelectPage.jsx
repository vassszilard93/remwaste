import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useSkips from '../../Hooks/useSkips';
import SkipCard from '../../Components/SkipCard';
import SkipFilters from '../../Components/SkipFilters';
import SkipSummaryBar from '../../Components/SkipSummaryBar';

import skipImage from '../../assets/images/skipRem.png'

const SkipSelectPage = () => {
  const { t } = useTranslation();

  const { skips, loading, error } = useSkips();
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  const [showHeavyWaste, setShowHeavyWaste] = useState(true);
  const [showOnRoad, setShowOnRoad] = useState(true);

  const handleContinue = () => {
    const selectedSkip = skips.find(skip => skip.id === selectedSkipId);
    console.log('Selected skip:', selectedSkip);

    // Here will go the next step ( Permit Check )
    // Maybe we don't leave comments in code, neither console logs, but 'm pretty sure it will help everybody to understand easier :)
    
  };

  const filteredSkips = skips
    .filter(skip => (showHeavyWaste || !skip.allows_heavy_waste))
    .filter(skip => (showOnRoad || !skip.allowed_on_road))
    .sort((a, b) => a.size - b.size);

  if (loading) return <p className="text-center mt-10 text-gray-500">{t('messages.loading')}</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{t('messages.error')} {error}</p>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-600">
        {t('skipPageTitle')}
      </h1>
      <h2 className="text-l font-bold mb-6 text-center text-gray-400">
        {t('skipPageSubtitle')}
      </h2>

      <SkipFilters
        showHeavyWaste={showHeavyWaste}
        showOnRoad={showOnRoad}
        toggleHeavy={() => setShowHeavyWaste(prev => !prev)}
        toggleOnRoad={() => setShowOnRoad(prev => !prev)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-32">
        {filteredSkips.map(skip => (
          <SkipCard
            key={skip.id}
            size={skip.size}
            hirePeriod={skip.hire_period_days}
            price={skip.price_before_vat}
            vat={skip.vat}
            allowsRoad={skip.allowed_on_road}
            allowsHeavy={skip.allows_heavy_waste}
            imageUrl={skipImage}
            isSelected={selectedSkipId === skip.id}
            isDisabled={selectedSkipId !== null && selectedSkipId !== skip.id}
            onSelect={() =>
              selectedSkipId === skip.id ? setSelectedSkipId(null) : setSelectedSkipId(skip.id)
            }
          />
        ))}
      </div>

      {selectedSkipId && (
        <SkipSummaryBar
          price={skips.find(skip => skip.id === selectedSkipId)?.price_before_vat}
          vat={skips.find(skip => skip.id === selectedSkipId)?.vat}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default SkipSelectPage;
