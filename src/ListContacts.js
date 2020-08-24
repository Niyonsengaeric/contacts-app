import React, { Component } from 'react';

const ListContacts = (props)=> {
      return (
<ol className='contact-list'>
    {props.contacts.map((contact)=>(
        <li key={contact.id} className='contact-list-item'>

           <div className='contact-avatar' style={{
               backgroundImage: `url(${contact.avatarURL})`

           }}>
           </div>
           <div className='contact-details'>
        <p>{contact.name}</p>
        <p>{contact.handle}</p>
           </div>
           <div className='contact-remove' onClick={()=>props.onDeleteContact(contact)}>Remove</div>
        </li>
    ))}

</ol>
      );

  }
  
  export default ListContacts;