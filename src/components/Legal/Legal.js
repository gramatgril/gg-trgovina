import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Container } from "../../styles";

const Legal = () => (
  <Wrapper>
    <h2>1. Izvensodno reševanje potrošniških sporov</h2>
    <p>
      Gramat Gril d.o.o. skladno z določbo 3. odstavka 32. člena Zakona o
      izvensodnem reševanju potrošniških sporov (Ur. l. RS, št. 81/2015; ZlsRPS)
      svoje stranke obvešča, da za reševanje potrošniškega spora ne priznava
      nobenega izvajalca izvensodnega reševanja potrošniških sporov (IRPS).{" "}
      <a
        className="link pulsate"
        href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=SL"
      >
        Elektronska povezava na platformo za spletno reševanje potrošniških
        sporov – SRPS.
      </a>
    </p>
    <h2>2. Piškotki (Cookies)</h2>
    <p>
      Spletna stran uporablja Google Analytics za analizo obiska in zbira samo
      anonimne podatke ter ne zadrži informacij o uporabnikih dlje kot 14 dni.
    </p>
    <h2>3. Varovanje podatkov</h2>
    <p>
      Vse osebne podatke, ki nam jih boste na kakršenkoli način posredovali,
      bomo brezpogojno varovali ter ravnali z njimi v skladu z Zakonom o varstvu
      osebnih podatkov (ZVOP, Ur. l. RS, št. 59/1999, 57/2001 in 59/2001). Vaših
      podatkov ne bomo pod nobenim pogojem uporabili brez vašega privoljenja,
      jih kakorkoli posredovali ali dali v uporabo tretjim osebam ali
      institucijam, razen v primerih, ki jih določa zakon. Za izbris vaših
      podatkov nas kontaktirajte na poštnem naslovu info@gramat-gril.si, ali z
      obrazcem na naši{" "}
      <Link className="link pulsate" to="/kontakt">
        kontaktni strani.
      </Link>
    </p>
    <h2>3. Pritožbe</h2>
    <p>
      V primeru vprašanj in pritožb v zvezi s splošno uredbo o varstvu podatkov,
      se lahko obrnete na organ za varstvo podatkov, ki je v Republiki Sloveniji
      Informacijski Pooblaščenec RS, dosegljiv na spodnjem naslovu:
      Informacijski pooblaščenec Zaloška cesta 59 1000 Ljubljana, Slovenija T:
      01 230 97 30 F: 01 230 97 78 e-pošta: gp.ip(at)ip-rs.si
    </p>
  </Wrapper>
);
export default Legal;

const Wrapper = styled(Container)`
  padding: 3rem 0;

  h2 {
    letter-spacing: ${({ theme }) => theme.letterSpacing};
    font-weight: 500;
    letter-spacing: 2px;
  }

  p {
    text-align: left;
    padding: 1rem 0 3rem;
  }

  .link {
    color: ${({ theme }) => theme.green};

    &:hover {
      opacity: 0.7;
    }
  }
`;
