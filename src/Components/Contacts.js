import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Rishav Singh",
        email: "rishavsingh107@gmail.com",
        phone: "789746541",
      },
      {
        id: 2,
        name: "Arun Singh",
        email: "apschaunan@gmail.com",
        phone: "79753341654",
      },
      {
        id: 3,
        name: "Shashank Singh",
        email: "shashank@gamil.com",
        phone: "6546576873556",
      },
    ],
  };
  render() {
    const { contacts } = this.state;
    // const { name, email, phone } = con;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}
export default Contacts;
