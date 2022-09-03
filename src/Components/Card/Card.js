import React from "react";
import './Card.css'
import facebook from "../../Images/facebook.svg";
import twitter from "../../Images/twitter.svg";
import instagram from "../../Images/instagram.svg";
import card from "../../Images/card.svg";

export default function Card(){
    return(
        <>
         <div className="main">
          <div className="card-img">
            <img src={card} alt="card" />
          </div>
          <div className="description">
            <h2>Build The Community Your Fans Will Love</h2>
            <p>
              Riddle re-imagines the way we build communities. You havea voice,
              but so does your audience. Create connections withyour users as
              you engage in genuine discussion.
            </p>
            <button>Register</button>

            <div className="social-logos">
          <span className="logo">
            <img
              src={facebook}
              alt="facebook-logo"
              
            />
          </span>
          <span className="logo">
            <img
              src={twitter}
              alt="twitter-logo"
              
            />
          </span>
          <span className="logo">
            <img
              src={instagram}
              alt="instagram-logo"
              
            />
          </span>
          </div>
        </div>
        </div>
        </>
    )
}