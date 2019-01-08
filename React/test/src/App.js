import React, { Component } from "react";

import { ThemeContext, themes } from "./components/theme-context";
import ThemedButton from "././components/themed-button";

const Toolbar = props => {
  return <ThemedButton onClick={props.changeTheme}>Change theme</ThemedButton>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <ThemedButton>Change Theme</ThemedButton>
      </div>
    );
  }
}
export default App;
