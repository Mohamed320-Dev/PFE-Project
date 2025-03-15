import React from "react";
import "./LandingPage.css";
import price1 from "../../Assets/price-1.png";
import price2 from "../../Assets/price-2.png";
import price3 from "../../Assets/price-3.png";

const Price = () => {
  return (
    <section className="section__container price__container" id="price">
      <h2 className="section__header">Our Pricing</h2>
      <p className="section__description">
        Our pricing plan comes with various membership tiers, each tailored to
        cater to different preferences and fitness aspirations.
      </p>
      <div className="price__grid">
        <div className="price__card">
          <div className="price__content">
            <h4>Basic Plan</h4>
            <img src={price1} alt="price" />
            <p>
              Our Basic Plan is the perfect starting point for individuals
              looking to kickstart their fitness journey or maintain an active
              lifestyle.
            </p>
            <hr />
            <h4>Key Features</h4>
            <p>Smart workout plan</p>
            <p>At home workouts</p>
          </div>
          <button className="btn">Join Now</button>
        </div>
        <div className="price__card">
          <div className="price__content">
            <h4>Weekly Plan</h4>
            <img src={price2} alt="price" />
            <p>
              Our weekly plan is designed to provide structure and variety to
              your workouts, ensuring you stay motivated and on track.
            </p>
            <hr />
            <h4>Key Features</h4>
            <p>PRO Gyms</p>
            <p>Smart workout plan</p>
            <p>At home workouts</p>
          </div>
          <button className="btn">Join Now</button>
        </div>
        <div className="price__card">
          <div className="price__content">
            <h4>Monthly Plan</h4>
            <img src={price3} alt="price" />
            <p>
              With this flexible membership, you'll have access to our
              state-of-the-art gym facilities, expert trainers, and a vibrant
              fitness community
            </p>
            <hr />
            <h4>Key Features</h4>
            <p>ELITE Gyms & Classes</p>
            <p>PRO Gyms</p>
            <p>Smart workout plan</p>
            <p>At home workouts</p>
            <p>Personal Training</p>
          </div>
          <button className="btn">Join Now</button>
        </div>
      </div>
    </section>
  );
};

export default Price;
