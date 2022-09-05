import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChangeTitle = e => setTitle(e.target.value);
  const handleChangeContact = e => setContact(e.target.value);
  const handleChangeDate = e => setDate(e.target.value);
  const handleChangeTime = e => setTime(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" onChange={handleChangeTitle} value={title} required />
      </label>
      <ContactPicker contacts={contacts} currentContact={contact} onChange={handleChangeContact} />
      <label>
        Date:
        <input type="date" min={getTodayString()} onChange={handleChangeDate} value={date} required />
      </label>
      <label>
        Time:
        <input type="time" onChange={handleChangeTime} value={time} required />
      </label>
      <input type="submit" value="Add Appointemtn" />
    </form>
  );
};
