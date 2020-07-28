export const updatePuzzleGrid = (grid, index, puzzleConfig) => {
  const squaresToSwitch = puzzleConfig[index];
  const updatedGrid = grid.map((value, i) => squaresToSwitch.includes(i) ? !value : value);

  return updatedGrid;
}
