const initialState = {
  count: 0,
}
export const gameReducer = (state=initialState, action) => {
  if (action.type === 'count') {
    return {...state, count: state.count + 1}
  }
  
  return state;
}