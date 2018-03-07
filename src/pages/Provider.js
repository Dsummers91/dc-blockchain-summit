import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';

import { createFamilyWallet, getFamily } from "../utils/getFamilyWallet.js";
import { goals, completeTask } from '../utils/getGoalTracker';

import doctorImg from '../images/provider.png';
import personImg from '../images/person.png';
import fingerPrintImg from '../images/fingerPrint.png';
import eyeImg from '../images/eye.png';

class Provider extends Component {

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
            $(".provider-cross-one").hide();
            return( <img src={personImg} className="provider-click-face moveFromBottomFade" /> );
        }
    }
    displayFinger() {
        if(this.state.finger == true) {
            $(".provider-cross-two").hide();
            return( <img src={fingerPrintImg} className="provider-click-finger moveFromBottomFade" /> );
        }
    }
    displayIris() {
        if(this.state.iris == true) {
            $(".provider-cross-three").hide();
            return( <img src={eyeImg} className="provider-click-iris moveFromBottomFade" /> );
        }
    }

    completeTask() {
        goals("biometrics")
            .then((res) => {
                console.log(res[3].goal);
                completeTask("biometrics", res[2].goal)
                    .then((res) => {
                        console.log(res);
                        this.notify(res);
                    })
            })
    }
    notify(inputObj) {
        let hash = "txHash:" + inputObj;
        toast.success("Successfully Approved Task!", {
            position: toast.POSITION.TOP_CENTER
        });
        toast.info(hash, {
            position: toast.POSITION.TOP_CENTER
        });
    };
    displayGoal() {
        if(this.state.face == true && this.state.finger == true && this.state.iris == true) {
            return(
                <div className="provider-goal-section">
                    <div className="row">
                        <div className="col s2 m2" />
                        <div className="col s8 m8 provider-hash-text">User Address: 0x3931e9f7ffd0a5a7b4204e115e2f40312a4129fd2fea1ec8ffed7325bc46f7ad</div>
                        <div className="col s2 m2" />
                    </div>
                    <div className="row">
                        <div className="col s1 m1" />
                        <div className="col s10 m10 provider-goal-block">
                            <div className="row">
                                <div className="col s1 m1" />
                                <div className="col s9 m9">
                                    <div className="provider-goal-text">
                                    [HealthCare] Psychotherapy for PTSD.
                                    </div>
                                </div>
                                <div className="col s2 m2">
                                    <form className="provider-check-box">
                                        <p>
                                            <input type="checkbox" id="test5" />
                                            <label htmlFor="test5"></label>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s1 m1" />
                    </div>
                    <div className="row">
                        <div className="col s4 m4" />
                        <div className="col s4 m4">
                            <a className="waves-effect waves-light btn light-blue provider-submit-btn" onClick={() => this.completeTask()}>Update User Wallet</a>
                        </div>
                        <div className="col s4 m4" />
                    </div>
                </div>
            )
        }
    }

    componentDidMount() {
        $('html,body').animate({ scrollTop: 0 }, 'fast');
    }

    render() {
        return (
            <div className="container provider-page-bg">
                <ToastContainer autoClose={100000} />
                <div className="row">
                    <div className="col s3 m3" />
                    <div className="col s6 m6">
                        <div className="unhcr-img-section moveFromTopFade">
                            <img src={doctorImg} className="unhcr-img-block" />
                        </div>
                    </div>
                    <div className="col s3 m3" />
                </div>
                <div className="provider-main-text">Biometric Identification Check</div>
                <div className="row">
                    <div className="col s2 m2">
                        <div className="provider-input-box" onClick={() => this.clickFace()}>
                            <div className="provider-input-plus provider-cross-one">+</div>
                        </div>
                        {this.displayFace()}
                    </div>
                    <div className="col s2 m2">
                        <div className="provider-input-text">Facial recognition</div>
                    </div>
                    <div className="col s2 m2">
                        <div className="provider-input-box" onClick={() => this.clickFinger()}>
                            <div className="provider-input-plus provider-cross-two">+</div>
                        </div>
                        {this.displayFinger()}
                    </div>
                    <div className="col s2 m2">
                        <div className="provider-input-text">Fingerprint</div>
                    </div>
                    <div className="col s2 m2">
                        <div className="provider-input-box" onClick={() => this.clickIris()}>
                            <div className="provider-input-plus provider-cross-three">+</div>
                        </div>
                        {this.displayIris()}
                    </div>
                    <div className="col s2 m2">
                        <div className="provider-input-text">Iris / Retina Pattern</div>
                    </div>
                </div>

                {this.displayGoal()}

            </div>
        )
    }
}

export default Provider;