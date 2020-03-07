// Max of array queries

function maxArrayQueries(n, queries) {
    // create array of zeros
    // let arr = [0] * n
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(0)
    }
    // console.log("arr = ", arr)

    // go through each query at a time
    queries.forEach(q => {
        // console.log("q = ", q)
        console.log("---")
        let start = q[0]
        let end = q[1]
        let k = q[2]
        // console.log("start = ", start)
        // console.log("end = ", end)
        // console.log("k = ", k)

        // loop from index start to index end, for each arr[index], add k
        for (let i = start; i <= end; i++) {
            // console.log("i = ", i)
            // must be -1 because of 1-based array
            arr[i -1] += k
        }
    })
    // console.log("arr = ", arr)

    // return max value of array
    return Math.max(...arr)
}

// Note construction

function constructNote(magazine, note) {
    // Write your code here

    let bool = true
    // go through note, check each word
    note.forEach(word => {
        // console.log("note: ", word)
        // console.log("magazine.includes(word): ", magazine.includes(word))
        if (!magazine.includes(word)) {
        //  indexOf returns -1 if element is not in array, otherwise returns index of element
        // if not in magazine, return false
        // if (magazine.indexOf(word) === -1) {
            // return false
            bool = false
        } else {
            // if it is magazine, remove from magazine and continue
            let index = magazine.indexOf(word)
            // delete magazine[index]
            magazine.splice(index, 1)
        }

    })
    // return true
    return bool
}

// Array partitioning
function partitionArray(k, numbers) {
    // Write your code here
    let answer = "Yes"
    // trying to figure out the right variables for slicing
    // console.log("numbers = ", numbers)
    // let sub1 = numbers.slice(0, numbers.length / k)
    // console.log("sub1 = ", sub1)
    // console.log("numbers = ", numbers)
    // console.log("(numbers.length / k) + 1 = ", (numbers.length / k) +1 )
    // let sub2 = numbers.slice((numbers.length / k), numbers.length)
    // console.log("sub2 = ", sub2)
    // console.log("numbers = ", numbers)

    // slice array based on k, store those somewhere?
    // store subs in array, then how to test?
    let arr = []
    // for (let i = 0; i < numbers.length; k) {
    // starting at index 0, slice from i to i+k, and store that in arr. then increase i by k to get next needed starting point
    for (let i = 0; i < numbers.length; i += k) {
        // console.log("i = ", i)
        let subArr = numbers.slice(i, i+k)
        // console.log("subArr = ", subArr)
        arr.push(subArr)
        // numbers.splice(i, k)
        // console.log(numbers)
    }
    // console.log("arr = ", arr)
    // how to test
    // double loop and keep track in dict? set?
    // checkk length of a set against original sub array? if they are different that means there was a duplicate value, because duplicates can't be added to set
    arr.forEach(sub => {
        // add condition if subs are not equal size
        if (sub.length !== arr[0].length) {
            answer= "No"
        }
        let mySet = new Set(sub)
        // console.log("mySet = ", mySet)
        // console.log("mySet.length = ", mySet.length)
        if (mySet.size !== sub.length) {
            answer = "No"
        }
    })
    // for each sub array, loop through
    // inside that loop, loop again through the other elements and compare?
    // so looping and comparing every element for each element
    // arr.forEach(sub => {
    //     for (let i = 0; i < sub.length; i++) {
    //         console.log("i = ", i)
    //         for (let j = 0; j < sub.length; j++) {
    //             console.log("j = ", j)
    //             // cant seem to get it to not check itself
    //             if (i === j && sub[i] !== sub[j]) {
    //                 // return "No"
    //                 answer = "No"
    //             }
    //         }
    //     }
    // })
    return answer
    // // iterate twice in one loop?
    //     for (let i = 0, j = 0; i < sub.length, j < sub.length; i++, j++) {
    //         console.log("i = ", i)
    //         console.log("j = ", j)
    //     }
    // })

}