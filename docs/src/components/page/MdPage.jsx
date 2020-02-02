import React, { Component } from "react";
import { withRouter } from "react-router";
import { NotFoundPage } from "./";
import { Markdown } from "../utils";
/**
 * static page
 */
class MdPageComponent extends Component {
  state = {
    file: "/md/readme.md",
    content: "",
    notfound: false,
    isComponent: false
  };
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log("path changed");
      this.loadDoc();
    }
  }

  componentDidMount() {
    this.loadDoc();
  }

  /**
   * Check if MD file exists, if it does, return url to md file, else return false
   * @param {string} path
   */
  async getMDFilePath(path) {
    if (path.endsWith("/")) {
      path = path.substring(0, path.length - 1);
    }
    let file = `/md${path}.md`;
    let readmeFile = `/md${path}/readme.md`;
    let indexFile = `/md${path}/index.md`;

    if (path === "") {
      // load front page
      file = "/md/readme.md";
    }

    if (file.includes("/components/") || file.includes("/examples/")) {
      this.setState({ isComponent: true });
    } else {
      this.setState({ isComponent: false });
    }

    let status = await fetch(file, { method: "head" });

    if (status.ok && !status.redirected) {
      return file;
    }

    status = await fetch(readmeFile, { method: "head" });
    if (status.ok && !status.redirected) {
      return readmeFile;
    }

    status = await fetch(indexFile, { method: "head" });
    if (status.ok && !status.redirected) {
      return indexFile;
    }

    // return false;

    //
  }

  async loadDoc() {
    // /////////////////////////////////////////////////////////////

    // /////////////////////////////////////////////////////////////

    // fetch file,
    // 1. see if file exists
    // 2. see if
    const filePath = await this.getMDFilePath(this.props.location.pathname);
    if (filePath) {
      const content = await fetch(filePath).then(res => res.text());
      this.setState({ content });
    }
  }

  render() {
    if (this.state.notfound) {
      return <NotFoundPage />;
    }
    if (!this.state.notfound && !this.state.file) {
      return null;
    }
    return (
      <div>
        <Markdown
          src={this.state.content}
          isComponent={this.state.isComponent}
        />
      </div>
    );
  }
}

export const MdPage = withRouter(MdPageComponent);
