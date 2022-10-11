import { Component } from 'react';
import { FormBox, Input, Button } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  handleTelChange = event => {
    this.setState({
      number: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    // this.addContacts(this.state.name);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormBox onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleNameChange}
          value={this.state.name}
        />

        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleTelChange}
          value={this.state.number}
        />
        <Button type="submit">Add contact</Button>
      </FormBox>
    );
  }
}

export default Form;
