import React, { Component } from "react"
import { Button, Form, FormGroup, Input} from "reactstrap"

class AddItem extends Component {
    products = this.props.products
    _onDecision = (e) => {
        console.log(e.target.value);
        // this.props._changeProductSelected(e.target.value)
    }
    _updateQuantity = (e) => {
        this.props._changeQuantity(e.target.value)
    } 
    
    productsOption = this.products.map(item => <option onChange={this._onDecision} value={item.name} key={item.id}>{item.name}</option>)
    render(){
        return(
            <div className="container">
                <Form>
                    <FormGroup>
                        <Input type="text" placeholder="Quantity" onChange={this._updateQuantity} value={this.props.forms.quantitySelected} />
                    </FormGroup>
                    <FormGroup>
                        <select>
                            <option>Choose a item</option>
                            {this.productsOption}
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