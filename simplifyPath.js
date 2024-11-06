function simplifyPath(path){
    const stack = []
    const components = path.split('/')

    for(const component of components){
        if(component === '' || component === '.'){
            continue
        }
            if(component === '..'){
                if(stack.length > 0){
                    stack.pop()
                }
            } else {
                stack.push(component)
            }
    }
    return '/' + stack.join('/')
}