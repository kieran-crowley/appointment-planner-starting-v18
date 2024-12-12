import React from "react";

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className="name" type="text" value={name} onChange={setName} placeholder="name" />
        <input className="phone" pattern="[0-9]{11}" type="tel" value={phone} onChange={setPhone} placeholder="phone" />
        <input className="email" type="email" value={email} onChange={setEmail} placeholder="email" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
