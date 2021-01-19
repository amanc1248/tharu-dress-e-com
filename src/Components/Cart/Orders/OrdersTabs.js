import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Orders.css";

class OrdersTabs extends Component {
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
      <div className="orders-tabs">
        <ul className="orders-tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <OrderTab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ul>
        <div className="orders-tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default OrdersTabs;

export class OrderTab extends Component {
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

    let className = "orders-tab-list-item";

    if (activeTab === label) {
      className += " orders-tab-list-active";
    }

    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    );
  }
}
