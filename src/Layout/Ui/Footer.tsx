import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons'
import { Button, Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer'>
      <div>
        <div>
          <h1>Mohammed Karim Alden</h1>
          <p>
            Work As FronEnd Developer With Over two Year and half of Experience
            , self motivated ,ambitious and hard Worker Hoping to Make my
            interpersonal Skill to Achieve Goals of Company          </p>
        </div>



        <div className='ContactFooter'>
          <h1>Contact Me</h1>
          <h6>Phone : 0951968995</h6>
          <h6>mohammedkarimalden@gmail.com</h6>
        
        </div>
      </div>
      <Divider />
      <span>
        <div>
          @2023 All Right Reserved By KarimAldeen
        </div>
        <div>
          <span>
            Privacy Policy
          </span>
          <span>
            Cookie Policy
          </span>
        </div>
      </span>
    </div>
  )
}

export default Footer