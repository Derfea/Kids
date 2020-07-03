import React, { Component } from 'react'
import l from '../download.jpg'
import p from '../download (1).jpg'
import {Link} from 'react-router-dom'
export default class SignUp extends Component {
    render() {
        return (
            <div className="ml-auto" style={{alignItems:'center'}}>
                <div class="carousel-item">
                    <img src={l} alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>...</h5>
                            <p>...</p>
                        </div>
<div class="carousel-item">
  <img src="..." alt="..." />
  <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
</div>
</div>
  </div>
                {/* <select id="dropdown-basic-button" title="Dropdown button">
                    <option href="#/action-1">Action</option>
                    <option href="#/action-2">Another action</option>
                    <option href="#/action-3">Something else</option>
                </select> */}
                    <Link to="/signup/children">
                        <img height="390" width="430" src={l} alt="cool"/>
                        <h2>You can either signup as a kid</h2>
                    </Link>
                    <Link to="/signup/adult">
                        <img height="390" width="430" src={p} alt="cool"/>
                        <h2>You can either signup as a adult</h2>
                    </Link>
            </div>
        )
    }
}