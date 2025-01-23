function isIsomorphic(s,t){
    if (s.length !== t.length){
    return false
}

    const MapS = {}
    const MapT = {}

    for(i=0; i<s.length; i++){
        const charS = s[i]
        const charT = t[i]

        if((MapS[charS] !== undefined && MapS[charS] !== charT) ||
        (MapT[charT] !== undefined && MapT[charT] !== charS)){
            return false
        }
        MapS[charS] = charT
        MapT[charT] = charS
    }
    return true
    }


const s = "egg"
const t = "add"
const result = isIsomorphic(s,t)
console.log(result)