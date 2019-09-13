import React from "react";
import styled from "styled-components";

import { styles } from "../../utils";

const Legal = () => {
  return (
    <Wrapper>
      <div className="center">
        <h4>1. Izvensodno reševanje potrošniških sporov</h4>
        <p>
          Gramat Gril d.o.o. skladno z določbo 3. odstavka 32. člena Zakona o
          izvensodnem reševanju potrošniških sporov (Ur. l. RS, št. 81/2015;
          ZlsRPS) svoje stranke obvešča, da za reševanje potrošniškega spora ne
          priznava nobenega izvajalca izvensodnega reševanja potrošniških sporov
          (IRPS). Elektronska povezava na platformo za spletno reševanje
          potrošniških sporov – SRPS.
        </p>
        <h4>2. Obveščanje in e-novice</h4>
        <p>
          Uporabnik se strinja, da ga ob prijavi na e-novice občasno obveščamo o
          novostih na strani, novosti v ponudbi in promocijskih akcijah.
          Ponudnik se obvezuje, da e-naslova uporabnika ne bo na noben način
          zlorabil ali posredoval tretji osebi. Uporabnik se lahko kadarkoli
          odjavi od prejemanja novičk.
        </p>
        <h4>3. Varovanje podatkov</h4>
        <p>
          Vse osebne podatke, ki nam jih boste na kakršenkoli način posredovali,
          bomo brezpogojno varovali ter ravnali z njimi v skladu z Zakonom o
          varstvu osebnih podatkov (ZVOP, Ur. l. RS, št. 59/1999, 57/2001 in
          59/2001). Vaših podatkov ne bomo pod nobenim pogojem uporabili brez
          vašega privoljenja, jih kakorkoli posredovali ali dali v uporabo
          tretjim osebam ali institucijam, razen v primerih, ki jih določa
          zakon.
        </p>
        <p>
          Spletna stran gramat-gril.si uporablja Google Analytics, ki zbira samo
          anonimne podatke in ne zadrži informacij o uporabnikih dlje kot 14
          dni.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 0;
  margin: 0 auto;

  .center {
    text-align: center;

    h4 {
      margin: 1rem 0;
      letter-spacing: ${styles.letterSpacing};
      font-weight: bold;
      font-size: 2rem;
    }

    p {
      letter-spacing: 1.2px;
      text-align: left;
      padding: 2rem 2rem;
    }
  }

  @media (min-width: 576px) {
    .center {
      width: 70vw;
    }
  }
`;

export default Legal;