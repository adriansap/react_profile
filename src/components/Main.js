import React, { useState } from "react";
// import _ from 'lodash';
// import Orderalpha from './Orderalpha'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";
import Header from "./Header"




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
        <Header />
        

            
       
    );
}

export default Main;



