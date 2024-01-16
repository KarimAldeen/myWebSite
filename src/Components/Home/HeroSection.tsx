import React from 'react';
import { Link } from 'react-router-dom';
import Visibale from '../../HOC/withVisibale'

const HeroSection = () => {
  return (
    <Visibale className='HeroSection' id="Home">
      <div className="in_HeroSection" id="Home">
        <h1>
          KARIM ALDEEN
          <br />
          FRONT END DEVELOPER
        </h1>
        <p>
          Work As FronEnd Developer
          <strong> With Over two Year and half of Experience </strong>
          self-motivated, ambitious, and hard Worker Hoping to Make my
          interpersonal Skill to Achieve Goals of Company
        </p>
        <div className='Buttons'>
          <a href="#questions">
            <button>
              Asked Questions
            </button>
          </a>
          <a href="#ContactMe">
            <button className='SecButton'>
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </Visibale>
  );
};

export default HeroSection;
