class ListNode{
    constructor(val = 0, next = null){
        this.val = val
        this.next = next
    }
}

function addTwoNumbers(l1, l2){
    let dummyhead = new ListNode()
    let current = dummyhead
    let carry = 0

    while(l1 !== null || l2 !== null){
        let x = l1 !== null ? l1.val : 0
        let y = l2 !== null ? l2.val : 0
        let sum = carry + x + y
        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)
        current = current.next
        if(l1 !== null) l1 = l1.next
        if(l2 !== null) l2 = l2.next
    }
    if(carry > 0){
        current.next = new ListNode(carry)
    }
    return dummyhead.next
}