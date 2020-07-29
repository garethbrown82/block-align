const initialState = {
  grid: [true, true, true, true, true, true, true, true, true],
  puzzleConfig: [],
}
export const gameReducer = (state=initialState, action) => {
  if (action.type === 'UPDATE_GRID') {
    const { grid } = action.payload;
    return { ...state, grid: [...grid] };
  }

  if (action.type === 'SET_PUZZLE_CONFIG') {
    return { ...state, puzzleConfig: action.payload.puzzleConfig }
  }
  
  return state;
}

// Actions
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
