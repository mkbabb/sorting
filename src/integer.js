const defaultKeyFunction = (key) => key;
const getDigit = function (x, digit) {
    const ten = Math.pow(10, digit);
    return Math.floor(x / ten) % 10;
};
const countingSort = function (arr, keyFunction = defaultKeyFunction) {
    const maxValue = Math.max(...arr.map(keyFunction));
    const minValue = Math.min(...arr.map(keyFunction));
    const count = Array(maxValue - minValue + 1).fill(0);
    const out = Array(arr.length).fill(0);
    arr.forEach((value) => {
        const key = keyFunction(value) - minValue;
        count[key] += 1;
    });
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     const value = arr[i];
    //     const key = keyFunction(value) - minValue;
    //     out[count[key] - 1] = value;
    //     count[key] -= 1;
    // }
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        const key = keyFunction(value) - minValue;
        out[count[key] - 1] = value;
        count[key] -= 1;
    }
    Object.assign(arr, out);
    return arr;
};
const radixSort = function (arr, keyFunction = defaultKeyFunction) {
    const maxValue = Math.max(...arr.map(keyFunction));
    const digits = maxValue > 0 ? Math.floor(Math.log10(maxValue)) : 0;
    for (let i = 0; i < digits + 1; i++) {
        countingSort(arr, (x) => getDigit(x, i));
    }
    return arr;
};
export { countingSort, radixSort };
//# sourceMappingURL=integer.js.map