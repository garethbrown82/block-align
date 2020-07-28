const initialState = {
  grid: [false, false, false, false, false, false, false, false, false ]
}
export const gameReducer = (state=initialState, action) => {
  if (action.type === 'UPDATE_GRID') {
    const { grid } = action.payload;
    return { ...state, grid: [...grid] };
  }
  
  return state;
}