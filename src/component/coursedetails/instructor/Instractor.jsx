import React from 'react';

const Instructor = ({ data }) => {
  return (
    <div className="flex items-start gap-4 p-4 md:pl-10 border bg-white ">
      {/* Image */}
      <div className="w-20 h-20 rounded-full overflow-hidden border">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-semibold">
          <a
            className="flex items-center hover:text-green-400"
            href={`https://10minuteschool.com/skills/instructors/${data.slug}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.name}
            <span className="ml-2 pb-[2px]">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 11c-.13.001-.26-.024-.382-.074a1.003 1.003 0 01-.328-.236 1 1 0 01-.219-.768c.014-.26.12-.508.303-.691L4.1 6 0.92 2.69a1.001 1.001 0 01.708-1.71c.26 0 .508.104.69.29l3.86 4a1 1 0 010 1.4l-4 4A.99.99 0 011.5 11z"
                  fill="#6B7280"
                />
              </svg>
            </span>
          </a>
        </h3>

        <p className="text-sm text-gray-600">{data.short_description}</p>

        <div
          className="mt-1 text-sm text-gray-700"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </div>
  );
};

export default Instructor;
