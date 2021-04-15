import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { allProductData } from '../dummydata/dropdownSearchdata'
import PaginatePage from '../pagination/paginatePage'
import { fetchGIFS } from '../httpContent/endpoints'

class ProductList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            result: null,
            err:null,
        }
    }

    componentDidMount() {
        fetchGIFS()
            .then(result => this.setState({result: result.data}))
            .catch(err => this.setState(err))
    }

    render() {
    const { result } = this.state;
    return (
        <Container fluid>
            <Row>
                <Col>
                    <ShowProductList imageData={result} productData = {allProductData}/>
                </Col>
            </Row>
            <Row>
                <PaginatePage/>
            </Row>
         </Container>
    )
    }

}

const ShowProductList = ({ productData, imageData }) => {
    if (imageData) {
        console.log(imageData.data[0].images['downsized'].url)
        return (
            <Container fluid>
                <Row>
                    {productData.map((product, i) => (
                        <Col md={4}>
                            <CardDeck className="my-4">
                                <Card key={product.id}>
                                    <Card.Img variant="top" src={imageData.data[i].images['downsized'].url}
                                                                     style={{ height: 267, width: 398 }} />
                                    <Card.Body>
                                        <Card.Title>{product.id}</Card.Title>
                                        <Card.Text>
                                            {product.name}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Shop NOW</small>
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

export default ProductList