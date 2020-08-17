import { defaultComparator, insertionSort, quickSort, mergeSort } from "../src/sorting.js";
const testSort = function (arr, sortingFunction, compareFunction = defaultComparator) {
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
const mergeSortTest = testSort(arr, mergeSort, defaultComparator);
console.log(insertionSortTest, quickSortTest, mergeSortTest);
//# sourceMappingURL=index.js.map