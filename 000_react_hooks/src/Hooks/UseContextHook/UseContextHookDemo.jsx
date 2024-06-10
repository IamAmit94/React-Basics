import React, { useContext } from 'react';

// Step 1: Create a context
const ThemeContext = React.createContext('light');

// Step 2: Provide context values
const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
};

// Step 3: Consume context values
const Toolbar = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#f0f0f0', color: theme === 'dark' ? '#fff' : '#000' }}>
      This is a {theme} theme toolbar.
    </div>
  );
};

export default App;
