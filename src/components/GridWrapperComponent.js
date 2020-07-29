import React, { useEffect } from 'react'
import styled from 'styled-components'
import { GridSquare } from './GridSquare'
import { useSelector, useDispatch } from 'react-redux'
import { updateGrid, setPuzzleConfig } from '../reducers/gameReducer'
import { updatePuzzleGrid, createPuzzleConfig, Difficulty } from '../gamelogic/gamelogic'

const StyledRow = styled.div`
  display: flex;
`

export const GridWrapper = () => {
  const dispatch = useDispatch();
  
  const grid = useSelector((state) => state.grid);
  const puzzleConfig = useSelector((state) => state.puzzleConfig);

  useEffect(() => {
    const newPuzzleConfig = createPuzzleConfig(Difficulty.Hard);

    dispatch(setPuzzleConfig(newPuzzleConfig));
  }, [dispatch])

  useEffect(() => {
    const isComplete = grid.every((square) => Boolean(square));
    isComplete && console.log('you win!');
  })

  const handleGridUpdate = (index) => {
    const updatedGrid = updatePuzzleGrid(grid, index, puzzleConfig)
    dispatch(updateGrid(updatedGrid));
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