import React from 'react'
import styled from 'styled-components'

const StyledSquare = styled.div`
  height: 100px;
  width: 100px;
  margin: 10px;
  background-color: ${props => props.sideDisplayed ? 'blue' : 'green'};
`

export const GridSquare = ({ sideDisplayed, onClick, gridIndex }) => {
  const handleClick = () => {
    onClick(gridIndex);
  }

  return (
    <StyledSquare
      sideDisplayed={sideDisplayed}
      onClick={handleClick}
    />
  )
}