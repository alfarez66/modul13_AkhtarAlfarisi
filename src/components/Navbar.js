import{Link} from "react-router-dom"
import Nav from 'react-bootstrap/Nav';

function Navbar(){
    return(
    <div>
        <Nav variant="pills" defaultActiveKey="#Home">
          <Nav.Item>
          <Link to="/" style={{textDecoration: "none"}}><Nav.Link href="#Home"  >Home</Nav.Link></Link>
          </Nav.Item>
          <Nav.Item>
          <Link to="/About" style={{textDecoration: "none"}}><Nav.Link href="#About" >About</Nav.Link></Link>
          </Nav.Item>
          <Nav.Item>
          <Link to="/Contact" style={{textDecoration: "none"}}><Nav.Link href="#Contact" >Contact</Nav.Link></Link>
          </Nav.Item>
        </Nav>
    </div>

    )
}

export default Navbar