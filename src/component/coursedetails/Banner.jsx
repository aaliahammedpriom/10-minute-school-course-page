import { FaStar } from "react-icons/fa";

const Banner = ({course}) => {
   

    return (
        <div className="bg-gradient-to-b from-[#0d0829] to-[#130c41] text-white py-15 px-6 md:px-20 md:flex gap-5 relative h-[40vh]">
            {/* banner left */}
            <div className="w-[40vw] ml-20">
                <h1 className="text-2xl sm:text-3xl font-bold mb-3">
                    {course.title}
                </h1>

                {/* rating */}
                <div className="flex items-center space-x-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                    ))}
                    <span className="text-white text-sm font-semibold">
                        (82.6% শিক্ষার্থী কোর্স শেষ করে ৫ রেটিং দিয়েছেন)
                    </span>
                </div>

                <div
                    className="text-sm sm:text-base text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: course?.description }}
                />
            </div>
            {/* banner right */}
            <div className="w-full lg:w-[30vw] p-1 bg-white overflow-hidden shadow-md md:absolute right-28 ">
                <div>
                    <div className="carousel w-full h-[250px] rounded overflow-hidden">
                        {course.media.map((item, index) => (
                            <div id={`item${index + 1}`} key={index} className="carousel-item w-full justify-center">
                                {item.resource_type === "video" ? (
                                    <iframe
                                        className="w-full aspect-video rounded"
                                        src={`https://www.youtube.com/embed/${item.resource_value}?autoplay=0&mute=1`}
                                        title={`Video ${index + 1}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : item.resource_type === "image" ? (
                                    <img
                                        src={item.thumbnail_url || item.resource_value}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full object-cover max-h-[500px] rounded"
                                    />
                                ) : null}
                            </div>
                        ))}
                    </div>

                    <div className="flex w-full justify-center gap-2 py-4 flex-wrap">
                        {course.media.map((item, index) => (
                            <a
                                key={index}
                                href={`#item${index + 1}`}
                                className="btn btn-xs p-0 m-0 border-none"
                                title={`Go to Slide ${index + 1}`}
                            >
                                <img
                                    className="w-[40px] h-[30px] object-cover rounded hover:w-[60px] hover:h-[60px]"
                                    src={
                                        item.resource_type === "video"
                                            ? item.thumbnail_url
                                            : item.resource_value
                                    }
                                    alt={`Thumbnail ${index + 1}`}
                                />
                            </a>
                        ))}
                    </div>
                    
                </div>



                <div className="p-4 text-black">
                    {/* Price Info */}
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl font-bold text-green-600">
                            ৳{course?.price?.discounted_price}
                        </span>
                        <span className="line-through text-gray-500">
                            ৳{course?.price?.original_price}
                        </span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                            {course?.price?.discount_text || "ছাড়"}
                        </span>
                    </div>

                    {/* Buy Button */}
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-full mb-4">
                        {course.cta_text.name}
                    </button>

                    <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
                    <div className="space-y-2 text-sm">
                        {course.checklist.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">

                                <span className="flex gap-2"><img src={item.icon} alt="" />{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row p-5"><span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span><span className="flex items-center justify-center ml-2 underline cursor-pointer text-green"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> <span className="ml-1">ফোন করুন (16910)</span></span></p>
            </div>
            
        </div>
    );
};

export default Banner;
