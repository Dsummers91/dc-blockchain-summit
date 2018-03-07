import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import $ from 'jquery';

import Form from './Form';

import UNHCRTextImg from '../images/UNHCR_text.png';

class UNHCR extends Component {

    componentDidMount() {
      $('html,body').animate({ scrollTop: 0 }, 'fast');
    }

    render() {
        return (
          <div className="container unhcr-page-bg">
            
            <div className="row">
                <div className="col s3 m3" />
                <div className="col s6 m6">
                    <div className="unhcr-img-section moveFromTopFade">
                        <img src={UNHCRTextImg} className="unhcr-img-block" />
                    </div>
                </div>
                <div className="col s3 m3" />
            </div>
            
            <div className="row">
                <div className="col s1 m1" />
                <div className="col s10 m10">
                    <Form />
                </div>
                <div className="col s1 m1" />
            </div>

          </div>
        )
    }
};

export default UNHCR;
