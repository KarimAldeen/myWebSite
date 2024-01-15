import React from 'react';

const LookingForData = {
  title: 'Looking For Job As FrontEnd Developer',
  content: 'Passionate about creating seamless user experiences, I specialize in React.js development. I am eager to contribute my skills and expertise to a dynamic company that values innovation and cutting-edge technologies.',
  buttonText: 'Download My CV',
};

const LookingFor = () => {
  return (
    <div className='LookingFor'>
      <div>
        <h1>{LookingForData.title}</h1>
        <p>{LookingForData.content}</p>
        <button>
          {LookingForData.buttonText}
        </button>
      </div>
    </div>
  );
};

export default LookingFor;
