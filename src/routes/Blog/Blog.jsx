import React from "react";
import "./Blog.css";
import BlogCard from "./BlogCard";

function Blog() {
  const blogData = [
    {
      id: 1,
      que: "What is the purpose of react router ?",
      ans: `ReactJS Router is mainly used for developing Single Page Web
    Applications. React Router is used to define multiple routes in
    the application. When a user types a specific URL into the
    browser, and if this URL path matches any 'route' inside the
    router file, the user will be redirected to that particular route.`,
    },
    {
      id: 2,
      que: "How context api works in react ?",
      ans: `The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.`,
    },
    {
      id: 3,
      que: `How does useRef hook work?`,
      ans: `
      The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.`,
    },
    {
      id: 4,
      que: `How does React useEffect work?`,
      ans: `What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.`,
    },
    {
      id: 5,
      que: `What is Redux and how it works?`,
      ans: `Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.`,
    },
  ];

  return (
    <div className="blog__container   h-full md:h-screen ">
      <div className="container max-w-4xl px-6 py-10 mx-auto ">
        <h1 className="text-4xl font-semibold text-center text-gray-300 opacity-95">
          Basic questions related to react
        </h1>

        <div className="mt-12 space-y-8 ">
          {blogData.map((data) => {
            return <BlogCard key={data.id} que={data.que} ans={data.ans} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
