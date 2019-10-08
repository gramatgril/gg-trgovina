import React from "react";
import styled from "styled-components";

import { styles, Container } from "../../styles";

const Legal = () => {
  return (
    <Wrapper>
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
        novostih na strani, novosti v ponudbi in promocijskih akcijah. Ponudnik
        se obvezuje, da e-naslova uporabnika ne bo na noben način zlorabil ali
        posredoval tretji osebi. Uporabnik se lahko kadarkoli odjavi od
        prejemanja novičk.
      </p>
      <h4>3. Varovanje podatkov</h4>
      <p>
        Vse osebne podatke, ki nam jih boste na kakršenkoli način posredovali,
        bomo brezpogojno varovali ter ravnali z njimi v skladu z Zakonom o
        varstvu osebnih podatkov (ZVOP, Ur. l. RS, št. 59/1999, 57/2001 in
        59/2001). Vaših podatkov ne bomo pod nobenim pogojem uporabili brez
        vašega privoljenja, jih kakorkoli posredovali ali dali v uporabo tretjim
        osebam ali institucijam, razen v primerih, ki jih določa zakon.
      </p>
      <p>
        Spletna stran gramat-gril.si uporablja Google Analytics, ki zbira samo
        anonimne podatke in ne zadrži informacij o uporabnikih dlje kot 14 dni.
      </p>
    </Wrapper>
  );
};

export default Legal;

const Wrapper = styled(Container)`
  padding: 3rem 0;
  h4 {
    letter-spacing: ${styles.letterSpacing};
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: 2px;
  }

  p {
    /* letter-spacing: 1px; */
    text-align: left;
    padding: 2rem 0;
  }
`;
