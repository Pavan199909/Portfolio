import "./WorkCardStyles.css"
import WorkCard from "./WorkCard";
import workcardData from"./workCardData";


import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {workcardData.map((val,index)=>{
            return(
              <WorkCard
              key={index}
              imgsrc={val.imgsrc}
              title = {val.title}
              text={val.text}
              view = {val.view} 
              source = {val.source}
              /> 
            )
        } )}
      </div>
    </div>
  )
}

export default Work
