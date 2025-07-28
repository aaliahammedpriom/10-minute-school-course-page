import { FaStar } from "react-icons/fa";

const Banner = ({ course }) => {


    return (
        <div className="bg-gradient-to-b from-[rgb(13,8,41)] to-[#130c41] text-white py-8 xl:py-24 md:px-4 xl:px-20 md:h-[60vh] lg:h-[50vh] xl:h-[50vh] 2xl:h-[50vh] md:flex flex-row-reverse relative">

            {/* banner left */}
            <div className=" bg-white md:absolute z-80 m-2 p-1 shadow-md  md:w-[40vw] max-sm:mx-4 ">
                <div>
                    <div className="carousel w-full h-[150px] md:h-[250px] 2xl:h-[300px] rounded overflow-hidden">
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
                                        className="w-full object-cover  max-h-[500px] rounded"
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

                <div className="p-4 max-md:hidden  text-black">
                    {/* Price Info */}
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl font-bold text-green-600">
                            ৳3850
                        </span>
                        <span className="line-through text-gray-500">
                            ৳5000
                        </span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                            "ছাড়"
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

                                <span className="flex gap-2 items-center"><img className="h-[30px]" src={item.icon} alt="" />{item.text}</span>
                            </div>
                        ))}
                    </div>
                    <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row p-5"><span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span><span className="flex items-center justify-center ml-2 underline cursor-pointer text-green-300"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> <span className="ml-1 ">ফোন করুন (16910)</span></span></p>
                </div>

            </div>
            {/* banner right */}
            <div className="md:w-[40vw] 2xl:w-[50vw] xl:pl-20 md:absolute md:left-0 m-2 md:ml-5 lg:ml-20 max-sm:m-4 2xl:ml-2">
                <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold mb-3">
                    {course.title}
                </h1>
                <div className="flex items-center space-x-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                    ))}
                    <span className="text-white text-sm 2xl:text-xl font-semibold">
                        (82.6% শিক্ষার্থী কোর্স শেষ করে ৫ রেটিং দিয়েছেন)
                    </span>
                </div>

                <div
                    className="text-sm 2xl:text-xl sm:text-base text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: course?.description }}
                />
            </div>

            <div className=" md:hidden bg-white w-full">

                <div className="p-4  text-black">
                    {/* Price Info */}
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl font-bold text-green-600">
                            ৳3850
                        </span>
                        <span className="line-through text-gray-500">
                            ৳5000
                        </span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                            "ছাড়"
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

                                <span className="flex gap-2 items-center"><img className="h-[30px]" src={item.icon} alt="" />{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row p-5"><span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span><span className="flex items-center justify-center ml-2 underline cursor-pointer text-green-300"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> <span className="ml-1 ">ফোন করুন (16910)</span></span></p>
            </div>

            {/* testing */}
            <div className=" bg-white m-2 p-1 shadow-md max-md:hidden w-[30vw] h-[70vh] fixed z-10  ">
                <div className="p-4  text-black">
                    {/* Price Info */}
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl font-bold text-green-600">
                            ৳3850
                        </span>
                        <span className="line-through text-gray-500">
                            ৳5000
                        </span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                            "ছাড়"
                        </span>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-full mb-4">
                        {course.cta_text.name}
                    </button>
                    <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
                    <div className="space-y-2 text-sm">
                        {course.checklist.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="flex gap-2 items-center text-xs"><img className="h-[15px]" src={item.icon} alt="" />{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="justify-between hidden text-xs text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row p-5"><span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span><span className="flex items-center justify-center ml-2 underline cursor-pointer text-green-300"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> <span className="ml-1 ">ফোন করুন (16910)</span></span></p>
            </div>


        </div>
    );
};

export default Banner;
