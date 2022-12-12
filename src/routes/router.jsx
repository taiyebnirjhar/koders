import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErroPage/ErrorPage";
import Layout from "../components/layout/Layout";
import NavBar from "../components/navbar/NavBar";
import Blog from "./Blog/Blog";
import QuizDetails from "./Problems/Child/QuizDetails/QuizDetails";
import Problems from "./Problems/Problems";
import Statistics from "./Statistics/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div>
        <NavBar></NavBar>
        <ErrorPage />
      </div>
    ),
    children: [
      {
        path: "/",

        loader: async () => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`);
        },
        element: <Problems></Problems>,
      },
      {
        path: "/problems",
        loader: async () => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`);
        },
        element: <Problems></Problems>,
      },
      {
        path: "/problems/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
        element: (
          <div>
            <QuizDetails />
          </div>
        ),
        errorElement: (
          <div>
            <ErrorPage />
          </div>
        ),
      },
      {
        path: "/statistics",
        loader: async () => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`);
        },
        element: <Statistics />,
      },
      { path: "/projects", element: <div>this is projects page</div> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);
