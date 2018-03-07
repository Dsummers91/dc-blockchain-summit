import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import $ from 'jquery';

import { createFamilyWallet, getFamily } from "../utils/getFamilyWallet.js";
import { goals, completeTask } from '../utils/getGoalTracker';

import phoneCaseImg from '../images/phoneCase.png';
import fingerPrintImg from '../images/fingerPrintLogo.png';
import openWalletImg from '../images/openWallet.png';

class Phone extends Component {
    
    state = {
        login: null,
        user: null
    }

    componentDidMount() {
        getFamily("Huxtables")
        .then((res) => {
            console.log(res);
            this.setState({user: res});
        })
    }

    logIn() {
        // alert("submited!!!");
        this.setState({login: true});
    }
    displayLogIn() {
        if(this.state.user) {
            let money = this.state.user.balance.c[0] / 1000;
            return(
                <div className="row">
                    <div className="col s12 m12">
                        <div className="phone-user-text moveFromTopFade">Head Of Household Address: </div>
                        <div className="phone-user-text-address moveFromTopFade delay200">{this.state.user.headOfHouseholdAddress}</div>
                        <div className="phone-user-balance-head moveFromTopFade">Balance: {money} ETH</div>

                        {this.state.user.goals.map((e,i,a) => {
                            if(e.isComplete) {
                                return(
                                <div className="phone-user-goal-text moveFromBottomFade" key={i}>
                                    <form>
                                        <input type="checkbox" id="test6" defaultChecked />
                                        <label htmlFor="test6" className="phone-text-color">{e.goal}</label>
                                    </form>
                                </div>
                                )
                            } else {
                                return(<div className="phone-user-goal-nope moveFromBottomFade" key={i}>{e.goal}</div>)
                            }
                        })}
                    </div>
                </div>
            )
        }
    }

    renderPhone() {
        if(this.state.login == null) {
            return(
                <div className="phone-login-section">
                    <img src={fingerPrintImg} className="phone-finger-print moveFromTopFade" />
                    <div className="row">
                        <form className="phone-form-section">
                            <div className="phone-login-text moveFromTopFade delay200">User LogIn</div>
                            <div className="input-field col s12 m12 moveFromBottomFade">
                                <label htmlFor="user_name">User Name</label>
                                <input defaultValue="PetriaFP" id="user_name" type="text" className="validate" />
                            </div>
                            <div className="input-field col s12 m12 moveFromBottomFade">
                                <label htmlFor="password">Password</label>
                                <input defaultValue="**********" id="password" type="password" className="validate" />
                            </div>
                        </form>
                        <div>
                        </div>
                    </div>
                    <img src={openWalletImg} className="phone-open-wallet moveFromBottomFade" onClick={() => this.logIn()} />
                </div>
            )
        }else if(this.state.login == true) {
            return(
                <div className="phone-login-section">
                    {this.displayLogIn()}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s4 m4" />
                    <div className="col s4 m4">
                        <img src={phoneCaseImg} className="phone-case-section" />
                        <div className="row">
                            <div className="col s2 m2" />
                            <div className="col s8 m8">
                                {this.renderPhone()}
                            </div>
                            <div className="col s2 m2" />
                        </div>
                    </div>
                    <div className="col s4 m4" />
                </div>
            </div>
        );
    }
};
  
export default Phone;
  