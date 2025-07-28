import React from 'react';

const FeatureExplanations = ({ data }) => {

    return (
        <div className="flex flex-col gap-5 p-5 md:flex-row justify-between shadow ">
            <div className="flex flex-col gap-3 w-[60%]">
                <h2 className="text-[14px] md:text-[16px] font-semibold text-[#111827]">
                    {data.title}
                </h2>

                {data.checklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="15"
                            fill="none"
                            viewBox="0 0 19 15"
                        >
                            <path
                                fill="#6294F8"
                                stroke="#6294F8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0.893"
                                d="M18.168 1.508a.792.792 0 01-.006 1.111L6.645 14.143a.77.77 0 01-1.087.005L.77 9.433a.792.792 0 01-.015-1.11.77.77 0 011.098-.016l4.242 4.177L17.07 1.502a.77.77 0 011.098.006z"
                            ></path>
                        </svg>
                        <p className="text-[14px] md:text-[16px] leading-[24px] text-[#4B5563]">
                            {item}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mx-auto max-w-[350px]">
                <img
                    src={data.file_url}
                    alt={data.title}
                    loading="lazy"
                    width={250}
                    height={200}
                    className="rounded-lg shadow-md"
                />
            </div>
            
        </div>
    );
};

export default FeatureExplanations;
