// styles
import { DoneButtonStyled } from '../../styles';

const DoneButton = ({ handleClick, isDone }) => {
  return (
    <DoneButtonStyled onClick={handleClick}>
      {isDone ? 'Not Done' : 'Done'}
    </DoneButtonStyled>
  );
};

export default DoneButton;
