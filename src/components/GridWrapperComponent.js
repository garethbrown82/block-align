import React from 'react'
import styled from 'styled-components'
import { GridSquare } from './GridSquare'
import { useSelector, useDispatch } from 'react-redux'
import { updateGrid } from '../reducers/gameActions'

const StyledRow = styled.div`
  display: flex;
`

export const GridWrapperComponent = () => {
  const grid = useSelector((state) => state.grid);
  const dispatch = useDispatch();

  const handleGridUpdate = (index) => {
    dispatch(updateGrid(index));
  }
  
  return (
    <>
      <StyledRow>
        <GridSquare sideDisplayed={grid[0]} onClick={() => handleGridUpdate(0)} />
        <GridSquare sideDisplayed={grid[1]} onClick={() => handleGridUpdate(1)} />
        <GridSquare sideDisplayed={grid[2]} onClick={() => handleGridUpdate(2)} />
      </StyledRow>
      <StyledRow>
        <GridSquare sideDisplayed={grid[3]} onClick={() => handleGridUpdate(3)} />
        <GridSquare sideDisplayed={grid[4]} onClick={() => handleGridUpdate(4)} />
        <GridSquare sideDisplayed={grid[5]} onClick={() => handleGridUpdate(5)} />
      </StyledRow>
      <StyledRow>
        <GridSquare sideDisplayed={grid[6]} onClick={() => handleGridUpdate(6)} />
        <GridSquare sideDisplayed={grid[7]} onClick={() => handleGridUpdate(7)} />
        <GridSquare sideDisplayed={grid[8]} onClick={() => handleGridUpdate(8)} />
      </StyledRow>
    </>
  )
}