import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';

function Intropage() {
    return (
      
        <div>
          <nav>
            <ul>
              <li>
                <Link to={"/Home"}>Home</Link>
              </li>
              <li>
                <Link to={"/About"}>About</Link>
              </li>
              <li>
                <Link to={"/Profile"}>Profile</Link>
              </li>
            </ul>
          </nav>
        </div> 
      
    );
  }
  
  export default Intropage;