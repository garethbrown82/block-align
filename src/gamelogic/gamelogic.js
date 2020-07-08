const puzzleConfig = [
  [0, 1],
  [1, 2],
  [2, 3],

  [3, 4],
  [4, 5],
  [5, 6],
  
  [6, 7],
  [7, 8],
  [8],
]

export const updatePuzzleGrid = (grid, index) => {
  const squaresToSwitch = puzzleConfig[index];
  const updatedGrid = grid.map((value, i) => squaresToSwitch.includes(i) ? !value : value);

  return updatedGrid;
}
