import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (name, number, email) => {
    let contact = {
      name: name,
      number: number,
      email: email,
    };
    setContacts((prev) => {
      return [contact, ...prev];
    });
  };

  const addAppointment = (name, contact, date, time) => {
    let apppintment = {
      name: name,
      contact: contact,
      date: date,
      time: time,
    };
    setAppointments((prev) => {
      return [apppintment, ...prev];
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route path={ROUTES.CONTACTS} element={<ContactsPage contactsArray={contacts} addContact={addContact} /> /* Add props to ContactsPage */} />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={<AppointmentsPage appointmentsArray={appointments} contactsArray={contacts} addAppointment={addAppointment} /> /* Add props to AppointmentsPage */}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
