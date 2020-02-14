// ANAGRAM

function makeAnagrams(a, b) {
    // Write your code here
    // store instances in object
    let trackerA = {}
    let trackerB = {}
    // add number of occurences
    a.split("").map(char => {
        trackerA[char] 
            ? trackerA[char]++
            : trackerA[char] = 1
    })
    // compare occurences ?


}

// CONDENSED LIST

function condense(head) {
    // Write your code here
    // set current node to head to start
    let current = head
    // set previous node to null to start
    let prev = null
    // store node values occurrences in object
    const nodeValues = {}
    // loop through nodes
    while (current) {
        console.log("prev = ", prev)
        console.log("current = ", current)
        // console.log("current.data = ", current.data)
        // console.log("prev = ", prev)
        // if node value already exists in object
        if (nodeValues[current.data]) {
            nodeValues[current.data]++
            // remove node from list
            // to do so, need to reassign prev.next to the current.next
            // if current.next is null, reassign prev.next to null
            // console.log("prev.next = ", prev.next)
            // console.log("current.data = ", current.data)
            // console.log("current.next = ", current.next)
            // if (current.next === null) {
            //     console.log("null says hi")
            //     prev.next = null
            // } else {
            //     prev.next = current.next
            // }
            prev.next = current.next
        }
        // else add to object
        else {
            nodeValues[current.data] = 1
        }
        // need null condition to fix problem of not deleting last redundant node
        // console.log("prev = ", prev)
        // if (prev.next)  

        //  how do i reassign prev.next to current.next and yet still traverse? it works until the end
        prev = current
        current = current.next
    }
    // console.log("nodeValues = ", nodeValues)
    return head

}

// REVERSE WITHIN PARENTHESES

function reverseInParentheses(s) {
    // Write your code here
    // want to pull out parentheses sections, reverse, and add them back in

    // captures all strings inside parentheses
    const pGroups = s.match(/\([^()]+\)/gi)
    // replaces those sections with a placeholder 
    const replaced = s.replace(/\([^()]+\)/gi, "#")
    console.log("replaced = ", replaced)
    // for each group, reverse the string inside parentheses
    const reversedPGroups = []
    pGroups.forEach(group => {
        // adds those to new array once reversed
        reversedPGroups.push(group.match(/[a-z]/gi).reverse().join(""))
    })
    console.log(reversedPGroups)
    // for each reversed group, replace into replaced string
    // reversedPGroups.forEach(group => {
    //     replaced.replace(/#/, group)
    // })
    replaced.replace(/\W/, reversedPGroups[0])
    console.log("replaced after = ", replaced)
    
}
