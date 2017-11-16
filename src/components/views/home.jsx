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

        <section className="dark video">
          <div className="background-image"></div>
          <div className="container player">
            <div className="play-button">
              <i className="fa fa-play"></i>
              <h4>Watch Our Story</h4>
            </div>
          </div>
        </section>

        <section className="container light expertise">
          <div className="title-block">
            <h3>Expertise</h3>
            <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
            <hr />
          </div>

          <div className="grid">
            <div className="grid-cell">
              <img src="/src/images/icon-desktop.png" />
              <h5>Web Design & Development</h5>
              <p>
                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.
              </p>
            </div>
            <div className="grid-cell">
              <img src="/src/images/icon-paintbrush.png" />
              <h5>Branding Identity</h5>
              <p>
                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.
              </p>
            </div>
            <div className="grid-cell">
              <img src="/src/images/icon-mobile.png" />
              <h5>Mobile App</h5>
              <p>
                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.
              </p>
            </div>
            <div className="grid-cell">
              <img src="/src/images/icon-chart.png" />
              <h5>Search Engine Optimization</h5>
              <p>
                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.
              </p>
            </div>
            <div className="grid-cell">
              <img src="/src/images/icon-game.png" />
              <h5>Game Development</h5>
              <p>
                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.
              </p>
            </div>
            <div className="grid-cell">
              <img src="/src/images/icon-heart.png" />
              <h5>Made with Love</h5>
              <p>
                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.
              </p>
            </div>

          </div>
        </section>

        <section className="dark team">
          <div className="background-image"></div>
          <div className="container">
            <div className="title-block">
              <h3>Meat Our Amazing Team</h3>
              <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
              <hr />
            </div>
            <div className="grid">
              <div className="grid-cell">
                <img src="/src/images/profile.jpg" />
                <h5>Dami Adebaybo</h5>
                <h6>Front End Web Developer</h6>
              </div>
              <div className="grid-cell">
                <img src="/src/images/profile.jpg" />
                <h5>Dami Adebaybo</h5>
                <h6>Front End Web Developer</h6>
              </div>
              <div className="grid-cell">
                <img src="/src/images/profile.jpg" />
                <h5>Dami Adebaybo</h5>
                <h6>Front End Web Developer</h6>
              </div>
              <div className="grid-cell">
                <img src="/src/images/profile.jpg" />
                <h5>Dami Adebaybo</h5>
                <h6>Front End Web Developer</h6>
              </div>
            </div>
            <div className="hiring">
                 <p>Become part of our dream team, join us! </p>
                 <a href="#" className="btn-outline">We are Hiring</a>
            </div>
          </div>
        </section>

      </div>
    );
  }
}