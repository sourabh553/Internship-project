import React from 'react';
import { Bookmark } from 'lucide-react';

const Card = (props) => {

  return (
    <div className="card">
      <div className="top">
        <img src={props.logo} alt={props.company} />
        <div id="top-button"><button>Save <Bookmark size={16} /></button></div>
      </div>
      <div className="center">
        <div id="part1">{props.company} <span id="date">{props.posted}</span></div>
        <h2>{props.role}</h2>
        <div id="part3">
          <button>{props.tag1}</button>
          <button>{props.tag2}</button>
        </div>
      </div>
      <div className="bottom">
        <div id="price">
          <h3>{props.price}</h3>
          <span>{props.location}</span>
        </div>
        <div><button>Apply Now</button></div>
      </div>
    </div>
  )
}

export default Card
