import { InexactNumber, ComplexNumber, SmallExactNumber, BigExactNumber } from '../numbers/index.js';
import { boxNumber } from './index.js';
export function normalized(fn) {
    return function (...nums) {
        for (let i = 0; i < nums.length; i++) {
            nums[i] = normalize(nums[i]);
        }
        const result = fn(...nums);
        return normalize(result);
    };
}
export function normalize(x) {
    if (typeof x === 'number' || typeof x === 'bigint') {
        return x;
    }
    if (x instanceof InexactNumber) {
        return x.num;
    }
    if (x instanceof SmallExactNumber && x.den === 1) {
        return BigInt(x.num);
    }
    if (x instanceof BigExactNumber && x.den === 1n) {
        return x.num;
    }
    if (x instanceof ComplexNumber && x.isReal()) {
        return normalize(x.realPart());
    }
    return x;
}
export function makeCompatible(x, y) {
    if (typeof x === typeof y) {
        return [x, y];
    }
    if (typeof x === 'object' && typeof y !== 'object') {
        return [x, boxNumber(y)];
    }
    if (typeof x !== 'object' && typeof y === 'object') {
        return [boxNumber(x), y];
    }
    return [Number(x), Number(y)];
}
export * from '../util.js';
//# sourceMappingURL=util.js.map
