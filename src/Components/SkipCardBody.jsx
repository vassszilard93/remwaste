import React from 'react';
import { useTranslation } from 'react-i18next';

import Badge from './Atoms/Badge';

const SkipCardBody = ({ hirePeriod, price, vat, allowsRoad, allowsHeavy }) => {
  const { t } = useTranslation();
  const finalPrice = price + (price * (vat / 100));

  return (
    <>
      <p className="text-sm text-gray-200 mb-1">
        {t('labels.hirePeriod', { days: hirePeriod })}
      </p>
      <div className="text-lg text-gray-400 mb-3">
        <span className="text-blue-800 font-bold">£{finalPrice.toFixed(0)}</span>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-3 min-h-8">
        {allowsRoad && (
          <Badge type="road">{t('filters.onRoad')}</Badge>
        )}
        {allowsHeavy && (
          <Badge type="heavy">{t('filters.heavyWaste')}</Badge>
        )}
      </div>
    </>
  );
};

export default SkipCardBody;
