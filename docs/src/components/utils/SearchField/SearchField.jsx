import React, { Component } from "react";
import "./SearchField.scss";
import { getMenuStructure } from "../";
export class SearchField extends Component {
  state = {
    menu: [],
    query: "",
    suggestions: []
  };

  componentDidMount() {
    getMenuStructure().then(menu => {
      this.setState({ menu });
    });
  }
  onSearchInputChange(e) {
    let query = e.target.value;
    let suggestions = [];
    this.state.menu.map(item => {
      if (item.text.toLowerCase().includes(query)) {
        suggestions.push(item);
      }
      item.children.map(childItem => {
        if (childItem.text.toLowerCase().includes(query)) {
          suggestions.push(childItem);
        }
      });
    });

    this.setState({ query, suggestions });
  }

  highlight(needle, haystack) {
    return haystack.replace(
      new RegExp(needle, "gi"),
      str => `<strong>${str}</strong>`
    );
  }

  clearSearch(){
    this.setState({
      query: '',
      suggestions:[]
    })
  }

  render() {
    return (
      <div className="search-field">
        <sc-input
          type="search"
          value={this.state.query}
          onInput={e => this.onSearchInputChange(e)}
          class="search-input"
        />
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 125"
        >
          <path d="M15.127 64.024c6.751 6.751 15.6 10.127 24.448 10.127 7.651 0 15.299-2.529 21.595-7.577l3.791 3.791c-.324 2.006.272 4.132 1.819 5.679l17.038 17.038C85.096 94.36 86.773 95 88.449 95c1.676 0 3.353-.64 4.632-1.919 2.559-2.558 2.559-6.706 0-9.264L76.043 66.779c-1.546-1.547-3.672-2.143-5.679-1.819l-3.791-3.791c10.885-13.576 10.039-33.454-2.55-46.043C57.272 8.376 48.424 5 39.575 5S21.878 8.376 15.127 15.127c-13.503 13.502-13.503 35.394 0 48.897zm6.948-41.95c4.674-4.673 10.89-7.248 17.501-7.248 6.61 0 12.826 2.574 17.5 7.248 9.648 9.649 9.648 25.351-.001 35.001-4.674 4.673-10.889 7.248-17.5 7.248-6.611 0-12.827-2.574-17.502-7.248-9.646-9.649-9.646-25.351.002-35.001z" />
        </svg>

        {this.state.query.length > 0 ? (
          <div className="search-results">
            {this.state.suggestions.length > 0 ? (
              <div>
                {this.state.suggestions.map(item => (
                  <div className="suggestion-item">
                    <a
                      href={item.link}
                      dangerouslySetInnerHTML={{
                        __html: this.highlight(this.state.query, item.text)
                      }}
                      onClick={() => this.clearSearch()}
                    ></a>
                  </div>
                ))}
              </div>
            ) : (
              <div>No result</div>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}
