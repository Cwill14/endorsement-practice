function isValid(s) {
    let tracker = {}
    s.split("").map(char => { 
        tracker[char] 
            ?  tracker[char] += 1
            :  tracker[char] = 1

    })
    let values = Object.values(tracker)
    function subFromMax() {
        let highestKey = ""
        let x = ""
        let highest = 1
        for (x in tracker) {
            if(tracker[x] > highest) {
                highest = tracker[x]
                highestKey = x
            }
        }
        tracker[highestKey] -= 1
        return Object.values(tracker)
    }
    return values.every(value => value === values[0])
        ? "YES"
        :  subFromMax().every(value => value === values[0])
            ? "YES"
            : "NO"
}


// PASSED 15 OF 20 TESTS ON HACKERRANK