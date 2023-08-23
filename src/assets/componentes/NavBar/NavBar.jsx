import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css'
const NavBar = () => {

    return (

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
<Container>
         
<Navbar.Brand href="#home" className='logo'>El Gaucho</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link href="#features">Inicio</Nav.Link>
        <Nav.Link href="#pricing">Nosotros</Nav.Link>
    <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Alfajores</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
        Yerba Mate
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Dulce de leche</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
        vinos
        </NavDropdown.Item>
    </NavDropdown>
    </Nav>
    <Nav>
       0<CartWidget />
        <Nav.Link href="#deets"  ></Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
    Mi cuenta
        </Nav.Link>
    </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
);
}

export default NavBar