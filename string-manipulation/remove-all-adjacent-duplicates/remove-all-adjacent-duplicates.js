const removeDuplicates = function(S) {
    let matches = true
    let reg = /(.)\1/g
    
    // make while loop which runs while duplicates exist
    while (matches) {

        // replaces the duplicates with nothing
        S = S.replace(reg, "")
        
        // checks to see if any matches still exist
        matches = reg.test(S)
    }
    return S
};