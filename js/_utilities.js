function getUniqueValues(arr) {
    return arr?.filter((item, index) => arr.indexOf(item) === index);
}

function getHighestOccurences(arr, numbersOfResults) {
    if (!arr) return;

    const urlObj = [];

    arr.forEach((item) => {
        if (typeof urlObj[item] === 'undefined') {
            urlObj[item] = 0;
        }
        urlObj[item]++;
    });

    return Object.entries(urlObj)
        .sort((a, b) => b[1] - a[1])
        .slice(0, numbersOfResults);
}

export { getHighestOccurences, getUniqueValues };
