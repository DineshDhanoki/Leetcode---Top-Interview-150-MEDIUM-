function romanToInteger(symbol) {
    const romanToIntegerMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let num = 0
    for (let i=0; i<symbol.length; i++){
        const currentSymbol = symbol[i]
        const nextSymbol = symbol[i + 1]
        if(romanToIntegerMap[currentSymbol] < romanToIntegerMap[nextSymbol]){
            num -= romanToIntegerMap[currentSymbol]
        }else{
            num += romanToIntegerMap[currentSymbol]
        }
    }
    return num
}

const symbol = 'MCMXCIV'
const result = romanToInteger(symbol)
console.log(result)