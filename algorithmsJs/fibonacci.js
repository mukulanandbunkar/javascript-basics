// write a function to print fibonacci series

// what is fibonacci series
// fibonacci of 7
//[0,1,1,2,3,5,8] ----> each number is sum of two preceeding one & its start from 0,1 always


const getFebonacciSeries = (n) => {
    const fabinacciArr = [0,1];
    for(let i = 2 ; i < n ; i++) {
        fabinacciArr[i] = fabinacciArr[i-1] + fabinacciArr[i-2]
    }
    return fabinacciArr;
}

const series = getFebonacciSeries(7);
console.log('fabinacci series upto 7 is',series)

