import React, { Component } from "react";
// import resume from "../assets/Resume.pdf";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
          <p className="aboutme">ABOUT</p>
          <br></br>
          <p className="aboutme">ME</p>
          </div>
          <div className="nine columns main-col">
            <p className="hi">
            Hi! I am Ayush
            </p>
            <p>
              I am a 3rd year student studying Computer Science and
              Engineering at Netaji Subhas University of Technology. I have
              skills such as Full Stack Development, Application Developer, and
              Machine Learning as well. I developed interests in Computer
              Programming and subsequently started to explore the field of
              technology. After starting my Bachelors degree, I came to know
              about Development and found it quite interesting. Since then, I
              have been developing small projects, websites and applications.
              Currently I am exploring the field of ML and AI. Open for
              exploring exciting full-stack development opportunities in
              startups as well as companies with scale.
            </p>
            <div className="row">
              <div className="columns download">
                <p>
                  <a
                    href="https://drive.google.com/file/d/13ia3F_b7IvnGrsrI6I--QXNpy9Odm3wO/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
