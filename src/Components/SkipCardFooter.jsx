import React, { useState } from 'react';
import Button from './Atoms/Button';
import { useTranslation } from 'react-i18next';

const SkipCardFooter = ({ isSelected, isDisabled, onSelect }) => {
  const { t } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);
  let tooltipTimeout;

  const handleMouseEnter = () => {
    if (isDisabled) {
      tooltipTimeout = setTimeout(() => setShowTooltip(true), 2000);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(tooltipTimeout);
    setShowTooltip(false);
  };

  return (
    <div
      className="relative group w-full pointer-events-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        disabled={isDisabled}
        className="w-full pointer-events-none"
        variant={isDisabled ? 'secondary' : 'primary'}
      >
        {isSelected ? t('buttons.selected') : t('buttons.select')}
      </Button>

      <div className="h-6 mt-2 flex items-center justify-center">
        {isSelected && (
          <button
            className="text-xs text-gray-400 hover:underline pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            {t('buttons.deselect')}
          </button>
        )}
      </div>

      {isDisabled && showTooltip && (
        <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 w-max max-w-[200px] text-xs bg-black text-white rounded px-2 py-1 opacity-100 transition-opacity duration-300 pointer-events-none">
          {t('labels.tooltip')}
        </div>
      )}
    </div>
  );
};

export default SkipCardFooter;
