// import PropTypes from 'prop-types';
import nextId from 'react-id-generator';
import ContactItem from './ContactItem';
import { List } from '../Form/Form.styled';

const Contacts = ({ contacts, deleteButton }) => {
  return (
    <>
      <List>
        {contacts.map(contact => {
          return (
            <ContactItem
              key={nextId()}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              deleteButton={deleteButton}
            ></ContactItem>
          );
        })}
      </List>
    </>
  );
};

export default Contacts;
