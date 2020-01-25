import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./menu.scss";

class MenuContent extends Component {
  state = { menu: [] };
  componentDidMount() {
    fetch("/md/toc.md")
      .then(res => res.text())
      .then(content => {
        const lines = content.match(/[^\r\n]+/g);
        let menu = [];
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          // eslint-disable-next-line
          let text = line.match(/\[([^\[\]]+)\]/)[0];
          text = text.replace("[", "").replace("]", "");
          // eslint-disable-next-line
          let link = line.match(/\([^)]+\)/)[0];
          link = link.replace("(", "").replace(")", "");
          let item = { link, text, children: [] };
          if (line.startsWith(" ")) {
            let lastRootItem = menu[menu.length - 1];
            if (lastRootItem && lastRootItem.children) {
              lastRootItem.children.push(item);
            } else {
              lastRootItem.children = [item];
            }
          } else {
            menu.push(item);
          }
        }
        return menu;
      })
      .then(menu => {
        this.setState({ menu });
      });
  }
  render() {
    return (
      <div className="menu">
        {this.state.menu.map((item, i) => (
          <div className="item" key={i}>
            <sc-button block href={item.link}>
              {item.text}
            </sc-button>
            {item.children.length > 0 && (
              <div className="children">
                {item.children.map((childItem, i) => (
                  <div className="item" key={i}>
                    <sc-button block href={childItem.link}>
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
