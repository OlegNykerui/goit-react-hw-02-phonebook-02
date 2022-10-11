import { Item, ButtonDelete } from '../Form/Form.styled';

const ContactItem = ({ id, name, number, deleteButton }) => {
  return (
    <>
      <Item>
        {`${name} : tel - ${number}`}

        <ButtonDelete onClick={() => deleteButton(id)} type="button">
          Delete
        </ButtonDelete>
      </Item>
    </>
  );
};

export default ContactItem;
