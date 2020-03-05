// Complete the sortedInsert function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(head, data) {
    // declare variables, set up node to insert
    let newData = data
    let current = head
    let flag = true
    let prevNode = null
    let node = new DoublyLinkedListNode(data)

    while (flag) {
    // if data larger than current data, keep looping
        if (current.next && newData >= current.data) {
            prevNode = current
            current = current.next
        // if at tail and larger than current.data
        } else if (!current.next && newData >= current.data) {
            // insert after current node
            flag = false
            node.prev = current
            current.next = node
        }
        // otherwise, insert node before current node
        else {
            flag = false
            // insert node and update linked nodes
            // if not at the start 
            if (current.prev) {
                node.prev = prevNode
                prevNode.next = node
            }
            current.prev = node
            node.next = current
            // assign head directly if at front because hackerrank is a lil bitch
            if (!node.prev) {
                head = node
            }
           
        }
    }
    return head
}
