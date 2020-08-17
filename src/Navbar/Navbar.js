import React from 'react'
import styled from 'styled-components'
import { pizzaRed } from '../Styles/colors'
import {Title} from '../Styles/title'

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding : 10px;
  position : fixed;
  width : 100%;
`

const Logo = styled(Title)`
color : white;
font-size : 20px;
text-shadow: 1px 1px  1px 4px ;
`

export function Navbar() {
    return (
        <NavbarStyled>
          <Logo>
              <h2>Sliceline 🍕🍟</h2>
          </Logo>
        </NavbarStyled>
    )
}


