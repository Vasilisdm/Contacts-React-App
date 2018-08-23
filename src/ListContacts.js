import React, { Component } from 'react';

class ListContacts extends Component {
    render(){
        return (
            <ol className='contact-list'>
            {/* mapping over the contacts attribute in order to display the names in the list */}
                {this.props.contacts.map(contact => (
                    // Adding key attribute in order for react to know which li item has changed 
                    // rather than recreating the whole ol each time.
                    // This property makes the unique key prop warning in the console to go away.
                    <li key={contact.id}>
                        {contact.name}
                    </li>
                ))}
            </ol>
        )
    }
}


export default ListContacts