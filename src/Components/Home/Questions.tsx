import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'What is your best skill?',
    children: (
      <p>
        My strongest skill is in React development. I have a solid foundation in React, extending to Next.js for server-side rendering, Redux for state management, and various UI frameworks like Boostrap, Ant Design (antd), and Material-UI (mui). Additionally, I'm proficient in using additional tools such as Formik for form management, react-query for data fetching, and Zustand for state management. My expertise extends to working with TypeScript for type safety in large-scale projects. Furthermore, I have experience in integrating socket communication for real-time features. On the design side, I am adept at using Photoshop, Illustrator, and Adobe XD to bring design concepts to life. I also follow design patterns, particularly the SOLID principles, to ensure scalable and maintainable code
      </p>
    ),
  },
  {
    key: '2',
    label: 'Can you provide an overview of your career background as a Front-End Developer',
    children: (
      <p>
        Work As FronEnd Developer With Over two Year and half of Experience
        , self motivated ,ambitious and hard Worker Hoping to Make my
        interpersonal Skill to Achieve Goals of Company
      </p>
    ),
  },
  {
    key: '3',
    label: 'What is your educational background?',
    children: (
      <p>
        Education: Information Technology (BAIT) at Syrian Virtual University,
        Training / Courses: 1.Meta Advanced React, 2. Meta Front-End Developer Professional
      </p>

    ),
  },
  {
    key: '4',
    label: 'Are you open to remote work',
    children: (
      <p>
        Yes, I am open to remote work, and I also have experience working freelance
      </p>
    ),
  },
  {
    key: '5',
    label: 'Can you share details about some of the projects you worked on as a Front-End Developer?',
    children: (
      <p>
        (2021 - 10/2023):
        Developed a comprehensive Full Dashboard comprising over 40 pages for an E-commerce system.
        Implemented advanced user interface pages for efficient data display and editing.
        Created a Vendor Dashboard for streamlined vendor management.
        Designed and built a Landing Page with complex animations to enhance user engagement.
        Successfully deployed the project to GitLab and a Linux server.
        Freelancer (2020 - Present):

        Qtrend:
        Built a Website, E-commerce platform, and Dashboard for a software company.
        Optimum:
        Developed a Website and Dashboard for an oil company.
        Nokbeh Alrbia:
        Worked on the development of a mid-scale E-commerce platform using ReactJS.
        Completed the design and creation of over 5 logos.
        Crafted two Personal Portfolios showcasing diverse skills and projects.
        (2020 - 03/2021):

        Constructed a Dashboard for a large Delivery App.
        Developed two websites, including a Landing Page and Customer Interface.
        Successfully deployed the project to cPanel for seamless accessibility.
      </p>
    ),
  },
];

const Questions: React.FC = () => {
  return (
    <div className='Questions' id='questions'>
      <h1>Frequently Asked Questions</h1>
      <Collapse accordion items={items} />
    </div>
  );
};

export default Questions;
