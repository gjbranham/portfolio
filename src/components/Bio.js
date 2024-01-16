import React from "react";

export default function Bio() {
  return (
    <section id="bio">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-8">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Bio
          </h1>
          <p className="text-justify leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I'm a native Washingtonian — born in downtown Seattle — but
            currently living in the beautiful mountain town of Bend, Oregon with
            my lovely wife, daughter, two dogs and two cats.
            <br />
            <br />
            I started my professional journey as an electrical engineer working
            on memory chips out of college in 2011. My experience on the
            hardware side includes Apple and Micron. I've always enjoyed coding
            so I spent a lot of time writing test patterns for chips and
            automating things like data collection.
            <br />
            <br />
            In 2021 I landed my first job as a software engineer at a consulting
            firm, where I helped build APIs for IoT companies in the renewable
            energy space. I loved writing enterprise software and I'm continuing
            to learn and expand my knowledge base every day.
            <br />
            <br />
            In my free time I'm a busy dad but still love mountain biking and
            reading all things history, paleontology, and (sometimes) fiction.
          </p>
        </div>
      </div>
    </section>
  );
}
