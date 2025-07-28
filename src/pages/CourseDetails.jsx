import React, { useEffect, useState } from 'react';
import Banner from '../component/coursedetails/Banner';
import Instractor from '../component/coursedetails/instructor/Instractor';
import Features from '../component/coursedetails/features/Features';
import GroupJoinEngagement from '../component/coursedetails/group_join_engagement/GroupJoinEngagement';
import Pointers from '../component/coursedetails/pointers/Pointers';
import ContentPreview from '../component/coursedetails/content_preview/ContentPreview';
import CourseDetailsCollaspe from '../component/coursedetails/course_details/CourseDetailsCollaspe';
import FeatureExplanations from '../component/coursedetails/feature_explanations/FeatureExplanations';
import FreeItems from '../component/coursedetails/free_items/FreeItems';
import Testimonials from '../component/coursedetails/testimonials/Testimonials';
import Faq from '../component/coursedetails/faq/Faq';

const CourseDetails = () => {
    const [course, setCourse] = useState(null);
    useEffect(() => {
        fetch(
            "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=bn",
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
    }, []);
    if (!course) return <div className="text-white p-6">Loading...</div>;
    console.log(course.sections)
    return (
        <div>
            <Banner course={course}></Banner>
            {(course.sections).map((item, index) =>
                item.values.length !== 0 &&
                <div key={index} className="md:px-32 xs:bg-[#EEF2F4] xs:pt-2 ">
                    <div className="pt-4 pb-2 bg-white">
                        <h2 className="mb-4 text-xl font-semibold md:text-2xl">{item.name}</h2>
                        <div className="flex items-center w-[50vw] ">

                            {item.type === "instructors" && item.values.map((data, idx) => <Instractor key={idx} data={data}></Instractor>)}


                            {item.type === "features" && <div className=' grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8'>
                                {item.values.map((data, idx) => <Features key={idx} data={data}></Features>)}
                            </div>}


                            {item.type === "group_join_engagement" && item.values.map((data, idx) => <GroupJoinEngagement key={idx} data={data}></GroupJoinEngagement>)}


                            {item.type === "pointers" && <div className=' grid grid-cols-1 gap-4 rounded-md border p-6 md:grid-cols-2 md:gap-8'>
                                {item.values.map((data, idx) => <Pointers key={idx} data={data}></Pointers>)}
                            </div>}

                            {item.type === "about" && <div>
                                {item.values.map((data, idx) => <CourseDetailsCollaspe key={idx} data={data}></CourseDetailsCollaspe>)}
                            </div>}
                            {item.type === "feature_explanations" && <div>
                                {item.values.map((data, idx) => <FeatureExplanations key={idx} data={data}></FeatureExplanations>)}
                            </div>}
                            {item.type === "testimonials" && <div className="carousel rounded-box">
                                {item.values.map((data, idx) => <Testimonials key={idx} data={data}></Testimonials>)}
                            </div>}
                            {item.type === "faq" && <div>
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