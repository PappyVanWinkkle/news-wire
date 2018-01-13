/*
* Dropdown Component will point to other pages Links News Links 
*/
import React from "react";
import { Link } from "react-router-dom";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
      <ButtonDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          More News
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header></DropdownItem>
          <DropdownItem >BBC</DropdownItem>
          <DropdownItem>NBC</DropdownItem>
          <DropdownItem>CNN</DropdownItem>
          <DropdownItem>News24</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reuters</DropdownItem>
          <DropdownItem>Bloomberg</DropdownItem>
          <DropdownItem>Associated Press</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default Dropdown;
