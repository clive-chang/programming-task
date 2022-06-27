import { getHighestOccurences, getUniqueValues } from './_utilities';

describe('getHighestOccurences', () => {
    test('highest occurence should be a', () => {
        const arr = ['a', 'b', 'c', 'a', 'b', 'a', 'b', 'a'];
        const topThreeResults = getHighestOccurences(arr, 3);
        expect(topThreeResults[0][0]).toBe('a');
    });

    test('highest occurence should be foo', () => {
        const arr = ['foo', 'bar', 'test', 'foo', 'bar', 'foo', 'oof', 'rab'];
        const topThreeResults = getHighestOccurences(arr, 3);
        expect(topThreeResults[0][0]).toBe('foo');
    });

    test('result array length should be 4', () => {
        const arr = ['foo', 'bar', 'test', 'foo', 'bar', 'foo', 'oof', 'rab'];
        expect(getHighestOccurences(arr, 4).length).toBe(4);
    });
});

describe('getUniqueValues', () => {
    test('unique values should be a, b and c', () => {
        const arr = ['a', 'b', 'c', 'a', 'b', 'a', 'b', 'a'];
        expect(getUniqueValues(arr)).toStrictEqual(['a', 'b', 'c']);
    });

    test('unique values should be 1, 2, 3, 4, 5', () => {
        const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 1, 2];
        expect(getUniqueValues(arr)).toStrictEqual([1, 2, 3, 4, 5]);
    });

    test('value can not be objects', () => {
        const arr = [{a: "a"}, {a: "a"}, {a: "b"}, {b: "b"}];
        console.log(getUniqueValues(arr));
        expect(getUniqueValues(arr)).toStrictEqual(arr);
    });
});
