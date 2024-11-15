function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charSet = new Set();

  for (let end = 0; end < s.length; end++) {
    while (charSet.has(s[end])) {
      charSet.delete(s[start]);
      start++;
    }
    charSet.add(s[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
