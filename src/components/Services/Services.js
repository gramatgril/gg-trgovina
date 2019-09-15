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
    <Wrapper>
      <Title title="nudimo" subtitle="vam" />
      <div className="center">
        {services.map(({ id, icon, text }) => (
          <article key={id} className="service">
            <span>{icon}</span>
            <h4>{text}</h4>
            <hr className="divider" />
            <p>
              The quote above is something I read awhile back and has stuck with
              me ever since. I think about it every time I come across a website
            </p>
          </article>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${styles.colors.offWhite};
  padding: 1rem 0;

  .center {
    width: 60vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem;
  }

  .divider {
    border-radius: 10px;
    height: 3px;
    border: none;
    background: ${styles.colors.green};
    margin: 2rem auto;
    width: 50px;
  }
  .service {
    font-size: 1rem;
    text-align: center;
    span {
      color: ${styles.colors.green};
      display: inline-block;
      font-size: 7rem;
      margin-top: 1.5rem;
    }
    h4 {
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: ${styles.letterSpacing};
      /* margin: 1rem 0; */
    }
  }
`;

export default Services;
