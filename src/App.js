import React, { Component } from 'react';
import CartHeader from "./components/CartHeader"
import CartFooter from "./components/CartFooter"
import CartItem from "./components/CartItem"
import AddItem from "./components/AddItem"
import './App.css';

class App extends Component {
  state = {
    cartItemList: [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    form: {
      productSelected: "", 
      quantitySelected: ""
    }
  }
  _changeProductSelected = (productName) => {
    this.setState(prevState => {
        return {
          form: {
          ...prevState.form,
          productSelected: productName
          }
        }
    })
  }
  _changeQuantity = (quant) => {
    this.setState(prevState => {
      return {
        form: {
          ...prevState.form,
          quantitySelected: quant
        }
      }
    })
  }
  _updateShoppingCart = (someParams) => {
    console.log(someParams)
    this.setState(prevState => {
      return {
        cartItemList: [
          ...prevState.cartItemList,
          someParams
        ]
      }
    })
  }
  render() {
    console.log(this._updateShoppingCart)
    return (
      <>
        <CartHeader />
        <CartItem cartItemList={this.state.cartItemList}/>
        <AddItem updateCart={this._updateShoppingCart} products={this.state.products} changeQuantity={this._changeQuantity} forms={this.state.form} changeProductSelected={this._changeProductSelected}/>
        <CartFooter year={2018} />
      </>
    )
  }
}

export default App;
