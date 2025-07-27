import React from 'react';

const Pointers = ({ data }) => {
  return (
    <div className="flex flex-row items-start gap-3 m-1">
      <div className="mt-[2px] text-[#6294F8]">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 20 20"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <h2 className="text-[16px] font-medium leading-[26px] text-[#111827]">
          {data.text}
        </h2>
      </div>
    </div>
  );
};

export default Pointers;
