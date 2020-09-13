import React, { createContext, Component } from 'react';

const lightTheme = {
    textColor: '#333',
    uiColor: '#ddd',
    bgColor: '#eee'
}

const darkTheme = {
    textColor: '#eee',
    uiColor: '#333',
    bgColor: '#121212'
}

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: lightTheme,
        dark: darkTheme
    }
    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme});
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;