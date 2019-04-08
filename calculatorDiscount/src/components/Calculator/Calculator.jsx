import './Calculator.css';

import React, { Component } from 'react';
import Product from 'components/Product';
import Basket from 'components/Basket';

export default class Calculator extends Component {
    static defaultProps = {
       
    } 

    constructor (props) {
        super(props);
        this.state = {
            allProduct: [
                {
                    productName: 'toto',
                    productPrice: '100',
                },
                {
                    productName: 'tutu',
                    productPrice: '200',
                },
                {
                    productName: 'tata',
                    productPrice: '400',
                },
            ],
            isNew: false,
        }
    }

    handleProduct = (newProduct) => {
        if (newProduct.productName && this.validationPrice(newProduct.productPrice)) {
            this.setState((prevState) => ({
                allProduct: prevState.allProduct.concat([newProduct]),
                isNew: true,
            }));
        }
    }

    validationPrice = (productPrice) => {
        if (!(/[0-9]/.test(productPrice))) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        const { allProduct, isNew } = this.state;
        return (
            <div className="Calculator">
                <Product getNewProduct={this.handleProduct}/>
                <Basket listOfProducts={allProduct} reRender={isNew}/>
            </div>
        )
    }
}
