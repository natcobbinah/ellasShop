import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class CartContentCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    render() {
        return (
            <Button variant="secondary" size="lg">
               Cart
             </Button>
        )
    }
}

export default CartContentCounter