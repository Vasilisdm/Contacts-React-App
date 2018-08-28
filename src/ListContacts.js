import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListContacts extends Component {
    // Adding propTypes as a static
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    // Adding query property to the state
    state = {
        query: ''
    }

    // Method for updating the query
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    render() {
        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    {/* When the input is being changed then updateQuery gets invoked  */}
                    <input className='search-contacts' type='text' placeholder='Search Contacts' value={this.state.query} onChange={ (event) => this.updateQuery(event.target.value) }>
                    </input>
                </div>
                <ol className='contact-list'>
                {/* mapping over the contacts attribute in order to display the names in the list */}
                    {this.props.contacts.map(contact => (
        
                        // Adding key attribute in order for react to know which li item has changed 
                        // rather than recreating the whole ol each time.
                        // This property makes the unique key prop warning in the console to go away.
                        <li key={contact.id} className='contact-list-item'>
        
                            <div className='contact-avatar' style={{
                                backgroundImage: `url(${contact.avatarURL})`
                                }}>
                            </div>
        
                            {/* showing each contact's name and email*/}
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
        
                            <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
                                Remove
                            </button>
        
                        </li>
                    ))}
                </ol>
            </div>
            
        )
    }
}


export default ListContacts