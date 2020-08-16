import { comparator, insertionSort, quickSort } from "../src/sorting.js";
const testSort = function (arr, sortingFunction, compareFunction = comparator) {
    const baseSortedArr = Object.assign([], arr).sort(compareFunction);
    const sortedArr = sortingFunction(Object.assign([], arr), compareFunction);
    return baseSortedArr.reduce((acc, currValue, i) => {
        return acc && currValue === sortedArr[i];
    }, true);
};
const n = 50000;
const arr = new Array(n).fill(0).map(() => {
    return Math.floor(Math.random() * n);
});
const insertionSortTest = testSort(arr, insertionSort, comparator);
const quickSortTest = testSort(arr, quickSort, comparator);
console.log(insertionSortTest, quickSortTest);
//# sourceMappingURL=index.js.map