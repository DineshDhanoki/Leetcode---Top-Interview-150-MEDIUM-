function isValid(board){
    let  rows = Array.from({length: 9}, () => new Set ())
    let columns = Array.from({length: 9}, () => new Set ())
    let boxes = Array.from({length: 9}, () => new Set ())
    for(let row = 0; row < 9; row ++){
        for(let column = 0; column < 9; column ++){
            let target = board[row][column]
            if (target === '.') 
                continue

let boardBoxes = Math.floor(row / 3) * 3 + Math.floor(column / 3)

if(rows[row].has(target) || columns[column].has(target) || boxes[boardBoxes].has(value)){
return false
            }
            rows[row].add(target)
            columns[column].add(target)
            boxes[boardBoxes].add(target)
        }
    }
    return true
}