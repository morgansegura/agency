import React, { Component } from "react";
import { browserHistory } from 'react-router';
export default class Footer extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (

      <footer id="footer" className="dark">

        <div className="background-image"></div>

        <div className="footer container">
          <div className="footer-flex">
            <div className="info">
              <div className="logo">
                <span>
                  <img src='/src/images/icon-logo.png' />
                </span>
                <a href="#">agency</a>
              </div>
              <p>
              <span className="break">lorem quis bibendum auctor, nisi elit</span>
                <span className="break">consequat ipsum, nec sagittis sem nibh elit.</span> 
                <span className="break">Duis sed odio sit amet auctror a ornare odio</span> 
                <span className="break">non mauris vitae erat in elit</span>
              </p>
            </div>
            <div className="contact-info">
              <h4>Our Studio</h4>
              <i className="fa fa-map-marker"></i>
              <p>
                <span className="break">Ruko cucruk, Jl. Radio luar dalem jos</span>
                <span className="break">No.12 - 13, Kalideres - Jakarta Barat</span>
                <span className="break">11480 - Indonesia</span>
              </p>
              <i className="fa fa-phone"></i>
              <p>(+62) 21-2224 3333</p>
            </div>
            <div className="social-media">
              <h4>Stay in Touch</h4>
              <form>
                <input placeholder="Subscribe to our newsletter"/>
                <button>
                  <i className="fa fa-paper-plane-o"></i>
                </button>
              </form>
              <div className="media-block">
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="">                
                  <i className="fa fa-youtube-play"></i>
                </a>
              </div>                    
            </div>               
          </div>
          <div className="copyright">
            <div className="links">
              <a href="">Help</a>
              <a href="">Terms & Conditions</a>
              <a href="">Privacy</a>
            </div>                
            <p>Copyright &copy; 2017 - Agency Creative</p>
          </div>           
        </div>        
      </footer>
    );
  }
}