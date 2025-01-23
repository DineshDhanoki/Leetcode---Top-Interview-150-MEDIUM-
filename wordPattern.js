function wordPattern(pattern,s){
    const arr = s.split(' '),template={}
    
    if(pattern.length !== arr.length || new Set([...pattern]).size !== new Set(arr).size)
        return false

    for (let i=0; i<pattern.length; i++){
        if(!template[pattern[i]]) {template[pattern[i]] = arr[i]}
        else if (template[pattern[i] !== arr[i]]){
            return false
        }
    }
    return true
}

const pattern = "abba";
const s = "dog constructor constructor dog";
const result = wordPattern(pattern, s);
console.log(result);