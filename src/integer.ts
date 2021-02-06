type KeyFunction<T> = (key: T) => number;

// @ts-expect-error
const defaultKeyFunction = <T>(key: T): number => <T>key;

const getDigit = function (x: number, digit: number) {
    const ten = Math.pow(10, digit);
    return Math.floor(x / ten) % 10;
};

const countingSort = function <T = number>(
    arr: Array<T>,
    keyFunction: KeyFunction<T> = defaultKeyFunction
): Array<T> {
    const maxValue = Math.max(...arr.map(keyFunction));
    const minValue = Math.min(...arr.map(keyFunction));

    const count = Array(maxValue - minValue + 1).fill(0);
    const out = Array(arr.length).fill(null);

    arr.forEach((value) => {
        const key = keyFunction(value) - minValue;
        count[key] += 1;
    });

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        const value = arr[i];
        const key = keyFunction(value) - minValue;

        out[count[key] - 1] = value;
        count[key] -= 1;
    }

    // for (let i = 0; i < arr.length; i++) {
    //     const value = arr[i];
    //     const key = keyFunction(value) - minValue;

    //     out[count[key] - 1] = value;
    //     count[key] -= 1;
    // }

    Object.assign(arr, out);
    return arr;
};

const radixSort = function <T>(
    arr: Array<T>,
    keyFunction: KeyFunction<T> = defaultKeyFunction
): Array<T> {
    const maxValue = Math.max(...arr.map(keyFunction));
    const digits = maxValue > 0 ? Math.floor(Math.log10(maxValue)) : 0;

    for (let i = 0; i < digits + 1; i++) {
        countingSort(arr, (x) => getDigit(keyFunction(x), i));
    }

    return arr;
};

export { countingSort, radixSort };
