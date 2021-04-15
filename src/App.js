import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import NavigationBar from './navbar/navbar.js'
import ImageSliders from './imageSliders/carousel.js'
import ProductList from './products/productCards.js'
import PageFooter from './footer/pageFooter'
import PageFooterContent from './footer/pageFooterContent'
import './App.css'

class App extends Component{
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <Container fluid>
        <Row className="my-5">
          <Col>
            <NavigationBar />
          </Col>
        </Row>
        
        <Row>
          <Col className="carousel_width my-1">
            <ImageSliders />
          </Col>
        </Row>
        
        <Row >
          <Col className="my-5">
            <ProductList />
          </Col>
        </Row>

         <Row className="my-5">
          <Col className="my-5">
            <PageFooter />
            <PageFooterContent />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
