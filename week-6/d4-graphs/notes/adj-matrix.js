/*
    PLEASE NOTE THESE ARE NOT EXACT FOR ANY SPECIFIC PROBLEM.
    THESE ARE TO HELP GUIDE YOU, NOT GIVE DIRECT ANSWERS TO ANYTHING.
*/

// const matrix1 = [ [ 0, 0, 0, 0, 1 ], [ 1, 1, 1, 0, 1 ], [ 0, 1, 0, 1, 1 ], [ 0, 1, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ];


const matrix = [
    [ 0, 0, 0, 0, 1 ],
    [ 1, 1, 1, 0, 1 ],
    [ 0, 1, 0, 1, 1 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
];

// let row = 0
// let col = 0

// console.log(matrix[row + 1][col + 1])

function findNeighbors(row, col, matrix) {
    const neighbors = [];
    // up
    if (row > 0 && matrix[row-1][col] === 1) {
        neighbors.push([row-1,col])
    }
    // down
    if (row < matrix.length - 1 && matrix[row+1][col] === 1) {
        neighbors.push([row+1,col]);
    }
    // left
    if (col > 0 && matrix[row][col-1] === 1) {
        neighbors.push([row,col-1]);
    }
    // right
    if (col < matrix[row].length -1 && matrix[row][col+1] === 1) {
        neighbors.push([row,col+1]);
    }
    return neighbors;
}


// console.log(findNeighbors(1, 1, matrix));

function localTraversal(node, matrix, visited) {
    const queue = [node];
    visited.add(node.toString());

    while (queue.length) {
        const [row, col] = queue.shift();

        const neighbors = findNeighbors(row, col, matrix);
        // console.log(neighbors.length)
        // DO THE THING
        if (neighbors.length > 2) return true;

        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor.toString())) {
                queue.push(neighbor);
                visited.add(neighbor.toString());
            }
        });
    }
    return false;
}

// console.log(localTraversal([0,4], matrix, new Set()));

function driver(matrix) {
    const visited = new Set();
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col ++) {
            if (matrix[row][col] === 1) {
                if (localTraversal([row,col], matrix, visited)) return true;
            }
        }
    }
    return false;
}

console.log(driver(matrix));
