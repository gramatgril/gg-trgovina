import React from "react";
import styled from "styled-components";

const Legal = () => {
  return (
    <LegalWrapper>
      <div className="center">
        <h5>1. Izvensodno reševanje potrošniških sporov</h5>
        <p>
          Gramat Gril d.o.o. skladno z določbo 3. odstavka 32. člena Zakona o
          izvensodnem reševanju potrošniških sporov (Ur. l. RS, št. 81/2015;
          ZlsRPS) svoje stranke obvešča, da za reševanje potrošniškega spora ne
          priznava nobenega izvajalca izvensodnega reševanja potrošniških sporov
          (IRPS). Elektronska povezava na platformo za spletno reševanje
          potrošniških sporov – SRPS.
        </p>
        <h5>2. Obveščanje in e-novice</h5>
        <p>
          Uporabnik se strinja, da ga ob prijavi na e-novice občasno obveščamo o
          novostih na strani, novosti v ponudbi in promocijskih akcijah.
          Ponudnik se obvezuje, da e-naslova uporabnika ne bo na noben način
          zlorabil ali posredoval tretji osebi. Uporabnik se lahko kadarkoli
          odjavi od prejemanja novičk.
        </p>
        <h5>3. Varovanje podatkov</h5>
        <p>
          Vse osebne podatke, ki nam jih boste na kakršenkoli način posredovali,
          bomo brezpogojno varovali ter ravnali z njimi v skladu z Zakonom o
          varstvu osebnih podatkov (ZVOP, Ur. l. RS, št. 59/1999, 57/2001 in
          59/2001). Vaših podatkov ne bomo pod nobenim pogojem uporabili brez
          vašega privoljenja, jih kakorkoli posredovali ali dali v uporabo
          tretjim osebam ali institucijam, razen v primerih, ki jih določa
          zakon.
        </p>
      </div>
    </LegalWrapper>
  );
};

const LegalWrapper = styled.div`
  padding-top: 2rem;
  margin: 0 auto;

  .center {
    width: 70vw;
    text-align: center;

    h5 {
      text-align: left;
      font-weight: bold;
      font-size: 22px;
    }

    p {
      text-align: left;
      padding: 1rem;
      margin-bottom: 2rem;
    }
  }
`;

export default Legal;
