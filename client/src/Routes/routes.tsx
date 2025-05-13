import { createBrowserRouter } from "react-router";
import { lazy, Suspense, ReactNode } from "react";

const App = lazy(() => import("../App"));
const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));

// Loader component fallback
const Loader: ReactNode = <div>Loading...</div>;

const withSuspense = (element: ReactNode) => (
  <Suspense fallback={Loader}>{element}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(<App />),
    errorElement: <div>Oops! Something went wrong.</div>,
    children: [
      {
        index: true,
        element: withSuspense(<Home />),
      },
      {
        path: "/about",
        element: withSuspense(<About />),
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
    errorElement: <div>Oops! Something went wrong.</div>,
  },
]);

export default router;
