import React from 'react';
import { Timeline } from '../components/timeline';
import { Navigation } from "../components/nav";
import Image from "next/image";



export function Profile() {
  const data = [

    {
      title: " 2024",
      content: (



        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong style={{ fontSize: '1.8em' }}>Completion of BACHELOR - UTM,JB</strong><br /><br />
            <strong>BACHELOR OF SOFTWARE ENGINEERING<br />2020 - 2024</strong><br />
          </p>


          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong style={{ fontSize: '1.8em' }}>Maxis Communications Bhd. - Kuala Lumpur Malaysia</strong><br /><br />
            <strong>Intern <br />Oct 2023 - Feb 2024</strong><br />
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            during my internship at Maxis, I was responsible for the following:<br /><br />
            • Managed up to 4 projects for an Automation process using Python. <br />
            • Used SQL for Data aggregation, emerging, and scrapping depending on the client's request. <br />
            • Hosted a Dashboard using React.js that serves as a diagnosis while pulling the data from the back-end. <br /><br />

            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                During while also participating in hackathons and workshops
              </p>
            </div>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex space-x-4">
              <Image
                src="https://res.cloudinary.com/dfhdxwcvx/image/upload/v1729101668/pytflmrrtz0lt0jgjvxq.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
              <Image
                src="https://res.cloudinary.com/dfhdxwcvx/image/upload/v1729101720/na5jchidbx7h0gliuj6t.jpg"

                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            </div>
          </div>
          {/* <br />
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong style={{ fontSize: '1.8em' }}>Graduation from bachlore degree</strong><br />
            <strong>2020 - 2024</strong><br />
          </p> */}
        </div>


      ),
    },
    {
      title: " 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong style={{ fontSize: '1.8em' }}>Final Year Project - UTM,JB</strong><br />
            <strong>TRAVELER HEALTH ADVISOR<br />Web Based Application</strong><br />
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            •Developed a web application top track the diseases all over the world React.js and Node.js. <br />
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Usig a mock data to get the data and display it on the map.
              </p>
            </div>
          </p>

          {/* <div className="grid grid-cols-2 gap-4">
            <div className="flex space-x-4">
              <Image
                src="https://res.cloudinary.com/dfhdxwcvx/image/upload/v1729101668/pytflmrrtz0lt0jgjvxq.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
              <Image
                src="https://res.cloudinary.com/dfhdxwcvx/image/upload/v1729101720/na5jchidbx7h0gliuj6t.jpg"

                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            </div>
          </div> */}
          {/* <br />
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong style={{ fontSize: '1.8em' }}>Graduation from bachlore degree</strong><br />
            <strong>2020 - 2024</strong><br />
          </p> */}
        </div>


      ),
    },

    {
      title: " 2020-2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-5">
            {/* <span style={{ marginRight: '0.5em', fontSize: '1.5em' }}>→</span> */}
            <strong style={{ fontSize: '1.8em' }}>THERAPYFREE56</strong><br />
            <strong>Web based application</strong><br />
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal  mb-8">
            •Developed an Basic web application for online therapy session with mock data using HTML and CSS. <br /><br />
          </p>


          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-5">
            {/* <span style={{ marginRight: '0.5em', fontSize: '1.5em' }}>→</span> */}
            <strong style={{ fontSize: '1.8em' }}>YOUMART_MOBITECH</strong><br />
            <strong>Mobile application</strong><br />
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            •Developed a web application top track the diseases all over the world React.js and Node.js. <br />
          </p>
        </div>
      ),
    },

    {
      title: "2018 - 2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong style={{ fontSize: '1.8em' }}>ZAK Solutions for Computer Systems , Kuwait</strong><br />
            <strong>Software ENGINEER Trainee</strong><br />
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            during my Training at ZAK, I Learned the following:<br /><br />
            • Learning the basics of the computer hardware and software. <br />
            • Meeting with clients. <br />
            • Network and server hardware implementation on site. <br /><br />
          </p>
        </div>
      ),
    },

  ];

  return (
    <><Timeline data={data} /><div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />

    </div></>
  );

}

export default Profile;




