import React from 'react';
import { useTranslation } from 'react-i18next';

const SkipCardHeader = ({ size, imageUrl }) => {
  const { t } = useTranslation();
  const labelText = `${size} yards`;

  return (
    <div className="relative mb-3 w-full">
      {imageUrl && (
        <>
          <div className="relative w-full mx-auto">
            <img
              src={imageUrl}
              alt={labelText}
              className="w-full h-auto rounded-md object-contain"
            />
            <div className="absolute top-1 right-1 bg-blue-800 text-white text-xs px-2 py-0.5 rounded">
              {labelText}
            </div>
          </div>
        </>
      )}
      <h2 className="text-lg font-semibold text-white mt-2 text-center">
        {t('labels.yardSkip', { size })}
      </h2>
    </div>
  );
};

export default SkipCardHeader;
