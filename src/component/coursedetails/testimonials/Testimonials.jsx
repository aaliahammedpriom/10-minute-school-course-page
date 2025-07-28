import React from 'react';

const Testimonials = ({ data }) => {
    const {
        name,
        testimonial,
        description,
        profile_image,
        thumb,
        video_url,
    } = data || {};

    return (
        <div className="relative mt-5 w-[260px] md:w-[372px] min-h-[250px] md:min-h-[297px] flex flex-col justify-between bg-white rounded-lg border p-6 carousel-item mx-2 ">
            <div className="absolute -top-4 left-5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#FCE0D6] p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 20 30">
                    <path fill="#D33242" d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 20 30">
                    <path fill="#D33242" d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z" />
                </svg>
            </div>

            <div className="w-full mb-4 aspect-video overflow-hidden rounded-md relative">
                {
                    video_url &&
                    <div>
                        <img
                            src={thumb}
                            alt="testimonial thumbnail"
                            className="w-full h-full object-cover"
                        />
                        <a
                            href={`https://www.youtube.com/watch?v=${video_url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2"
                        >
                            <img
                                src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                                alt="Play"
                                className="w-12 h-12 md:w-16 md:h-16"
                            />
                        </a>
                    </div>
                }
                {
                    testimonial && 
                    <div>
                        {testimonial}
                    </div>
                }

            </div>

            <div className="flex gap-4 items-center mt-3">
                <img
                    src={profile_image}
                    alt={name}
                    className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <div>
                    <h3 className="font-semibold text-base">{name}</h3>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
