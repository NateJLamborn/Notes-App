import React from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap'

export const Heading = () => {
    return (
        <Navbar color='dark'>
            <Container>
                <NavbarBrand href='/'>My Notes</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to='/add'>Add Note</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}
