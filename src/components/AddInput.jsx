// styled components
import { AddInputStyled } from '../styles';

const AddInput = ({ handleChange }) => {
  return (
    <AddInputStyled
      onChange={handleChange}
      placeholder="Add To Do..."
      type="text"
      required
      name="name"
    />
  );
};

export default AddInput;
