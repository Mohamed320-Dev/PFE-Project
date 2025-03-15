import React from "react";
import "./LandingPage.css";
import trainer1 from "../../Assets/trainer-1.jpg";
import trainer2 from "../../Assets/trainer-2.jpg";
import trainer3 from "../../Assets/trainer-3.jpg";

const Trainer = () => {
  return (
    <section className="section__container trainer__container" id="trainer">
      <h2 className="section__header">Our Trainers</h2>
      <p className="section__description">
        Our trainers are more than just experts in exercise; they are passionate
        about helping you achieve your health and fitness goals. Our trainers
        are equipped to tailor workout programs to meet your unique needs.
      </p>
      <div className="trainer__grid">
        <div className="trainer__card">
          <img src={trainer1} alt="trainer" />
        </div>
        <div className="trainer__card">
          <div className="trainer__content">
            <h4>James Rodriguez</h4>
            <h5>Strength and Conditioning</h5>
            <hr />
            <p>
              With a background in competitive sports, he's dedicated to helping
              you reach your peak physical performance.
            </p>
            <div className="trainer__socials">
              <a href="#">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#">
                <i className="ri-google-fill"></i>
              </a>
              <a href="#">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#">
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="trainer__card">
          <img src={trainer2} alt="trainer" />
        </div>
        <div className="trainer__card">
          <div className="trainer__content">
            <h4>Mark Harris</h4>
            <h5>HIIT and Functional</h5>
            <hr />
            <p>
              His energetic and dynamic workouts are designed to push your
              limits, boost metabolism, and torch calories.
            </p>
            <div className="trainer__socials">
              <a href="#">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#">
                <i className="ri-google-fill"></i>
              </a>
              <a href="#">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#">
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="trainer__card">
          <img src={trainer3} alt="trainer" />
        </div>
        <div className="trainer__card">
          <div className="trainer__content">
            <h4>Emily Davis</h4>
            <h5>Yoga and Mindfulness</h5>
            <hr />
            <p>
              Emily's sessions are about physical postures and also about
              cultivating inner peace and mindfulness.
            </p>
            <div className="trainer__socials">
              <a href="#">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#">
                <i className="ri-google-fill"></i>
              </a>
              <a href="#">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#">
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainer;
