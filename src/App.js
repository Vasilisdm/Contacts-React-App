import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContacts from './ListContacts';
import * as ContactsApi from './utils/ContactsApi';
import CreateContact from './createContact';


class App extends Component {
  state = {
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

  render() {
    return (
      <div className="App">
      {/* rendering the ListContacts component */}

        {/* if the exact path is the below then the ListContacts is being displayed */}
        <Route exact path='/' render={() => (
            <ListContacts 
              contacts={this.state.contacts} 
              onDeleteContact={this.removeContact} 
              onCreateContact={this.createContact} 
            />
          )}>
        </Route>

        {/* If the url matches the path then the CreateContact component is being rendered  */}
        <Route path='/create' component={ CreateContact } />
        
      </div>
    );
  }
}

export default App;
