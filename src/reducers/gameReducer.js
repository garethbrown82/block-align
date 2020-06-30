const initialState = {
  grid: [true, false, true, false, true, false, false, false, false ]
}
export const gameReducer = (state=initialState, action) => {
  if (action.type === 'UPDATE_GRID') {
    const { grid } = state;
    const { index } = action.payload;
    const newValue = !grid[index];
    return { ...state, grid: [...grid.slice(0, index), newValue, ...grid.slice(index+1)] };
  }
  
  return state;
}