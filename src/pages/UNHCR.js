import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import $ from 'jquery';

import Form from './Form';
import UNHCRTextImg from '../images/UNHCR_text.png';

class UNHCR extends Component {

    state = {
        demoClicked: null,
        formClicked: null
    }

    componentDidMount() {
      $('html,body').animate({ scrollTop: 0 }, 'fast');
    }
    clickUsers() { this.setState({demoClicked: true}) };
    clickForm() { this.setState({formClicked: true}) }
    displayUsers() {
        if(this.state.demoClicked == true) {
           return(            
                <div className="row moveFromBottomFade display-users-section">
                    <div className="col s2 m2 user-tag" onClick={() => this.clickForm()}>Add Member</div>
                    <div className="col s1 m1" />
                    <div className="col s2 m2 user-tag-lite" onClick={() => this.clickForm()}>Add Member</div>
                    <div className="col s1 m1" />
                    <div className="col s2 m2 user-tag-lite" onClick={() => this.clickForm()}>Add Member</div>
                    <div className="col s1 m1" />
                    <div className="col s2 m2 user-tag-lite" onClick={() => this.clickForm()}>Add Member</div>
                    <div className="col s1 m1" />
                </div>
           ) 
        }
    }
    displayForm() {
        if(this.state.formClicked == true) {
            return(     
                <div>
                    <Form />
                </div>       
            ) 
         }
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

            <h4 className="unhcr-main-text">Select which type of ID to Create</h4>
                <div className="row">
                    <div className="col s2 m2" />
                    <div className="col s2 m2">
                        <div className="unhcr-input-box" onClick={() => this.clickUsers()}>
                            <div className="unhcr-input-plus">+</div>
                        </div>
                    </div>
                    <div className="col s2 m2">
                        <div className="unhcr-input-text">Create Demo Family</div>
                    </div>
                    <div className="col s2 m2">
                        <div className="unhcr-input-box">
                            <div className="unhcr-input-plus">+</div>
                        </div>
                    </div>
                    <div className="col s2 m2">
                        <div className="unhcr-input-text">Create Demo Indivdiual</div>
                    </div>
                    <div className="col s2 m2" />
            </div>      

            <div className="row">
                <div className="col s1 m1" />
                <div className="col s10 m10">
                    {this.displayUsers()}
                </div>
                <div className="col s1 m1" />
            </div>

            <div className="row">
                <div className="col s1 m1" />
                <div className="col s10 m10">
                    {this.displayForm()}
                </div>
                <div className="col s1 m1" />
            </div>

          </div>
        )
    }
};

export default UNHCR;
