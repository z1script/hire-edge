import React from "react";

const Blog = () => {
  return (
    <>
      <h1 className="text-center text-4xl my-10 font-bold">Blog</h1>
      <div className="my-10 p-3">
        <h2 className="text-2xl">Q1. When You Should Use Context API?</h2>
        <p className="text-xl">
          Ans: You Should Use Context API When you need to share data between
          multiple components that are not directly related to each other
        </p>
      </div>
      <div className="my-10 p-3">
        <h2 className="text-2xl">Q2. What Is Custom Hook In ReactJS?</h2>
        <p className="text-xl">
          Ans: A custom hook in ReactJS is a function that allows you to reuse
          stateful logic and share it between multiple components.
        </p>
      </div>
      <div className="my-10 p-3">
        <h2 className="text-2xl">Q3. What Is UseRef?</h2>
        <p className="text-xl">
          Ans: UseRef is a hook in ReactJS that allows to create a mutable
          reference to a DOM element. It returns an object with current property
          that can be used to access and modify the referenced element or value.
        </p>
      </div>
      <div className="my-10 p-3">
        <h2 className="text-2xl">Q3. What Is UseMemo?</h2>
        <p className="text-xl">
          Ans: UseMemo Hook allows to memorize expensive computations and avoid
          unnecessary re-redenders. it also can be used to optimize performance
          by avoiding expensive computation that don't need.
        </p>
      </div>
    </>
  );
};

export default Blog;
