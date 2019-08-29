import React, { useState } from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook } from "react-icons/fa"

import { styles } from "../../utils"

import logo from "../../images/stil-logo.jpg"

const NavbarIcons = () => {
  const [icons] = useState([
    {
      id: 0,
      icon: <img src={logo} alt="stil" className="icon stil-icon" />,
      path: "https://gramat-gril.si/",
    },
    {
      id: 1,
      icon: <FaFacebook className="icon facebook-icon" />,
      path: "https://www.facebook.com",
    },
    {
      id: 2,
      icon: <FaInstagram className="icon instagram-icon" />,
      path: "https://www.instagram.com",
    },
  ])

  return (
    <IconsWrapper>
      {icons.map(({ id, path, icon }) => (
        <a key={id} href={path} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      ))}
    </IconsWrapper>
  )
}

const IconsWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transition({})}
  }

  .icon:hover {
    color: ${styles.colors.mainYellow};
  }

  .facebook-icon {
    color: #3b579d;
  }

  .stil-icon {
    height: 20px;
    color: #38b7f0;
  }

  .instagram-icon {
    color: #da5f53;
  }

  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`

export default NavbarIcons
