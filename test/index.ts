import {
    CompareFunction,
    defaultComparator,
    insertionSort,
    quickSort
} from "../src/sorting.js";

const testSort = function <T>(
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

const insertionSortTest = testSort(arr, insertionSort, defaultComparator);
const quickSortTest = testSort(arr, quickSort, defaultComparator);

console.log(insertionSortTest, quickSortTest);
