import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <h1>Home Page</h1>,
            },
            {
                path: "/about",
                element: <h1>About Page</h1>,
            },
            {
                path: "*",
                element: <h1>Not Found </h1>,
            },
        ]
    }
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
