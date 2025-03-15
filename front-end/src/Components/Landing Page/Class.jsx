import React from "react";
import "./LandingPage.css";
import dot from "../../Assets/dot-bg.png";
import class1 from "../../Assets/class-1.jpg";
import class2 from "../../Assets/class-2.jpg";
import class3 from "../../Assets/class-3.jpg";
import class4 from "../../Assets/class-4.jpg";

const Class = () => {
  return (
    <section className="section__container class__container" id="class">
      <h2 className="section__header">Our Classes</h2>
      <p className="section__description">
        Discover a diverse range of exhilarating classes at our gym designed to
        cater to all fitness levels and interests. Whether you're a seasoned
        athlete or just starting your fitness journey, our classes offer
        something for everyone.
      </p>
      <div className="class__grid">
        <div className="class__card">
          <img src={dot} alt="bg" className="class__bg" />
          <img src={class1} alt="class" />
          <div className="class__content">
            <h4>Strength Training</h4>
            <p>Resistance Training</p>
          </div>
        </div>
        <div className="class__card">
          <img src={dot} alt="bg" className="class__bg" />
          <img src={class2} alt="class" />
          <div className="class__content">
            <h4>Flexibility & Mobility</h4>
            <p>Yoga & Pilates</p>
          </div>
        </div>
        <div className="class__card">
          <img src={dot} alt="bg" className="class__bg" />
          <img src={class3} alt="class" />
          <div className="class__content">
            <h4>HIIT</h4>
            <p>Circuit Training</p>
          </div>
        </div>
        <div className="class__card">
          <img src={dot} alt="bg" className="class__bg" />
          <img src={class4} alt="class" />
          <div className="class__content">
            <h4>Group Fitness</h4>
            <p>Zumba or Dance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Class;
