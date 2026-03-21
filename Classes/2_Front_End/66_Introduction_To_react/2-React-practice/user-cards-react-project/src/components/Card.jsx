import React from 'react';

const Card = () => {
  return (
    <div class="user-card">
      <div class="user-img">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div class="name">Nilesh Chaudhary</div>
      <div class="role">UI / UX Designer</div>
      <div class="about">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto autem beatae tempora ratione, laudantium ut.
      </div>
      <div class="social-links">
        <a href="" class="insta">
          <i class="ri-instagram-line"></i>
        </a>
        <a href="" class="twitter">
          <i class="ri-twitter-line"></i>
        </a>
        <a href="" class="linkedin">
          <i class="ri-linkedin-fill"></i>
        </a>
        <a href="" class="facebook">
          <i class="ri-facebook-fill"></i>
        </a>
      </div>
      <div class="btn-container">
        <div class="btn">Message</div>
        <div class="btn dark">Connect</div>
      </div>
    </div>
  );
};

export default Card;
