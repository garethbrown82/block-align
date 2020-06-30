import React from 'react'
import styled from 'styled-components'
import { GridSquare } from './GridSquare'

const StyledRow = styled.div`
  display: flex;
`

export const GridWrapperComponent = ({ grid, updateGrid }) => {
  return (
    <>
      <StyledRow>
        <GridSquare sideDisplayed={grid[0]} onClick={() => updateGrid(0)} />
        <GridSquare sideDisplayed={grid[1]} onClick={() => updateGrid(1)} />
        <GridSquare sideDisplayed={grid[2]} onClick={() => updateGrid(2)} />
      </StyledRow>
      <StyledRow>
        <GridSquare sideDisplayed={grid[3]} onClick={() => updateGrid(3)} />
        <GridSquare sideDisplayed={grid[4]} onClick={() => updateGrid(4)} />
        <GridSquare sideDisplayed={grid[5]} onClick={() => updateGrid(5)} />
      </StyledRow>
      <StyledRow>
        <GridSquare sideDisplayed={grid[6]} onClick={() => updateGrid(6)} />
        <GridSquare sideDisplayed={grid[7]} onClick={() => updateGrid(7)} />
        <GridSquare sideDisplayed={grid[8]} onClick={() => updateGrid(8)} />
      </StyledRow>
    </>
  )
}