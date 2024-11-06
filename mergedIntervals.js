function merge(intervals){
    if(intervals.length === 0) return []

     intervals.sort((a,b) => a[0] - b[0])

    const merge = []
    let currentIntervals = intervals[0]

    for(i =0; i < intervals.length; i++){
        const [currentStart, currentEnd] = currentIntervals
        const [nextStart, nextEnd] = intervals[i]

        if(currentEnd >= nextStart){
            currentIntervals = [currentStart, Math.max(currentEnd, nextEnd)]
        } else {
            merge.push(currentIntervals)
            currentIntervals = intervals[i]
        }
    }
    merge.push(currentIntervals)
    return merge
}