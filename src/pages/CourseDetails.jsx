import React, { useEffect, useState } from 'react';
import Banner from '../component/coursedetails/Banner';
import Instractor from '../component/coursedetails/instructor/Instractor';

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
            <Instractor course={course}></Instractor>
            {(course.sections).map((item, index) =>
                <div></div>)}
        </div>
    );
};

export default CourseDetails;