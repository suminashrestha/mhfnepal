import MVCard from "@/components/MVCard";

const About = () => {
  return (
    <div className="px-8 md:px-8 lg:px-16 flex flex-col gap-5 items-center ">
      <div className="w-screen bg-green-700 text-white text-center py-16">
        <h1 className="text-4xl font-bold">MAHABIR HEALTH FOUNDATION</h1>
      </div>

      {/* introdiv */}
      <div className="flex flex-col gap-2 p-4 rounded-md md:w-2/3">
        <h1 className="text-4xl  font-bold p-3">INTRODUCTION</h1>
        <p className="text-xl/loose p-2 ">
          Mahabir Health Foundations was established with the aim of Building a
          Healthier Community through the provision of health services at the
          doorstep of community. It strives for changing the health-service
          seeking behaviour of target community that leads them early prevention
          and reduction in the cost of treatment. Further, we promote healthy
          and sustainable communities by providing health & social counseling,
          health camps, medicine distribution, awareness of hygiene maintain,
          sanitation, mental health development.
        </p>
        <p className="text-xl/loose p-px m-2 ">
          MHF has started health programmes based on community, home, college,
          schools and corporate houses where health awareness on preventive
          health check up and healthy lifestyles is focused. For this, the
          organisation has been backed by the interdisciplinary personalities
          who have experiences of different sectors and the hunger for creating
          healthy community.
        </p>
        <p className="text-xl/loose p-px m-2 ">
          We conducted 126 health camps followed by health awareness sessions in
          the vicinities of Kathmandu Valley. In addition, blood donations in
          different places have been organized. Currently we have focused on:
          <li>Integrated Health Academy</li>
          <li> Community Health Awareness Programme and</li>
          <li>
            Employment generation. As a non-profit social development
            organisation, we invite all dignitaries, professionals and social
            activities to be a part of it.
          </li>
        </p>
      </div>

      {/* teamdiv */}
      <div className="p-4 ">
        <h1 className="text-4xl  font-bold text-center p-4">TEAMS</h1>
        <img src="team.jpeg" alt="teamImage" className="rounded-md shadow-md" />
      </div>

      <div className="flex flex-col gap-8 md:flex-row items-center justify-between p-3 md:w-2/3">
        <MVCard title="MISSION">
          {/* content */}
          Our mission is to promote healthy and sustainable communities by
          providing resources, strengthening collaborative relationships and
          supporting initiatives.
        </MVCard>
        <MVCard title="VISION">
          {/* content */}
          Healthy Practices, People and Places. Our vision is healthy people
          with healthy practice in healthy communities that include spiritual,
          emotional, physicial, social and economic well- being.
        </MVCard>
      </div>

      {/* values */}

      <div className="w-[80%] p-3 bg-stone-100 rounded-md shadow-md md:w-2/3 text-xl/loose">
        <h1 className="text-center font-bold text-4xl p-2">VALUES</h1>
        <ul className="list-disc p-5">
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
    </div>
  );
};

export default About;
