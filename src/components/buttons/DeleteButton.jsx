// styles
import { DeleteButtonStyled } from '../../styles';

const DeleteButton = ({ handleDelete }) => {
  return <DeleteButtonStyled onClick={handleDelete}>delete</DeleteButtonStyled>;
};

export default DeleteButton;
