class ListNode{
    constructor (val=0, next = null){
    this.val = val
    this.next = null
}
}

function listCycle(head){
    if(!head || !head.next){
        return false
    }
    let slow = head
    let fast = head.next

    while(slow !== fast){
        if(!fast || !fast.next){
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }
    return true
}

const node1 = new ListNode(3); 
const node2 = new ListNode(2); 
const node3 = new ListNode(0); 
const node4 = new ListNode(-4);

node1.next = node2; 
node2.next = node3; 
node3.next = node4; 
node4.next = node2;

console.log(listCycle(node1));