function findTheOutlier(arr) {
    const evenOddArr = arr.map(num=>Math.abs(num)%2);
    return (evenOffArr.indexOf(0) === evenOddArr.lastIndexOf(0)) ? arr[evenOddArr.indexOf(0)] : arr[evenOddArr.indexOf(1)];
    
}

console.log(findTheOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findTheOutlier([160, 3, 1719, 19, 11, 13, -21]))