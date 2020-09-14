import {
    ComparisonSortingFunction,
    CompareFunction,
    defaultComparator,
    insertionSort,
    selectionSort,
    bubbleSort,
    quickSort,
    mergeSort
} from "../src/comparison.js";

import { countingSort, radixSort } from "../src/integer.js";

const testSortingFunction = function <T>(
    arr: Array<T>,
    sortingFunction: (arr: Array<T>, compareFunction: CompareFunction<T>) => Array<T>,
    compareFunction = defaultComparator
): boolean {
    const baseSortedArr = Object.assign([], arr).sort(compareFunction);
    const sortedArr = sortingFunction(Object.assign([], arr), compareFunction);

    return baseSortedArr.reduce((acc, currValue, i) => {
        return acc && compareFunction(currValue, sortedArr[i]) === 0;
    }, true);
};

const testSortingFunctions = function (
    n: number,
    sortingFunctions: Array<ComparisonSortingFunction<number>>
) {
    const arr = new Array(n).fill(0).map(() => {
        return Math.floor(Math.random() * n);
    });

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
};

const n = 5000;

const comparisonSortingFunctions = [
    insertionSort,
    selectionSort,
    bubbleSort,
    quickSort,
    mergeSort
];

testSortingFunctions(n, comparisonSortingFunctions);

// const arr = ["GA", "VT", "AK", "PA", "NY", "NC", "MS"];
// let arr = ["elk", "hog", "cat", "ox", "frog", "dog", "goat"];
// let arr = ["NY", "VT", "MS", "PA", "NC", "GA", "AK"];
// let arr = ["GA", "VT", "NC", "PA", "AK", "NY", "MS"];
// const arr = ["TN", "AL", "NE", "GA", "AK", "NY", "MS", "DE", "AL"];

// quickSort(arr);
// console.log(arr);
// arr = mergeSort(arr);
// console.log(arr);
