import React from 'react';

const FreeItems = () => {
  const features = [
    '360 পৃষ্ঠা',
    'প্রিমিয়াম হার্ডকপি',
    'ফ্রি ডেলিভারি',
    '৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি',
  ];

  return (
    <div className="text-white p-4 px-10 bg-[#1e293b] w-full ">
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-5 px-5 py-5 overflow-hidden">
        {/* Text Section */}
        <div className="flex flex-col items-start gap-2">
          <h3 className="mb-2 text-base md:text-xl font-semibold leading-[26px]">
            ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
          </h3>

          <ul className="list-disc list-inside space-y-1">
            {features.map((item, index) => (
              <li key={index} className="text-sm md:text-[16px] font-normal leading-[24px] text-white flex items-start gap-2 opacity-90">
                <span className="text-white">•</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:mr-5 w-full md:w-fit flex justify-center md:justify-end">
          <img
            src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png?w=120&h=150"
            alt="Hardcopy Book"
            width={120}
            height={150}
            loading="lazy"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default FreeItems;
