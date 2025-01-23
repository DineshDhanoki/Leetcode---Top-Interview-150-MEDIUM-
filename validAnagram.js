function isAnagram(s,t){
    return s.split('').sort().join('') === t.split('').sort().join('')
}

const s = "anagram";
const t = "nagaram";
const result = isAnagram(s, t);
console.log(result);