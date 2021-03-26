const marks = [10, 2, 8, 6, 4];

function average(array) {
    let i = 0, sum = 0, len = array.lengh;
    while (i < len) {
        sum = sum + array[i++];
    }
    return sum / len;
}

export {average}