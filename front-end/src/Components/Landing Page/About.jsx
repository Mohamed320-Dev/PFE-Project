import React from "react";
import "./LandingPage.css";
import about from "../../Assets/about.png";
import dot from "../../Assets/dot-bg.png";

const About = () => {
  return (
    <section className="section__container about__container" id="about">
      <div className="about__image">
        <img className="about__bg" src={dot} alt="bg" />
        <img src={about} alt="about" />
      </div>
      <div className="about__content">
        <h2 className="section__header">Our Story</h2>
        <p className="section__description">
          Led by our team of expert and motivational instructors, "The Class You
          Will Get Here" is a high-energy, results-driven session that combines
          a perfect blend of cardio, strength training, and functional
          exercises.
        </p>
        <div className="about__grid">
          <div className="about__card">
            <span>
              <i className="ri-open-arm-line"></i>
            </span>
            <div>
              <h4>Open Door Policy</h4>
              <p>
                We believe in providing unrestricted access to all individuals,
                regardless of their fitness level, age, or background.
              </p>
            </div>
          </div>
          <div className="about__card">
            <span>
              <i className="ri-shield-cross-line"></i>
            </span>
            <div>
              <h4>Fully Insured</h4>
              <p>
                Your peace of mind is our top priority, and our commitment to
                your safety extends to every aspect of your fitness journey.
              </p>
            </div>
          </div>
          <div className="about__card">
            <span>
              <i className="ri-p2p-line"></i>
            </span>
            <div>
              <h4>Personal Trainer</h4>
              <p>
                With personalized workout plans tailored to your needs, we will
                ensure that you get the most out of your gym experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
