import { isBoxedNumber } from "../numbers/index.js";
export function isNumber(x) {
    const isBigInt = typeof x === 'bigint';
    const isNumber = typeof x === 'number';
    const isBoxed = isBoxedNumber(x);
    return isBigInt || isNumber || isBoxed;
}
export const isComplex = isNumber;
export function isReal(x) {
    const isBigInt = typeof x === 'bigint';
    const isNumber = typeof x === 'number';
    const isBoxedReal = isBoxedNumber(x) && x.isReal();
    return isBigInt || isNumber || isBoxedReal;
}
export function isRational(x) {
    const isBigInt = typeof x === 'bigint';
    const isNumber = typeof x === 'number' && Number.isFinite(x);
    const isBoxedRational = isBoxedNumber(x) && x.isRational();
    return isBigInt || isNumber || isBoxedRational;
}
export function isInteger(x) {
    const isBigInt = typeof x === 'bigint';
    const isNumber = typeof x === 'number' && Number.isInteger(x);
    const isBoxedInteger = isBoxedNumber(x) && x.isInteger();
    return isBigInt || isNumber || isBoxedInteger;
}
export function isExactInteger(x) {
    const isBigInt = typeof x === 'bigint';
    const isBoxedExact = isBoxedNumber(x) && x.isInteger() && x.isExact();
    return isBigInt || isBoxedExact;
}
export function isExactNonNegativeInteger(x) {
    const forBigInt = typeof x === 'bigint' && x >= 0n;
    const forBoxed = isBoxedNumber(x) && x.isInteger() && x.isExact() && !x.isNegative();
    return forBigInt || forBoxed;
}
export function isExactPositiveInteger(x) {
    const forBigInt = typeof x === 'bigint' && x > 0n;
    const forBoxed = isBoxedNumber(x) && x.isInteger() && x.isExact() && x.isPositive();
    return forBigInt || forBoxed;
}
export function isInexactReal(x) {
    return typeof x === 'number'
        || (isBoxedNumber(x) && x.isReal() && x.isInexact());
}
export function isFlonum(x) {
    return typeof x === 'number';
}
export function isZero(n) {
    const forBigInt = typeof n === 'bigint' && n === 0n;
    const forNumber = typeof n === 'number' && n === 0;
    const forBoxed = isBoxedNumber(n) && n.isZero();
    return forBigInt || forNumber || forBoxed;
}
export function isPositive(n) {
    const forBigInt = typeof n === 'bigint' && n > 0n;
    const forNumber = typeof n === 'number' && n > 0;
    const forBoxed = isBoxedNumber(n) && n.isPositive();
    return forBigInt || forNumber || forBoxed;
}
export function isNegative(n) {
    const forBigInt = typeof n === 'bigint' && n < 0n;
    const forNumber = typeof n === 'number' && n < 0;
    const forBoxed = isBoxedNumber(n) && n.isNegative();
    return forBigInt || forNumber || forBoxed;
}
export function isEven(n) {
    if (!isInteger(n)) {
        throw new TypeError("'isEven' only defined for integers");
    }
    const forBigInt = typeof n === 'bigint' && n % 2n === 0n;
    const forNumber = typeof n === 'number' && n % 2 === 0;
    const forBoxed = isBoxedNumber(n) && n.isEven();
    return forBigInt || forNumber || forBoxed;
}
export function isOdd(n) {
    if (!isInteger(n)) {
        throw new TypeError("'isOdd' only defined for integers");
    }
    return !isEven(n);
}
export function isExact(n) {
    const isBigInt = typeof n === 'bigint';
    const isBoxedExact = isBoxedNumber(n) && n.isExact();
    return isBigInt || isBoxedExact;
}
export function isInexact(n) {
    return typeof n === 'number'
        || (isBoxedNumber(n) && n.isInexact());
}
export function isRacketNumber(n) {
    return typeof n === 'number' || typeof n === 'bigint' || isBoxedNumber(n);
}
export const isSchemeNumber = isRacketNumber; // For backwards compatibility
export function isFinite(n) {
    if (isBoxedNumber(n)) {
        return n.isFinite();
    }
    return Number.isFinite(n) || typeof n === 'bigint';
}
export function isNaN(n) {
    if (isBoxedNumber(n)) {
        return n.isNaN();
    }
    return Number.isNaN(n);
}
export function isNegativeZero(n) {
    if (isBoxedNumber(n)) {
        return n.isNegativeZero();
    }
    return Object.is(n, -0);
}
//# sourceMappingURL=predicates.js.map
