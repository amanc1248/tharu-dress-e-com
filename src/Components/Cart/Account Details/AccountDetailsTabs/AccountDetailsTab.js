import React, { Component } from "react";
import PropTypes from "prop-types";
import "./AccountDetails.css";

class AccountDetailsTab extends Component {
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

    let className = "account-tab-list-item"; //this is the className for the individual list item

    if (activeTab === label) {
      className += " account-tab-list-active";
    }

    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    );
  }
}

export default AccountDetailsTab;
