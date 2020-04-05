const keyHash = {
  "38": "up",
  "87": "up",
  "40": "down",
  "83": "down",
  "37": "left",
  "65": "left",
  "39": "right",
  "68": "right",
};

function generateMap(fieldSize = 4) {
  const rows = Array(fieldSize).fill(0);
  const map = rows.map((row) => {
    return Array(fieldSize).fill(0);
  });
  const { x, y } = getRandomCoord(map);
  //   const initialCellX = Math.floor(Math.random() * fieldSize);
  //   const initialCellY = Math.floor(Math.random() * fieldSize);
  map[x][y] = 2;
  return map;
}

function down(map) {
  const updatedMap = copyMap(map);

  for (let row = 3; row > 0; row--) {
    const currentRow = updatedMap[row];
    for (let col = 0; col <= 3; col++) {
      for (let rowToCheck = row - 1; rowToCheck >= 0; rowToCheck--) {
        const cell = currentRow[col];
        const cellToCheck = updatedMap[rowToCheck][col];
        if (cellToCheck === 0) {
          continue;
        } else {
          if (cell === 0) {
            updatedMap[row][col] = cellToCheck;
            updatedMap[rowToCheck][col] = 0;
          } else if (cell === cellToCheck) {
            updatedMap[row][col] += updatedMap[row][col];
            updatedMap[rowToCheck][col] = 0;
          }
        }
      }
    }
  }
  return updatedMap;
}

function left(map) {
  let updatedMap = rotate90Counter(map);
  updatedMap = down(updatedMap);
  updatedMap = rotate90(updatedMap);
  return updatedMap;
}

function right(map) {
  let updatedMap = rotate90(map);
  updatedMap = down(updatedMap);
  updatedMap = rotate90Counter(updatedMap);
  return updatedMap;
}

function up(map) {
  let updatedMap = rotate180(map);
  updatedMap = down(updatedMap);
  updatedMap = rotate180(updatedMap);
  return updatedMap;
}

function rotate90(map) {
  const updatedMap = copyMap(map);

  const size = map.length;
  map.forEach((row, y) => {
    row.forEach((col, x) => {
      updatedMap[y][x] = map[size - 1 - x][y];
    });
  });
  return updatedMap;
}

function rotate90Counter(map) {
  const updatedMap = copyMap(map);
  const size = map.length;
  map.forEach((row, y) => {
    row.forEach((col, x) => {
      updatedMap[y][x] = map[x][size - 1 - y];
    });
  });
  return updatedMap;
}

function rotate180(map) {
  let updatedMap = rotate90(map);
  updatedMap = rotate90(updatedMap);
  return updatedMap;
}

function copyMap(map) {
  const rows = [...map];
  const updatedMap = rows.map((row, i) => [...map[i]]);
  return updatedMap;
}
function checkForEmptyCells(map) {
  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      if (map[x][y] === 0) {
        return true;
      }
    }
  }
  return false;
}

function getRandomCoord(map) {
  const fieldSize = map.length;
  let x = null;
  let y = null;
  do {
    x = Math.floor(Math.random() * fieldSize);
    y = Math.floor(Math.random() * fieldSize);
  } while (map[x][y] !== 0);
  return { x, y };
}

const move = {
  right,
  down,
  up,
  left,
};

export { generateMap, checkForEmptyCells, getRandomCoord, move, keyHash };
