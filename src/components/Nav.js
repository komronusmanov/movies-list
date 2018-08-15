import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

class Navigation extends Component {

    state = {
      collapsed: true
    }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <div style={{ backgroundColor: '#1e2f2f'}}>
        <Navbar dark>
          <NavbarBrand href="/" className="mr-auto navbar">Movie List</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/popular">Popular</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/top_rated">Top Rated</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/now_playing">Now Playing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/upcoming">Upcoming</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/search">Search Movies</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation
