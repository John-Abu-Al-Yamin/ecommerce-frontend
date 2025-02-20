import React from "react";
import ProductSection from "./ProductSection";

const Home = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            All Your Digital Products
            <strong className="font-extrabold text-primary sm:block">
              Is One Click Away
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start Exploring State Of the Art Assets Now!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
              Get Started
            </button>

            <button className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-primary focus:outline-none focus:ring active:text-red-500 sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <ProductSection/>
    </section>
  );
};

export default Home;
