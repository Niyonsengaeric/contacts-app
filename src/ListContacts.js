import React, { Component } from 'react';

class ListContacts extends Component {
    render() {

        console.log('=====>>list of props', this.props);
      return (
<ol className='contact-list'>
    {this.props.contacts.map((contact)=>(
        <li key={contact.id} className='contact-list-item'>

           <div className='contact-avatar' style={{
               backgroundImage: `url(${contact.avatarURL})`

           }}>
           </div>
           <div className='contact-details'>
        <p>{contact.name}</p>
        <p>{contact.handle}</p>
           </div>
           <div className='contact-remove'>Remove</div>
        </li>
    ))}

</ol>
      );
    }
  }
  
  export default ListContacts;