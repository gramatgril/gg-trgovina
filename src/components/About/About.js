import React from "react";
import styled from "styled-components";



const About = () => {
  return (
    <AboutWrapper>
      <div className="center">
        <h4>Opis podjetja</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          suscipit ducimus reprehenderit ex nisi ab assumenda odit velit beatae
          vitae aliquam molestiae magnam soluta, alias quasi dolorem! Neque
          consequatur tempore odio officiis velit vitae quos ipsa deserunt
          quidem, molestias nihil temporibus consequuntur beatae iure distinctio
          fuga est atque repellendus dolorem!
        </p>
        <h4>Zgodovina in poslanstvo</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          suscipit ducimus reprehenderit ex nisi ab assumenda odit velit beatae
          vitae aliquam molestiae magnam soluta, alias quasi dolorem! Neque
          consequatur tempore odio officiis velit vitae quos ipsa deserunt
          quidem, molestias nihil temporibus consequuntur beatae iure distinctio
          fuga est atque repellendus dolorem!
        </p>
        <h4>Lokacije</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          suscipit ducimus reprehenderit ex nisi ab assumenda odit velit beatae
          vitae aliquam molestiae magnam soluta
        </p>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  padding-top: 2rem;
  margin: 0 auto;

  .center {
    width: 70vw;
    text-align: center;

    h4 {
      font-weight: bold;
      font-size: 30px;
    }

    p {
      text-align: left;
      padding: 1rem;
    }
  }
`;

export default About;
