import React, { useState } from 'react'
import styled from 'styled-components'
import { GridSquare } from './GridSquare'

const StyledRow = styled.div`
  display: flex;
`

export const GridWrapperComponent = ({ count, countUp }) => {
  const [grid, setGrid] = useState([true, false, false, false, false, false, false, false, false ])
  
  const updateGrid = (gridIndex) => {
    const value = !grid[gridIndex];
    const newGrid = [...grid.slice(0, gridIndex), value, ...grid.slice(gridIndex+1)];
    setGrid(newGrid);
  }

  const handleClick = () => {
    countUp();
  }

  return (
    <>
      <StyledRow>
        <GridSquare sideDisplayed={grid[0]} gridIndex={0} onClick={updateGrid} />
        <GridSquare sideDisplayed={grid[1]} gridIndex={1} onClick={updateGrid} />
        <GridSquare sideDisplayed={grid[2]} gridIndex={2} onClick={updateGrid} />
      </StyledRow>
      <StyledRow>
        <GridSquare sideDisplayed={grid[3]} gridIndex={3} onClick={updateGrid} />
        <GridSquare sideDisplayed={grid[4]} gridIndex={4} onClick={updateGrid} />
        <GridSquare sideDisplayed={grid[5]} gridIndex={5} onClick={updateGrid} />
      </StyledRow>
      <StyledRow>
        <GridSquare sideDisplayed={grid[6]} gridIndex={6} onClick={updateGrid} />
        <GridSquare sideDisplayed={grid[7]} gridIndex={7} onClick={updateGrid} />
        <GridSquare sideDisplayed={grid[8]} gridIndex={8} onClick={updateGrid} />
      </StyledRow>
      <button onClick={handleClick}>{`press  me ${count}`}</button>
    </>
  )
}