import React, { useState } from "react";
// import _ from 'lodash';
// import Orderalpha from './Orderalpha'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";

function Header() {
    return (
        // <div class="md-form active-pink active-pink-2 mb-3 mt-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Adrian Saporta</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/">About <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/Portfolio">Portfolio</a>
                    <a class="nav-item nav-link" href="/Contact">Contact</a>
                    <a class="nav-item nav-link disabled" href="#">Disabled</a>
                </div>
            </div>
        </nav>
    )
}

export default Header;