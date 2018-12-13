import React, { Component } from "react"
import { Button, Form, FormGroup, Input} from "reactstrap"

class AddItem extends Component {
    _onDecision = (e) => {
        this.props.changeProductSelected(e.target.value)
    }
    _updateQuantity = (e) => {
        this.props.changeQuantity(e.target.value)
    } 
    _submitFunction = (e) => {
        e.preventDefault()
        this.props.updateCart(this.props.forms)

    }
    render(){
        const products = this.props.products
        const productsOption = products.map(item => <option value={item.name} key={item.id}>{item.name}</option>)

        return(
            <div className="container">
                <Form onSubmit={this._submitFunction}>
                    <FormGroup>
                        <Input type="text" placeholder="Quantity" onChange={this._updateQuantity} value={this.props.forms.quantitySelected} />
                    </FormGroup>
                    <FormGroup>
                        <select onChange={this._onDecision}>
                            <option>Choose a item</option>
                            {productsOption}
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Button>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default AddItem;