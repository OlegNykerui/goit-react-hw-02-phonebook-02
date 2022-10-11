import { Component } from 'react';
import nextId from 'react-id-generator';

import Contacts from './Contacts/Contacts';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { Wrapper, Title } from './Form/Form.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ number, name }) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            { id: nextId(), name: name, number: number },
          ],
        };
      });
    }
  };

  filterChange = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const filterName = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName)
    );
  };

  render() {
    const { filter } = this.state;
    const fltered = this.getFilteredContacts();

    return (
      <Wrapper>
        <Title>PhoneBook</Title>
        <Form onSubmit={this.addContact} />

        <Filter value={filter} onChange={this.filterChange} />
        <Contacts deleteButton={this.deleteContact} contacts={fltered} />
      </Wrapper>
    );
  }
}
