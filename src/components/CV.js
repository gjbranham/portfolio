import React from "react";

export default function CV() {
  return (
    <section id="cv">
      <div className="container px-5 py-10 text-center mx-auto">
        <div className="text-center mb-8">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            CV
          </h1>
        </div>
        <br />
        <div class="flex justify-center">
          <h1 className="text-2xl font-bold border-b-2 pb-1 w-full text-white text-left">
            EXPERIENCE
          </h1>
        </div>
        <div class="relative text-md font-bold pt-1 w-full text-white">
          <p class="absolute left-0">
            GENERAC POWER SYSTEMS — Software Engineer II
          </p>
          <p class="absolute right-0">2021 — 2023</p>
        </div>
        <div class="text-white mt-8">
          <ul className="list-disc list-inside text-left">
            <li className="mb-1.5">
              Created an API for sending commands to a residential solar battery
              backup using Go and gRPC. The API validated command structure and
              implemented graphs of user relationships, minimizing failed
              requests due to conflicting or invalid commands
            </li>
            <li className="mb-1.5">
              Enabled users of an inverter gateway web portal to view device
              response information in seconds, by caching AWS Kinesis data into
              Redis and adding a blocking-polling mechanism to an asynchronous
              Spring Boot API
            </li>
            <li className="mb-1.5">
              Built a Behavior-Driven Development testing service for a gRPC
              API, integrating the validation of user stories into the CI/CD
              workflow and enabling end-to-end testing of the complete API
            </li>
            <li className="mb-1.5">
              Added a firmware update system to a Spring Boot API for inverter
              gateways, enabling simple and inexpensive field upgrades by
              delivering signed firmware download packets over MQTT
            </li>
            <li className="mb-1.5">
              Automated the loading of new customer account information into
              Salesforce by creating a scheduled Celery task that eliminated
              data-entry errors and saved several man-hours per day
            </li>
            <li className="mb-1.5">
              Reduced load time by 95% for a Django web page containing
              thousands of database entries by optimizing SQL queries
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
