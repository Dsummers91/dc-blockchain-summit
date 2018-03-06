import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import $ from 'jquery';

import splashImg from '../images/worldmap.png';
import compassImg from '../images/compassMap.png';
import UNHCRImg from '../images/UNHCR.png';
import fingerPrintImg from '../images/fingerPrintLogo.png';
// import payment from '../assets/images/payment.png';

class Home extends Component {
  componentDidMount() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  }
  scrollDown() {
    $('html,body').animate({ scrollTop: 650 }, 'slow');
  }

  render() {
    return (
      <div className="home-page-bg">

        <div className="row">
          <div className="col s12 m12 clean-row">
            <div className="splash-img-section">
                <img src={splashImg} className="moveFromBottomFade splash-img-block" />
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col s12 m12 clean-row">
            <img src={compassImg} className="moveFromTopFade compass-img-block" />
            <img src={UNHCRImg} className="moveFromBottomFade UNHCR-img-block" />
            <img src={fingerPrintImg} className="moveFromBottomFade finger-print-img-block" />
          </div>
        </div>
        
        {/* 
        <div className="home-intro-text-block">
          <div className="row">
            <div className="col s1 m1" />
            <div className="col s10 m10">
              <div className="home-intro-text">
              <div className="home-intro-text-main">GRANT</div>
              GRANT provides transparency and accountability for public funding. Current funding mechanisms are inefficient, opaque, and centralized. GRANT allows curators to source proposals and fund grants through elastic capital allocation.</div>
            </div>
            <div className="col s1 m1" />
          </div>
        </div>
        
        <div className="home-nav-area">
          <div className="row">

            <div className="col s1 m1" />
            <div className="col s10 m10">
              <div className="row">
                <div className="col s4 m4">
                  <Link to="/grant">
                  <div className="home-nav-card">
                    <div className="home-nav-box-top" />
                    <img src={spaceship} className="home-nav-img" />
                      <div className="home-nav-text">Propose Grant</div>
                  </div>
                  </Link>
                </div>
                <div className="col s4 m4">
                  <Link to="/fund">
                  <div className="home-nav-card">
                    <div className="home-nav-box-top" />
                    <img src={payment} className="home-nav-img" />
                    <div className="home-nav-text">Fund Projects</div>
                  </div>
                  </Link>
                </div>

                <div className="col s4 m4">
                  <Link to="/feat">
                  <div className="home-nav-card">
                    <div className="home-nav-box-top" />
                    <img src={gears} className="home-nav-img" />
                    <div className="home-nav-text">Feats Dashboard</div>
                  </div>
                  </Link>
                </div>

              </div>
            </div>
            <div className="col s1 m1" />

          </div>
        </div> */}

      </div>
    );
  }
};

export default Home;
