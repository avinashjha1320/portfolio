import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Avinash Jha</span>
                <span>I am a Aspiring Product Manager with a tech background and experince in development</span>
            </div>
            <button className="button i-button">Contact Me</button>
            <div className="i-icons">
                <a href="https://github.com/avinashjha1320" target="-blank"><img src={Github} alt="" /></a>
                
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">right</div>
    </div>
  )
}

export default Intro