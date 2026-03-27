import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="left">Horizon Courts</div>
      <div className="mid">
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Coaches</a>
        <a href="#">Events</a>
        <a href="#">Contacts</a>
      </div>
      <div className="right btn">Book Now</div>
    </nav>
  );
};

export default Nav;
