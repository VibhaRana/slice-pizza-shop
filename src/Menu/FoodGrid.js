import styled from 'styled-components'
import {Title} from '../Styles/title'

export const FoodGrid = styled.div`
display : grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
`

export const FoodLabel = styled.div`
position: absolute;
background-color : white;
padding : 5px;
` 
//This allows to create dynamic images
export const Food = styled(Title)`
height : 250px;
  width : 250px;  

padding: 10px;
font-size: 20px;
/* scroll-padding: 10px; */
 background-image: ${({img}) => `url(${img});`};
 background-position:center;
  background-size: cover;
  border-radius : 7px;
  object-fit : contain;
  box-shadow: 0px 0px 2px 0px grey;
  &:hover {
      cursor : pointer;
      opacity : 0.7;
  }
`