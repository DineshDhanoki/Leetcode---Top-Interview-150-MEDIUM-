function canConstruct(ransomNote, magazine){
    charCount = {}


//check the frequency of characters in magazines
for(const char of magazine){
    charCount[char] = (charCount[char] || 0) + 1
}

//check if the characters of ransomNote is present in magazine
for (const char of ransomNote){
    if(!charCount[char] || charCount[char] === 0){
        return false
    }
    charCount[char]--
}
return true
}

const ransomNote = "aa";
const magazine = "aab";
const result = canConstruct(ransomNote, magazine);
console.log(result)
