const initialState = {
  grid: [false, false, false, false, false, false, false, false, false ],
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