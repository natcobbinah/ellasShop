import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import SearchField from '../searchBar/search'
import CartContentCounter from '../orderManagement/cartCounter'

const NavigationBar = () => {
    return (
                     <Navbar bg="dark" variant="dark" fixed="top">
                        <Navbar.Brand href="#home">ellasShop</Navbar.Brand>
                        <Nav className="mr-auto">
                          <Nav.Link href="#home">Delivery Across Ghana</Nav.Link>
                        </Nav>
                        <SearchField/>
                        <CartContentCounter/>
                    </Navbar> 

    )
}

export default NavigationBar;