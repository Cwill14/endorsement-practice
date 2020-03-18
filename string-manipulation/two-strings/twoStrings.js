// uses object(hashmap) to save time
function twoStrings(s1, s2) {
    const map = {};
    for (let i of s1) {
        map[i] = 1;
    }
    for (let i of s2) {
        if (map[i])
            return "YES";
    }
    return "NO";

}