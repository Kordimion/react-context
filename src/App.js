import React from 'react';
import StyledBoxExample from './components/styledBoxExample';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/themeToggle';
import AuthContextProvider from './contexts/AuthContext';
import Greeting from './components/greeting';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Greeting />
        <ThemeContextProvider>
          
          <StyledBoxExample />
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
