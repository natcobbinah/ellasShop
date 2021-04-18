import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { allProductData } from '../dummydata/dropdownSearchdata'
import PaginatePage from '../pagination/paginatePage'
import { fetchGIFS,getAllProducts } from '../httpContent/endpoints'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'

class ProductList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            result: null,
            err: null,
            productsResult:[],
        }
    }

    componentDidMount() {
        fetchGIFS()
            .then(result => this.setState({result: result.data}))
            .catch(err => this.setState(err))
        
        getAllProducts()
            .then(result => this.setState({ productsResult: result.data }))
            .catch(err => this.setState(err))
    }

    render() {
    const { result, productsResult } = this.state;
    return (
        <Container fluid>
            <Row>
                <Col>
                    <ShowProductList imageData={result} productData = {allProductData}/>
                </Col>
            </Row>
            <Row>
                <ShowTableRecords productsResult = {productsResult}/>
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
                                        <small className="text-muted">
                                            <Link to={product.link}>Shop NOW</Link>
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

const ShowTableRecords = ({ productsResult }) => {
    if (productsResult) {
        return (
            <Table>
                <tr>
                    <td>{productsResult._id}</td>
                    <td>{productsResult.productId}</td>
                    <td>{productsResult.productName}</td>
                    <td>{ productsResult.quantity}</td>
                </tr>
           </Table>
        )
    } else {
        return (
            <p> Loading ... </p>
        )
    }
}


export default ProductList