import React from 'react';
import Card from './card';

const App = () => {
  const ships = [
  {
    logo: "images/google.webp",
    company: "Google",
    role: "UI/UX Designer ",
    location: "Mumbai, India",
    tag1: "Full Time",
    tag2: "Junior Level",
    posted: "2 days ago",
    price: "$120/hour",
  },
  {
    logo: "images/microsoft.png",
    company: "Microsoft",
    role: "Frontend Developer ",
    location: "Bangalore, India",
    tag1: "Part Time",
    tag2: "Senior Level",
    posted: "5 days ago",
    price: "$95/hour",
  },
  {
    logo: "images/amazon.png",
    company: "Amazon",
    role: "Backend Developer ",
    location: "Hyderabad, India",
    tag1: "Full Time",
    tag2: "Junior Level",
    posted: "1 week ago",
    price: "$110/hour",
  },
  {
    logo: "images/apple.svg",
    company: "Apple",
    role: "Product Design ",
    location: "Delhi, India",
    tag1: "Remote",
    tag2: "Mid Level",
    posted: "3 days ago",
    price: "$130/hour",
  },
  {
    logo: "images/meta.jpeg",
    company: "Meta",
    role: "React Developer ",
    location: "Pune, India",
    tag1: "Full Time",
    tag2: "Senior Level",
    posted: "6 days ago",
    price: "$125/hour",
  },
  {
    logo: "images/netflix.png",
    company: "Netflix",
    role: "Motion Graphics ",
    location: "Chennai, India",
    tag1: "Part Time",
    tag2: "Junior Level",
    posted: "4 days ago",
    price: "$100/hour",
  },
  {
    logo: "images/tesla.png",
    company: "Tesla",
    role: "Software Engineer ",
    location: "San Francisco, USA",
    tag1: "Full Time",
    tag2: "Mid Level",
    posted: "2 weeks ago",
    price: "$140/hour",
  },
  {
    logo: "images/adobe.jpeg",
    company: "Adobe",
    role: "Graphic Designer ",
    location: "Noida, India",
    tag1: "Remote",
    tag2: "Junior Level",
    posted: "1 day ago",
    price: "$90/hour",
  },
  {
    logo: "images/spotify.png",
    company: "Spotify",
    role: "Mobile App Developer ",
    location: "Stockholm, Sweden",
    tag1: "Full Time",
    tag2: "Senior Level",
    posted: "5 hours ago",
    price: "$115/hour",
  },
  {
    logo: "images/ibm.png",
    company: "IBM",
    role: "AI/ML Engineer ",
    location: "Kolkata, India",
    tag1: "Hybrid",
    tag2: "Mid Level",
    posted: "3 weeks ago",
    price: "$105/hour",
  },
];
  return (
    <div className="parent">
      {ships.map(function(ship,idx) {
        return <div key={idx}>
          <Card logo={ship.logo} company={ship.company} role={ship.role} location={ship.location} 
          tag1={ship.tag1} tag2={ship.tag2} posted={ship.posted} price={ship.price}/>
        </div>
      })}
    </div>
  )
}

export default App

