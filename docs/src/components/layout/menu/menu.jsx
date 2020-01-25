import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./menu.scss";
import { getMenuStructure } from "../../utils";

class MenuContent extends Component {
  state = { menu: [] };
  componentDidMount() {
    getMenuStructure().then(menu => {
      this.setState({ menu });
    });
  }
  render() {
    return (
      <div className="menu">
        {this.state.menu.map((item, i) => (
          <div className="item" key={i}>
            <sc-button onClick={this.props.onItemClick} block href={item.link}>
              {item.text}
            </sc-button>
            {item.children.length > 0 && (
              <div className="children">
                {item.children.map((childItem, i) => (
                  <div className="item" key={i}>
                    <sc-button
                      onClick={this.props.onItemClick}
                      block
                      href={childItem.link}
                    >
                      {childItem.text}
                    </sc-button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export const Menu = withRouter(MenuContent);
