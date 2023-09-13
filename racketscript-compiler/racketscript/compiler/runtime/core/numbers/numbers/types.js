import { InexactNumber, SmallExactNumber, BigExactNumber, ComplexNumber } from './index.js';
export function isBoxedNumber(n) {
    return n instanceof InexactNumber
        || n instanceof SmallExactNumber
        || n instanceof BigExactNumber
        || n instanceof ComplexNumber;
}
export function isRealNumber(n) {
    return n instanceof InexactNumber
        || n instanceof SmallExactNumber
        || n instanceof BigExactNumber;
}
//# sourceMappingURL=types.js.map
