// import React, { useState } from 'react';
import "./style.css";
import { Nav, NavItem, NavLink } from "reactstrap";

function Navbar(props) {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav className="nav-bar-main">
        <NavItem>
          <NavLink href="/" active>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navbar;

//   <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
//   <DropdownToggle nav caret>
//     Dropdown
//   </DropdownToggle>
//   <DropdownMenu>
//     <DropdownItem header>Header</DropdownItem>
//     <DropdownItem disabled>Action</DropdownItem>
//     <DropdownItem>Another Action</DropdownItem>
//     <DropdownItem divider />
//     <DropdownItem>Another Action</DropdownItem>
//   </DropdownMenu>
// </Dropdown>

// logout button

// welcome the username
