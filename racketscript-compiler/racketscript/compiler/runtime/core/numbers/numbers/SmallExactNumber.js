import { isSafeInteger, InexactNumber, BigExactNumber, ComplexNumber, INEXACT_ZERO, EXACT_ZERO, EXACT_NEG_ONE, } from './index.js';
export class SmallExactNumber {
    constructor(num, den = 1) {
        if (!Number.isInteger(num) && !Number.isInteger(den)) {
            throw new TypeError("Exact number can only be constructed from integers.");
        }
        if (typeof num === 'number' && typeof den === 'number') {
            // Only the numerator can be negative.
            if (den < 0) {
                num *= -1;
                den *= -1;
            }
            if (Object.is(num, -0)) {
                num = 0;
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
        while (b !== 0) {
            t = a;
            a = b;
            b = t % b;
        }
        return Math.abs(a);
    }
    isExact() {
        return true;
    }
    isInexact() {
        return false;
    }
    toInexact() {
        const result = this.num / this.den;
        return new InexactNumber(result);
    }
    toExact() {
        return this;
    }
    toBigExact() {
        return new BigExactNumber(BigInt(this.num), BigInt(this.den));
    }
    toComplex() {
        return new ComplexNumber(this, EXACT_ZERO);
    }
    toFixnum() {
        return Math.floor(this.num / this.den);
    }
    isInteger() {
        return this.den === 1;
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
        return this.num === 0;
    }
    isNegativeZero() {
        return false;
    }
    isPositive() {
        return this.num > 0;
    }
    isNegative() {
        return this.num < 0;
    }
    isEven() {
        return this.den === 1 && this.num % 2 === 0;
    }
    isFinite() {
        return true;
    }
    isNaN() {
        return false;
    }
    toString() {
        if (this.den === 1) {
            return this.num.toString();
        }
        return `${this.num}/${this.den}`;
    }
    toSignedString() {
        if (this.isPositive() || this.isZero()) {
            return "+" + this.toString();
        }
        return this.toString();
    }
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.toString();
        }
        if (hint === 'bigint' && this.den === 1) {
            return BigInt(this.num);
        }
        return this.num / this.den;
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
        else if (other instanceof BigExactNumber) {
            return this.toBigExact().greaterThan(other);
        }
        else if (other instanceof ComplexNumber) {
            throw new TypeError("Not defined for complex numbers.");
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
        else if (other instanceof BigExactNumber) {
            return this.toBigExact().greaterThanOrEqual(other);
        }
        else if (other instanceof ComplexNumber) {
            throw new TypeError("Not defined for complex numbers.");
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
        else if (other instanceof BigExactNumber) {
            return this.toBigExact().lessThan(other);
        }
        else if (other instanceof ComplexNumber) {
            throw new TypeError("Not defined for complex numbers.");
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
        else if (other instanceof BigExactNumber) {
            return this.toBigExact().lessThanOrEqual(other);
        }
        else if (other instanceof ComplexNumber) {
            throw new TypeError("Not defined for complex numbers.");
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
        else if (other instanceof BigExactNumber) {
            return this.toBigExact().equals(other);
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
        else if (other instanceof BigExactNumber) {
            return this.toBigExact().add(other);
        }
        else if (other instanceof ComplexNumber) {
            return this.toComplex().add(other);
        }
        else {
            const num = (this.num * other.den) + (other.num * this.den);
            const den = this.den * other.den;
            if (!isSafeInteger(num) || !isSafeInteger(den)) {
                return this.toBigExact().add(other.toBigExact());
            }
            return new SmallExactNumber(num, den);
        }
    }
    subtract(other) {
        if (other instanceof InexactNumber) {
            return this.toInexact().subtract(other);
        }
        else if (other instanceof BigExactNumber) {
            return this.toBigExact().subtract(other);
        }
        else if (other instanceof ComplexNumber) {
            return this.toComplex().subtract(other);
        }
        else {
            const num = (this.num * other.den) - (other.num * this.den);
            const den = this.den * other.den;
            if (!isSafeInteger(num) || !isSafeInteger(den)) {
                return this.toBigExact().subtract(other.toBigExact());
            }
            return new SmallExactNumber(num, den);
        }
    }
    multiply(other) {
        if (this.isZero() || (other.isExact() && other.isZero())) {
            return EXACT_ZERO;
        }
        if (other instanceof InexactNumber) {
            return this.toInexact().multiply(other);
        }
        else if (other instanceof BigExactNumber) {
            return this.toBigExact().multiply(other);
        }
        else if (other instanceof ComplexNumber) {
            return this.toComplex().multiply(other);
        }
        else {
            const num = this.num * other.num;
            const den = this.den * other.den;
            if (!isSafeInteger(num) || !isSafeInteger(den)) {
                return this.toBigExact().multiply(other.toBigExact());
            }
            return new SmallExactNumber(num, den);
        }
    }
    divide(other) {
        if (this.isZero()) {
            return this;
        }
        if (other instanceof InexactNumber) {
            return this.toInexact().divide(other);
        }
        else if (other instanceof BigExactNumber) {
            return this.toBigExact().divide(other);
        }
        else if (other instanceof ComplexNumber) {
            return this.toComplex().divide(other);
        }
        else if (other.isZero()) {
            throw new Error("/: division by zero" + this + other);
        }
        else {
            const num = this.num * other.den;
            const den = this.den * other.num;
            if (!isSafeInteger(num) || !isSafeInteger(den)) {
                return this.toBigExact().divide(other.toBigExact());
            }
            return new SmallExactNumber(num, den);
        }
    }
    numerator() {
        return new SmallExactNumber(this.num);
    }
    denominator() {
        return new SmallExactNumber(this.den);
    }
    integerSqrt() {
        if (this.isNegative()) {
            const n = this.multiply(EXACT_NEG_ONE);
            const sqrt = n.sqrt().realPart().floor();
            const zero = sqrt.isExact() ? EXACT_ZERO : INEXACT_ZERO;
            return new ComplexNumber(zero, sqrt);
        }
        return this.sqrt().realPart().floor();
    }
    sqrt() {
        if (this.isNegative()) {
            const n = this.multiply(EXACT_NEG_ONE);
            const sqrt = n.sqrt().realPart();
            if (sqrt.isExact()) {
                return new ComplexNumber(EXACT_ZERO, sqrt);
            }
            return new ComplexNumber(INEXACT_ZERO, sqrt);
        }
        const num = Math.sqrt(this.num);
        const den = Math.sqrt(this.den);
        if (num === Math.floor(num) && den === Math.floor(den)) {
            return new SmallExactNumber(num, den);
        }
        else {
            return new InexactNumber(num / den);
        }
    }
    abs() {
        if (this.isNegative()) {
            return new SmallExactNumber(-1 * this.num, this.den);
        }
        else {
            return this;
        }
    }
    floor() {
        if (this.den === 1) {
            return this;
        }
        else {
            return new SmallExactNumber(Math.floor(this.num / this.den));
        }
    }
    ceiling() {
        if (this.den === 1) {
            return this;
        }
        else {
            return new SmallExactNumber(Math.ceil(this.num / this.den));
        }
    }
    round() {
        if (this.den === 1) {
            return this;
        }
        else {
            return new SmallExactNumber(Math.round(this.num / this.den));
        }
    }
    conjugate() {
        return this;
    }
    magnitude() {
        return this.abs();
    }
    realPart() {
        return this;
    }
    imaginaryPart() {
        return EXACT_ZERO;
    }
    angle() {
        if (this.isNegative()) {
            return new InexactNumber(Math.PI);
        }
        else {
            return new SmallExactNumber(0);
        }
    }
    log() {
        if (this.isNegative()) {
            return this.toComplex().log();
        }
        return new InexactNumber(Math.log(this.num / this.den));
    }
    expt(power) {
        if (power instanceof ComplexNumber) {
            return this.toComplex().expt(power);
        }
        if (power.isExact() && power.isInteger() && !power.isNegative()) {
            const exp = power.toFixnum();
            if (typeof exp === 'bigint') {
                return this.toBigExact().expt(power);
            }
            const num = Math.pow(this.num, exp);
            const den = Math.pow(this.den, exp);
            if (!isSafeInteger(num) || !isSafeInteger(den)) {
                return this.toBigExact().expt(power);
            }
            return new SmallExactNumber(num, den);
        }
        return this.toInexact().expt(power);
    }
    exp() {
        return new InexactNumber(Math.exp(this.num / this.den));
    }
    tan() {
        return new InexactNumber(Math.tan(this.num / this.den));
    }
    cos() {
        return new InexactNumber(Math.cos(this.num / this.den));
    }
    sin() {
        return new InexactNumber(Math.sin(this.num / this.den));
    }
    atan() {
        return new InexactNumber(Math.atan(this.num / this.den));
    }
    acos() {
        return new InexactNumber(Math.acos(this.num / this.den));
    }
    asin() {
        return new InexactNumber(Math.asin(this.num / this.den));
    }
}
//# sourceMappingURL=SmallExactNumber.js.map
