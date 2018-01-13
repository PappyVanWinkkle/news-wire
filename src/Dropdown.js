/*
* Dropdown Component will point to other pages Links News Links 
*/
import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
       <div className="d-flex flex-row justify-content-center"> 
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="text-center">
        <DropdownToggle caret>More News</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header />
          <Link to="/bbc">
          <DropdownItem>BBC</DropdownItem>
          </Link>
          <Link to="/nbc">
          <DropdownItem>NBC</DropdownItem>
          </Link>
          <Link to="/reuters">
          <DropdownItem>Reuters</DropdownItem>
          </Link>
          <DropdownItem>Bloomberg</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      </div>
    );
  }
}

export default Dropdown;
