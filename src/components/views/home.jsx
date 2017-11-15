import React, { Component } from "react";
import { browserHistory } from 'react-router';
export default class Home extends Component {

  componentDidMount() {
    browserHistory.push('/');
  }
  render() {

    return (      
      <div id="home">
        <section className="hero dark">
          <div className="background-image"></div>
          <div className="hero-content-area container">
            <h1>We are an Awesome Creative Agency</h1>
            <hr />
            <h3>
              <span className="break">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem</span> 
              <span className="break">quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh</span> 
              <span className="break">vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</span>
            </h3>
            <a href="#" className="btn-outline">Contact Us Now</a>
          </div>
        </section>

        <section className="about light container">
          <img src="/src/images/icon-logo-large.png" />
          <div className="about-content-area">
            <h3>Our Story</h3>
            <p>
              <span className="break">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor</span> 
              <span className="break">aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,</span> 
              <span className="break">nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus.</span>
            </p>
            <p>
              <span className="break">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</span> 
              <span className="break">Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu</span>
              <span className="break">ad litora torquent per conubia nostra, per inceptos himenaeos.</span>
            </p>
            <a className="btn-outline"href="">Learn More</a>
          </div>
        </section>

      </div>
    );
  }
}