import {
    CompareFunction,
    defaultComparator,
    insertionSort,
    bubbleSort,
    quickSort,
    mergeSort
} from "../src/sorting.js";

const testSortingFunction = function <T>(
    arr: Array<T>,
    sortingFunction: (arr: Array<T>, compareFunction: CompareFunction<T>) => Array<T>,
    compareFunction = defaultComparator
): boolean {
    const baseSortedArr = Object.assign([], arr).sort(compareFunction);
    const sortedArr = sortingFunction(Object.assign([], arr), compareFunction);
    return baseSortedArr.reduce((acc, currValue, i) => {
        return acc && currValue === sortedArr[i];
    }, true);
};

const n = 5000;

const arr = new Array(n).fill(0).map(() => {
    return Math.floor(Math.random() * n);
});

// const arr = [0, 3, 1, 4, 2];

const sortingFunctions = [insertionSort, bubbleSort, quickSort, mergeSort];
let allPass = true;

sortingFunctions.map((sortingFunction) => {
    const pass = testSortingFunction(arr, sortingFunction, defaultComparator);
    console.log(`${sortingFunction.name} ${pass ? "passed" : "failed"}.`);
    allPass = allPass && pass;
});

if (allPass) {
    console.log("All sorting functions passed.");
} else {
    console.log("Some sorting functions failed.");
}
