import React from "react";

export const ContactPicker = ({ contacts, setContact, contact, name }) => {
  return (
    <>
      <select onChange={setContact} value={contact} name={name}>
        <option value={""}>No Contact Selected</option>
        {contacts.map(({ name }) => {
          return <option value={name}>{name}</option>;
        })}
      </select>
    </>
  );
};
