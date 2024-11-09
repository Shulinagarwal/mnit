import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>

      <Accordion open={open === 1} icon={<Icon id={1} open={open} className="border-neutral-50" />}>
      <div className="ml-10 mb-10  border-neutral-700 border p-10 rounded-2xl">
        <AccordionHeader onClick={() => handleOpen(1)} >
          How does our AI-powered team assembly work?
        </AccordionHeader>
        <AccordionBody>
         Teamify uses AI algorithms to match freelancers based on their skills, experience, and past project performance. This ensures that every team assembled has complementary strengths, making collaboration smoother and more effective. You won’t have to search for the right fit — our AI does it for you!
        </AccordionBody>
        </div>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>

      <div className="ml-10 mb-10  border-neutral-700 border p-10 rounded-2xl">
        <AccordionHeader onClick={() => handleOpen(2)} >
         What kind of mentorship and skill-building opportunities are available on Teamify?
        </AccordionHeader>
        <AccordionBody>
        Skill Assessments: Teamify provides periodic skill assessments to gauge a user’s growth over time, allowing for progress tracking and tailored feedback from mentors.
          Certification Programs: Certain courses and workshops offer certification upon completion, helping users build credentials for career advancement and personal development.

        </AccordionBody>
        </div>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
      <div className="ml-10 mb-10  border-neutral-700 border p-10 rounded-2xl">
        <AccordionHeader onClick={() => handleOpen(3)} >
         How can I get started with Teamify as a freelancer or employer?
        </AccordionHeader>
        <AccordionBody>
          Browse Listings: Teamify has a marketplace of projects posted by employers. Use filters to narrow down projects that align with your skills and interests.
          Submit Proposals: Write tailored proposals for each project, showcasing your understanding of the requirements and how your skills are a match.
        </AccordionBody>
        </div>
      </Accordion>
      <Accordion open={open === 1} icon={<Icon id={4} open={open} className="border-neutral-50" />}>
      <div className="ml-10 mb-10  border-neutral-700 border p-10 rounded-2xl">
        <AccordionHeader onClick={() => handleOpen(4)} >
         Is Teamify only for team-based projects or can I work on individual tasks too?
        </AccordionHeader>
        <AccordionBody>
         No, Teamify is not limited to team-based projects—you can work on both individual tasks and team-based assignments. While Teamify emphasizes collaborative, team-building opportunities, it also supports freelancers and employers looking for specialized help on specific, individual tasks.
        </AccordionBody>
        </div>
      </Accordion>
      <Accordion open={open === 1} icon={<Icon id={5} open={open} className="border-neutral-50" />}>
      <div className="ml-10 mb-10  border-neutral-700 border p-10 rounded-2xl">
        <AccordionHeader onClick={() => handleOpen(5)} >
         How can I track my freelancer's performance on Teamify?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
        </div>
      </Accordion>
    </>
  );
}

export default AccordionCustomIcon
