import React, { Component } from "react";
import PropTypes from "prop-types";
import "./EmployeeStoreTabs.css";

class EmployeeStoreTab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = "employee-store-tab-list-item";

    if (activeTab === label) {
      className += " employee-store-tab-list-active";
    }

    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    );
  }
}

export default EmployeeStoreTab;
