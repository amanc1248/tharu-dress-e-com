import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CustomerCheckoutTab.css";

export class CustomerCheckoutTab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  //OnClick function
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };
  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;
    let className = "checkout-tab-list-item";
    if (activeTab === label) {
      className += " checkout-tab-list-active";
    }
    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    );
  }
}

export class CustomerCheckoutTabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;
    return (
      <div className="tabs">
        <ul className="checkout-tab-list">
          {children.map((child) => {
            const { label } = child.props;
            return (
              <CustomerCheckoutTab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              ></CustomerCheckoutTab>
            );
          })}
        </ul>
      </div>
    );
  }
}

