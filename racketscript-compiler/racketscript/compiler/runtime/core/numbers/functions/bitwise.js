import { isExactInteger, } from './index.js';
import { normalize } from './util.js';
export function bitwiseOr(...operands) {
    let acc = 0n;
    for (let i = 0; i < operands.length; i++) {
        const n = operands[i];
        if (!isExactInteger(n)) {
            throw new TypeError("bitwise operators only defined for exact integers.");
        }
        acc |= normalize(n);
    }
    return acc;
}
export function bitwiseXor(...operands) {
    let acc = 0n;
    for (let i = 0; i < operands.length; i++) {
        const n = operands[i];
        if (!isExactInteger(n)) {
            throw new TypeError("bitwise operators only defined for exact integers.");
        }
        acc ^= normalize(n);
    }
    return acc;
}
export function bitwiseAnd(...operands) {
    let acc = -1n;
    for (let i = 0; i < operands.length; i++) {
        const n = operands[i];
        if (!isExactInteger(n)) {
            throw new TypeError("bitwise operators only defined for exact integers.");
        }
        acc &= normalize(n);
    }
    return acc;
}
export function bitwiseNot(n) {
    if (!isExactInteger(n)) {
        throw new TypeError("bitwise operators only defined for exact integers.");
    }
    n = normalize(n);
    return ~n;
}
export function arithmeticShift(n, m) {
    if (!isExactInteger(n) || !isExactInteger(m)) {
        throw new TypeError("bitwise operators only defined for integers.");
    }
    n = normalize(n);
    m = normalize(m);
    if (m < 0n) {
        return n >> -m;
    }
    else {
        return n << m;
    }
}
//# sourceMappingURL=bitwise.js.map
