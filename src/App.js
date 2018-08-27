import React, { Component } from 'react';
// Importing ListContacts component
import ListContacts from './ListContacts';


class App extends Component {
  state = {
     contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
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
