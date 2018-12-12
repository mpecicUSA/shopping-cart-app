import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input} from "reactstrap"

class AddItem extends Component {
    render(){
        console.log(this.props.products)
        let products = this.props.products
        let productsOption = products.map(item => <option value={item.name} key={item.id}>{item.name}</option>)
        return(
            <div className="container">
                <Form>
                    <FormGroup>
                        <Input type="text" placeholder="Quantity" />
                    </FormGroup>
                    <FormGroup>
                        <select>
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