import MVCard from "@/components/MVCard";
import React, { useRef, type RefObject } from "react";
import TeamCard from "@/components/TeamCard";

import ImageAnimationVertical from "@/components/animations/ImageAnimationVertical";
import HeadingTag from "@/components/HeadingTag";
import DivAnimation from "@/components/animations/DivAnimation";

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
      <div>
        <div className="w-screen bg-blue-950 text-white text-center h-[10vh] flex flex-col justify-center items-center gap-2">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-thin font-bitter">
            MAHABIR HEALTH FOUNDATION
          </h1>
        </div>
        <ImageAnimationVertical
          image="/banners/aboutus-banner.jpg"
          className="h-[40vh] w-screen object-cover "
        />
      </div>

      {/* introdiv */}
      <div
        className="flex flex-col gap-3 p-2  md:w-2/3 text-sm/normal md:text-lg text-justify border-b-2"
        ref={refs.introduction}
      >
        <p className="p-2">
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
        className="flex flex-col gap-8 items-center justify-between p-3 md:w-2/3 text-sm/normal md:text-lg text-justify"
        ref={refs.misvis}
      >
        <MVCard title="Mission" backgroundImage="/mission.jpg" reverse="flex-row-reverse">
          <p className="font-bitter">
            Our mission is to promote healthy and sustainable communities by
            strengthening collaborative relationships and supporting different
            initiatives for accomplishing its vision.
          </p>
        </MVCard>
        <MVCard title="Vision" backgroundImage="/vision.jpg" >
          <p className="font-bitter">
            Our vision is promoting communities for better health and prosperity
            that includes spiritual, emotional, physical, social and economic
            wellbeing.
          </p>
        </MVCard>
      </div>

      {/* values */}

      <DivAnimation className="w-[80%] p-3 md:w-2/3 text-xl/loose border-b-2">
        <HeadingTag>Values</HeadingTag>
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
      </DivAnimation>
      {/* teamdiv */}
      <DivAnimation className="flex flex-col gap-7 items-center w-screen h-auto p-5">
        <HeadingTag>Our Team</HeadingTag>
        <div className="w-full h-auto p-5 flex flex-col gap-5 items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-self-center">
          <TeamCard
            name="Ram Bahadur"
            image="bossimage.png"
            position="Founding Chairman & Executive Chief"
          />
          <TeamCard
            name="Ram Bahadur"
            image="bossimage.png"
            position="nokarr"
          />
          <TeamCard
            name="Ram Bahadur"
            image="bossimage.png"
            position="nokarr"
          />
          <TeamCard
            name="Ram Bahadur"
            image="bossimage.png"
            position="nokarr"
          />
          <TeamCard
            name="Ram Bahadur"
            image="bossimage.png"
            position="nokarr"
          />
        </div>
      </DivAnimation>
    </div>
  );
};

export default About;
