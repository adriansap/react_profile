import React, { useState } from "react";
// import _ from 'lodash';
// import Orderalpha from './Orderalpha'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"

function Portfolio() {

    return (
        <div>
        <Header />
        
        <div class="container">
            
            <div class="row" id="row2">
                <div class="col-md-3">
                    <div id="aboutme">Portfolio</div>
                </div>

            </div>
            <hr></hr>

            <div class="row">
                <div class="col-md-12">
                </div>
            </div>
           
            <div class="row">
                <div class="col-md-4">
                    <a href="https://adriansap.github.io/PasswordGenerator/">
                        <img src={process.env.PUBLIC_URL + '/password-gen-pic.PNG'} width="150px" height="150px" class="rounded float-left" alt="..." />
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="https://adriansap.github.io/javascript_timed_quiz/">
                        <img src="./javascript-timed-quiz.PNG" width="150px" height="150px" class="rounded float-left"
                            alt="..." />
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="https://adriansap.github.io/javascript_scheduler/">
                        <img src="./javascript-workday-planner.PNG" width="150px" height="150px" class="rounded float-left"
                            alt="..." />
                    </a>
                </div>

            </div>
            <div class="row">
                <p></p>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <a href="https://adriansap.github.io/javascript_weatherapp">
                        <img src="./javascript-weather-app.PNG" width="150px" height="150px" class="rounded float-left"
                            alt="..." />
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="https://adriansap.github.io/hipGrandpa/">
                        <img src="./hipGrandpa-app.PNG" width="150px" height="150px" class="rounded float-left" alt="..." />
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="https://github.com/adriansap/NodeJS_readme_generator">
                        <img src="./nodejs-readme-generator.PNG" width="150px" height="150px" class="rounded float-left"
                            alt="..." />
                    </a>
                </div>
            </div>

            <div class="row">
                <p></p>
            </div>
            <div class="row">


                <div class="col-md-4">
                    <a href="https://github.com/adriansap/javascript_profile_generator">
                        <img src="./Capture-Profile-generator.PNG" width="150px" height="150px" class="rounded float-left"
                            alt="..." />
                    </a>
                </div>


            </div>
        </div>

        <Footer />
        </div>

    )




}

export default Portfolio;