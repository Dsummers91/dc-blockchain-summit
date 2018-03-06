import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import $ from 'jquery';

import splashImg from '../images/worldmap.png';
import compassImg from '../images/compassMap.png';
import UNHCRImg from '../images/UNHCR.png';
import fingerPrintImg from '../images/fingerPrintLogo.png';
import UNHCRLogoImg from '../images/UNHCR_logo.png';
import userLogoImg from '../images/users_logo.png';
import providerLogoImg from '../images/provider_logo.png';

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
                <img src={splashImg} className="splash-img-block" />
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col s12 m12 clean-row" onClick={() => {this.scrollDown()}}>
            <img src={compassImg} className="moveFromTopFade compass-img-block" />
            <img src={UNHCRImg} className="moveFromBottomFade UNHCR-img-block" />
            <img src={fingerPrintImg} className="moveFromBottomFade finger-print-img-block" />
          </div>

        </div>
        
        <div className="home-nav-area">
          <div className="row">

            <div className="col s1 m1" />
            <div className="col s10 m10">
              <div className="row">
                <div className="col s4 m4">
                  <Link to="/unhcr">
                  <div className="home-nav-card">
                    <div className="home-nav-box-top" />
                    <img src={UNHCRLogoImg} className="home-nav-img" />
                      <div className="home-nav-text">UNHCR ID</div>
                  </div>
                  </Link>
                </div>
                <div className="col s4 m4">
                  <Link to="/user">
                  <div className="home-nav-card">
                    <div className="home-nav-box-top" />
                    <img src={userLogoImg} className="home-nav-img" />
                    <div className="home-nav-text">User LogIn</div>
                  </div>
                  </Link>
                </div>

                <div className="col s4 m4">
                  <Link to="/provider">
                  <div className="home-nav-card">
                    <div className="home-nav-box-top" />
                    <img src={providerLogoImg} className="home-nav-img" />
                    <div className="home-nav-text">Provider LogIn</div>
                  </div>
                  </Link>
                </div>

              </div>
            </div>
            <div className="col s1 m1" />

          </div>
        </div>

      </div>
    );
  }
};

export default Home;
