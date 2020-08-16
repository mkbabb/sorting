const comparator = (left, right) => left > right ? 1 : left < right ? -1 : 0;
const insertionSort = function (arr, compareFunction = comparator) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            const left = arr[j];
            const right = arr[j + 1];
            if (compareFunction(right, left) < 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};
const quickSort = function (arr, compareFunction = comparator) {
    const medianOfThree = function (left, right) {
        const first = arr[left];
        const middle = arr[Math.floor((left + right) / 2)];
        const last = arr[right];
        return insertionSort([first, middle, last])[1];
    };
    const hoarePartition = function (left, right) {
        const pivot = medianOfThree(left, right);
        // const pivot = arr[Math.floor((left + right) / 2)];
        while (1) {
            while (compareFunction(arr[left], pivot) < 0) {
                left += 1;
            }
            while (compareFunction(pivot, arr[right]) < 0) {
                right -= 1;
            }
            if (left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left += 1;
                right -= 1;
            }
            else {
                return right;
            }
        }
    };
    const recurse = function (left, right) {
        const pivotIndex = hoarePartition(left, right);
        if (left < right) {
            recurse(left, pivotIndex);
            recurse(pivotIndex + 1, right);
        }
    };
    recurse(0, arr.length - 1);
    return arr;
};
export { comparator, insertionSort, quickSort };
//# sourceMappingURL=sorting.js.map