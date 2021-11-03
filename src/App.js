import React, { Component } from 'react';
// import './App.css';

import s from './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { v4 as uuid } from 'uuid';
import Filter from './components/Filter';
import initialContacts from './data/contacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  formSubmitHandler = (newName, number, reset) => {
    console.log(reset);

    if (
      this.state.contacts.find(
        ({ name }) => name.toLowerCase() === newName.toLowerCase(),
      )
    ) {
      alert('Contact is already exist');
      reset();
      return;
    }

    const contact = {
      id: uuid(),
      name: newName,
      number,
    };
    console.log(contact);
    this.setState(prev => {
      reset();
      return {
        contacts: [...prev.contacts, contact],
      };
    });
  };

  deleteContact = uniqId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== uniqId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.visibleContacts();
    return (
      <div className={s.appWrapper}>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onRemove={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
