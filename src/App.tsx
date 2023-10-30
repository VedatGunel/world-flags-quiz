import {
    createBrowserRouter,
    Link,
    Outlet,
    RouterProvider,
} from "react-router-dom";

import MainMenu from "./components/MainMenu";
import Play from "./components/Play";

const Layout = () => (
    <>
        <div className="absolute top-0 left-0 py-3">
            <Link
                className="bg-zinc-700 p-3 rounded border cursor-pointer hover:bg-zinc-500"
                to="/"
            >
                Home
            </Link>
        </div>
        <Outlet />
    </>
);

function App() {
    const router = createBrowserRouter(
        [
            {
                element: <Layout />,
                children: [
                    {
                        path: "/play",
                        element: <Play />,
                    },
                ],
            },
            {
                path: "/",
                element: <MainMenu />,
            },
        ],
        { basename: "/world-flags-quiz" }
    );

    return (
        <div className="relative bg-zinc-800 text-gray-100">
            <div className="flex flex-col items-center md:place-items-center h-screen">
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;
