import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from 'assets/logo192.png';

const Layout = ({ children }) => {
  const headerRef = React.useRef(null);
  const [marginTop, setMarginTop] = React.useState(86);
  React.useEffect(() => {
    if(headerRef.current){
      setMarginTop(headerRef.current.offsetHeight);
    }
  }, [headerRef]);

  return (
    <React.Fragment>
      <div ref={headerRef} className="bg-light fixed-top">
        <Navbar className="container" expand="md" variant="light">
          <Navbar.Toggle className="col-3 border-0 outline-0">
            <FontAwesomeIcon icon="bars" size="2x" />
          </Navbar.Toggle>
          <Navbar.Brand className="mx-md-4 mx-0 col text-center col-md-auto" href="/">
            <Image src={logo} height="60" rounded />
          </Navbar.Brand>
          <Col className="col-3 d-md-none px-1">
            <FontAwesomeIcon size="1x" icon="user" className="mx-1" />
            <FontAwesomeIcon size="1x" icon="shopping-cart" className="mx-1" />
          </Col>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">上衣</Nav.Link>
              <Nav.Link href="/">褲子</Nav.Link>
              <Nav.Link href="/">配件</Nav.Link>
            </Nav>
              <Row className="align-items-center d-none d-md-flex">
                <InputGroup className="col">
                  <InputGroup.Prepend>
                    <Button variant="secondary">
                      <FontAwesomeIcon icon="search" />
                    </Button>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="搜尋商品"
                    aria-label="keyword"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <Col className="text-right col-auto">
                  <FontAwesomeIcon size="1x" icon="user" className="mx-3" />
                  <FontAwesomeIcon size="1x" icon="shopping-cart" />
                </Col>
              </Row>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div style={{ marginTop }}>
        { children }
      </div>
    </React.Fragment>
  )
}

export default Layout;
