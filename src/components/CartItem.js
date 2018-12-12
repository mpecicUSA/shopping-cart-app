import React, { Component } from "react"
import CartItems from "./CartItems"
import { ListGroup, ListGroupItem } from "reactstrap"

class CartItem extends Component {
    
    render(){
    let cartItemListArray = this.props.cartItemList
    // console.log(cartItemListArray)
    let mapped = cartItemListArray.map(item => <CartItems key={item.id} cartItems={item}/>)

        return(
            <div className="container">
                <h1>Cart Items</h1>
                <ListGroup>
                    <div className="row">
                        <ListGroupItem className="col-md-8">
                            Product Name
                        </ListGroupItem>
                        <ListGroupItem className="col-md-2">
                            Price
                        </ListGroupItem>
                        <ListGroupItem className="col-md-2">
                            Quantity
                        </ListGroupItem>
                    </div>
                </ListGroup>
                {mapped}
            </div>
        )
    }
}

export default CartItem;


