function getUniqueValues(arr) {
    return arr?.filter((item, index) => arr.indexOf(item) === index);
}

function getHighestOccurences(arr, numbersOfResults) {
    if (!arr) return;

    const occurenceObj = arr.reduce((prevValue, currentValue) => {
        return {...prevValue, [currentValue]: (prevValue[currentValue] || 0) + 1 }
    }, {});

    return Object.entries(occurenceObj)
        .sort((a, b) => b[1] - a[1])
        .slice(0, numbersOfResults);
}

export { getHighestOccurences, getUniqueValues };
