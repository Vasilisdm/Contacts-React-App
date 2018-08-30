import React, { Component } from 'react';
// Importing ListContacts component
import ListContacts from './ListContacts';
// Importing everything from ContactsApi
import * as ContactsApi from './utils/ContactsApi';


class App extends Component {
  state = {
     contacts: []
  }
  // Declaring the removeContact method
  removeContact = (contact) => {
    // Passing in the current state of contacts
    this.setState((state) => ({
      // Filtering contacts to remove the contact that was clicked
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }
  render() {
    return (
      <div className="App">
      {/* rendering the ListContacts component */}
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
