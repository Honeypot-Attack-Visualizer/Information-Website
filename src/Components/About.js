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
               <p>Emphasizing/specializing in cybersecurity with a focus on applied skills through cybersecurity competitions and industry-recognized certifications. Some experience in analyzing program security through research w/ Dr. Sengupta and class projects focused on mobile application security.
</p>
               <span>Chance Harrison</span><br />
               <p>Emphasizing/specializing in cybersecurity with a focus on applied skills through cybersecurity competitions and industry-recognized certifications. Some experience in analyzing program security through research w/ Dr. Sengupta and class projects focused on mobile application security.
</p>
               <span>Yash Shah</span><br />
               <p>Senior interested in cybersecurity. Experience in system administration from working in the IT department at the University of Nevada, Reno and an internship at the Reno Housing Authority, web development and maintenance from university and high school courses. Experienced in creating and maintaining accessibility documents and webpages which uphold the WCAG accessibility standards. Some experience with working on network security through a research project with Dr. Sengupta involving IoT devices.
</p>
               <span>Simon Shrestha</span><br />
               <p>Senior interested in pursuing a career in cybersecurity with experience in system administration and networking from working at the University of Nevada, Reno and Sierra Nevada Corporation. Facilitated and maintained the Full Spectrum Cybersecurity Lab at UNR, creating well written documentation on backend infrastructure. Experienced with developing long term projects using Agile Development in industry.
</p>
            </p>

            <h2>Advisors</h2>
            <p className="address">
               <span>Dr. Shamik Sengupta (Associate Professor; Executive Director, Cybersecurity Center)</span><br />
               <span>Jay Thom (Senior Information Security Engineer)</span><br />
            </p>

            <h2>Instructors</h2>
            <p className="address">
               <span>David Feil-Seifer (Associate Professor, Graduate Director)</span><br />
               <span>Devrin Lee</span><br />
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
