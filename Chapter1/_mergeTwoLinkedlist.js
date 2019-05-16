//defination of linkedList Node
// function ListNode(val){
//     this.val = val;
//     this.next = null;
// }

function mergeTwoLists(l1 , l2){
    //initiating a new node with value -1
    let mergedHead = { val : -1, next : null },
    //creating a pointer which will keep track of current node
    currentNode = mergedHead;
    while(l1 && l2) {
        if(l1.val > l2.val) {
            currentNode.next = l2;
            l2 = l2.next;
        } else {
            currentNode.next = l1;
            l1 = l1.next;
        }
        currentNode = currentNode.next;
    }
    currentNode.next = l1 || l2;
    
    return mergedHead.next;
}


//using recursion

function mergeTwoLists(l1, l2){
    if(l1 === null) return l2;
    else if(l2 === null) return l1;
    else if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1;
    }
    else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}