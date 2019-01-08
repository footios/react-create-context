import React, { Component } from "react";
import { ThemeContext } from "./theme-context";

class ThemedButton extends Component {
  static contextType = ThemeContext;
  render() {
    let props = this.props;
    let theme = this.context;

    return (
      <button
        {...props}
        style={{
          backgroundColor: theme.background,
          color: theme.background === "#222222" ? "#ffffff" : "#000000"
        }}
      />
    );
  }
}

export default ThemedButton;
