import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import insta from '../../insta.png'
import './Navbar.css'
function NavbarInsta(){
    return(
    <Navbar bg="light" expand="lg">
      <Container fluid className='navbar'>
        <Navbar.Brand href="#" className='brand'>
           <img src={insta} alt="logo" className='logo'/>
          
        </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              className='search'
            />
            <Button variant="primary" className='login'>Log In</Button>
            <Button variant="link" className='signup' >SignUp</Button>
          </Form>
      </Container>
    </Navbar>
  );
}
export default NavbarInsta