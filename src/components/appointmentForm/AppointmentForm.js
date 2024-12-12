import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({ contacts, title, setTitle, contact, setContact, date, setDate, time, setTime, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={setTitle} placeholder="title" />
        <input type="date" min={getTodayString()} value={date} onChange={setDate} placeholder="date" />
        <input type="time" value={time} onChange={setTime} placeholder="time" />
        <ContactPicker contacts={contacts} contact={contact} setContact={setContact} name={title} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
