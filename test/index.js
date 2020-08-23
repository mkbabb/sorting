import { defaultComparator } from "../src/comparison.js";
import { countingSort } from "../src/integer.js";
const testSortingFunction = function (arr, sortingFunction, compareFunction = defaultComparator) {
    const baseSortedArr = Object.assign([], arr).sort(compareFunction);
    const sortedArr = sortingFunction(Object.assign([], arr), compareFunction);
    return baseSortedArr.reduce((acc, currValue, i) => {
        return acc && compareFunction(currValue, sortedArr[i]) === 0;
    }, true);
};
const testSortingFunctions = function (n, sortingFunctions) {
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
    }
    else {
        console.log("Some sorting functions failed.");
    }
};
// const arr = ["7", "4A", "1", "4B", "2"];
// const arr = [26, 24, 23, 25, 22];
const arr = [6, 4, 3, 5, 2];
countingSort(arr);
// radixSort(arr);
// insertionSort(arr);
//
// const n = 5000;
// const comparisonSortingFunctions = [insertionSort, selectionSort, bubbleSort, quickSort, mergeSort];
// testSortingFunctions(n, comparisonSortingFunctions);
//# sourceMappingURL=index.js.map