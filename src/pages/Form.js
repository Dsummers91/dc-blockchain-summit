import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';

import { createFamilyWallet, getFamily } from "../utils/getFamilyWallet.js";
import { goals, completeTask } from '../utils/getGoalTracker';

import personImg from '../images/person.png';
import fingerPrintImg from '../images/fingerPrint.png';
import eyeImg from '../images/eye.png';

class Form extends Component {
    
    state = {
        face: null,
        finger: null,
        iris: null
    }

    clickFace() {this.setState({face: true}) };
    clickFinger() {this.setState({finger: true}) };
    clickIris() {this.setState({iris: true}) };

    displayFace() {
        if(this.state.face == true) {
            return( <img src={personImg} className="form-img-block moveFromTopFade" /> );
        }
    }
    displayFinger() {
        if(this.state.finger == true) {
            return( <img src={fingerPrintImg} className="form-img-block moveFromTopFade" /> );
        }
    }
    displayIris() {
        if(this.state.iris == true) {
            return( <img src={eyeImg} className="form-img-block moveFromTopFade" /> );
        }
    }
    submitForm() {
        // hell0 Jonath0n =p
        createFamilyWallet("familyName", ["ubuntusfd"+Math.floor(Math.random() * 1000)])
            .then((res) => {
                console.log(res);
                this.notify(res);
            })
    }

    notify(inputObj) {
        let hash = "txHash:" + inputObj;
        toast.success("Wallet Creation Successful!", {
            position: toast.POSITION.TOP_CENTER
        });
        toast.info(hash, {
            position: toast.POSITION.TOP_CENTER
        });
    };

    
    render() {
        return (
            <div>
                <ToastContainer autoClose={100000} />
                <h4 className="unhcr-form-main-text">Digital Identification Form</h4>
                <form className="unhcr-form-section moveFromBottomFade delay200">
                    <div className="row">
                        <div className="input-field col s6 m6">
                            <label htmlFor="first_name">First Name</label>
                            <input defaultValue="Petria" id="first_name" type="text" className="validate" />
                        </div>
                        <div className="input-field col s6 m6">
                            <label htmlFor="last_name">Last Name</label>
                            <input defaultValue="Fragmen Lopse" id="last_name" type="text" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4 m4">
                            <label htmlFor="estimated_age">Estimated Age</label>
                            <input defaultValue="31" id="estimated_age" type="text" className="validate" />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="height">Height</label>
                            <input defaultValue="163 cm" id="height" type="text" className="validate" />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="weight">Weight</label>
                            <input defaultValue="50 kg" id="weight" type="text" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4 m4">
                            <label htmlFor="gender">Gender</label>
                            <input defaultValue="Female" id="gender" type="text" className="validate" />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="pregnant">Pregnant</label>
                            <input defaultValue="Yes" id="pregnant" type="text" className="validate" />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="disabled">Disabled</label>
                            <input defaultValue="No" id="disabled" type="text" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6 m6">
                            <label htmlFor="victim">Victim of torture, rape or other serious violence act?</label>
                            <input defaultValue="Yes" id="victim" type="text" className="validate" />
                        </div>
                        <div className="input-field col s6 m6">
                            <label htmlFor="household">Is this person from a single-headed household?</label>
                            <input defaultValue="No" id="household" type="text" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6 m6">
                            <label htmlFor="head">Gender of the household head?</label>
                            <input defaultValue="Male" id="head" type="text" className="validate" />
                        </div>
                        <div className="input-field col s6 m6">
                            <label htmlFor="educational">Educational attainment of household head?</label>
                            <input defaultValue="6 Years" id="educational" type="text" className="validate" />
                        </div>
                    </div>
                </form>
                
                <h4 className="unhcr-form-main-text">Biometric Identification</h4>
                <form className="unhcr-diometric-section">
                    <div className="row">
                        <div className="col s1 m1" />
                        <div className="col s3 m3">
                            <div className="unhcr-diometric-text card depth-1" onClick={() => this.clickFace()}>Facial recognition</div>
                            {this.displayFace()}
                        </div>
                        <div className="col s4 m4">
                            <div className="unhcr-diometric-text card depth-1" onClick={() => this.clickFinger()}>Fingerprint</div>
                            {this.displayFinger()}
                        </div>
                        <div className="col s3 m3">
                            <div className="unhcr-diometric-text card depth-1" onClick={() => this.clickIris()}>Iris / Retina Pattern</div>
                            {this.displayIris()}
                        </div>
                        <div className="col s1 m1" />
                    </div>
                </form>

                <div className="row">
                    <div className="col s4 m4" />
                    <div className="col s4 m4">
                        <a className="waves-effect waves-light btn light-blue form-submit-btn" onClick={() => {this.submitForm()}}>Create Family Wallet</a>
                    </div>
                    <div className="col s4 m4" />
                </div>

            </div>
        )
    }
}

export default Form;