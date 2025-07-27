import React from 'react';

const FeatureItem = ({ data }) => {
  return (
    <div className="flex flex-row items-start gap-3 m-1">
      <div>
        <div className="mb-4 mx-auto" style={{ fontSize: 0 }}>
          <img
            src={data.icon}
            alt={data.title}
            width={36}
            height={36}
            style={{ color: 'transparent' }}
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <h2 className="text-[18px] font-medium leading-[26px] text-white">{data.title}</h2>
        <h2 className="text-[14px] font-normal leading-[22px] text-[#9CA3AF]">{data.subtitle}</h2>
      </div>
    </div>
  );
};

export default FeatureItem;
