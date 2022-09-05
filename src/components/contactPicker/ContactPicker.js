import React from "react";

export const ContactPicker = ({
  contacts,
  currentContact,
  onChange
}) => {
  return (
    <label>
      Contact:
      <select onChange={onChange} value={currentContact} required>
        <option key="empty" value="" />
        {
          contacts.map(contact => {
            return (
              <option key={contact.name} value={contact.name}>{contact.name}</option>
            );
          })
        }
      </select>
    </label>
  );
};
