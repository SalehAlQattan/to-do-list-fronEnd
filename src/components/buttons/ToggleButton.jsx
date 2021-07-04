// styled-components
import { ToggleButtonStyled } from '../../styles';

const ToggleButton = ({ handleTheme, isDarkMode }) => {
  return (
    <ToggleButtonStyled onClick={handleTheme}>
      {isDarkMode ? 'Light' : 'Dark'}
    </ToggleButtonStyled>
  );
};

export default ToggleButton;
