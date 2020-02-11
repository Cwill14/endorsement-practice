function hourglassSum(arr) {
    let sumsArr = [];
    for(let i = 0; i <= arr.length - 3; i++){
        for(let j = 0; j <= arr[0].length - 3; j++) {
            let total = 0;
            total += arr[i][j] + arr[i][j+1] + arr[i][j+2];
            total += arr[i+1][j+1];
            total += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            sumsArr.push(total);
        };
    };

    return Math.max(...sumsArr)
}