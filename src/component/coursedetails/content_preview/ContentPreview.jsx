import React, { useState } from 'react';

const ContentPreview = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sections = [
    { title: 'Introduction', content: 'Welcome to the IELTS course overview.' },
    {
      title: 'IELTS Course by Munzereen Shahid | Exclusive Support Group',
      content: 'Join our exclusive group for guidance from Munzereen Shahid.',
    },
    {
      title: 'Academic Reading',
      content: 'Understand the format and strategies for Academic Reading.',
    },
    {
      title: 'Academic Reading Mock Test',
      content: 'Practice with full-length reading mock tests to assess your skills.',
    },
    {
      title: 'Listening',
      content: 'Master listening strategies and practice with mock tests.',
    },
  ];
  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto border rounded-md bg-white">
      {sections.map((section, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggleIndex(index)}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50"
          >
            <span className="font-medium text-gray-800">{section.title}</span>
            <span className="text-xl">
              {openIndex === index ? '▾' : '▸'}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-sm text-gray-600">
              {section.content || 'Content goes here...'}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentPreview;
