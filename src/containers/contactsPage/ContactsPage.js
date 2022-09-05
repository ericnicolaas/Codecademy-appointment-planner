import React, {useState} from "react";

import {ContactForm} from '../../components/contactForm/ContactForm.js';
import {TileList} from '../../components/tileList/TileList.js';

export const ContactsPage = ({contacts, onAddContact}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const contactExists = () => {
    return -1 !== contacts.findIndex(contact => contact.name === name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contactExists()) {
      onAddContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };



  /*
  Using hooks, check for contact name in the
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          items={contacts}
        />
      </section>
    </div>
  );
};
