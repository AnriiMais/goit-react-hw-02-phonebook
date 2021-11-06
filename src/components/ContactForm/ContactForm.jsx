import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

class ContactForm extends Component {
  static propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.makeContact());
    this.setState({ name: '', number: '' });
  };

  onFormInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  makeContact = () => {
    const newContact = {
      id: shortId.generate(),
      name: this.state.name,
      number: this.state.number,
    };
    return newContact;
  };

  render() {
    const genIdNumber = shortId.generate();
    const genIdName = shortId.generate();
    const { name, number } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor={genIdName}>Name</label>
        <input
          id={genIdName}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. 
  Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.onFormInputChange}
        />
        <label htmlFor={genIdNumber}>Number</label>
        <input
          id={genIdNumber}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.onFormInputChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default ContactForm;
