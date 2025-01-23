function longestCommonPrefix(strs){
    if(strs.length === 0){
        return ''
    }

    let prefix = strs[0].toLowerCase()

    for (let i=1; i<strs.length; i++){
        while (strs[i].toLowerCase().indexOf(prefix) !== 0){
            prefix = prefix.slice(0,-1)

                if(prefix === ''){
                    return ''
                }
        }
    }
    return prefix
}

const strs = ['dinesh', 'diplo', 'DIPLODOCUS']
const result = longestCommonPrefix(strs)
console.log(result)
