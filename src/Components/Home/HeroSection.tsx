import React from 'react'
import Visibale from '../../HOC/withVisibale'

const HeroSection = () => {
  return (
    <Visibale className='HeroSection'>
      <div className="in_HeroSection">
        <h1>
          KARIM ALDEEN
          <br />
          FRONT END DEVELOPER
        </h1>
        <p>
          Work As FronEnd Developer
          <strong> With Over two Year and half of Experience </strong>

           self motivated ,ambitious and hard Worker Hoping to Make my
          interpersonal Skill to Achieve Goals of Company


        </p>
        <div className='Buttons'>
          <button>
            Virw Our Portfolio
          </button>

          <button>
            Price Your Project
          </button>
        </div>

      </div>
    </Visibale>

  )
}

export default HeroSection