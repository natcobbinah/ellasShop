import { skinProducts } from '../dummydata/dropdownSearchdata'
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ShowDetailHairProductContent extends Component {
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col>
                        <ShowSkinProductList allskinProducts={ skinProducts}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const ShowSkinProductList = ({allskinProducts}) => {
    if (allskinProducts) {
        return (
            <Container fluid>
                <Row>
                    {allskinProducts.map((skinProduct, i) => (
                        <Col md={6}>
                            <CardDeck className="my-4">
                                <Card key={skinProduct.id}>
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title>{skinProduct.id}</Card.Title>
                                        <Card.Text>
                                            {skinProduct.name}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">
                                            <p>Buy Now</p>
                                        </small>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>
                        </Col>
                    ))
                    }
                </Row>
            </Container>
        )
    } else {
        return (
        <p> Loading ... </p>
       )
    }
}

export default ShowDetailHairProductContent;