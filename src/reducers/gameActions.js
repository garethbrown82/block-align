export const updateGrid = (grid) => ({
  type: 'UPDATE_GRID',
  payload: {
    grid,
  }
});

export const setPuzzleConfig = (puzzleConfig) => ({
  type: 'SET_PUZZLE_CONFIG',
  payload: {
    puzzleConfig,
  }
})

