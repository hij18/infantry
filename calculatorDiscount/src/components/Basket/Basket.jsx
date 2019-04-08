import './Basket.css';

import React, { Component } from 'react';
import { Button, Table, FormGroup, Label, Input } from 'reactstrap';

export default class Basket extends Component {
    static defaultProps = {
       
    }

    constructor (props) {
        super(props);
        this.state = {
            discount: '',
            sumPrice: 0,
            extraDiscount: 0,
            maxProduct: 0, //Хранит индекс самого дорогого товара
        }
    }

    handleDiscountValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    addDiscount = (event) => {
        if (!(/[0-9]/.test(this.state.discount) && (0 < this.state.discount < 100 ))) {
            alert(`Вы ввели: ${this.state.discount}. Введите, пожалуйста, размер скидки цифрами (от 0 до 9). Скидка должна быть меньшее 100 и больше 0.`);
            this.setState({ discount: '' });
        }
        this.setState({
            sumPrice: this.countDiscount(),
            extraDiscount: this.getExtraDisc(),
            maxProduct: this.getMaxIndex(),
        });
        console.log('Tut');
    }

    // Находим множитель для определения суммы скидки для каждого товара
    countDiscount = () => {
        this.state.sumPrice = 0;
        const { listOfProducts } = this.props;
        listOfProducts.forEach(element => {
            this.state.sumPrice += +(element.productPrice);
        });
        return this.state.discount / this.state.sumPrice;
    }

    // Получаем остаток от пропорционального распределения скидки
    getExtraDisc = () => {
        let res = 0;
        const { listOfProducts } = this.props;
        listOfProducts.forEach(product => {
            res += Math.floor(product.productPrice*(this.state.discount/this.state.sumPrice))
        });
        return this.state.discount - res;
    }

    //Находим индекс самого большого элемента массива
    getMaxIndex = () => {
        const { listOfProducts } = this.props;
        let index = 0;
        let max = listOfProducts[0].productPrice;
        for (let i = 1; i < listOfProducts.length; i++) {
            if (listOfProducts[i].productPrice > max) {
                max = listOfProducts[i].productPrice;
                index = i;
            }
        }
        return index;
    }

    render() {
    const { listOfProducts } = this.props;
    const { discount, sumPrice, extraDiscount, maxProduct} = this.state;
        return (
            <div className="Basket">
                <h2>Корзина</h2>
                <Table>
                    <thead>
                    <tr>
                        <th>Продукт</th>
                        <th>Цена</th>
                        <th>Цена со скидкой</th>
                    </tr>
                    </thead>
                    <tbody>
                        {listOfProducts.map((product, idx) => <tr key={idx} >
                            <td>{product.productName}</td>
                            <td>{product.productPrice}</td>
                            <td>{idx===maxProduct ? (product.productPrice - Math.floor(product.productPrice*sumPrice))-extraDiscount 
                            : (product.productPrice - Math.floor(product.productPrice*sumPrice))}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <div className="discContainer">
                <FormGroup className="discount">
                    <Label htmlFor="disc">Применить скидку: </Label>
                    <Input value={discount} id="disc" name="discount" type="text" placeholder="7" onChange={this.handleDiscountValue}  />
                </FormGroup>   
                    <Button onClick={this.addDiscount} outline color="primary">Применить</Button>{' '}
                </div>
            </div>
        )
    }
}
