import React from 'react';

const Faq = ({ data }) => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border border-base-300"
      >
        <div
          className="collapse-title font-semibold"
          dangerouslySetInnerHTML={{ __html: data.question }}
        />
        <div
          className="collapse-content text-sm"
          dangerouslySetInnerHTML={{ __html: data.answer }}
        />
      </div>
    </div>
  );
};

export default Faq;
