function Length(s){
    const words = s.trim().split(' ')
    return words[words.length-1].length
}

const s = 'My name is Dinesh  '
const result = Length(s)
console.log(result)