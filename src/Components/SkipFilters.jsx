import React from 'react';
import { useTranslation } from 'react-i18next';

const SkipFilters = ({ showHeavyWaste, showOnRoad, toggleHeavy, toggleOnRoad }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center items-start sm:items-center">
      <label className="flex items-center gap-2 text-l font-bold mb-6 text-gray-400">
        <input
          type="checkbox"
          checked={showHeavyWaste}
          onChange={toggleHeavy}
        />
        <span className="text-sm">{t('filters.heavyWaste')}</span>
      </label>
      <label className="flex items-center gap-2 text-l font-bold mb-6 text-gray-400">
        <input
          type="checkbox"
          checked={showOnRoad}
          onChange={toggleOnRoad}
        />
        <span className="text-sm">{t('filters.onRoad')}</span>
      </label>
    </div>
  );
};

export default SkipFilters;
