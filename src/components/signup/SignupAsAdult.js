import React, { Component } from 'react'
import {ProductConsumer} from '../../context'
// import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ButtonContainer} from '../Button'
import Verify from '../verify/Verify'
// import {Form} from 'react-bootstrap'

export default class SignUpAsKid extends Component {
    render() {
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <ProductConsumer>
                    {()=>(
                        <div className="" style={{alignItems:'center'}}>
                            <div style={{alignItems:'center'}} id="fullnameField" className="form-layout">
                                <div className="formLabel form-layout">
                                    <label for="fullname" className="">Email</label>
                                </div>
                                <input className="text-center inputs-boring signup-inputs" type="email" id="email" placeholder="Enter email address" autocomplete="off" />
                            </div>
                            <div id="fullnameField" className="form-layout">
                                <div className="formLabel form-layout">
                                    <label for="fullname" className="">Password</label>
                                </div>
                                <input className="text-center inputs-boring signup-inputs" type="password" id="password" placeholder="Enter password" autocomplete="off" />
                            </div>
                            <div id="fullnameField" className="form-layout">
                                <div className="formLabel form-layout">
                                    <label for="fullname" className="">Name</label>
                                </div>
                                <input className="text-center inputs-boring signup-inputs" type="text" id="text" placeholder="Enter Name" autocomplete="off" />
                            </div>
                            <br/>
                            <p>Please: {" "}<Verify/></p>
                            <br/>
                        </div>
                    )}
                </ProductConsumer>
                <div className="card-footer text-capitalize d-flex justify-content-between">
                    <ButtonContainer>Sign Up</ButtonContainer>
                </div>
            </div>
        </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition:all 1s linear;
    }
    .card.footer{
        background:transparent;
        border-top: transparent;
        transition:all 1s linear;
    }
    .img-container{
        position:relative;
        overflow:hidden;
    }
    .card-img-top{
        transition:all 1s linear;
    }
    .cart-btn{
        position:absolute;
        bottom:0;
        right:0;
        padding:0.2rem 0.4rem;
        background:var(--lightBlue);
        border:none;
        color:var(--mainWhite);
        font-size:1.4rem;
        border-radius:0.5rem 0 0 0;
        transform: translate(100%,100%);
        transition:all 1s linear;
    }
    .img-container:hover .cart-btn{
        transform:translate(0,0);
    }
    .cart-btn:hover{
        color:var(--mainBlue);
        cursor:pointer;
    }
`