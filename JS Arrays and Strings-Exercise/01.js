function solve(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        arr.push(arr.shift());
    }
    return arr.join(" ");
}