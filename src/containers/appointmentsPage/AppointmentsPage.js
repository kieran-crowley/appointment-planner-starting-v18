import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointmentsArray, contactsArray, addAppointment }) => {
  const [currentName, setCurrentName] = useState("");
  const [currentContact, setCurrentContact] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const clear = () => {
    setCurrentName("");
    setCurrentContact("");
    setCurrentDate("");
    setCurrentTime("");
  };

  const setName = ({ target }) => {
    setCurrentName(target.value);
  };

  const setContact = ({ target }) => {
    setCurrentContact(target.value);
  };

  const setDate = ({ target }) => {
    setCurrentDate(target.value);
  };

  const setTime = ({ target }) => {
    setCurrentTime(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentName && currentContact && currentDate && currentTime) {
      addAppointment(currentName, currentContact, currentDate, currentTime);
      clear();
    } else {
      console.log("nooooo");
    }
    /*
    Add contact info and clear data  
    */
    clear();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contactsArray} // not sure about this one.
          title={currentName}
          setTitle={setName}
          contact={currentContact}
          setContact={setContact}
          date={currentDate}
          setDate={setDate}
          time={currentTime}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList Array={appointmentsArray} />
      </section>
    </div>
  );
};

//chekc if need to track
