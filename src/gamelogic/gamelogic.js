export const updatePuzzleGrid = (grid, index, puzzleConfig) => {
  const squaresToSwitch = puzzleConfig[index];
  const updatedGrid = grid.map((value, i) => squaresToSwitch.includes(i) ? !value : value);

  return updatedGrid;
}

export const createPuzzleConfig = (difficulty) => {
  const initialConfig = Array.from(new Array(9).keys()).map((squareIndex) => [squareIndex]);

  const puzzleConfig = initialConfig.map((primarySquare) => {
    const secondarySquares = Array.from(new Array(difficulty).keys());
    const configuredSecondarySquare = secondarySquares.map((_) => randomIntBetween(0, 9));
    return Array.from(new Set([...primarySquare, ...configuredSecondarySquare]))
  })

  console.log('puzzleConfig: ', puzzleConfig)
  return puzzleConfig
}

export const Difficulty = Object.freeze({
  Easy: '1',
  Medium: '2',
  Hard: '3',
})

const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
