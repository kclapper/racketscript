import { isExactReal, SmallExactNumber, ComplexNumber, EXACT_ZERO, INEXACT_ZERO, INEXACT_NEG_ONE, } from './index.js';
export class InexactNumber {
    constructor(num) {
        this.num = num;
        // Make it immutable
        Object.freeze(this);
    }
    isInexact() {
        return true;
    }
    isExact() {
        return false;
    }
    toInexact() {
        return this;
    }
    toExact() {
        if (!this.isFinite()) {
            throw new Error(`There is no exact representation of ${this}`);
        }
        const stringRep = this.num.toString();
        const match = stringRep.match(/^(.*)\.(.*)$/);
        if (match) {
            const tenToDecimalPlaces = Math.pow(10, match[2].length);
            return new SmallExactNumber(Math.round(this.num * tenToDecimalPlaces), tenToDecimalPlaces);
        }
        else {
            return new SmallExactNumber(this.num, 1);
        }
    }
    toComplex() {
        return new ComplexNumber(this, EXACT_ZERO);
    }
    toFixnum() {
        return Math.floor(this.num);
    }
    isInteger() {
        return Number.isInteger(this.num);
    }
    isRational() {
        return this.isFinite();
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
        return Object.is(this.num, -0);
    }
    isPositive() {
        return this.num > 0;
    }
    isNegative() {
        return this.num < 0;
    }
    isEven() {
        return this.num % 2 === 0;
    }
    isFinite() {
        return Number.isFinite(this.num);
    }
    isNaN() {
        return Number.isNaN(this.num);
    }
    toString() {
        if (Number.isNaN(this.num)) {
            return "+nan.0";
        }
        if (this.num === Infinity) {
            return "+inf.0";
        }
        else if (this.num === -Infinity) {
            return "-inf.0";
        }
        if (Number.isInteger(this.num)) {
            return this.num.toString() + ".0";
        }
        return this.num.toString();
    }
    toSignedString() {
        if (!Number.isFinite(this.num)) {
            return this.toString();
        }
        if (this.num >= 0) {
            return "+" + this.toString();
        }
        return this.toString();
    }
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.toString();
        }
        return this.num;
    }
    greaterThan(other) {
        if (other instanceof ComplexNumber) {
            throw new TypeError("Not defined for complex numbers");
        }
        if (other.isExact()) {
            if (this.isNaN()) {
                return false;
            }
            else if (!this.isFinite()) {
                return this.isPositive();
            }
            return this.toExact().greaterThan(other);
        }
        return this.num > other.num;
    }
    greaterThanOrEqual(other) {
        if (other instanceof ComplexNumber) {
            throw new TypeError("Not defined for complex numbers");
        }
        if (other.isExact()) {
            if (this.isNaN()) {
                return false;
            }
            else if (!this.isFinite()) {
                return this.isPositive();
            }
            return this.toExact().greaterThanOrEqual(other);
        }
        return this.num >= other.num;
    }
    lessThan(other) {
        if (other instanceof ComplexNumber) {
            throw new TypeError("Not defined for complex numbers");
        }
        if (other.isExact()) {
            if (this.isNaN()) {
                return false;
            }
            else if (!this.isFinite()) {
                return !this.isPositive();
            }
            return this.toExact().lessThan(other);
        }
        return this.num < other.num;
    }
    lessThanOrEqual(other) {
        if (other instanceof ComplexNumber) {
            throw new TypeError("Not defined for complex numbers");
        }
        if (other.isExact()) {
            if (this.isNaN()) {
                return false;
            }
            else if (!this.isFinite()) {
                return !this.isPositive();
            }
            return this.toExact().lessThanOrEqual(other);
        }
        return this.num <= other.num;
    }
    equals(other) {
        if (this.isNaN()) {
            return false;
        }
        if (other instanceof ComplexNumber) {
            return this.toComplex().equals(other);
        }
        if (!this.isFinite()) {
            return !(other.isExact()) && this.num === other.num;
        }
        if (other.isExact()) {
            return this.toExact().equals(other);
        }
        return this.num === other.num;
    }
    add(other) {
        if (other instanceof ComplexNumber) {
            return this.toComplex().add(other);
        }
        if (isExactReal(other)) {
            return this.add(other.toInexact());
        }
        return new InexactNumber(this.num + other.num);
    }
    subtract(other) {
        if (other instanceof ComplexNumber) {
            return this.toComplex().subtract(other);
        }
        if (isExactReal(other)) {
            return this.subtract(other.toInexact());
        }
        return new InexactNumber(this.num - other.num);
    }
    multiply(other) {
        if (other instanceof ComplexNumber) {
            return this.toComplex().multiply(other);
        }
        if (isExactReal(other)) {
            if (other.isZero()) {
                return EXACT_ZERO;
            }
            return this.multiply(other.toInexact());
        }
        return new InexactNumber(this.num * other.num);
    }
    divide(other) {
        if (other instanceof ComplexNumber) {
            return this.toComplex().divide(other);
        }
        if (this.isZero()) {
            return this;
        }
        if (isExactReal(other)) {
            return this.divide(other.toInexact());
        }
        return new InexactNumber(this.num / other.num);
    }
    numerator() {
        return this.toExact().numerator().toInexact();
    }
    denominator() {
        return this.toExact().denominator().toInexact();
    }
    integerSqrt() {
        return new InexactNumber(Math.floor(Math.sqrt(this.num)));
    }
    sqrt() {
        if (this.isNegative()) {
            const result = this.multiply(INEXACT_NEG_ONE).sqrt();
            return new ComplexNumber(INEXACT_ZERO, result);
        }
        return new InexactNumber(Math.sqrt(this.num));
    }
    abs() {
        return new InexactNumber(Math.abs(this.num));
    }
    floor() {
        return new InexactNumber(Math.floor(this.num));
    }
    ceiling() {
        return new InexactNumber(Math.ceil(this.num));
    }
    round() {
        return new InexactNumber(Math.round(this.num));
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
        if (0 === this.num)
            return EXACT_ZERO;
        if (this.num > 0)
            return EXACT_ZERO;
        else
            return new InexactNumber(Math.PI);
    }
    log() {
        if (this.isNegative()) {
            return this.toComplex().log();
        }
        return new InexactNumber(Math.log(this.num));
    }
    expt(power) {
        if (power instanceof ComplexNumber) {
            return this.toComplex().expt(power);
        }
        if (isExactReal(power)) {
            return this.expt(power.toInexact());
        }
        return new InexactNumber(Math.pow(this.num, power.num));
    }
    exp() {
        return new InexactNumber(Math.exp(this.num));
    }
    tan() {
        return new InexactNumber(Math.tan(this.num));
    }
    cos() {
        return new InexactNumber(Math.cos(this.num));
    }
    sin() {
        return new InexactNumber(Math.sin(this.num));
    }
    atan() {
        return new InexactNumber(Math.atan(this.num));
    }
    acos() {
        if (-1 <= this.num && this.num <= 1) {
            return new InexactNumber(Math.acos(this.num));
        }
        return this.toComplex().acos();
    }
    asin() {
        if (-1 <= this.num && this.num <= 1) {
            return new InexactNumber(Math.asin(this.num));
        }
        return this.toComplex().asin();
    }
}
//# sourceMappingURL=InexactNumber.js.map
