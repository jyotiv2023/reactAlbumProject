import React from "react";
import { useState } from "react";

export default function AddContact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const addHandler = (e) => {
    if (name === "" || email === "") {
      alert("All field are mandatory");
    } else {
      const contactDetails = {
        name: name,
        email: email,
      };
      props.addContactHandler(contactDetails);
      setName("");
      setEmail("");
    }

    e.preventDefault();
  };
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={addHandler}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={emailChangeHandler}
          ></input>
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}
