import { isBoxedNumber, } from '../numbers/index.js';
import { boxNumber } from './index.js';
import { normalize } from './util.js';
export function inexactToExact(n) {
    if (typeof n === 'bigint') {
        return n;
    }
    if (isBoxedNumber(n)) {
        return n.toExact();
    }
    return normalize(boxNumber(n).toExact());
}
export const toExact = inexactToExact; // For backwards compatibility
export function exactToInexact(n) {
    if (isBoxedNumber(n)) {
        return normalize(n.toInexact());
    }
    return Number(n);
}
export const toInexact = exactToInexact; // For backwards compatibility
export function numberToString(n) {
    if (typeof n === 'number') {
        if (Number.isInteger(n)) {
            return n.toString() + ".0";
        }
        if (Number.isNaN(n)) {
            return "+nan.0";
        }
        if (n === Infinity) {
            return "+inf.0";
        }
        if (n === -Infinity) {
            return "-inf.0";
        }
    }
    return n.toString();
}
//# sourceMappingURL=misc.js.map
