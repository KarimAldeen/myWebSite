import { ApiFilled, ClearOutlined, FastBackwardOutlined, MobileFilled } from '@ant-design/icons';
import React from 'react'
import Visibale from '../../HOC/withVisibale';
import { FaReact, FaGithub, FaFigma, FaSearchengin, FaSass } from 'react-icons/fa';
import { SiTypescript, SiSolidity, SiDesignernews } from 'react-icons/si';

const PowerfulFeatures = () => {
 
    const skillsData = [
      { title: 'React', icon: <FaReact /> },
      { title: 'TypeScript', icon: <SiTypescript /> },
      { title: 'All UI Frameworks', icon: <FaSass /> },  // You can replace this icon with a more specific one if needed
      { title: 'Solid Principles', icon: <SiSolidity /> },  // You can replace this icon with a more specific one if needed
      { title: 'GitHub', icon: <FaGithub /> },
      { title: 'SEO', icon: <FaSearchengin /> },
      { title: 'Figma', icon: <FaFigma /> },
      { title: 'Adobe', icon: <SiDesignernews /> },  // You can replace this icon with a more specific one if needed
    ];
    
    return (
        <div className="PowerfulFeatures" id='features'>
            <div className="in">
                <h1>POWERFUL FEATURES</h1>
                <Visibale className='Features'>
                    {skillsData?.map((item: any, index: number) => {
                        return (
                            <div className="Feature" key={index}>

                                {item?.icon}
                                <h1>

                                {item?.title}
                                </h1>

                            </div>

                        )
                    })}
                </Visibale>
            </div>
        </div>
    )
}

export default PowerfulFeatures