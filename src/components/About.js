import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Griffin
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a software engineer specializing in backend cloud services.
            <br />
            <br />I started my professional journey as an electrical engineer
            working on microchips out of college in 2011. I always enjoyed
            coding and kept my skills sharp over the years, automating tasks at
            work and writing test patterns for memory chips.
            <br />
            <br />
            In 2021 I landed my first job as a professional software engineer at
            a consulting firm, where I helped build APIs for IoT companies in
            the renewable energy space. I loved writing enterprise software and
            I'm continuing to learn and expand my knowledge base as much as I
            can.
            <br />
            <br />
            I'm currently on the market looking for new backend opportunities!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Get In Touch
            </a>
            <a
              href="#cv"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 style={{borderRadius: '50%'}}">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./griffin.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
