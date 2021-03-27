function average(array) {
    let i = 0, 
    arrSum = 0, 
    length = array.length;
    while (i < length) {
        arrSum += array[i++];
    }
    return arrSum / length;
}

export {average}



/*

const marks = [10, 2, 8, 6, 4];

const count = marks.length;
let sum = 0;

sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];

const average = sum / count;
console.log(average);

*/