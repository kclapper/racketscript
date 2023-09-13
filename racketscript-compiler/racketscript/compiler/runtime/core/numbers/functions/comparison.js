import { isBoxedNumber, } from '../numbers/index.js';
import { subtract, abs } from './index.js';
import { makeCompatible } from './util.js';
const makeMultiArity = function (fnForNumbers, fnForBigInts, fnForBoxedNumbers) {
    return function (...args) {
        if (args.length < 2) {
            throw new Error("Must be called with at least two arguments.");
        }
        for (let i = 0; i < args.length - 1; i++) {
            let x = args[i];
            let y = args[i + 1];
            [x, y] = makeCompatible(x, y);
            if (typeof x === 'number' && !fnForNumbers(x, y)) {
                return false;
            }
            else if (typeof x === 'bigint' && !fnForBigInts(x, y)) {
                return false;
            }
            else if (isBoxedNumber(x) && !fnForBoxedNumbers(x, y)) {
                return false;
            }
        }
        return true;
    };
};
export function equals(...nums) {
    if (nums.length === 1) {
        return true;
    }
    return equalComp(...nums);
}
const equalComp = makeMultiArity((x, y) => x === y, (x, y) => x === y, (x, y) => x.equals(y));
// This is provided for compatibility with the original js-numbers library
export function eqv(x, y) {
    return equals(x, y);
}
// This is provided for compatibility with the original js-numbers library
export function approxEquals(x, y, delta) {
    return lessThanOrEqual(abs(subtract(x, y)), abs(delta));
}
export function greaterThan(...nums) {
    if (nums.length === 1) {
        return true;
    }
    return gtComp(...nums);
}
const gtComp = makeMultiArity((x, y) => x > y, (x, y) => x > y, (x, y) => x.greaterThan(y));
export function greaterThanOrEqual(...nums) {
    if (nums.length === 1) {
        return true;
    }
    return gteComp(...nums);
}
const gteComp = makeMultiArity((x, y) => x >= y, (x, y) => x >= y, (x, y) => x.greaterThanOrEqual(y));
export function lessThan(...nums) {
    if (nums.length === 1) {
        return true;
    }
    return ltComp(...nums);
}
const ltComp = makeMultiArity((x, y) => x < y, (x, y) => x < y, (x, y) => x.lessThan(y));
export function lessThanOrEqual(...nums) {
    if (nums.length === 1) {
        return true;
    }
    return lteComp(...nums);
}
const lteComp = makeMultiArity((x, y) => x <= y, (x, y) => x <= y, (x, y) => x.lessThanOrEqual(y));
//# sourceMappingURL=comparison.js.map
