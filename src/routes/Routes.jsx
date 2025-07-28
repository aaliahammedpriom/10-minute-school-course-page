import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import CourseDetails from "../pages/CourseDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <CourseDetails></CourseDetails>,
            }
        ]
    }
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
