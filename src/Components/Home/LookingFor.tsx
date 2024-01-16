import React from 'react';

const LookingForData = {
  title: 'Looking For Job As FrontEnd Developer',
  content: 'Passionate about creating seamless user experiences, I specialize in React.js development. I am eager to contribute my skills and expertise to a dynamic company that values innovation and cutting-edge technologies.',
  buttonText: 'take Look To My CV',
};

const LookingFor = () => {
  const handleDownload = () => {
    window.location.href = '../MohammedKarimAldenResume.pdf';
  };

  return (
    <div className='LookingFor' id='LookingFor'>
      <div>
        <h1>{LookingForData.title}</h1>
        <p>{LookingForData.content}</p>
        <button onClick={handleDownload}>
          {LookingForData.buttonText}
        </button>
      </div>
    </div>
  );
};

export default LookingFor;
