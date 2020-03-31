import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

class AppNavbar extends Component {
        state = {
            isOpen: false
        }
    
        toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    
    render() {
        return (
        <div>
            <Navbar color="dark" dark expend="sm" style={{marginBottom: '0'}}>
                <Container>        
                    
                    <NavbarBrand href="/">Redesign MyFIU Class Search</NavbarBrand>
                    
                    
                    <NavbarToggler onClick={this.toggle} />
                    
                     
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Nav Item 1</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Nav Item 2</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
           
            <div style={{background: '#eee', border: "1px solid grey", width:'15%',marginTop: '0', height: '100%', position: 'absolute', float: 'left', overflow: 'hidden'}}>
                <Link to="/searchforclasses">
                    <Button outline style={{borderRadius: '0', width:'100%', height:'65px'}}color="secondary">Search for Classes</Button> 
                </Link>
                <Link to="/viewmyclasses">
                    <Button outline style={{borderRadius: '0', width:'100%', height:'65px'}}color="secondary">View My Classes</Button>
                </Link>
                <Link to="/shoppingcart">
                    <Button outline style={{borderRadius: '0', width:'100%', height:'65px'}}color="secondary">Shopping Cart</Button>
                </Link>
                <Link to="/myschedule">
                    <Button outline style={{borderRadius: '0', width:'100%', height:'65px'}}color="secondary">My Schedule</Button>
                </Link>
                <Link to="/dropclasses">
                    <Button outline style={{borderRadius: '0', width:'100%', height:'65px'}}color="secondary">Drop Classes</Button>
                </Link>
                <Link to="/browsecatalog">
                    <Button outline style={{borderRadius: '0', width:'100%', height:'65px'}}color="secondary">Browse Catalog</Button>
                </Link>
                <Link to="/initialize">
                    <Button color="warning"  style={{margin: '10%', width:'80%', height:'50px'}}>Initialize Classes</Button>
                </Link>
            </div>
            
        </div>
        );
        
        
    }
}

export default AppNavbar;