import React, { useState } from "react";
import styled from "styled-components";
import { FaRegLightbulb, FaRegCheckCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

import { styles } from "../../utils";
import Title from "./../Title/Title";

const Services = () => {
  const [services] = useState([
    {
      id: 0,
      icon: <FaRegCheckCircle />,
      title: "saving money",
      text: "Zanesljivost ",
    },
    {
      id: 1,
      icon: <FiSettings />,
      title: "endless hiking",
      text: "Celovite rešitve",
    },
    {
      id: 2,
      icon: <FaRegLightbulb />,
      title: "amazing comfort",
      text: "Dobre ideje ",
    },
  ]);

  return (
    <ServicesWrapper>
      <Title title="nudimo" subtitle="vam" />
      <div className="center">
        {services.map(({ id, icon, text }) => (
          <article key={id} className="service">
            <span>{icon}</span>
            <h4>{text}</h4>
          </article>
        ))}
      </div>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.div`
  background: ${styles.colors.offWhite};
  padding: 4rem 0;

  .center {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 2rem;
  }
  .service {
    margin: 2rem 0;
    text-align: center;
    span {
      color: ${styles.colors.green};
      padding: 0.5rem;
      display: inline-block;
      font-size: 7rem;
      margin-bottom: 1.5rem;
    }
    h4 {
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: ${styles.letterSpacing};
    }
  }
`;

export default Services;
