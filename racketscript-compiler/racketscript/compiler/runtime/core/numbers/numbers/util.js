import { isJSInteger, SmallExactNumber, BigExactNumber } from './index.js';
export function integerIsOne(n) {
    const isInteger = isJSInteger(n);
    const isOne = typeof n === 'bigint' ? n === 1n : n === 1;
    return isInteger && isOne;
}
export function numberIsRational(n) {
    const isBigInt = typeof n === 'bigint';
    const isRationalFloat = Number.isFinite(n) && !Number.isNaN(n);
    return isBigInt || isRationalFloat;
}
export function matchExactness(x, y) {
    x = !y.isExact() ? x.toInexact() : x;
    y = !x.isExact() ? y.toInexact() : y;
    return [x, y];
}
export function isExactReal(n) {
    return n instanceof SmallExactNumber || n instanceof BigExactNumber;
}
export * from '../util.js';
//# sourceMappingURL=util.js.map
