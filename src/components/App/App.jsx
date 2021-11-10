import React, { Component } from 'react';
import './App.scss';
import data from '../../data.json';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };
  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  addContacts = contact => {
    const inputName = contact.name;
    const inputNumber = contact.number;
    this.setState(prev => {
      if (
        prev.contacts.every(
          contact =>
            contact.name.toLowerCase() !== inputName.toLowerCase() &&
            inputNumber !== contact.number,
        )
      ) {
        return {
          contacts: [contact, ...prev.contacts],
        };
      } else
        alert(`${inputName} with ${inputNumber} is already in contacts!!!`);
    });
  };
  deleteContact = selectId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== selectId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filterNormalized = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized),
    );
    return (
      <section className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.addContacts} />
        <h2 className="contacts">Contacts</h2>
        <Filter value={filter} filterQuery={this.onInputChange} />
        <ContactList
          queryList={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </section>
    );
  }
}

export default App;
