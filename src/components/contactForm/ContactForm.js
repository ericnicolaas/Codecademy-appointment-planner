import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleChangeName = e => setName(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePhone = e => setPhone(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" onChange={handleChangeName} value={name} required />
      </label>
      <label>
        Phone:
        <input type="text" onChange={handleChangePhone} value={phone} required pattern="(^0[2|3|7|8]{1}[0-9]{8}$)|(^04\d{2,3}\d{6}$)|[0-9]{8}" />
      </label>
      <label>
        Email Address:
        <input type="email" onChange={handleChangeEmail} value={email} required />
      </label>
      <input type="submit" value="Add Contact" />
    </form>
  );
};
