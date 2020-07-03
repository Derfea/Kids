import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import{Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id,title,price,info,company,img,inCart} = value.detailProduct
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-primary text-uppercasae text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price : <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <h2 className="text-capitalize font-weight-bold mt-3 mb-0">
                                        info:
                                    </h2>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    <div>
                                    <Link to="/"><ButtonContainer>Back to products</ButtonContainer></Link>{" "}
                                    <ButtonContainer cart disabled={inCart?true:false} onClick={()=>{
                                        value.addToCart(id)
                                        value.openModal(id)
                                    }} >{inCart?'in cart' : 'Add to cart'}</ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}