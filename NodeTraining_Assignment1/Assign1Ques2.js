
//bubble Sort

let inputArr = [1,2,3,7,0,-1,-3];
let bubbleSortedArray = (inputArr) => {
    let len = inputArr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len-1; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    return inputArr;
 };

bubbleSortedArray(inputArr);
console.log( "Array sorted through bubble sort "+ inputArr)


//insertion Sort
let inpArray = [1,2,3,7,0,-1,-3];
let insertionSortedArray =(inpArray) =>{
    let n = inpArray.length;
    for (let i = 1; i < n; i++) {
        let current = inpArray[i];
        let j = i-1; 
        while ((j > -1) && (current < inpArray[j])) {
            inpArray[j+1] = inpArray[j];
            j--;
        }
        inpArray[j+1] = current;
    }
return inpArray;
}
insertionSortedArray(inpArray);
console.log("Array sorted through insertion sort "+ inpArray)

//selection sort
let arr = [1,2,3,7,0,-1,-3];
let selectionSortedArray = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

console.log("Array sorted through seelction sort "+ selectionSortedArray(arr))