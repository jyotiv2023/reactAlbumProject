import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <div>
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        />
      </div>
    );
  });
  return (
    <div className="ui main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right floated">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
}
