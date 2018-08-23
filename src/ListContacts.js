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

                        <button className='contact-remove'>
                            Remove
                        </button>

                    </li>
                ))}
            </ol>
        )
    }
}


export default ListContacts