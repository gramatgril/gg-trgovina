import React, { useState } from "react";
import styled from "styled-components";
import { FaWallet, FaTree, FaSocks } from "react-icons/fa";

import { styles } from "../../utils";
import Title from "./../Title/Title";

const Services = () => {
  const [services] = useState([
    {
      id: 0,
      icon: <FaWallet />,
      title: "saving money",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, earum. ",
    },
    {
      id: 1,
      icon: <FaTree />,
      title: "endless hiking",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, earum. ",
    },
    {
      id: 2,
      icon: <FaSocks />,
      title: "amazing comfort",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, earum. ",
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
  background: ${styles.colors.white};
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
      background: ${styles.colors.green};
      padding: 0.5rem;
      display: inline-block;
      font-size: 2rem;
      margin-bottom: 1.5rem;

      h4 {
        text-transform: uppercase;
      }
    }

`;

export default Services;
