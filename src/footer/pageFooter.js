import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const PageFooter = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" className="my-2">ellasShop</Navbar.Brand>
             <Nav>
                <Nav.Link href="#home">Back to Top</Nav.Link>
            </Nav>
        </Navbar> 
    )
}

export default PageFooter;