import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContacts from './ListContacts';
import * as ContactsApi from './utils/ContactsApi';
import CreateContact from './createContact';


class App extends Component {
  state = {
    screen: 'list',
    contacts: []
  }

  // This method will get invoked immediately after the component is inserted in the dom
  componentDidMount(){
    ContactsApi.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }

  // Declaring the removeContact method
  removeContact = (contact) => {
    // Passing in the current state of contacts
    this.setState((state) => ({
      // Filtering contacts to remove the contact that was clicked
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    // Removing the contact from the database
    ContactsApi.remove(contact)
  }

  // createContact method declaration that updates the state of screen to what is provided
  createContact = (screen) => {
    this.setState({ screen })
  }

  render() {
    return (
      <div className="App">
      {/* rendering the ListContacts component */}
        { this.state.screen === 'list' && (
          <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact} onCreateContact={this.createContact}/>
        )}

        { this.state.screen === 'create' && (
          <CreateContact />
        )}
        
      </div>
    );
  }
}

export default App;
