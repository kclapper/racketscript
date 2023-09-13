import { InexactNumber, SmallExactNumber, ComplexNumber, bigExpt, isSafeInteger, EXACT_ZERO, } from './index.js';
export class BigExactNumber {
    constructor(num, den = 1n) {
        if (typeof num === 'bigint' && typeof den === 'bigint') {
            // Only the numerator can be negative.
            if (den < 0) {
                num *= -1n;
                den *= -1n;
            }
            const gcd = this.gcd(num, den);
            this.num = num / gcd;
            this.den = den / gcd;
        }
        else {
            throw new TypeError("Exact value numerator and denominator types must match");
        }
        // Make it immutable
        Object.freeze(this);
    }
    gcd(a, b) {
        let t;
        while (b !== 0n) {
            t = a;
            a = b;
            b = t % b;
        }
        if (a < 0n) {
            return -1n * a;
        }
        return a;
    }
    isInexact() {
        return false;
    }
    isExact() {
        return true;
    }
    toInexact() {
        const result = Number(this.num) / Number(this.den);
        return new InexactNumber(result);
    }
    toExact() {
        return this;
    }
    toSmallExact() {
        return new SmallExactNumber(Number(this.num), Number(this.den));
    }
    toComplex() {
        return new ComplexNumber(this, EXACT_ZERO);
    }
    toFixnum() {
        return Number(this.num / this.den);
    }
    isInteger() {
        return this.den === 1n;
    }
    isRational() {
        return true;
    }
    isReal() {
        return true;
    }
    isComplex() {
        return true;
    }
    isZero() {
        return this.num === 0n;
    }
    isNegativeZero() {
        return false;
    }
    isPositive() {
        return this.num > 0n;
    }
    isNegative() {
        return this.num < 0n;
    }
    isEven() {
        return this.den === 1n && this.num % 2n === 0n;
    }
    isFinite() {
        return true;
    }
    isNaN() {
        return false;
    }
    toString() {
        const numStr = this.num.toString();
        const denStr = this.den.toString();
        if (this.den === 1n) {
            return numStr;
        }
        return `${numStr}/${denStr}`;
    }
    toSignedString() {
        if (this.isNegative()) {
            return this.toString();
        }
        return "+" + this.toString();
    }
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.toString();
        }
        if (hint === 'bigint' && this.den === 1n) {
            return this.num;
        }
        if (this.den === 1n) {
            return Number(this.num);
        }
        return Number(this.num) / Number(this.den);
    }
    greaterThan(other) {
        if (other instanceof InexactNumber) {
            if (other.isNaN()) {
                return false;
            }
            else if (!other.isFinite()) {
                return !other.isPositive();
            }
            return this.greaterThan(other.toExact());
        }
        else if (other instanceof SmallExactNumber) {
            return this.greaterThan(other.toBigExact());
        }
        else if (other instanceof ComplexNumber) {
            return this.toComplex().greaterThan(other);
        }
        else {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal > otherVal;
        }
    }
    greaterThanOrEqual(other) {
        if (other instanceof InexactNumber) {
            if (other.isNaN()) {
                return false;
            }
            else if (!other.isFinite()) {
                return !other.isPositive();
            }
            return this.greaterThanOrEqual(other.toExact());
        }
        else if (other instanceof SmallExactNumber) {
            return this.greaterThanOrEqual(other.toBigExact());
        }
        else if (other instanceof ComplexNumber) {
            return this.toComplex().greaterThanOrEqual(other);
        }
        else {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal >= otherVal;
        }
    }
    lessThan(other) {
        if (other instanceof InexactNumber) {
            if (other.isNaN()) {
                return false;
            }
            else if (!other.isFinite()) {
                return other.isPositive();
            }
            return this.lessThan(other.toExact());
        }
        else if (other instanceof SmallExactNumber) {
            return this.lessThan(other.toBigExact());
        }
        else if (other instanceof ComplexNumber) {
            return this.toComplex().lessThan(other);
        }
        else {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal < otherVal;
        }
    }
    lessThanOrEqual(other) {
        if (other instanceof InexactNumber) {
            if (other.isNaN()) {
                return false;
            }
            else if (!other.isFinite()) {
                return other.isPositive();
            }
            return this.lessThanOrEqual(other.toExact());
        }
        else if (other instanceof SmallExactNumber) {
            return this.lessThanOrEqual(other.toBigExact());
        }
        else if (other instanceof ComplexNumber) {
            return this.toComplex().lessThanOrEqual(other);
        }
        else {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal <= otherVal;
        }
    }
    equals(other) {
        if (other instanceof InexactNumber) {
            if (!other.isFinite()) {
                return false;
            }
            return this.equals(other.toExact());
        }
        else if (other instanceof SmallExactNumber) {
            return this.equals(other.toBigExact());
        }
        else if (other instanceof ComplexNumber) {
            return this.toComplex().equals(other);
        }
        else {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal === otherVal;
        }
    }
    add(other) {
        if (other instanceof InexactNumber) {
            return this.toInexact().add(other);
        }
        else if (other instanceof SmallExactNumber) {
            return this.add(other.toBigExact());
        }
        else if (other instanceof ComplexNumber) {
            return this.toComplex().add(other);
        }
        else {
            const num = (this.num * other.den) + (other.num * this.den);
            const den = this.den * other.den;
            if (isSafeInteger(num) && isSafeInteger(den)) {
                return new SmallExactNumber(Number(num), Number(den));
            }
            return new BigExactNumber(num, den);
        }
    }
    subtract(other) {
        if (other instanceof InexactNumber) {
            return this.toInexact().subtract(other);
        }
        else if (other instanceof SmallExactNumber) {
            return this.subtract(other.toBigExact());
        }
        else if (other instanceof ComplexNumber) {
            return this.toComplex().subtract(other);
        }
        else {
            const num = (this.num * other.den) - (other.num * this.den);
            const den = this.den * other.den;
            if (isSafeInteger(num) && isSafeInteger(den)) {
                return new SmallExactNumber(Number(num), Number(den));
            }
            return new BigExactNumber(num, den);
        }
    }
    multiply(other) {
        if ((other.isExact() && other.isZero()) || this.isZero()) {
            return EXACT_ZERO;
        }
        if (other instanceof InexactNumber) {
            return this.toInexact().multiply(other);
        }
        else if (other instanceof SmallExactNumber) {
            return this.multiply(other.toBigExact());
        }
        else if (other instanceof ComplexNumber) {
            return this.toComplex().multiply(other);
        }
        else {
            const num = this.num * other.num;
            const den = this.den * other.den;
            if (isSafeInteger(num) && isSafeInteger(den)) {
                return new SmallExactNumber(Number(num), Number(den));
            }
            return new BigExactNumber(num, den);
        }
    }
    divide(other) {
        if (this.isZero()) {
            return EXACT_ZERO;
        }
        if (other instanceof InexactNumber) {
            return this.toInexact().divide(other);
        }
        else if (other instanceof SmallExactNumber) {
            return this.divide(other.toBigExact());
        }
        else if (other instanceof ComplexNumber) {
            return this.toComplex().divide(other);
        }
        else {
            const num = this.num * other.den;
            const den = this.den * other.num;
            if (isSafeInteger(num) && isSafeInteger(den)) {
                return new SmallExactNumber(Number(num), Number(den));
            }
            return new BigExactNumber(num, den);
        }
    }
    numerator() {
        if (isSafeInteger(this.num)) {
            return new SmallExactNumber(Number(this.num));
        }
        return new BigExactNumber(this.num);
    }
    denominator() {
        if (isSafeInteger(this.den)) {
            return new SmallExactNumber(Number(this.den));
        }
        return new BigExactNumber(this.den);
    }
    integerSqrt() {
        return this.sqrt().floor();
    }
    sqrt() {
        return this.toSmallExact().sqrt();
    }
    abs() {
        if (isSafeInteger(this.num) && isSafeInteger(this.den)) {
            return new SmallExactNumber(Number(this.num), Number(this.den)).abs();
        }
        if (this.isNegative()) {
            return new BigExactNumber(this.num * -1n, this.den);
        }
        else {
            return this;
        }
    }
    floor() {
        if (this.den === 1n) {
            return this;
        }
        else {
            const floor = this.num / this.den;
            if (isSafeInteger(floor)) {
                return new SmallExactNumber(Number(floor));
            }
            return new BigExactNumber(floor);
        }
    }
    ceiling() {
        if (this.den === 1n) {
            return this;
        }
        else {
            return new BigExactNumber((this.num / this.den) + 1n);
        }
    }
    round() {
        if (this.den === 1n) {
            return this;
        }
        else {
            const floor = this.floor();
            const floordiff = this.subtract(floor).abs();
            const ceil = this.ceiling();
            const ceildiff = ceil.subtract(this).abs();
            if (ceildiff.greaterThanOrEqual(floordiff)) {
                return ceil;
            }
            else {
                return floor;
            }
        }
    }
    conjugate() {
        return this;
    }
    magnitude() {
        return this;
    }
    realPart() {
        return this;
    }
    imaginaryPart() {
        return EXACT_ZERO;
    }
    angle() {
        return new BigExactNumber(0n);
    }
    log() {
        if (this.isNegative()) {
            return this.toComplex().log();
        }
        return this.toInexact().log();
    }
    expt(power) {
        if (power instanceof ComplexNumber) {
            return this.toComplex().expt(power);
        }
        if (power.isExact() && power.isInteger() && !power.isNegative()) {
            const exp = BigInt(power.toFixnum());
            const num = bigExpt(this.num, exp);
            const den = bigExpt(this.den, exp);
            if (isSafeInteger(num) && isSafeInteger(den)) {
                return new SmallExactNumber(Number(num), Number(den));
            }
            return new BigExactNumber(num, den);
        }
        return this.toInexact().expt(power);
    }
    exp() {
        return this.toSmallExact().exp();
    }
    tan() {
        return this.toSmallExact().tan();
    }
    cos() {
        return this.toSmallExact().cos();
    }
    sin() {
        return this.toSmallExact().sin();
    }
    atan() {
        return this.toSmallExact().atan();
    }
    acos() {
        return this.toSmallExact().acos();
    }
    asin() {
        return this.toSmallExact().asin();
    }
}
//# sourceMappingURL=BigExactNumber.js.map
