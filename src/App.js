import React, { useState } from "react";
import { Route, NavLink, Routes } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
 const [contacts, setContacts] = useState([]);
 const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (name, phone, email) => {
    setContacts(prevContacts => [{
      name: name,
      phone: phone,
      email: email
    }, ...prevContacts]);
  }

  const addAppointment = (title, contact, date, time) => {
    setAppointments(prevAppointments => [{
      title: title,
      contact: contact,
      date: date,
      time: time
    }, ...prevAppointments]);
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} className={({isActive}) => isActive ? "active" : ''}>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} className={({isActive}) => isActive ? "active" : ''}>
          Appointments
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<ContactsPage contacts={contacts} onAddContact={addContact} />} />
          <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} onAddContact={addContact} />} />
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage contacts={contacts} appointments={appointments} onAddAppointment={addAppointment} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
