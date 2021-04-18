import { hairGrowthProducts } from '../dummydata/dropdownSearchdata'
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
                        <ShowHairList allHairProducts={ hairGrowthProducts}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const ShowHairList = ({allHairProducts}) => {
    if (allHairProducts) {
        return (
            <Container fluid>
                <Row>
                    {allHairProducts.map((hairProduct, i) => (
                        <Col md={6}>
                            <CardDeck className="my-4">
                                <Card key={hairProduct.id}>
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title>{hairProduct.id}</Card.Title>
                                        <Card.Text>
                                            {hairProduct.name}
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