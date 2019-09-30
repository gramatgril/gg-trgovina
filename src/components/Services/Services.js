import React, { useState } from "react";
import styled from "styled-components";
import { FaRegLightbulb, FaRegCheckCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

import { styles } from "../../styles";
import Title from "./../Title/Title";

const Services = () => {
  const [services] = useState([
    {
      id: 0,
      icon: <FaRegCheckCircle />,
      title: "zanesljivost",
      text: `Zakaj je zanesljivost tako pomembna.
      Nekateri ljudje vas ne bodo nikoli razočarali, so
      pa tudi takšni, ki vas večkrat pustijo na cedilu.
      In to brez opravičila in pojasnila.`,
    },
    {
      id: 1,
      icon: <FiSettings />,
      title: "celovite rešitve",
      text: `Tu smo zato, da iz vaše prenove odstranimo ves stres.
      Želimo, da ste nad prenovo navdušeni od prvega do zadnjega dne.
      Naše dejavnosti so namenjene temu, da vas oskrbimo s
      kvalitetnimi materiali. Vse za prenovo, gradnjo boste našli v naši trgovini.`,
    },
    {
      id: 2,
      icon: <FaRegLightbulb />,
      title: "dobre ideje",
      text: `Ni meje za dobre ideje ...
      Izkušnje in zanesljivost so odlike, ki nas opisujejo.
      Svetovalci v trgovini kot tudi v salonu vam bodo pomagali
      pri pravilni izbiri ter odločitvi`,
    },
  ]);

  return (
    <Wrapper>
      <Title title="nudimo" subtitle="vam" />
      <StyledServices>
        {services.map(({ id, icon, title, text }) => (
          <article key={id} className="service">
            <span>{icon}</span>
            <h4>{title}</h4>
            <hr className="divider" />
            <p>{text}</p>
          </article>
        ))}
      </StyledServices>
    </Wrapper>
  );
};

const StyledServices = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;

  .service {
    font-size: 1rem;
    text-align: center;

    span {
      color: ${styles.colors.green};
      display: inline-block;
      font-size: 7rem;
    }

    h4 {
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: ${styles.letterSpacing};
    }

    p {
      text-align: justify;
      margin-bottom: 2rem;
      padding: 1rem 0;
    }
  }
`;

const Wrapper = styled.div`
  background: ${styles.colors.offWhite};
  padding: 2rem 0;

  .divider {
    border-radius: 10px;
    height: 3px;
    border: none;
    background: ${styles.colors.green};
    margin: 2rem auto;
    width: 50px;
  }
`;

export default Services;
