type KeyFunction = (key: number) => number;

const defaultKeyFunction = (key: number) => key;

const getDigit = function (x: number, digit: number) {
    const ten = Math.pow(10, digit);
    return Math.floor(x / ten) % 10;
};

const countingSort = function (
    arr: Array<number>,
    keyFunction: KeyFunction = defaultKeyFunction
) {
    const maxValue = Math.max(...arr.map(keyFunction));

    const count = Array(maxValue + 1).fill(0);
    const out = Array(arr.length).fill(0);

    arr.forEach((value) => {
        const key = keyFunction(value);
        count[key] += 1;
    });

    for (let i = 1; i < maxValue + 1; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        const value = arr[i];
        const key = keyFunction(value);

        out[count[key] - 1] = value;
        count[key] -= 1;
    }

    Object.assign(arr, out);
    return arr;
};

const radixSort = function (arr: Array<number>): Array<number> {
    const maxValue = Math.max(...arr);
    const digits = maxValue > 0 ? Math.floor(Math.log10(maxValue)) : 0;

    for (let i = 0; i < digits + 1; i++) {
        countingSort(arr, (x) => getDigit(x, i));
    }

    return arr;
};

export { countingSort, radixSort };
