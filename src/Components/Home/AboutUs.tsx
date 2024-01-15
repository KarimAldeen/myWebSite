import React from 'react';
import Visibale from '../../HOC/withVisibale';
const aboutUsData = [
    {
      id: 1,
      title: 'Syrian Virtual University',
      content: 'Embarked on the journey of studying Information Technology (BAIT) at the Syrian Virtual University. The first year curriculum provided a foundational understanding of various aspects of IT.',

    },
    {
      id: 2,
      title: 'Meta Course Advanced React',
      content: 'Completed the Advanced React course offered by Meta, gaining proficiency in building sophisticated React applications and mastering advanced concepts.',
    },
    {
      id: 3,
      title: 'Meta Course Front-End Development',
      content: 'Engaged in the Front-End Development course provided by Meta, acquiring skills in creating responsive and visually appealing user interfaces using modern front-end technologies.',
    },
  ];
  
  

const AboutUs = () => {
  return (
    <Visibale className='AboutUs' id='aboutus'>
      <div className="AboutUs_Left">
        <h1>My EDUCATION </h1>
        <p>After three years at my first university, I had to take a year off due to illness. Following my recovery, I chose to begin anew at a different university. Excited for a fresh start, I'm optimistic about the opportunities this change brings to my academic journey.</p>
      </div>
      <div className="AboutUs_Right">
        {aboutUsData.map((item) => (
          <div key={item.id}>
            <span> {item.id < 10 ? `0${item.id}` : item.id} </span>
            <div>
              <h5>{item.title}</h5>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </Visibale>
  );
};

export default AboutUs;
