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

    // trying to figure out the right variables for slicing
    console.log("numbers = ", numbers)
    let sub1 = numbers.slice(0, numbers.length / k)
    console.log("sub1 = ", sub1)
    console.log("numbers = ", numbers)
    console.log("(numbers.length / k) + 1 = ", (numbers.length / k) +1 )
    let sub2 = numbers.slice((numbers.length / k), numbers.length)
    console.log("sub2 = ", sub2)
    console.log("numbers = ", numbers)

    // slice array based on k, store those somewhere?
    for (let i = 0; i < k; i++) {
        // numbers.slice(i)
    }

}