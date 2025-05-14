import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import MVCard from "@/components/MVCard";
import React, { useRef, type RefObject } from "react";
import TeamCard from "@/components/TeamCard";

const breadcrumbs = [
  {
    title: "Introduction",
    link: "#introduction",
  },
  {
    title: "mission & vision",
    link: "#misvis",
  },
  {
    title: "Values",
    link: "#values",
  },
  {
    title: "Teams",
    link: "#teams",
  },
];

const About: React.FC = () => {
  type SectionKey = "introduction" | "misvis" | "values" | "teams" | string;

  const refs: Record<SectionKey, RefObject<HTMLDivElement | null>> = {
    introduction: useRef<HTMLDivElement | null>(null),
    misvis: useRef<HTMLDivElement | null>(null),
    values: useRef<HTMLDivElement | null>(null),
    teams: useRef<HTMLDivElement | null>(null),
  };
  return (
    <div className="px-8 md:px-8 lg:px-16 flex flex-col gap-5 items-center mt-20">
      <div className="w-screen bg-blue-900 text-white text-center py-16 flex flex-col items-center">
        <h1 className="text-xl md:text-3xl font-bold">
          MAHABIR HEALTH FOUNDATION
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => (
              <>
                <BreadcrumbItem key={index} className="cursor-pointer">
                  <span
                    onClick={() => {
                      refs[item.link.replace("#", "")]?.current?.scrollIntoView(
                        { behavior: "smooth" }
                      );
                    }}
                  >
                    {item.title}
                  </span>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* introdiv */}
      <div
        className="flex flex-col gap-2 p-4  md:w-2/3 text-sm/normal md:text-lg text-justify border-b-2"
        ref={refs.introduction}
      >
        <h1 className=" text-2xl md:text-4xl  font-bold p-3 text-blue-950">
          INTRODUCTION
        </h1>
        <p className="p-2 ">
          Mahabir Health Foundations was established with the aim of Building a
          Healthier Community through the provision of health services at the
          doorstep of community. It strives for changing the health-service
          seeking behaviour of target community that leads them early prevention
          and reduction in the cost of treatment. Further, we promote healthy
          and sustainable communities by providing health & social counseling,
          health camps, medicine distribution, awareness of hygiene maintain,
          sanitation, mental health development.
        </p>
        <p className="p-2">
          MHF has started health programmes based on community, home, college,
          schools and corporate houses where health awareness on preventive
          health check up and healthy lifestyles is focused. For this, the
          organisation has been backed by the interdisciplinary personalities
          who have experiences of different sectors and the hunger for creating
          healthy community.
        </p>
        <p className="p-2">
          We conducted 126 health camps followed by health awareness sessions in
          the vicinities of Kathmandu Valley. In addition, blood donations in
          different places have been organized. Currently we have focused on:
          <ul className="list-disc h-full w-full p-4">
            <li>Integrated Health Academy</li>
            <li>Community Health Awareness Programme and</li>
            <li>
              Employment generation. As a non-profit social development
              organisation, we invite all dignitaries, professionals and social
              activities to be a part of it.
            </li>
          </ul>
        </p>
      </div>

      <div
        className="flex flex-col gap-8 items-center justify-between p-3 md:w-2/3 text-sm/normal md:text-lg text-justify md:flex-row"
        ref={refs.misvis}
      >
        <MVCard title=" Our Mission">
          Our mission is to promote healthy and sustainable communities by
          providing resources, strengthening collaborative relationships and
          supporting the initiatives.
        </MVCard>
        <MVCard title=" Our Vision">
          Healthy Practices, People and Places. Our vision is healthy people
          with healthy practice in healthy communities including spiritual,
          emotional, physicial, social and economic well-being.
        </MVCard>
      </div>

      {/* values */}

      <div
        className="w-[80%] p-3 md:w-2/3 text-xl/loose border-b-2"
        ref={refs.values}
      >
        <h1 className="font-bold text-2xl md:text-4xl p-2 text-blue-950">
          VALUES
        </h1>
        <ul className="list-disc p-5 text-sm/normal md:text-lg/loose">
          <li> We Value our connectivity to the public health community.</li>
          <li> We value innovation and idea driven solutions.</li>
          <li> We value being a high impact organization.</li>
          <li>
            Foster an environment of positive change through innovation,
            creativity & continuous improvement.
          </li>
          <li>
            Empathy and compassion are fundamental values and are reflected in
            our relationships with others.
          </li>
          <li>
            Accountability is a value demonstrated through careful stewardship,
            accounting and monitoring practices.
          </li>
          <li>
            We focus on adopting. Practicing and promoting principles of good
            governance in all our work that will enhance accountability,
            transparency and quality of response to those we serve.
          </li>
        </ul>
      </div>
      {/* teamdiv */}
      <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-950">
        Our Team
      </h1>
      <div className="w-screen h-auto p-4 flex gap-5 flex-col md:flex-row justify-center">
        <TeamCard
          name="Ram Bahadur"
          image="bossimage.png"
          position="Founding Chairman & Executive Chief"
        />
        <TeamCard name="Ram Bahadur" image="bossimage.png" position="nokarr" />
        <TeamCard name="Ram Bahadur" image="bossimage.png" position="nokarr" />
        <TeamCard name="Ram Bahadur" image="bossimage.png" position="nokarr" />
        <TeamCard name="Ram Bahadur" image="bossimage.png" position="nokarr" />
      </div>
      <div className="flex flex-col gap-5 w-screen p-5" ref={refs.teams}>
        <img src="team.jpeg" alt="teamImage" className="shadow-md rounded-xl" />
      </div>
    </div>
  );
};

export default About;
