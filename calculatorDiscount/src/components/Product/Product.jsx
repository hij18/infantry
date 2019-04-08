import './Product.css';

import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Product extends Component {
    static defaultProps = {
       
    }

    constructor (props) {
        super(props);
        this.state = {
            productName: '',
            productPrice: '',
        }
    }

    handleFormValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    addNewProduct = (event) => {
        event.preventDefault();
        const { getNewProduct } = this.props;
        if (!(/[0-9]/.test(this.state.productPrice))) {
            alert(`${this.state.productPrice} не является числом. Введите, пожалуйста, цену продукта цифрами (от 0 до 9).`);
        }
        this.setState({ productName: '' });
        this.setState({ productPrice: '' });
        getNewProduct(this.state);
    }
    
    render() {
        const { productName, productPrice } = this.state;
        return (
            <div className="Product">
                <h2>Добавить продукт</h2>
                <Form action="#" className="newProductForm" >
                    <FormGroup className="newProd">
                        <Label htmlFor="name">Продукт</Label><br/>
                        <Input value={productName} id="name" name="productName" type="text" placeholder="Впишите название"  onChange={this.handleFormValue}  />
                    </FormGroup>
                    <FormGroup className="price">
                        <Label htmlFor="price">Цена</Label><br/>
                        <Input value={productPrice} id="price" name="productPrice" type="text" placeholder="Укажите цену продукта" onChange={this.handleFormValue}  />
                    </FormGroup>
                    <Button onClick={this.addNewProduct} outline color="primary">Отправить</Button>{' '}
                </Form>
            </div>
        )
    }
}
