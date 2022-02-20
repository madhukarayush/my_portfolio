import React, { Component } from 'react';

class Header extends Component {
  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
   }

    return (
     <header id="home">
        <nav id="nav-wrap">
           <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
           <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
           <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
           </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <div className="div1">
                  <h2 className="name">Ayush Madhukar</h2>
                  <p>Hi, I am a Full Stack Web Developer, Competitive Programmer and ML enthusiast</p>
                  <ul className="social">
                  {networks}
               </ul>
               </div>
               <div className="div2">
                  <img src="https://manjotportfolio.herokuapp.com/static/media/homepageImg.da60f1bf96b19a6157bb.png"></img>
               </div>
               
               {/* <ul className="social">
                  {networks}
               </ul> */}
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
      </header>
    );
  }
}

export default Header;
