<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React, { useState } from "react";
import Reviews from "./Reviews";
import "../styles/App.css"

const App = ()=>{

    let [currid,setCurrid] = useState(1);
    
    function btnclicked(e,ip) {
        if(ip===-1)
        {
            if(currid===1)
            {
               setCurrid(4);
               return;
            }
            setCurrid(currid-1);
        }
        else {
            if(currid===4)
            {
               setCurrid(1);
               return;
            }
            setCurrid(currid+1);
        }
    }

    function randombutton (e) {
       let val=parseInt(Math.random()*4+1);
       setCurrid(val)
    }

    return(<div>
    <h1 id="review-heading">Our Reviews</h1>
    <div className="review">
        <button className="random-btn" onClick={randombutton}>Surprise Me</button>
        <div className="inner-box">
        <button onClick={(e)=>{btnclicked(e,-1)}} className="prev-btn">Previous</button>
        <Reviews currid={currid} setId={setCurrid}/>
        <button onClick={(e)=>{btnclicked(e,1)}} className="next-btn">Next</button>
        </div>
    </div>
    </div>)
}

export default App;