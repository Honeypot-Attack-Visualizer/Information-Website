import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var bio = this.props.data.bio;

    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
         </div>
         <div className="nine columns main-col">
            
            <h2>Team Information</h2>
            <p className="address">
               <span>Team 15:</span><br />
               <span>Tommy Gonzales</span><br />
               <span>Chance Harrison</span><br />
               <span>Yash Shah</span><br />
               <span>Simon Shrestha</span><br />
            </p>

            <h2>Advisors</h2>
            <p className="address">
               <span>Dr. Shamik Sengupta (Associate Professor; Executive Director, Cybersecurity Center)</span><br />
               <span>Jay Thom (Senior Information Security Engineer)</span><br />
            </p>

            <h2>About The Project</h2>

            <p>{bio}</p>
            
         </div>
      </div>

   </section>
    );
  }
}

export default About;
