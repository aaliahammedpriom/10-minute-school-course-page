import React, { useContext, useEffect, useRef, useState } from 'react';
import Banner from '../component/coursedetails/Banner';
import Instractor from '../component/coursedetails/instructor/Instractor';
import Features from '../component/coursedetails/features/Features';
import GroupJoinEngagement from '../component/coursedetails/group_join_engagement/GroupJoinEngagement';
import Pointers from '../component/coursedetails/pointers/Pointers';
import CourseDetailsCollaspe from '../component/coursedetails/course_details/CourseDetailsCollaspe';
import FeatureExplanations from '../component/coursedetails/feature_explanations/FeatureExplanations';
import Testimonials from '../component/coursedetails/testimonials/Testimonials';
import Faq from '../component/coursedetails/faq/Faq';
import { AuthContext } from '../provider/AuthProvider';

const CourseDetails = () => {
    const [course, setCourse] = useState(null);
    const { lang } = useContext(AuthContext)
    useEffect(() => {
        fetch(
            `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
            {
                headers: {
                    "X-TENMS-SOURCE-PLATFORM": "web",
                    Accept: "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((res) => {
                setCourse(res.data);
            })
            .catch((error) => {
                console.error("Error fetching course data:", error);
            });
    }, [lang]);

    let tabs = [];
    const [activeTab, setActiveTab] = useState([]);
    if (!course) return <div className="text-white p-6">Loading...</div>;
    tabs = course.sections.filter(item => item.name && item.values.length > 0).map(item => ({ name: item.name, type: item.type }))

    return (
        <div >
            <Banner course={course}></Banner>
            {/* scrollable tab */}
            <div className='sticky top-16 z-50 carousel bg-white border-b w-full md:w-[44vw] xl:w-[40vw]  2xl:w-[40vw] md:ml-5 lg:ml-20 xl:ml-40 '>
                {tabs.map((tab, idx) => (
                    <a
                        key={idx}
                        href={`#${tab.type}`}
                        className="btn border-green-300 m-2 btn-xs md:btn-sm lg:btn-lg px-2 carousel-item"
                    >
                        {tab.name}
                    </a>

                ))}
            </div>

            {(course.sections).map((item, index) =>
                item.values.length !== 0 &&
                <div id={item.type} key={index} className="mx-4 md:px- xs:bg-[#EEF2F4] xs:pt-2 scroll-mt-32 ">
                    <div className=" bg-white pt-4 lg:pl-16 xl:pl-40 pb-2 md:w-[50vw] ">
                        <h2 className="mb-4 text-xl font-semibold md:text-2xl">{item.name}</h2>
                        <div className="flex items-center ">

                            {item.type === "instructors" && <div className='w-full' >
                                {
                                    item.values.map((data, idx) => <Instractor key={idx} data={data}></Instractor>)
                                }
                            </div>}


                            {item.type === "features" && <div className=' grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8'>
                                {item.values.map((data, idx) => <Features key={idx} data={data}></Features>)}
                            </div>}


                            {item.type === "group_join_engagement" && <div className='w-full' >
                                {
                                    item.values.map((data, idx) => <GroupJoinEngagement key={idx} data={data}></GroupJoinEngagement>)
                                }
                            </div>}


                            {item.type === "pointers" && <div className=' grid grid-cols-1 gap-4 rounded-md border p-6 md:grid-cols-2 md:gap-8'>
                                {item.values.map((data, idx) => <Pointers key={idx} data={data}></Pointers>)}
                            </div>}

                            {item.type === "about" && <div >
                                {item.values.map((data, idx) => <CourseDetailsCollaspe key={idx} data={data}></CourseDetailsCollaspe>)}
                            </div>}

                            {item.type === "feature_explanations" && <div className='w-full' >
                                {item.values.map((data, idx) => <FeatureExplanations key={idx} data={data}></FeatureExplanations>)}
                            </div>}

                            {item.type === "testimonials" && <div className="carousel rounded-box">
                                {item.values.map((data, idx) => <Testimonials key={idx} data={data}></Testimonials>)}
                            </div>}

                            {item.type === "faq" && <div  >
                                {item.values.map((data, idx) => <Faq key={idx} data={data}></Faq>)}
                            </div>}
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

export default CourseDetails;