import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Atoms/Button';

const SkipSummaryBar = ({ price, vat, onContinue }) => {
  const { t } = useTranslation();
  const total = price + (price * (vat / 100));

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-800 shadow-lg border-t border-zinc-600 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="text-lg font-semibold text-white">
          {t('labels.totalPrice')}: <span className="text-blue-800">£{total.toFixed(2)}</span>
        </div>
        <div className='flex gap-3 ml-auto'>
          <Button onClick={onContinue} variant="secondary">
            {t('buttons.back')}
          </Button>
          <Button onClick={onContinue} variant="primary">
            {t('buttons.continue')}
         </Button>
        </div>
      </div>
    </div>
  );
};

export default SkipSummaryBar;
