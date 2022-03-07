import React, { useState } from 'react';

import './App.css';

import Header from './components/layout/Header';
import Body from './components/layout/Body';

import CountriesProvider from './store/CountriesProvider';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleModeHandler = () => {
    setIsDarkMode(prevState => !prevState);
  };

  return (
    <div className={`app ${isDarkMode && 'dark-mode'}`}>
      <Header
        className="app-header"
        isDarkMode={isDarkMode}
        onToggleMode={toggleModeHandler}
      />

      <CountriesProvider>
        <Body />
      </CountriesProvider>
    </div>
  );
}

export default App;
