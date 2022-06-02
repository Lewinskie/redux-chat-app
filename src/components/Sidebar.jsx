import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import "./sidebar.css";

const Sidebar = () => {
  const contacts = useSelector((state) => state.contacts);

  return (
    <div className="sidebar">
      {contacts.length > 0 &&
        contacts.map((contact) => (
          <Contact contact={contact} key={contact.userId} />
        ))}
    </div>
  );
};

export default Sidebar;
