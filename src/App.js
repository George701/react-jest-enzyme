import React, { Component } from 'react'
import Contact from './Contact';

export class App extends Component {
  state = {
    contacts: []
  }

  render() {
    const { contacts } = this.state
    return (
      <div>
        <h2>
          Contact List
        </h2>
        <div className='contact-list'>
          {
            contacts.map(contact => (
              <Contact
                key={contact.id}
                contact={contact}
                removeContact={this.removeContact}
              />
            ))
          }
        </div>
        <button className='btn-add' onClick={this.addContact}>Add Contact</button>
      </div>
    )
  }

  addContact = () => {
    const { contacts } = this.state;
    contacts.push({ id: max_number(this.state.contacts.map(contact => contact.id)) + 1 });
    this.setState({ contacts });
  };

  removeContact = id => {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }
}

export const max_number = numbers => {
  return numbers.length > 0 ? Math.max(...numbers) : 0;
}

export default App
