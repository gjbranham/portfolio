import React from "react";
import classNames from "classnames";
import { actionsData } from "../data";

export default function Landing() {
  return (
    <section id="landing">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Griffin.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a software engineer specializing in backend cloud services, and
            currently looking for new opportunities!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Get In Touch
            </a>
            <a
              href="#skills"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Skills
            </a>
            <a
              href="#bio"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Bio
            </a>
            <span>
              {actionsData.map(({ href, text, primary, Icon }) => (
                <a
                  className={classNames(
                    "ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg",
                    primary
                      ? "border-orange-500 ring-orange-500"
                      : "border-white ring-white"
                  )}
                  href={href}
                  download
                  key={text}
                >
                  {text}
                  {Icon && (
                    <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6 pl-1.5" />
                  )}
                </a>
              ))}
            </span>
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
