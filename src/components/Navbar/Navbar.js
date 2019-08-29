import React, { useState } from "react"
import styled from "styled-components"

import NavbarHeader from "./NavbarHeader"
import NavbarIcons from "./NavbarIcons"
import NavbarLinks from "./NavbarLinks"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <NavbarWrapper>
      <NavbarHeader toggleOpen={toggleOpen} />
      <NavbarLinks isOpen={isOpen} />
      <NavbarIcons />
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.div`
  border-bottom: 1px solid black;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export default Navbar
