import React, { useState } from 'react';
import SkipCardHeader from './SkipCardHeader';
import SkipCardBody from './SkipCardBody';
import SkipCardFooter from './SkipCardFooter';

const SkipCard = ({
  size,
  hirePeriod,
  price,
  vat,
  allowsRoad,
  allowsHeavy,
  imageUrl,
  isSelected,
  isDisabled,
  onSelect,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    if (isDisabled) {
      setTimeout(() => setShowTooltip(true), 2000);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      onClick={() => {
        if (!isDisabled && !isSelected) {
          onSelect();
        }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`min-h-[360px] flex flex-col justify-between items-center text-center border-2 rounded-xl shadow-sm p-4 transition-all duration-300 ${
        isSelected
          ? 'border-blue-800 ring-2 ring-blue-700'
          : 'border-white'
      } ${isDisabled ? 'opacity-60' : ''} bg-zinc-800 text-white ${
        !isSelected && !isDisabled ? 'cursor-pointer hover:shadow-lg hover:border-blue-500' : ''
      }`}
    >
      <SkipCardHeader size={size} imageUrl={imageUrl} />
      <SkipCardBody
        size={size}
        hirePeriod={hirePeriod}
        price={price}
        vat={vat}
        allowsRoad={allowsRoad}
        allowsHeavy={allowsHeavy}
      />
      <SkipCardFooter
        isSelected={isSelected}
        isDisabled={isDisabled}
        showTooltip={showTooltip}
        onSelect={onSelect}
      />
    </div>
  );
};

export default SkipCard;
