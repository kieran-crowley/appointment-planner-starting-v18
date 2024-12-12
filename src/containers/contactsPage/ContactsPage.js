import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contactsArray, addContact }) => {
  const [currentName, setCurrentName] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [dublicate, setDublicate] = useState();

  const reset = () => {
    setCurrentName("");
    setCurrentNumber("");
    setCurrentEmail("");
  };

  const updateName = ({ target }) => {
    setCurrentName(target.value);
  };

  const updateNumber = ({ target }) => {
    setCurrentNumber(target.value);
  };

  const updateEmail = ({ target }) => {
    setCurrentEmail(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentEmail && currentNumber && currentEmail && !dublicate) {
      addContact(currentName, currentNumber, currentEmail);
      reset();
    } else {
      console.log("issue", "dbu", dublicate);
    }
  };
  console.log("outside", contactsArray);

  useEffect(() => {
    contactsArray.forEach(({ name }) => {
      if (name === currentName) {
        setDublicate(true);
      } else {
        setDublicate(false);
      }
    });
  }, [currentName]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={currentName} setName={updateName} phone={currentNumber} setPhone={updateNumber} email={currentEmail} setEmail={updateEmail} handleSubmit={handleSubmit}></ContactForm>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList Array={contactsArray}></TileList>
      </section>
    </div>
  );
};

//dublicate shows if dub or not
//reset not yet used
