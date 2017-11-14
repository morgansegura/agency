import React, { Component } from "react";
import { browserHistory } from 'react-router';
export default class Home extends Component {

  componentDidMount() {
    browserHistory.push('/');
  }
  render() {

    return (      
      <div id="home">
        <section className="hero">
          <div className="background-image"></div>
          <div className="hero-content-area container">
            <h1>We are an Awesome Creative Agency</h1>
            <hr />
            <h3>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. 
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. 
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</h3>
            <a href="#" className="btn-outline">Contact Us Now</a>
          </div>
        </section>

        <section className="about">
          <img src="" />
          <div className="about-content-area container">
            <h3>Our Story</h3>
            <p>
              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. 
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. 
              Duis sed odio sit amet nibh vulputate cursus.
              
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. 
              Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu 
              ad litora torquent per conubia nostra, per inceptos himenaeos.            
            </p>
            <a className="btn-outline"href="">Learn More</a>
          </div>
        </section>

      </div>
    );
  }
}