import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Calculator from 'components/Calculator';
import Basket from 'components/Basket';
import Product from 'components/Product';


class App extends Component {
    render() {
        return (
            <div>
                <Calculator>
                    
                </Calculator> 
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)