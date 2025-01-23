function strStr(haystack, needle) {
    if (needle === ''){
        return 0
    }
    
    for (let i=0; i<haystack.length - needle.length + 1; i++){
        if(haystack.substring(i, needle.length - i) === needle){
            return i
        }
    }
    return -1
}

const haystack = "sadbutsad" 
const needle = "sad"
const result = strStr(haystack, needle)
console.log(result)