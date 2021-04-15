import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './footer.css'

const PageFooterContent = () => {
    return (
        <Navbar className="footerContent" bg="secondary" variant="dark">
            <Navbar.Brand href="#home" className="my-5">list of info here</Navbar.Brand>
                <Nav>
                <Nav.Link href="#home">list of info here</Nav.Link>
            </Nav>
        </Navbar> 
    )
}

export default PageFooterContent;