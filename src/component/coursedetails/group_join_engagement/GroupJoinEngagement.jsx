import React from 'react';

const GroupJoinEngagement = ({ data }) => {

  return (
    <div
      className="flex gap-4 p-4 overflow-hidden bg-black md:p-8"
      style={{
        backgroundImage: `url(${data.background.image})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full md:w-1/2">
        <img
          src={data.top_left_icon_img}
          className="mb-4"
          style={{ height: '40px' }}
          alt="Icon"
        />
        <h2 className="text-xl font-semibold text-white">
          {data.title}
        </h2>
        <p className="mt-2 text-base" style={{ color: '#ededed' }}>
          {data.description}
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow">
          {data.cta.text}
        </button>
      </div>
      <div className="items-center hidden w-1/2 md:flex">
        <img
          src={data.thumbnail}
          alt="Course Thumbnail"
          height="200"
        />
      </div>
    </div>
  );
};

export default GroupJoinEngagement;
