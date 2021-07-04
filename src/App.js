// components
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import Time from './components/Time';
import ToggleButton from './components/buttons/ToggleButton';
// styled-components
import { ThemeProvider } from 'styled-components';
// styles
import { GlobalStyle, AppWrapper } from './styles';
// hooks
import { useState } from 'react';

// website theme
const theme = {
  dark: {
    color: '#ccc',
    backgroundColor: '#212529',
    darkGray: '#6c757d',
    red: '#dc3545',
    green: '#198754',
  },
  light: {
    color: '#212529',
    backgroundColor: '#ccc',
    darkGray: '#6c757d',
    red: '#dc3545',
    green: '#198754',
  },
};

function App() {
  // theme state
  const [isDarkMode, setIsDarkMode] = useState(false);
  // toggle theme
  const handleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme[isDarkMode ? 'dark' : 'light']}>
      <GlobalStyle />
      <AppWrapper>
        <ToggleButton isDarkMode={isDarkMode} handleTheme={handleTheme} />
        <h1>Welcome To Your Todo List</h1>
        <Time />
        <AddToDo />
        <Todos />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
