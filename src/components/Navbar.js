import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from './Kids Wish.png'
import {FiShoppingCart} from 'react-icons/fi'
import {ButtonContainer} from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="bg-primary navbar navbar-expand-sm navbar-dark px-sm-5">   
            {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <img src={logo} alt="cool-icon" height="90" width="90" />
                </Link>   
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link text-white">Product</Link>
                    </li>
                </ul> 
                <Link className="ml-auto" to="/cart">
                    <ButtonContainer className="text-white">
                        <span className="mr-2">
                            <FiShoppingCart/>{" "}
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>            
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
`