import { matchExactness, ZERO, ONE, HALF, TWO, NEG_ONE, I, NEG_I, PI, NEG_INF, } from './index.js';
export class ComplexNumber {
    constructor(real, imag) {
        this.real = real;
        if (imag === undefined) {
            this.imag = ZERO;
        }
        else {
            this.imag = imag;
        }
        // Make it immutable
        Object.freeze(this);
    }
    isExact() {
        return this.real.isExact() && this.imag.isExact();
    }
    isInexact() {
        return !this.isExact();
    }
    toInexact() {
        if (this.isInexact()) {
            return this;
        }
        if (this.isReal()) {
            return this.real.toInexact();
        }
        return new ComplexNumber(this.real.toInexact(), this.imag.toInexact());
    }
    toExact() {
        if (this.isExact()) {
            return this;
        }
        if (this.isReal()) {
            return this.real.toExact();
        }
        return new ComplexNumber(this.real.toExact(), this.imag.toExact());
    }
    toReal() {
        if (!this.isReal()) {
            throw new TypeError("Complex number cannot be made real.");
        }
        return this.real;
    }
    toComplex() {
        return this;
    }
    toFixnum() {
        if (!this.isReal()) {
            throw new TypeError("Not defined for complex numbers.");
        }
        return this.real.toFixnum();
    }
    isInteger() {
        return this.isRational() && this.real.isInteger();
    }
    isRational() {
        return this.isReal() && this.isFinite();
    }
    isReal() {
        return this.imag.isZero() && this.imag.isExact();
    }
    isComplex() {
        return true;
    }
    isZero() {
        return this.real.isZero() && this.imag.isZero();
    }
    isNegativeZero() {
        return this.isReal() && this.real.isNegativeZero();
    }
    isPositive() {
        if (!this.isReal()) {
            throw new TypeError("Not defined for complex numbers.");
        }
        return this.real.isPositive();
    }
    isNegative() {
        if (!this.isReal()) {
            throw new TypeError("Not defined for complex numbers.");
        }
        return this.real.isNegative();
    }
    isEven() {
        if (!this.isInteger()) {
            throw new TypeError("Only defined for Integers.");
        }
        return this.real.isEven();
    }
    isFinite() {
        return this.real.isFinite() && this.imag.isFinite();
    }
    isNaN() {
        return this.real.isNaN() || this.imag.isNaN();
    }
    toString() {
        if (this.isReal()) {
            return this.real.toString();
        }
        else {
            return this.real.toString() + this.imag.toSignedString() + "i";
        }
    }
    toSignedString() {
        return this.real.toSignedString() + this.imag.toSignedString() + "i";
    }
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.toString();
        }
        if (!this.isReal()) {
            return Number.NaN;
        }
        const primitive = this.real[Symbol.toPrimitive](hint);
        if (hint === 'number' && typeof primitive === 'bigint') {
            return Number(primitive);
        }
        else if (hint === 'default' && typeof primitive === 'bigint') {
            return Number(primitive);
        }
        return primitive;
    }
    greaterThan(other) {
        if (!this.isReal() || !other.isReal()) {
            throw new Error("Greater than not defined for complex numbers.");
        }
        return this.real.greaterThan(other);
    }
    greaterThanOrEqual(other) {
        if (!this.isReal() || !other.isReal()) {
            throw new Error("Greater than or equal not defined for complex numbers.");
        }
        return this.real.greaterThanOrEqual(other);
    }
    lessThan(other) {
        if (!this.isReal() || !other.isReal()) {
            throw new Error("Less than not defined for complex numbers.");
        }
        return this.real.lessThan(other);
    }
    lessThanOrEqual(other) {
        if (!this.isReal() || !other.isReal()) {
            throw new Error("Less than or equal not defined for complex numbers.");
        }
        return this.real.lessThanOrEqual(other);
    }
    equals(other) {
        other = other.toComplex();
        return this.real.equals(other.real) && this.imag.equals(other.imag);
    }
    add(other) {
        let real = this.realPart().add(other.realPart());
        if (this.isReal() && other.isReal()) {
            return real;
        }
        let imag = this.imaginaryPart().add(other.imaginaryPart());
        [real, imag] = matchExactness(real, imag);
        return new ComplexNumber(real, imag);
    }
    subtract(other) {
        let real = this.realPart().subtract(other.realPart());
        if (this.isReal() && other.isReal()) {
            return real;
        }
        let imag = this.imaginaryPart().subtract(other.imaginaryPart());
        [real, imag] = matchExactness(real, imag);
        return new ComplexNumber(real, imag);
    }
    multiply(other) {
        const thisReal = this.realPart();
        const thisImag = this.imaginaryPart();
        const otherReal = other.realPart();
        const otherImag = other.imaginaryPart();
        let real = thisReal.multiply(otherReal).subtract(thisImag.multiply(otherImag));
        const imag = thisReal.multiply(otherImag).add(thisImag.multiply(otherReal));
        real = !imag.isExact() ? real.toInexact() : real;
        if (imag.isExact() && imag.isZero()) {
            return real;
        }
        return new ComplexNumber(real, imag);
    }
    divide(other) {
        // If the other value is real, just do primitive division
        if (other.isReal()) {
            const real = this.realPart().divide(other.realPart());
            const imag = this.imaginaryPart().divide(other.realPart());
            return new ComplexNumber(real, imag);
        }
        let a, b, c, d, r, x, y;
        if (this.isInexact() || other.isInexact()) {
            // http://portal.acm.org/citation.cfm?id=1039814
            // We currently use Smith's method, though we should
            // probably switch over to Priest's method.
            a = this.realPart();
            b = this.imaginaryPart();
            c = other.realPart();
            d = other.imaginaryPart();
            if (d.abs().lessThanOrEqual(c.abs())) {
                r = d.divide(c);
                x = a.add(b.multiply(r)).divide(c.add(d.multiply(r)));
                y = b.subtract(a.multiply(r)).divide(c.add(d.multiply(r)));
            }
            else {
                r = c.divide(d);
                x = a.multiply(r).add(b).divide(c.multiply(r).add(d));
                y = b.multiply(r).subtract(a).divide(c.multiply(r).add(d));
            }
            return new ComplexNumber(x, y);
        }
        else {
            const con = other.conjugate();
            const up = this.multiply(con);
            // Down is guaranteed to be real by this point.
            const down = other.multiply(con).realPart();
            const real = up.realPart().divide(down).realPart();
            const imag = up.imaginaryPart().divide(down).realPart();
            return new ComplexNumber(real, imag);
        }
    }
    numerator() {
        if (!this.isReal()) {
            throw new Error("Numerator not defined for complex numbers.");
        }
        return this.real.numerator();
    }
    denominator() {
        if (!this.isReal()) {
            throw new Error("Denominator not defined for complex numbers.");
        }
        return this.real.denominator();
    }
    // TODO: Continue here...
    integerSqrt() {
        if (this.isInteger()) {
            return this.real.integerSqrt();
        }
        else {
            throw new Error("IntegerSqrt only defined for integers.");
        }
    }
    sqrt() {
        if (this.isReal() && !this.isNegative()) {
            return this.real.sqrt();
        }
        // http://en.wikipedia.org/wiki/Square_root#Square_roots_of_negative_and_complex_numbers
        const mag = this.magnitude().realPart();
        const r_plus_x = mag.add(this.real);
        const real = r_plus_x.divide(TWO).sqrt().realPart();
        const imag = this.imag.divide(r_plus_x.multiply(TWO).sqrt()).realPart();
        return new ComplexNumber(real, imag);
    }
    abs() {
        if (!this.isReal()) {
            throw new Error("abs is not defined for complex numbers.");
        }
        return this.real.abs();
    }
    floor() {
        if (!this.isReal()) {
            throw new Error("floor is not defined for complex numbers.");
        }
        return this.real.floor();
    }
    ceiling() {
        if (!this.isReal()) {
            throw new Error("ceiling is not defined for complex numbers.");
        }
        return this.real.ceiling();
    }
    round() {
        if (!this.isReal()) {
            throw new Error("round is not defined for complex numbers.");
        }
        return this.real.round();
    }
    conjugate() {
        return new ComplexNumber(this.real, ZERO.subtract(this.imag));
    }
    magnitude() {
        const realSqr = this.real.multiply(this.real);
        const imagSqr = this.imag.multiply(this.imag);
        const sum = realSqr.add(imagSqr);
        return sum.sqrt();
    }
    realPart() {
        return this.real;
    }
    imaginaryPart() {
        return this.imag;
    }
    log() {
        if (this.isReal() && this.isPositive()) {
            return this.real.log();
        }
        const mag = this.magnitude().realPart();
        const mag_log = mag.log();
        const theta = this.angle();
        return mag_log.add(theta.multiply(I));
    }
    expt(power) {
        if (power.isExact() && power.isInteger() && power.greaterThanOrEqual(ZERO)) {
            let n = this;
            let k = BigInt(power.toFixnum());
            let acc = ONE;
            while (k !== 0n) {
                if (k % 2n === 0n) {
                    n = n.multiply(n);
                    k = k / 2n;
                }
                else {
                    acc = acc.multiply(n);
                    k = k - 1n;
                }
            }
            return acc;
        }
        const expo = power.multiply(this.log());
        return expo.exp();
    }
    exp() {
        if (this.isReal()) {
            return this.real.exp();
        }
        const r = this.real.exp();
        const cos_a = this.imag.cos();
        const sin_a = this.imag.sin();
        return r.multiply(cos_a.add(sin_a.multiply(I)));
    }
    angle() {
        if (this.isReal()) {
            return this.real.angle();
        }
        if (this.real.isZero()) {
            const halfPI = PI.divide(TWO);
            if (this.imag.isPositive()) {
                return halfPI;
            }
            else {
                return halfPI.multiply(NEG_ONE);
            }
        }
        const tmp = this.imaginaryPart().abs().divide(this.realPart().abs()).atan();
        if (this.real.isPositive()) {
            if (this.imag.isPositive()) {
                return tmp;
            }
            else {
                return tmp.multiply(NEG_ONE);
            }
        }
        else {
            if (this.imag.isPositive()) {
                return PI.subtract(tmp);
            }
            else {
                return tmp.subtract(PI);
            }
        }
    }
    tan() {
        if (this.isReal()) {
            return this.real.tan();
        }
        return this.sin().divide(this.cos());
    }
    cos() {
        if (this.isReal()) {
            return this.real.cos();
        }
        const iz = this.multiply(I);
        const iz_negate = iz.multiply(NEG_ONE);
        return iz.exp().add(iz_negate.exp()).divide(TWO);
    }
    sin() {
        if (this.isReal()) {
            return this.real.sin();
        }
        const iz = this.multiply(I);
        const iz_negate = iz.multiply(NEG_ONE);
        const z2 = new ComplexNumber(ZERO, TWO);
        const exp_negate = iz.exp().subtract(iz_negate.exp());
        const result = exp_negate.divide(z2);
        return result;
    }
    atan() {
        if (this.isZero()) {
            return ZERO;
        }
        if (this.isReal()) {
            return this.real.atan();
        }
        if (this.equals(I) || this.equals(NEG_I)) {
            return NEG_INF;
        }
        let result;
        result = ZERO.subtract(this);
        result = I.add(result);
        result = I.add(this).divide(result);
        result = result.log();
        result = HALF.multiply(result);
        result = I.multiply(result);
        return result;
    }
    acos() {
        if (this.isReal() && this.greaterThanOrEqual(NEG_ONE) && this.lessThanOrEqual(ONE)) {
            return this.real.acos();
        }
        const pi_half = PI.divide(TWO);
        const iz = this.multiply(I);
        const root = ONE.subtract(this.multiply(this)).sqrt();
        const l = iz.add(root).log().multiply(I);
        return pi_half.add(l);
    }
    asin() {
        if (this.isReal() && this.greaterThanOrEqual(NEG_ONE) && this.lessThanOrEqual(ONE)) {
            return this.real.asin();
        }
        const oneNegateThisSq = ONE.subtract(this.multiply(this));
        const sqrtOneNegateThisSq = oneNegateThisSq.sqrt();
        return TWO.multiply(this.divide(ONE.add(sqrtOneNegateThisSq)).atan());
    }
}
//# sourceMappingURL=ComplexNumber.js.map
