import {
    SmallExactNumber,
    BigExactNumber,
    InexactNumber,
    isSafeInteger,
} from '../numbers/index.js';
import { makeRectangular, } from './index.js';
export function boxNumber(n) {
    if (typeof n === 'number') {
        return new InexactNumber(n);
    }
    if (typeof n === 'bigint') {
        if (isSafeInteger(n)) {
            return new SmallExactNumber(Number(n));
        }
        return new BigExactNumber(n);
    }
    return n;
}
const fractionRegexp = /^([+-]?\d+)\/(\d+)$/;
const integerRegexp = /^[+-]?\d+$/;
const decimalRegexp = /^([+-]?\d*)\.(\d*)$/;
const scientificRegexp = /^([+-]?\d*\.?\d*)[Ee]([+-]?\d+)$/;
const nanRegexp = /^([+-]nan.[0f])$/;
const infRegexp = /^([+-]inf.[0f])$/;
const unsignedNumber = "((\\d+\\/\\d+)|(\\d*(\\.\\d*)?([Ee][+-]?\\d+)?))";
const nonFinite = `(([+-]inf.[0f])|([+-]nan.[0f]))`;
const realPart = `([+-]?${unsignedNumber})|${nonFinite}`;
const imagPart = `([+-]${unsignedNumber})|${nonFinite}`;
const complexRegexp = new RegExp(`^(${realPart})(${imagPart})i$`);
export function fromString(str) {
    str = str.toString(); // For backwards compatibility with js-numbers
    const matchExact = str.match(fractionRegexp);
    if (matchExact) {
        return parseExact(str);
    }
    const matchComplex = str.match(complexRegexp);
    if (matchComplex) {
        const realStr = matchComplex[1] || "0";
        const imagStr = matchComplex[11];
        return makeRectangular(fromString(realStr), fromString(imagStr));
    }
    const nanMatch = str.match(nanRegexp);
    if (nanMatch) {
        return NaN;
    }
    const infMatch = str.match(infRegexp);
    if (infMatch) {
        const sign = infMatch[0].charAt(0);
        return sign === '+' ? Infinity : -Infinity;
    }
    if (str === '-0.0') {
        return -0;
    }
    if (str.match(decimalRegexp) || str.match(scientificRegexp)) {
        return Number(str);
    }
    if (str.match(integerRegexp)) {
        return parseInteger(str);
    }
    throw new Error(`Unable to parse a RacketNumber from ${str}`);
}
function parseExact(str) {
    const matchInteger = str.match(integerRegexp);
    if (matchInteger) {
        return parseInteger(str);
    }
    return parseFraction(str);
}
function parseInteger(str) {
    return BigInt(str);
}
function parseFraction(str) {
    const match = str.match(fractionRegexp);
    if (match) {
        const num = parseInteger(match[1]);
        const den = parseInteger(match[2]);
        if (isSafeInteger(num) && isSafeInteger(den)) {
            return new SmallExactNumber(Number(num), Number(den));
        }
        return new BigExactNumber(num, den);
    }
    throw new Error(`Fraction not found in ${str}`);
}
// For backwards compatibility with js-numbers.
export function makeFloat(n) {
    return n;
}
export function makeExact(n, d) {
    if (d !== undefined) {
        if (typeof n !== typeof d) {
            throw new TypeError("numerator and denominator must be same type.");
        }
        if (typeof n === 'number' && (!Number.isInteger(n) || !Number.isInteger(d))) {
            throw new TypeError("numerator and denominator must be integers");
        }
        if (isSafeInteger(n) && isSafeInteger(d)) {
            return new SmallExactNumber(Number(n), Number(d));
        }
        return new BigExactNumber(BigInt(n), BigInt(d));
    }
    if (isSafeInteger(n)) {
        return new SmallExactNumber(Number(n));
    }
    return new BigExactNumber(BigInt(n));
}
// For backwards compatibility with js-numbers.
export function makeRational(n, d) {
    if (!Number.isInteger(n) || !Number.isInteger(d)) {
        throw new TypeError("numerator and denominator must be integers.");
    }
    return new SmallExactNumber(n, d);
}
export function makeComplex(real, imag) {
    return makeRectangular(real, imag);
}
//# sourceMappingURL=creation.js.map
