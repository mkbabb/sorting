import { defaultComparator, insertionSort, bubbleSort, quickSort, mergeSort } from "../src/sorting.js";
const testSort = function (arr, sortingFunction, compareFunction = defaultComparator) {
    const baseSortedArr = Object.assign([], arr).sort(compareFunction);
    const sortedArr = sortingFunction(Object.assign([], arr), compareFunction);
    return baseSortedArr.reduce((acc, currValue, i) => {
        return acc && currValue === sortedArr[i];
    }, true);
};
const mapPassFail = (b) => (b ? "passed" : "failed");
const n = 5000;
const arr = new Array(n).fill(0).map(() => {
    return Math.floor(Math.random() * n);
});
// const arr = [0, 3, 1, 4, 2];
const sortingFunctions = [insertionSort, bubbleSort, quickSort, mergeSort];
let allPass = true;
sortingFunctions.map((sortingFunction) => {
    const pass = testSort(arr, sortingFunction, defaultComparator);
    console.log(`${sortingFunction.name} ${mapPassFail(pass)}.`);
    allPass = allPass && pass;
});
console.log(`All sorting functions ${mapPassFail(allPass)}.`);
//# sourceMappingURL=index.js.map