/* eslint-disable no-constant-condition */
type CompareFunction<T> = (left: T, right: T) => number;

type ComparisonSortingFunction<T> = (
    arr: Array<T>,
    compareFunction: CompareFunction<T>
) => Array<T>;

const defaultComparator = <T>(left: T, right: T): number =>
    left > right ? 1 : left < right ? -1 : 0;

const insertionSort = function <T>(
    arr: Array<T>,
    compareFunction: CompareFunction<T> = defaultComparator
): Array<T> {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            const left = j;
            const right = j + 1;

            if (compareFunction(arr[right], arr[left]) < 0) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
            } else {
                break;
            }
        }
    }
    return arr;
};

const selectionSort = function <T>(
    arr: Array<T>,
    compareFunction: CompareFunction<T> = defaultComparator
): Array<T> {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            minIndex = compareFunction(arr[j], arr[minIndex]) < 0 ? j : minIndex;
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
};

const bubbleSort = function <T>(
    arr: Array<T>,
    compareFunction: CompareFunction<T> = defaultComparator
): Array<T> {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            const left = j;
            const right = j + 1;

            if (compareFunction(arr[right], arr[left]) < 0) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
            }
        }
    }
    return arr;
};

const quickSort = function <T>(
    arr: Array<T>,
    compareFunction: CompareFunction<T> = defaultComparator
): Array<T> {
    const medianOfThree = function (left: number, right: number): number {
        const first = arr[left];
        const middleIndex = Math.floor((right - left) / 2) + left;
        const middle = arr[middleIndex];
        const last = arr[right];

        const pivot = insertionSort([first, middle, last])[1];

        if (pivot == first) {
            return left;
        } else if (pivot == middle) {
            return middleIndex;
        } else {
            return right;
        }
    };

    const randomElement = function (left: number, right: number): number {
        return Math.floor(Math.random() * (right - left)) + left;
    };

    const middleElement = function (left: number, right: number): number {
        return Math.floor((left + right) / 2) + left;
    };

    const selectPivot = function (
        left: number,
        right: number,
        pivotFunction: (left: number, right: number) => number
    ): void {
        const pivotIndex = pivotFunction(left, right);
        [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    };

    const hoarePartition = function (left: number, right: number): number {
        selectPivot(left, right, medianOfThree);
        const pivot = arr[right];

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
            } else {
                return right;
            }
        }
    };

    const lomutoPartition = function (left: number, right: number): number {
        selectPivot(left, right, randomElement);
        const pivot = arr[right];

        for (let i = left; i < right; i++) {
            if (compareFunction(arr[i], pivot) <= 0) {
                [arr[i], arr[left]] = [arr[left], arr[i]];
                left += 1;
            }
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];
        return left;
    };

    const recurse = function (left: number, right: number) {
        if (left < right) {
            const pivotIndex = lomutoPartition(left, right);
            recurse(left, pivotIndex - 1);
            recurse(pivotIndex + 1, right);
        }
    };
    recurse(0, arr.length - 1);
    return arr;
};

const mergeSort = function <T>(
    arr: Array<T>,
    compareFunction: CompareFunction<T> = defaultComparator
): Array<T> {
    const recurse = function (arr: Array<T>) {
        if (arr.length <= 1) {
            return arr;
        } else {
            const mid = Math.floor(arr.length / 2);

            let leftArr = arr.slice(0, mid);
            let rightArr = arr.slice(mid, arr.length);

            leftArr = recurse(leftArr);
            rightArr = recurse(rightArr);

            return merge(leftArr, rightArr);
        }
    };

    const merge = function (leftArr: Array<T>, rightArr: Array<T>) {
        const out: Array<T> = [];
        let left = 0;
        let right = 0;

        while (left < leftArr.length && right < rightArr.length) {
            if (compareFunction(leftArr[left], rightArr[right]) < 0) {
                out.push(leftArr[left]);
                left += 1;
            } else {
                out.push(rightArr[right]);
                right += 1;
            }
        }

        return out
            .concat(leftArr.splice(left, leftArr.length))
            .concat(rightArr.splice(right, rightArr.length));
    };

    return recurse(arr);
};

export {
    ComparisonSortingFunction,
    CompareFunction,
    defaultComparator,
    bubbleSort,
    insertionSort,
    selectionSort,
    quickSort,
    mergeSort
};
