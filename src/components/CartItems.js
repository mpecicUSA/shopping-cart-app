import React, { Component } from "react"
import { ListGroup, ListGroupItem } from "reactstrap"


class CartItems extends Component {
    render(){
        // console.log(this.props.cartItems)
        let { quantity, name, priceInCents} = this.props.cartItems

        return(
            <ListGroup>
                <div className="row">
                    <ListGroupItem className="col-md-8">
                        {name}
                    </ListGroupItem>
                    <ListGroupItem className="col-md-2">
                        {priceInCents/100}
                    </ListGroupItem>
                    <ListGroupItem className="col-md-2">
                        {quantity}
                    </ListGroupItem>
                </div>
            </ListGroup>
        )
    }
}

export default CartItems;