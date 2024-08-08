import Feed from "@components/Feed";
import React from "react";

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share Images
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI powered contents</span>
      </h1>
      <p className="text-center">
        I won't tell you everything guys, but there will be signs and images!
      </p>
      <Feed />
    </section>
  );
};

export default page;
