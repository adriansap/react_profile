import React, { useState } from "react";
// import _ from 'lodash';
// import Orderalpha from './Orderalpha'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"




// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Main() {
    const [queryValue, setValue] = useState('') //until setValue sets a value, queryValue = ''

    // const thingy = { 1: '10', 2: '20', 3: '30', 4: '40' }
    // const thingy2 = { a: '1', b: '2', 1: '100' }
    // const thing = [...thingy, 6,7,8] // [10,20,30,40,6,7,8]
    // console.log("fancy", { ...thingy2, ...thingy })
    // const state = useState('')
    // const queryValue = state[0];
    // const setValue = state[1];

    // console.log("props.employees[0].image" + props.employees[0].image)

    return (
        <div>
            <Header />
            <Footer />

            <div class="container">
                <div class="row" id="row2">

                    <div class="col-md-3">

                        <div id="aboutme">About Me</div>
                    </div>
                    <div class="col-md-12">
                        <hr></hr>
                    </div>
                </div>
                <div class="row">

                    <div class="col-md-12" id="row3fix">
                        <div class="media">
                            <img src="http://www.placehold.it/150x150" class="mr-3" alt="..." />
                            <div class="media-body">
                                <h5 class="mt-0"></h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
            purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus, commodi quam adipisci optio sapiente earum nihil sequi
            culpa iste voluptas voluptate eos ab repudiandae, accusantium reprehenderit cum impedit non!
            Suscipit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo optio aliquam nam
            excepturi quae, laborum corrupti adipisci soluta aperiam velit tempore? Minus, dolor. Velit
            dignissimos ratione consequatur eius magnam reprehenderit! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Consequuntur, soluta nam rem molestias tenetur, odit facere iste
            veniam repellendus explicabo est iure culpa aut repellat asperiores veritatis quaerat nisi
            aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequuntur quia
            minima. Maiores consequatur culpa repellat! Rem expedita vitae ullam, quaerat minima quas magni
            dolor inventore laborum mollitia dignissimos eaque! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Harum soluta est voluptates. Iure illo ducimus alias obcaecati hic debitis
            doloribus itaque repellendus, ea rerum nostrum tempora corporis nihil illum ad?
        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Main;



