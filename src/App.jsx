import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

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
    this.setState(prev => {
      if (prev.contacts.every(contact => contact.name !== inputName)) {
        return {
          contacts: [contact, ...prev.contacts],
        };
      } else alert(`${inputName} is already in contacts!!!`);
    });
  };
  deleteContact = selectId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== selectId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filterNormalized = filter;
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized),
    );
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.addContacts} />
        <h2 className="contacts">Contacts</h2>
        <Filter value={filter} filterQuery={this.onInputChange} />
        <ContactList
          queryList={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
