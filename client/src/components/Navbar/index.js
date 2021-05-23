import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

function Navbar (props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(!dropdownOpen);
  
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="" active>Link</NavLink>
          </NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/:id/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="/login">Log In</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
  
  export default Navbar;

// logout button

// welcome the username