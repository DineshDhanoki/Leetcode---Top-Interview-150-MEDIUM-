class LinkedList{
    constructor(val = 0, next = null){
        this.val = val
        this.next = next
    }
}

function twoSortedList(list1, list2){
const head = new LinkedList()
let current = head

while(list1 !== null && list2 !== null){
    if(list1.val <= list2.val){
        current.next = list1
        list1 = list1.next
    } else {
        current.next = list2
        list2 = list2.next
    }
    current = current.next
}
if(list1 !== null){
    current.next = list1
} else {
    current.next = list2
}
return head.next
}