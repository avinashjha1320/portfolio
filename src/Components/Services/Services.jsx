import React from 'react';
import "./Services.css";
import Card from '../Card/Card';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './Resume.pdf';

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          This is a sample text which i will replace
          <br />
          I will write my intro here
        </span>
        <a href={Resume} download><button className="button s-button">Resume</button></a>
        
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
      </div>
      <div className="cards">
        <div style={{left:'14rem'}}>
          <Card
        emoji={HeartEmoji}
        heading={'Design'}
        detail={"Figma, Sketch, photoshop, Adobe"} 
        /></div>

        <div style={{left:'-4rem', top:"12rem"}}>
          <Card
        emoji={Glasses}
        heading={'Developer'}
        detail={"Html, CSS, React, JS"} 
        /></div>

<div style={{left:'12rem', top:'19rem'}}>
          <Card
        emoji={Humble}
        heading={'Product'}
        detail={"Figma, Miro, Jira,Trello"} 
        /></div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services