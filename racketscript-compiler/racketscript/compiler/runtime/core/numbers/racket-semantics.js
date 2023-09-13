var t = {
        d: (e, n) => {
            for (var i in n) t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: n[i]
            })
        },
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e)
    },
    e = {};

function n(t) {
    return t instanceof f || t instanceof d || t instanceof g || t instanceof x
}

function i(t) {
    return t instanceof f || t instanceof d || t instanceof g
}

function r(t) {
    return "number" == typeof t || "bigint" == typeof t
}

function s(t) {
    return Number.isInteger(t) || "bigint" == typeof t
}

function a(t) {
    const e = Number.MAX_SAFE_INTEGER,
        n = Number.MIN_SAFE_INTEGER;
    return "number" == typeof t ? Number.isFinite(t) && t >= n && t <= e : t >= BigInt(n) && t <= BigInt(e)
}

function u(t) {
    return Number.isFinite(t) && !a(t)
}

function o(t, e) {
    let n = 1n;
    for (; 0n !== e;) e % 2n === 0n ? (t *= t, e /= 2n) : (n *= t, e -= 1n);
    return n
}

function h(t) {
    return s(t) && ("bigint" == typeof t ? 1n === t : 1 === t)
}

function l(t) {
    const e = "bigint" == typeof t,
        n = Number.isFinite(t) && !Number.isNaN(t);
    return e || n
}

function c(t, e) {
    return t = e.isExact() ? t : t.toInexact(), e = t.isExact() ? e : e.toInexact(), [t, e]
}

function m(t) {
    return t instanceof d || t instanceof g
}
t.d(e, {
    h1: () => g,
    sc: () => x,
    TQ: () => E,
    $6: () => $,
    IG: () => A,
    qL: () => N,
    WV: () => p,
    Dr: () => b,
    V3: () => w,
    uB: () => q,
    I: () => G,
    Wc: () => R,
    bw: () => j,
    qV: () => X,
    h9: () => C,
    ZQ: () => M,
    gE: () => S,
    jy: () => O,
    P: () => P,
    D: () => B,
    ZK: () => f,
    i1: () => _,
    $D: () => W,
    K_: () => Z,
    k8: () => T,
    ry: () => I,
    PI: () => F,
    Mr: () => d,
    pT: () => v,
    xE: () => y,
    Wn: () => zt,
    Kh: () => Re,
    IH: () => Pt,
    EU: () => Ne,
    J4: () => ie,
    r3: () => Ue,
    ZR: () => Me,
    z4: () => Oe,
    fv: () => Se,
    C: () => o,
    yc: () => Je,
    Zy: () => He,
    SD: () => ze,
    YF: () => Qe,
    VE: () => _e,
    eY: () => Jt,
    Kx: () => qe,
    mC: () => Te,
    f9: () => Be,
    gQ: () => Lt,
    cs: () => Ft,
    e: () => V,
    fS: () => te,
    RN: () => ne,
    Wj: () => de,
    Qq: () => Wt,
    bR: () => Gt,
    GW: () => Qt,
    mL: () => We,
    th: () => kt,
    tS: () => re,
    Vl: () => ae,
    i: () => U,
    wp: () => Ie,
    c2: () => me,
    gY: () => J,
    qt: () => h,
    vx: () => Xt,
    EY: () => n,
    Mc: () => st,
    Gf: () => wt,
    D3: () => pt,
    Cl: () => ht,
    NR: () => lt,
    iR: () => ct,
    YK: () => m,
    xV: () => It,
    Mo: () => ft,
    Dp: () => bt,
    yF: () => mt,
    U: () => ot,
    MM: () => s,
    ZI: () => r,
    i2: () => qt,
    nM: () => xt,
    GR: () => vt,
    hj: () => rt,
    rA: () => Et,
    xP: () => gt,
    Ks: () => Nt,
    DL: () => ut,
    FO: () => at,
    YX: () => i,
    Bq: () => a,
    eq: () => yt,
    Fr: () => dt,
    uq: () => Vt,
    Qj: () => oe,
    $2: () => le,
    cM: () => Dt,
    Wm: () => pe,
    Tg: () => Ve,
    Oq: () => ke,
    ep: () => Le,
    Wi: () => Ee,
    gP: () => Ke,
    Yp: () => we,
    Ts: () => c,
    $W: () => $t,
    Jp: () => Ot,
    qn: () => z,
    bq: () => tt,
    ML: () => Q,
    nZ: () => k,
    $Y: () => H,
    fI: () => l,
    D$: () => xe,
    XA: () => Yt,
    J_: () => Y,
    pi: () => K,
    wc: () => Zt,
    $c: () => ye,
    sp: () => _t,
    NM: () => Ht,
    H0: () => u,
    O$: () => ve,
    R_: () => Fe,
    GC: () => At,
    _b: () => jt,
    $X: () => Rt,
    OR: () => Pe,
    AE: () => Ze,
    Pq: () => fe,
    rP: () => ge,
    ak: () => L,
    bM: () => D
});
class f {
    constructor(t) {
        this.num = t, Object.freeze(this)
    }
    isInexact() {
        return !0
    }
    isExact() {
        return !1
    }
    toInexact() {
        return this
    }
    toExact() {
        if (!this.isFinite()) throw new Error(`There is no exact representation of ${this}`);
        const t = this.num.toString().match(/^(.*)\.(.*)$/);
        if (t) {
            const e = Math.pow(10, t[2].length);
            return new d(Math.round(this.num * e), e)
        }
        return new d(this.num, 1)
    }
    toComplex() {
        return new x(this, w)
    }
    toFixnum() {
        return Math.floor(this.num)
    }
    isInteger() {
        return Number.isInteger(this.num)
    }
    isRational() {
        return this.isFinite()
    }
    isReal() {
        return !0
    }
    isComplex() {
        return !0
    }
    isZero() {
        return 0 === this.num
    }
    isNegativeZero() {
        return Object.is(this.num, -0)
    }
    isPositive() {
        return this.num > 0
    }
    isNegative() {
        return this.num < 0
    }
    isEven() {
        return this.num % 2 == 0
    }
    isFinite() {
        return Number.isFinite(this.num)
    }
    isNaN() {
        return Number.isNaN(this.num)
    }
    toString() {
        return Number.isNaN(this.num) ? "+nan.0" : this.num === 1 / 0 ? "+inf.0" : this.num === -1 / 0 ? "-inf.0" : Number.isInteger(this.num) ? this.num.toString() + ".0" : this.num.toString()
    }
    toSignedString() {
        return Number.isFinite(this.num) && this.num >= 0 ? "+" + this.toString() : this.toString()
    } [Symbol.toPrimitive](t) {
        return "string" === t ? this.toString() : this.num
    }
    greaterThan(t) {
        if (t instanceof x) throw new TypeError("Not defined for complex numbers");
        return t.isExact() ? !this.isNaN() && (this.isFinite() ? this.toExact().greaterThan(t) : this.isPositive()) : this.num > t.num
    }
    greaterThanOrEqual(t) {
        if (t instanceof x) throw new TypeError("Not defined for complex numbers");
        return t.isExact() ? !this.isNaN() && (this.isFinite() ? this.toExact().greaterThanOrEqual(t) : this.isPositive()) : this.num >= t.num
    }
    lessThan(t) {
        if (t instanceof x) throw new TypeError("Not defined for complex numbers");
        return t.isExact() ? !this.isNaN() && (this.isFinite() ? this.toExact().lessThan(t) : !this.isPositive()) : this.num < t.num
    }
    lessThanOrEqual(t) {
        if (t instanceof x) throw new TypeError("Not defined for complex numbers");
        return t.isExact() ? !this.isNaN() && (this.isFinite() ? this.toExact().lessThanOrEqual(t) : !this.isPositive()) : this.num <= t.num
    }
    equals(t) {
        return !this.isNaN() && (t instanceof x ? this.toComplex().equals(t) : this.isFinite() ? t.isExact() ? this.toExact().equals(t) : this.num === t.num : !t.isExact() && this.num === t.num)
    }
    add(t) {
        return t instanceof x ? this.toComplex().add(t) : m(t) ? this.add(t.toInexact()) : new f(this.num + t.num)
    }
    subtract(t) {
        return t instanceof x ? this.toComplex().subtract(t) : m(t) ? this.subtract(t.toInexact()) : new f(this.num - t.num)
    }
    multiply(t) {
        return t instanceof x ? this.toComplex().multiply(t) : m(t) ? t.isZero() ? w : this.multiply(t.toInexact()) : new f(this.num * t.num)
    }
    divide(t) {
        return t instanceof x ? this.toComplex().divide(t) : this.isZero() ? this : m(t) ? this.divide(t.toInexact()) : new f(this.num / t.num)
    }
    numerator() {
        return this.toExact().numerator().toInexact()
    }
    denominator() {
        return this.toExact().denominator().toInexact()
    }
    integerSqrt() {
        return new f(Math.floor(Math.sqrt(this.num)))
    }
    sqrt() {
        if (this.isNegative()) {
            const t = this.multiply(C).sqrt();
            return new x(P, t)
        }
        return new f(Math.sqrt(this.num))
    }
    abs() {
        return new f(Math.abs(this.num))
    }
    floor() {
        return new f(Math.floor(this.num))
    }
    ceiling() {
        return new f(Math.ceil(this.num))
    }
    round() {
        return new f(Math.round(this.num))
    }
    conjugate() {
        return this
    }
    magnitude() {
        return this
    }
    realPart() {
        return this
    }
    imaginaryPart() {
        return w
    }
    angle() {
        return 0 === this.num || this.num > 0 ? w : new f(Math.PI)
    }
    log() {
        return this.isNegative() ? this.toComplex().log() : new f(Math.log(this.num))
    }
    expt(t) {
        return t instanceof x ? this.toComplex().expt(t) : m(t) ? this.expt(t.toInexact()) : new f(Math.pow(this.num, t.num))
    }
    exp() {
        return new f(Math.exp(this.num))
    }
    tan() {
        return new f(Math.tan(this.num))
    }
    cos() {
        return new f(Math.cos(this.num))
    }
    sin() {
        return new f(Math.sin(this.num))
    }
    atan() {
        return new f(Math.atan(this.num))
    }
    acos() {
        return -1 <= this.num && this.num <= 1 ? new f(Math.acos(this.num)) : this.toComplex().acos()
    }
    asin() {
        return -1 <= this.num && this.num <= 1 ? new f(Math.asin(this.num)) : this.toComplex().asin()
    }
}
class d {
    constructor(t, e = 1) {
        if (!Number.isInteger(t) && !Number.isInteger(e)) throw new TypeError("Exact number can only be constructed from integers.");
        if ("number" != typeof t || "number" != typeof e) throw new TypeError("Exact value numerator and denominator types must match"); {
            e < 0 && (t *= -1, e *= -1), Object.is(t, -0) && (t = 0);
            const n = this.gcd(t, e);
            this.num = t / n, this.den = e / n
        }
        Object.freeze(this)
    }
    gcd(t, e) {
        let n;
        for (; 0 !== e;) n = t, t = e, e = n % e;
        return Math.abs(t)
    }
    isExact() {
        return !0
    }
    isInexact() {
        return !1
    }
    toInexact() {
        const t = this.num / this.den;
        return new f(t)
    }
    toExact() {
        return this
    }
    toBigExact() {
        return new g(BigInt(this.num), BigInt(this.den))
    }
    toComplex() {
        return new x(this, w)
    }
    toFixnum() {
        return Math.floor(this.num / this.den)
    }
    isInteger() {
        return 1 === this.den
    }
    isRational() {
        return !0
    }
    isReal() {
        return !0
    }
    isComplex() {
        return !0
    }
    isZero() {
        return 0 === this.num
    }
    isNegativeZero() {
        return !1
    }
    isPositive() {
        return this.num > 0
    }
    isNegative() {
        return this.num < 0
    }
    isEven() {
        return 1 === this.den && this.num % 2 == 0
    }
    isFinite() {
        return !0
    }
    isNaN() {
        return !1
    }
    toString() {
        return 1 === this.den ? this.num.toString() : `${this.num}/${this.den}`
    }
    toSignedString() {
        return this.isPositive() || this.isZero() ? "+" + this.toString() : this.toString()
    } [Symbol.toPrimitive](t) {
        return "string" === t ? this.toString() : "bigint" === t && 1 === this.den ? BigInt(this.num) : this.num / this.den
    }
    greaterThan(t) {
        if (t instanceof f) return !t.isNaN() && (t.isFinite() ? this.greaterThan(t.toExact()) : !t.isPositive());
        if (t instanceof g) return this.toBigExact().greaterThan(t);
        if (t instanceof x) throw new TypeError("Not defined for complex numbers.");
        return this.num * t.den > t.num * this.den
    }
    greaterThanOrEqual(t) {
        if (t instanceof f) return !t.isNaN() && (t.isFinite() ? this.greaterThanOrEqual(t.toExact()) : !t.isPositive());
        if (t instanceof g) return this.toBigExact().greaterThanOrEqual(t);
        if (t instanceof x) throw new TypeError("Not defined for complex numbers.");
        return this.num * t.den >= t.num * this.den
    }
    lessThan(t) {
        if (t instanceof f) return !t.isNaN() && (t.isFinite() ? this.lessThan(t.toExact()) : t.isPositive());
        if (t instanceof g) return this.toBigExact().lessThan(t);
        if (t instanceof x) throw new TypeError("Not defined for complex numbers.");
        return this.num * t.den < t.num * this.den
    }
    lessThanOrEqual(t) {
        if (t instanceof f) return !t.isNaN() && (t.isFinite() ? this.lessThanOrEqual(t.toExact()) : t.isPositive());
        if (t instanceof g) return this.toBigExact().lessThanOrEqual(t);
        if (t instanceof x) throw new TypeError("Not defined for complex numbers.");
        return this.num * t.den <= t.num * this.den
    }
    equals(t) {
        return t instanceof f ? !!t.isFinite() && this.equals(t.toExact()) : t instanceof g ? this.toBigExact().equals(t) : t instanceof x ? this.toComplex().equals(t) : this.num * t.den == t.num * this.den
    }
    add(t) {
        if (t instanceof f) return this.toInexact().add(t);
        if (t instanceof g) return this.toBigExact().add(t);
        if (t instanceof x) return this.toComplex().add(t); {
            const e = this.num * t.den + t.num * this.den,
                n = this.den * t.den;
            return a(e) && a(n) ? new d(e, n) : this.toBigExact().add(t.toBigExact())
        }
    }
    subtract(t) {
        if (t instanceof f) return this.toInexact().subtract(t);
        if (t instanceof g) return this.toBigExact().subtract(t);
        if (t instanceof x) return this.toComplex().subtract(t); {
            const e = this.num * t.den - t.num * this.den,
                n = this.den * t.den;
            return a(e) && a(n) ? new d(e, n) : this.toBigExact().subtract(t.toBigExact())
        }
    }
    multiply(t) {
        if (this.isZero() || t.isExact() && t.isZero()) return w;
        if (t instanceof f) return this.toInexact().multiply(t);
        if (t instanceof g) return this.toBigExact().multiply(t);
        if (t instanceof x) return this.toComplex().multiply(t); {
            const e = this.num * t.num,
                n = this.den * t.den;
            return a(e) && a(n) ? new d(e, n) : this.toBigExact().multiply(t.toBigExact())
        }
    }
    divide(t) {
        if (this.isZero()) return this;
        if (t instanceof f) return this.toInexact().divide(t);
        if (t instanceof g) return this.toBigExact().divide(t);
        if (t instanceof x) return this.toComplex().divide(t);
        if (t.isZero()) throw new Error("/: division by zero" + this + t); {
            const e = this.num * t.den,
                n = this.den * t.num;
            return a(e) && a(n) ? new d(e, n) : this.toBigExact().divide(t.toBigExact())
        }
    }
    numerator() {
        return new d(this.num)
    }
    denominator() {
        return new d(this.den)
    }
    integerSqrt() {
        if (this.isNegative()) {
            const t = this.multiply(N).sqrt().realPart().floor(),
                e = t.isExact() ? w : P;
            return new x(e, t)
        }
        return this.sqrt().realPart().floor()
    }
    sqrt() {
        if (this.isNegative()) {
            const t = this.multiply(N).sqrt().realPart();
            return t.isExact() ? new x(w, t) : new x(P, t)
        }
        const t = Math.sqrt(this.num),
            e = Math.sqrt(this.den);
        return t === Math.floor(t) && e === Math.floor(e) ? new d(t, e) : new f(t / e)
    }
    abs() {
        return this.isNegative() ? new d(-1 * this.num, this.den) : this
    }
    floor() {
        return 1 === this.den ? this : new d(Math.floor(this.num / this.den))
    }
    ceiling() {
        return 1 === this.den ? this : new d(Math.ceil(this.num / this.den))
    }
    round() {
        return 1 === this.den ? this : new d(Math.round(this.num / this.den))
    }
    conjugate() {
        return this
    }
    magnitude() {
        return this.abs()
    }
    realPart() {
        return this
    }
    imaginaryPart() {
        return w
    }
    angle() {
        return this.isNegative() ? new f(Math.PI) : new d(0)
    }
    log() {
        return this.isNegative() ? this.toComplex().log() : new f(Math.log(this.num / this.den))
    }
    expt(t) {
        if (t instanceof x) return this.toComplex().expt(t);
        if (t.isExact() && t.isInteger() && !t.isNegative()) {
            const e = t.toFixnum();
            if ("bigint" == typeof e) return this.toBigExact().expt(t);
            const n = Math.pow(this.num, e),
                i = Math.pow(this.den, e);
            return a(n) && a(i) ? new d(n, i) : this.toBigExact().expt(t)
        }
        return this.toInexact().expt(t)
    }
    exp() {
        return new f(Math.exp(this.num / this.den))
    }
    tan() {
        return new f(Math.tan(this.num / this.den))
    }
    cos() {
        return new f(Math.cos(this.num / this.den))
    }
    sin() {
        return new f(Math.sin(this.num / this.den))
    }
    atan() {
        return new f(Math.atan(this.num / this.den))
    }
    acos() {
        return new f(Math.acos(this.num / this.den))
    }
    asin() {
        return new f(Math.asin(this.num / this.den))
    }
}
class g {
    constructor(t, e = 1n) {
        if ("bigint" != typeof t || "bigint" != typeof e) throw new TypeError("Exact value numerator and denominator types must match"); {
            e < 0 && (t *= -1n, e *= -1n);
            const n = this.gcd(t, e);
            this.num = t / n, this.den = e / n
        }
        Object.freeze(this)
    }
    gcd(t, e) {
        let n;
        for (; 0n !== e;) n = t, t = e, e = n % e;
        return t < 0n ? -1n * t : t
    }
    isInexact() {
        return !1
    }
    isExact() {
        return !0
    }
    toInexact() {
        const t = Number(this.num) / Number(this.den);
        return new f(t)
    }
    toExact() {
        return this
    }
    toSmallExact() {
        return new d(Number(this.num), Number(this.den))
    }
    toComplex() {
        return new x(this, w)
    }
    toFixnum() {
        return Number(this.num / this.den)
    }
    isInteger() {
        return 1n === this.den
    }
    isRational() {
        return !0
    }
    isReal() {
        return !0
    }
    isComplex() {
        return !0
    }
    isZero() {
        return 0n === this.num
    }
    isNegativeZero() {
        return !1
    }
    isPositive() {
        return this.num > 0n
    }
    isNegative() {
        return this.num < 0n
    }
    isEven() {
        return 1n === this.den && this.num % 2n === 0n
    }
    isFinite() {
        return !0
    }
    isNaN() {
        return !1
    }
    toString() {
        const t = this.num.toString(),
            e = this.den.toString();
        return 1n === this.den ? t : `${t}/${e}`
    }
    toSignedString() {
        return this.isNegative() ? this.toString() : "+" + this.toString()
    } [Symbol.toPrimitive](t) {
        return "string" === t ? this.toString() : "bigint" === t && 1n === this.den ? this.num : 1n === this.den ? Number(this.num) : Number(this.num) / Number(this.den)
    }
    greaterThan(t) {
        return t instanceof f ? !t.isNaN() && (t.isFinite() ? this.greaterThan(t.toExact()) : !t.isPositive()) : t instanceof d ? this.greaterThan(t.toBigExact()) : t instanceof x ? this.toComplex().greaterThan(t) : this.num * t.den > t.num * this.den
    }
    greaterThanOrEqual(t) {
        return t instanceof f ? !t.isNaN() && (t.isFinite() ? this.greaterThanOrEqual(t.toExact()) : !t.isPositive()) : t instanceof d ? this.greaterThanOrEqual(t.toBigExact()) : t instanceof x ? this.toComplex().greaterThanOrEqual(t) : this.num * t.den >= t.num * this.den
    }
    lessThan(t) {
        return t instanceof f ? !t.isNaN() && (t.isFinite() ? this.lessThan(t.toExact()) : t.isPositive()) : t instanceof d ? this.lessThan(t.toBigExact()) : t instanceof x ? this.toComplex().lessThan(t) : this.num * t.den < t.num * this.den
    }
    lessThanOrEqual(t) {
        return t instanceof f ? !t.isNaN() && (t.isFinite() ? this.lessThanOrEqual(t.toExact()) : t.isPositive()) : t instanceof d ? this.lessThanOrEqual(t.toBigExact()) : t instanceof x ? this.toComplex().lessThanOrEqual(t) : this.num * t.den <= t.num * this.den
    }
    equals(t) {
        return t instanceof f ? !!t.isFinite() && this.equals(t.toExact()) : t instanceof d ? this.equals(t.toBigExact()) : t instanceof x ? this.toComplex().equals(t) : this.num * t.den == t.num * this.den
    }
    add(t) {
        if (t instanceof f) return this.toInexact().add(t);
        if (t instanceof d) return this.add(t.toBigExact());
        if (t instanceof x) return this.toComplex().add(t); {
            const e = this.num * t.den + t.num * this.den,
                n = this.den * t.den;
            return a(e) && a(n) ? new d(Number(e), Number(n)) : new g(e, n)
        }
    }
    subtract(t) {
        if (t instanceof f) return this.toInexact().subtract(t);
        if (t instanceof d) return this.subtract(t.toBigExact());
        if (t instanceof x) return this.toComplex().subtract(t); {
            const e = this.num * t.den - t.num * this.den,
                n = this.den * t.den;
            return a(e) && a(n) ? new d(Number(e), Number(n)) : new g(e, n)
        }
    }
    multiply(t) {
        if (t.isExact() && t.isZero() || this.isZero()) return w;
        if (t instanceof f) return this.toInexact().multiply(t);
        if (t instanceof d) return this.multiply(t.toBigExact());
        if (t instanceof x) return this.toComplex().multiply(t); {
            const e = this.num * t.num,
                n = this.den * t.den;
            return a(e) && a(n) ? new d(Number(e), Number(n)) : new g(e, n)
        }
    }
    divide(t) {
        if (this.isZero()) return w;
        if (t instanceof f) return this.toInexact().divide(t);
        if (t instanceof d) return this.divide(t.toBigExact());
        if (t instanceof x) return this.toComplex().divide(t); {
            const e = this.num * t.den,
                n = this.den * t.num;
            return a(e) && a(n) ? new d(Number(e), Number(n)) : new g(e, n)
        }
    }
    numerator() {
        return a(this.num) ? new d(Number(this.num)) : new g(this.num)
    }
    denominator() {
        return a(this.den) ? new d(Number(this.den)) : new g(this.den)
    }
    integerSqrt() {
        return this.sqrt().floor()
    }
    sqrt() {
        return this.toSmallExact().sqrt()
    }
    abs() {
        return a(this.num) && a(this.den) ? new d(Number(this.num), Number(this.den)).abs() : this.isNegative() ? new g(-1n * this.num, this.den) : this
    }
    floor() {
        return 1n === this.den ? this : new g(this.num / this.den)
    }
    ceiling() {
        return 1n === this.den ? this : new g(this.num / this.den + 1n)
    }
    round() {
        if (1n === this.den) return this; {
            const t = this.floor(),
                e = this.subtract(t).abs(),
                n = this.ceiling();
            return n.subtract(this).abs().greaterThanOrEqual(e) ? n : t
        }
    }
    conjugate() {
        return this
    }
    magnitude() {
        return this
    }
    realPart() {
        return this
    }
    imaginaryPart() {
        return w
    }
    angle() {
        return new g(0n)
    }
    log() {
        return this.isNegative() ? this.toComplex().log() : this.toInexact().log()
    }
    expt(t) {
        if (t instanceof x) return this.toComplex().expt(t);
        if (t.isExact() && t.isInteger() && !t.isNegative()) {
            const e = BigInt(t.toFixnum()),
                n = o(this.num, e),
                i = o(this.den, e);
            return a(n) && a(i) ? new d(Number(n), Number(i)) : new g(n, i)
        }
        return this.toInexact().expt(t)
    }
    exp() {
        return this.toSmallExact().exp()
    }
    tan() {
        return this.toSmallExact().tan()
    }
    cos() {
        return this.toSmallExact().cos()
    }
    sin() {
        return this.toSmallExact().sin()
    }
    atan() {
        return this.toSmallExact().atan()
    }
    acos() {
        return this.toSmallExact().acos()
    }
    asin() {
        return this.toSmallExact().asin()
    }
}
class x {
    constructor(t, e) {
        this.real = t, this.imag = void 0 === e ? y : e, Object.freeze(this)
    }
    isExact() {
        return this.real.isExact() && this.imag.isExact()
    }
    isInexact() {
        return !this.isExact()
    }
    toInexact() {
        return this.isInexact() ? this : this.isReal() ? this.real.toInexact() : new x(this.real.toInexact(), this.imag.toInexact())
    }
    toExact() {
        return this.isExact() ? this : this.isReal() ? this.real.toExact() : new x(this.real.toExact(), this.imag.toExact())
    }
    toReal() {
        if (!this.isReal()) throw new TypeError("Complex number cannot be made real.");
        return this.real
    }
    toComplex() {
        return this
    }
    toFixnum() {
        if (!this.isReal()) throw new TypeError("Not defined for complex numbers.");
        return this.real.toFixnum()
    }
    isInteger() {
        return this.isRational() && this.real.isInteger()
    }
    isRational() {
        return this.isReal() && this.isFinite()
    }
    isReal() {
        return this.imag.isZero() && this.imag.isExact()
    }
    isComplex() {
        return !0
    }
    isZero() {
        return this.real.isZero() && this.imag.isZero()
    }
    isNegativeZero() {
        return this.isReal() && this.real.isNegativeZero()
    }
    isPositive() {
        if (!this.isReal()) throw new TypeError("Not defined for complex numbers.");
        return this.real.isPositive()
    }
    isNegative() {
        if (!this.isReal()) throw new TypeError("Not defined for complex numbers.");
        return this.real.isNegative()
    }
    isEven() {
        if (!this.isInteger()) throw new TypeError("Only defined for Integers.");
        return this.real.isEven()
    }
    isFinite() {
        return this.real.isFinite() && this.imag.isFinite()
    }
    isNaN() {
        return this.real.isNaN() || this.imag.isNaN()
    }
    toString() {
        return this.isReal() ? this.real.toString() : this.real.toString() + this.imag.toSignedString() + "i"
    }
    toSignedString() {
        return this.real.toSignedString() + this.imag.toSignedString() + "i"
    } [Symbol.toPrimitive](t) {
        if ("string" === t) return this.toString();
        if (!this.isReal()) return Number.NaN;
        const e = this.real[Symbol.toPrimitive](t);
        return "number" === t && "bigint" == typeof e || "default" === t && "bigint" == typeof e ? Number(e) : e
    }
    greaterThan(t) {
        if (!this.isReal() || !t.isReal()) throw new Error("Greater than not defined for complex numbers.");
        return this.real.greaterThan(t)
    }
    greaterThanOrEqual(t) {
        if (!this.isReal() || !t.isReal()) throw new Error("Greater than or equal not defined for complex numbers.");
        return this.real.greaterThanOrEqual(t)
    }
    lessThan(t) {
        if (!this.isReal() || !t.isReal()) throw new Error("Less than not defined for complex numbers.");
        return this.real.lessThan(t)
    }
    lessThanOrEqual(t) {
        if (!this.isReal() || !t.isReal()) throw new Error("Less than or equal not defined for complex numbers.");
        return this.real.lessThanOrEqual(t)
    }
    equals(t) {
        return t = t.toComplex(), this.real.equals(t.real) && this.imag.equals(t.imag)
    }
    add(t) {
        let e = this.realPart().add(t.realPart());
        if (this.isReal() && t.isReal()) return e;
        let n = this.imaginaryPart().add(t.imaginaryPart());
        return [e, n] = c(e, n), new x(e, n)
    }
    subtract(t) {
        let e = this.realPart().subtract(t.realPart());
        if (this.isReal() && t.isReal()) return e;
        let n = this.imaginaryPart().subtract(t.imaginaryPart());
        return [e, n] = c(e, n), new x(e, n)
    }
    multiply(t) {
        const e = this.realPart(),
            n = this.imaginaryPart(),
            i = t.realPart(),
            r = t.imaginaryPart();
        let s = e.multiply(i).subtract(n.multiply(r));
        const a = e.multiply(r).add(n.multiply(i));
        return s = a.isExact() ? s : s.toInexact(), a.isExact() && a.isZero() ? s : new x(s, a)
    }
    divide(t) {
        if (t.isReal()) {
            const e = this.realPart().divide(t.realPart()),
                n = this.imaginaryPart().divide(t.realPart());
            return new x(e, n)
        }
        let e, n, i, r, s, a, u;
        if (this.isInexact() || t.isInexact()) return e = this.realPart(), n = this.imaginaryPart(), i = t.realPart(), r = t.imaginaryPart(), r.abs().lessThanOrEqual(i.abs()) ? (s = r.divide(i), a = e.add(n.multiply(s)).divide(i.add(r.multiply(s))), u = n.subtract(e.multiply(s)).divide(i.add(r.multiply(s)))) : (s = i.divide(r), a = e.multiply(s).add(n).divide(i.multiply(s).add(r)), u = n.multiply(s).subtract(e).divide(i.multiply(s).add(r))), new x(a, u); {
            const e = t.conjugate(),
                n = this.multiply(e),
                i = t.multiply(e).realPart(),
                r = n.realPart().divide(i).realPart(),
                s = n.imaginaryPart().divide(i).realPart();
            return new x(r, s)
        }
    }
    numerator() {
        if (!this.isReal()) throw new Error("Numerator not defined for complex numbers.");
        return this.real.numerator()
    }
    denominator() {
        if (!this.isReal()) throw new Error("Denominator not defined for complex numbers.");
        return this.real.denominator()
    }
    integerSqrt() {
        if (this.isInteger()) return this.real.integerSqrt();
        throw new Error("IntegerSqrt only defined for integers.")
    }
    sqrt() {
        if (this.isReal() && !this.isNegative()) return this.real.sqrt();
        const t = this.magnitude().realPart().add(this.real),
            e = t.divide(v).sqrt().realPart(),
            n = this.imag.divide(t.multiply(v).sqrt()).realPart();
        return new x(e, n)
    }
    abs() {
        if (!this.isReal()) throw new Error("abs is not defined for complex numbers.");
        return this.real.abs()
    }
    floor() {
        if (!this.isReal()) throw new Error("floor is not defined for complex numbers.");
        return this.real.floor()
    }
    ceiling() {
        if (!this.isReal()) throw new Error("ceiling is not defined for complex numbers.");
        return this.real.ceiling()
    }
    round() {
        if (!this.isReal()) throw new Error("round is not defined for complex numbers.");
        return this.real.round()
    }
    conjugate() {
        return new x(this.real, y.subtract(this.imag))
    }
    magnitude() {
        const t = this.real.multiply(this.real),
            e = this.imag.multiply(this.imag);
        return t.add(e).sqrt()
    }
    realPart() {
        return this.real
    }
    imaginaryPart() {
        return this.imag
    }
    log() {
        if (this.isReal() && this.isPositive()) return this.real.log();
        const t = this.magnitude().realPart().log(),
            e = this.angle();
        return t.add(e.multiply(G))
    }
    expt(t) {
        if (t.isExact() && t.isInteger() && t.greaterThanOrEqual(y)) {
            let e = this,
                n = BigInt(t.toFixnum()),
                i = I;
            for (; 0n !== n;) n % 2n === 0n ? (e = e.multiply(e), n /= 2n) : (i = i.multiply(e), n -= 1n);
            return i
        }
        return t.multiply(this.log()).exp()
    }
    exp() {
        if (this.isReal()) return this.real.exp();
        const t = this.real.exp(),
            e = this.imag.cos(),
            n = this.imag.sin();
        return t.multiply(e.add(n.multiply(G)))
    }
    angle() {
        if (this.isReal()) return this.real.angle();
        if (this.real.isZero()) {
            const t = F.divide(v);
            return this.imag.isPositive() ? t : t.multiply(T)
        }
        const t = this.imaginaryPart().abs().divide(this.realPart().abs()).atan();
        return this.real.isPositive() ? this.imag.isPositive() ? t : t.multiply(T) : this.imag.isPositive() ? F.subtract(t) : t.subtract(F)
    }
    tan() {
        return this.isReal() ? this.real.tan() : this.sin().divide(this.cos())
    }
    cos() {
        if (this.isReal()) return this.real.cos();
        const t = this.multiply(G),
            e = t.multiply(T);
        return t.exp().add(e.exp()).divide(v)
    }
    sin() {
        if (this.isReal()) return this.real.sin();
        const t = this.multiply(G),
            e = t.multiply(T),
            n = new x(y, v);
        return t.exp().subtract(e.exp()).divide(n)
    }
    atan() {
        if (this.isZero()) return y;
        if (this.isReal()) return this.real.atan();
        if (this.equals(G) || this.equals(W)) return Z;
        let t;
        return t = y.subtract(this), t = G.add(t), t = G.add(this).divide(t), t = t.log(), t = q.multiply(t), t = G.multiply(t), t
    }
    acos() {
        if (this.isReal() && this.greaterThanOrEqual(T) && this.lessThanOrEqual(I)) return this.real.acos();
        const t = F.divide(v),
            e = this.multiply(G),
            n = I.subtract(this.multiply(this)).sqrt(),
            i = e.add(n).log().multiply(G);
        return t.add(i)
    }
    asin() {
        if (this.isReal() && this.greaterThanOrEqual(T) && this.lessThanOrEqual(I)) return this.real.asin();
        const t = I.subtract(this.multiply(this)).sqrt();
        return v.multiply(this.divide(I.add(t)).atan())
    }
}
const w = new d(0, 1),
    E = new d(1, 2),
    p = new d(1, 1),
    b = new d(2, 1),
    N = new d(-1, 1),
    y = w,
    I = p,
    q = E,
    v = b,
    T = N,
    P = new f(0),
    M = new f(-0),
    R = new f(.5),
    S = new f(1),
    O = new f(2),
    C = new f(-1),
    F = new f(Math.PI),
    B = new f(1 / 0),
    Z = new f(-1 / 0),
    _ = new f(NaN),
    $ = new x(y, I),
    A = new x(y, T),
    j = new x(P, S),
    X = new x(P, C),
    G = $,
    W = A,
    D = w,
    Y = p,
    L = b,
    k = N,
    K = F,
    V = new f(Math.E),
    z = _,
    Q = Z,
    J = B,
    H = M,
    U = $,
    tt = A;

function et(t) {
    return function(...e) {
        for (let t = 0; t < e.length; t++) {
            const n = e[t];
            n instanceof f && (e[t] = n.num)
        }
        const n = t(...e);
        return n instanceof f ? n.num : n
    }
}

function nt(t) {
    return t instanceof f ? t.num : t
}

function it(t, e) {
    return "number" == typeof t && "object" == typeof e && (t = new f(t)), "number" == typeof e && "object" == typeof t && (e = new f(e)), [t, e]
}

function rt(t) {
    const e = "number" == typeof t,
        i = n(t);
    return e || i
}
const st = rt;

function at(t) {
    const e = "number" == typeof t,
        i = n(t) && t.isReal();
    return e || i
}

function ut(t) {
    const e = "number" == typeof t && Number.isFinite(t),
        i = n(t) && t.isRational();
    return e || i
}

function ot(t) {
    const e = "number" == typeof t && Number.isInteger(t),
        i = n(t) && t.isInteger();
    return e || i
}

function ht(t) {
    return n(t) && t.isInteger() && t.isExact()
}

function lt(t) {
    return n(t) && t.isInteger() && t.isExact() && !t.isNegative()
}

function ct(t) {
    return n(t) && t.isInteger() && t.isExact() && t.isPositive()
}

function mt(t) {
    return "number" == typeof t || n(t) && t.isReal() && t.isInexact()
}

function ft(t) {
    return "number" == typeof t
}

function dt(t) {
    const e = "number" == typeof t && 0 === t,
        i = n(t) && t.isZero();
    return e || i
}

function gt(t) {
    const e = "number" == typeof t && t > 0,
        i = n(t) && t.isPositive();
    return e || i
}

function xt(t) {
    const e = "number" == typeof t && t < 0,
        i = n(t) && t.isNegative();
    return e || i
}

function wt(t) {
    if (!ot(t)) throw new TypeError("'isEven' only defined for integers");
    const e = "number" == typeof t && t % 2 == 0,
        i = n(t) && t.isEven();
    return e || i
}

function Et(t) {
    if (!ot(t)) throw new TypeError("'isOdd' only defined for integers");
    return !wt(t)
}

function pt(t) {
    return n(t) && t.isExact()
}

function bt(t) {
    return "number" == typeof t || n(t) && t.isInexact()
}

function Nt(t) {
    return "number" == typeof t || n(t)
}
const yt = Nt;

function It(t) {
    return n(t) ? t.isFinite() : Number.isFinite(t)
}

function qt(t) {
    return n(t) ? t.isNaN() : Number.isNaN(t)
}

function vt(t) {
    return n(t) ? t.isNegativeZero() : Object.is(t, -0)
}

function Tt(t, e) {
    return function(n) {
        let i = n[0];
        for (let r = 1; r < n.length; r++) {
            const [s, a] = it(i, n[r]);
            i = "number" == typeof s ? t(s, a) : e(s, a)
        }
        return i
    }
}
const Pt = et(((...t) => 0 === t.length ? w : 1 === t.length ? t[0] : Mt(t))),
    Mt = Tt(((t, e) => t + e), ((t, e) => t.add(e))),
    Rt = et(((...t) => 1 === t.length ? St([w, t[0]]) : St(t))),
    St = Tt(((t, e) => t - e), ((t, e) => t.subtract(e))),
    Ot = et(((...t) => 0 === t.length ? p : 1 === t.length ? t[0] : Ct(t))),
    Ct = Tt(((t, e) => t * e), ((t, e) => t.multiply(e))),
    Ft = et(((...t) => {
        if (1 === t.length) {
            const e = t[0];
            return Bt("number" == typeof e ? [1, e] : [p, e])
        }
        return Bt(t)
    })),
    Bt = Tt(((t, e) => t / e), ((t, e) => t.divide(e)));

function Zt(t, e) {
    let i;
    return [t, e] = it(t, e), i = n(t) ? t.divide(e).floor() : Math.floor(t / e), nt(i)
}

function _t(t, e) {
    let i;
    if ([t, e] = it(t, e), n(t)) {
        const n = t.divide(e).floor();
        i = t.subtract(e.multiply(n))
    } else i = t % e;
    return nt(i)
}

function $t(t, e) {
    [t, e] = it(t, e);
    let n = _t(t, e);
    return xt(e) ? gt(n) && (n = Pt(n, e)) : xt(n) && (n = Pt(n, e)), nt(n)
}

function At(t) {
    return n(t) ? nt(t.multiply(t)) : nt(t * t)
}

function jt(t) {
    return n(t = nt(t)) ? nt(t.sqrt()) : t < 0 ? new x(P, new f(Math.sqrt(-t))) : Math.sqrt(t)
}

function Xt(t) {
    return n(t = nt(t)) ? nt(t.integerSqrt()) : t < 0 ? new x(P, new f(Math.floor(Math.sqrt(-t)))) : Math.floor(Math.sqrt(t))
}

function Gt(t, e) {
    if ([t, e] = it(nt(t), nt(e)), n(t)) {
        if (e.isExact() && e.isZero()) return I;
        if (e.isInexact() && e.isZero()) return 1;
        if (e.isExact() && e.equals(E)) return jt(t);
        if (e.isNaN()) return e.isReal() ? NaN : new x(_, _);
        if (t.isNegativeZero() && e.isNegative()) return e.isEven() ? 1 / 0 : -1 / 0;
        if (!t.isFinite() && !t.isNaN() && t.isNegative() && e.isInteger() && e.isNegative()) return e.isEven() ? 0 : -0;
        if (!t.isFinite() && !t.isNaN() && t.isPositive() && e.isInteger() && e.isPositive()) return e.isEven() ? 1 / 0 : -1 / 0;
        if (t.isExact() && t.isZero() && e.equals(N)) throw new TypeError("expt not defined for 0 and -1");
        return nt(t.expt(e))
    }
    if (0 === e) return 1;
    if (Number.isNaN(e)) return NaN;
    if (Object.is(t, -0) && e < 0) return e % 2 == 0 ? 1 / 0 : -1 / 0;
    if (!Number.isFinite(t) && !Number.isNaN(t) && Number.isInteger(e)) {
        if (t < 0 && e < 0) return e % 2 == 0 ? 0 : -0;
        if (t > 0 && e > 0) return e % 2 == 0 ? 1 / 0 : -1 / 0
    }
    return Math.pow(t, e)
}

function Wt(t) {
    return n(t = nt(t)) ? t.equals(w) ? p : nt(t.exp()) : Math.exp(t)
}

function Dt(t, e) {
    let i;
    return n(t) ? t.isExact() && t.equals(p) ? w : (i = t.log(), e && (i = Ft(i, Dt(e))), nt(i)) : 1 === t ? 0 : t < 0 ? Dt(new f(t), e) : (i = Math.log(t), e ? Ft(i, Dt(e)) : i)
}

function Yt(t) {
    return nt(_e(t).numerator())
}

function Lt(t) {
    return nt(_e(t).denominator())
}
const kt = et(((...t) => 0 === t.length ? w : 1 === t.length ? t[0] : Kt(t))),
    Kt = Tt(((t, e) => {
        let n;
        for (; 0 !== e;) n = t, t = e, e = n % e;
        return t
    }), ((t, e) => {
        const n = t.isExact() && e.isExact(),
            i = t.numerator(),
            r = e.numerator();
        let s;
        if ("bigint" == typeof i.num || "bigint" == typeof r.num) {
            let t, e = BigInt(i.num),
                n = BigInt(r.num);
            for (; 0n !== n;) t = e, e = n, n = t % n;
            s = new g(e)
        } else {
            let t, e = i.num,
                a = r.num;
            for (; 0 !== a;) t = e, e = a, a = t % a;
            s = n ? new d(e) : new f(e)
        }
        const a = t.denominator(),
            u = e.denominator();
        if (a.equals(I) && u.equals(I)) return s;
        const o = Vt(a, u);
        return Ft(s, o)
    }));

function Vt(...t) {
    if (0 === t.length) return p;
    if (1 === t.length) return zt(t[0]);
    for (let e = 0; e < t.length; e++)
        if (dt(t[e])) return pt(t[e]) ? w : 0;
    return Vt(function(t, e) {
        const n = Ot(t, e),
            i = kt(t, e);
        return zt(Ft(n, i))
    }(t[0], t[1]), ...t.slice(2))
}

function zt(t) {
    return n(t) ? nt(t.abs()) : Math.abs(t)
}

function Qt(t) {
    return n(t) ? nt(t.floor()) : Math.floor(t)
}

function Jt(t) {
    return n(t) ? nt(t.ceiling()) : Math.ceil(t)
}

function Ht(t) {
    return n(t) ? nt(t.round()) : Math.round(t)
}
const Ut = function(t, e) {
    return function(...i) {
        if (i.length < 2) throw new Error("Must be called with at least two arguments.");
        for (let r = 0; r < i.length - 1; r++) {
            let s = i[r],
                a = i[r + 1];
            if ([s, a] = it(s, a), "number" == typeof s && !t(s, a)) return !1;
            if (n(s) && !e(s, a)) return !1
        }
        return !0
    }
};

function te(...t) {
    return 1 === t.length || ee(...t)
}
const ee = Ut(((t, e) => t === e), ((t, e) => t.equals(e)));

function ne(t, e) {
    return te(t, e)
}

function ie(t, e, n) {
    return le(zt(Rt(t, e)), zt(n))
}

function re(...t) {
    return 1 === t.length || se(...t)
}
const se = Ut(((t, e) => t > e), ((t, e) => t.greaterThan(e)));

function ae(...t) {
    return 1 === t.length || ue(...t)
}
const ue = Ut(((t, e) => t >= e), ((t, e) => t.greaterThanOrEqual(e)));

function oe(...t) {
    return 1 === t.length || he(...t)
}
const he = Ut(((t, e) => t < e), ((t, e) => t.lessThan(e)));

function le(...t) {
    return 1 === t.length || ce(...t)
}
const ce = Ut(((t, e) => t <= e), ((t, e) => t.lessThanOrEqual(e)));

function me(t) {
    return n(t) ? t.toExact() : _e(t).toExact()
}
const fe = me;

function de(t) {
    return n(t) ? nt(t.toInexact()) : t
}
const ge = de;

function xe(t) {
    if ("number" == typeof t) {
        if (Number.isInteger(t)) return t.toString() + ".0";
        if (Number.isNaN(t)) return "+nan.0";
        if (t === 1 / 0) return "+inf.0";
        if (t === -1 / 0) return "-inf.0"
    }
    return t.toString()
}

function we(t, e) {
    if (t = _e(t), e = _e(e), !i(t) || !i(e)) throw new TypeError("makeRectangular arguments must be real numbers");
    return e.equals(w) && e.isExact() ? nt(t) : bt(t) && pt(e) ? (e = _e(e = de(e)), new x(t, e)) : bt(e) && pt(t) ? (t = _e(t = de(t)), new x(t, e)) : new x(t, e)
}

function Ee(t, e) {
    return Pt(Ot(t, Te(e)), Ot(t, ve(e), $))
}

function pe(t) {
    return st(t) ? be(t) ? B : nt(t.magnitude()) : zt(t)
}

function be(t) {
    const e = t.realPart(),
        n = t.imaginaryPart();
    return e.equals(B) || e.equals(Z) || n.equals(B) || n.equals(Z)
}

function Ne(t) {
    if (dt(t)) throw new Error("Divide by zero");
    if (at(t)) return gt(t) ? w : Math.PI;
    if (be(t)) {
        const e = t.realPart(),
            n = t.imaginaryPart();
        return e.equals(B) && n.equals(B) ? Math.PI / 4 : e.equals(B) && n.equals(Z) ? Math.PI / 4 * -1 : e.equals(Z) && n.equals(Z) ? Math.PI / 4 * -3 : e.equals(Z) && n.equals(B) ? Math.PI / 4 * 3 : e.equals(B) ? nt(P.multiply(n)) : e.equals(Z) ? n.isPositive() ? Math.PI : -Math.PI : n.equals(B) ? Math.PI / 2 : -Math.PI / 2
    }
    return nt(t.angle())
}

function ye(t) {
    return at(t) ? nt(t) : nt(t.realPart())
}

function Ie(t) {
    return at(t) ? w : nt(t.imaginaryPart())
}

function qe(t) {
    return at(t) ? nt(t) : t.conjugate()
}

function ve(t) {
    return pt(t) && dt(t) ? w : n(t) ? nt(t.sin()) : Math.sin(t)
}

function Te(t) {
    return pt(t) && dt(t) ? p : n(t) ? nt(t.cos()) : Math.cos(t)
}

function Pe(t) {
    return pt(t) && dt(t) ? w : n(t) ? nt(t.tan()) : Math.tan(t)
}

function Me(t) {
    return pt(t) && dt(t) ? w : n(t) ? nt(t.asin()) : -1 <= t && t <= 1 ? Math.asin(t) : new f(t).asin()
}

function Re(t) {
    return pt(t) && function(t) {
        return n(t) ? t.equals(p) : 1 === Number(t)
    }(t) ? w : n(t) ? nt(t.acos()) : -1 <= t && t <= 1 ? Math.acos(t) : new f(t).acos()
}
const Se = Oe;

function Oe(t, e) {
    if (void 0 === e && pt(t) && dt(t)) return w;
    if (void 0 === e) return Ce(t);
    const n = Ft(t, e);
    if (qt(n)) {
        if (te(t, B) && te(e, B)) return Math.PI / 4;
        if (te(t, B) && te(e, Z)) return Math.PI / 4 * 3;
        if (te(t, Z) && te(e, Z)) return Math.PI / 4 * -3;
        if (te(t, Z) && te(e, B)) return Math.PI / 4 * -1
    }
    if (gt(e)) return Ce(n);
    if (xt(e) && (gt(t) || dt(t))) return Pt(Ce(n), F);
    if (xt(e) && xt(t)) return Rt(Ce(n), F);
    if (dt(e) && gt(t)) return Ft(F, b);
    if (dt(e) && xt(t)) return Rt(w, Ft(F, b));
    throw new Error("atan not defined for coordinates (0, 0)")
}

function Ce(t) {
    return n(t) ? nt(t.atan()) : t === 1 / 0 ? 1.5707963267948966 : t === -1 / 0 ? -1.5707963267948966 : Math.atan(t)
}

function Fe(t) {
    return Ft(Rt(Wt(t), Wt(Ot(t, N))), b)
}

function Be(t) {
    return dt(t) ? 1 : Ft(Pt(Wt(t), Wt(Ot(t, N))), b)
}

function Ze(t) {
    return Ft(Rt(Wt(Ot(b, t)), p), Pt(Wt(Ot(b, t)), p))
}

function _e(t) {
    return "number" == typeof t ? new f(t) : t
}
const $e = new RegExp("^([+-]?\\d+)/(\\d+)$"),
    Ae = new RegExp("^([+-]?[\\d\\w/\\.]*)([+-])([\\d\\w/\\.]*)i$"),
    je = new RegExp("^[+-]?\\d+$"),
    Xe = new RegExp("^([+-]?\\d*)\\.(\\d*)$"),
    Ge = new RegExp("^([+-]?\\d*\\.?\\d*)[Ee](\\+?\\d+)$");

function We(t) {
    if ((t = t.toString()).match($e)) return De(t);
    const e = t.match(Ae);
    if (e) {
        const t = e[1] || "0",
            n = e[2] + (e[3] || "1");
        if (function(t) {
                const e = null !== t[1].match(je) || null !== t[1].match($e),
                    n = null !== t[3].match(je) || null !== t[3].match($e);
                return e && n
            }(e)) return we(De(t), De(n));
        const i = new f(Number(t)),
            r = new f(Number(n));
        return new x(i, r)
    }
    return "+nan.0" === t || "-nan.0" === t || "+nan.f" === t || "-nan.f" === t ? NaN : "+inf.0" === t || "+inf.f" === t ? 1 / 0 : "-inf.0" === t || "-inf.f" === t ? -1 / 0 : "-0.0" === t ? -0 : t.match(Xe) || t.match(Ge) ? Number(t) : !!t.match(je) && Ye(t)
}

function De(t) {
    return t.match(je) ? Ye(t) : function(t) {
        const e = t.match($e);
        if (e) {
            let t = Ye(e[1]).num,
                n = Ye(e[2]).num;
            return "bigint" == typeof t || "bigint" == typeof n ? (t = BigInt(t), n = BigInt(n), new g(t, n)) : new d(t, n)
        }
        throw new Error(`Fraction not found in ${t}`)
    }(t)
}

function Ye(t) {
    const e = Number(t);
    return Number.isSafeInteger(e) ? new d(e) : new g(BigInt(t))
}

function Le(t) {
    return new f(t)
}

function ke(t, e) {
    if (void 0 !== e) {
        if (typeof t != typeof e) throw new TypeError("numerator and denominator must be same type.");
        if (!("number" != typeof t || Number.isInteger(t) && Number.isInteger(e))) throw new TypeError("numerator and denominator must be integers");
        return a(t) && a(e) ? new d(Number(t), Number(e)) : new g(BigInt(t), BigInt(e))
    }
    return a(t) ? new d(Number(t)) : new g(BigInt(t))
}

function Ke(t, e) {
    if (!Number.isInteger(t) || !Number.isInteger(e)) throw new TypeError("numerator and denominator must be integers.");
    return new d(t, e)
}

function Ve(t, e) {
    return we(t, e)
}

function ze(...t) {
    for (const e of t)
        if (!ht(e)) throw new TypeError("bitwise operators only defined for exact integers.");
    let e = 0n;
    for (let n of t) n instanceof x && (n = n.toReal()), e |= BigInt(n.num);
    return a(e) ? new d(Number(e)) : new g(e)
}

function Qe(...t) {
    for (const e of t)
        if (!ht(e)) throw new TypeError("bitwise operators only defined for exact integers.");
    let e = 0n;
    for (let n of t) n instanceof x && (n = n.toReal()), e ^= BigInt(n.num);
    return a(e) ? new d(Number(e)) : new g(e)
}

function Je(...t) {
    for (const e of t)
        if (!ht(e)) throw new TypeError("bitwise operators only defined for exact integers.");
    let e = -1n;
    for (let n of t) n instanceof x && (n = n.toReal()), e &= BigInt(n.num);
    return a(e) ? new d(Number(e)) : new g(e)
}

function He(t) {
    if (!ht(t)) throw new TypeError("bitwise operators only defined for exact integers.");
    t instanceof x && (t = t.toReal());
    const e = ~BigInt(t.num);
    return a(e) ? new d(Number(e)) : new g(e)
}

function Ue(t, e) {
    if (!ht(t) || !ht(e)) throw new TypeError("bitwise operators only defined for integers.");
    let n;
    t instanceof x && (t = t.toReal()), e instanceof x && (e = e.toReal());
    const i = BigInt(t.num),
        r = BigInt(e.num);
    return n = r < 0n ? i >> -r : i << r, a(n) ? new d(Number(n)) : new g(n)
}
var tn = e.h1,
    en = e.sc,
    nn = e.TQ,
    rn = e.$6,
    sn = e.IG,
    an = e.qL,
    un = e.WV,
    on = e.Dr,
    hn = e.V3,
    ln = e.uB,
    cn = e.I,
    mn = e.Wc,
    fn = e.bw,
    dn = e.qV,
    gn = e.h9,
    xn = e.ZQ,
    wn = e.gE,
    En = e.jy,
    pn = e.P,
    bn = e.D,
    Nn = e.ZK,
    yn = e.i1,
    In = e.$D,
    qn = e.K_,
    vn = e.k8,
    Tn = e.ry,
    Pn = e.PI,
    Mn = e.Mr,
    Rn = e.pT,
    Sn = e.xE,
    On = e.Wn,
    Cn = e.Kh,
    Fn = e.IH,
    Bn = e.EU,
    Zn = e.J4,
    _n = e.r3,
    $n = e.ZR,
    An = e.z4,
    jn = e.fv,
    Xn = e.C,
    Gn = e.yc,
    Wn = e.Zy,
    Dn = e.SD,
    Yn = e.YF,
    Ln = e.VE,
    kn = e.eY,
    Kn = e.Kx,
    Vn = e.mC,
    zn = e.f9,
    Qn = e.gQ,
    Jn = e.cs,
    Hn = e.e,
    Un = e.fS,
    ti = e.RN,
    ei = e.Wj,
    ni = e.Qq,
    ii = e.bR,
    ri = e.GW,
    si = e.mL,
    ai = e.th,
    ui = e.tS,
    oi = e.Vl,
    hi = e.i,
    li = e.wp,
    ci = e.c2,
    mi = e.gY,
    fi = e.qt,
    di = e.vx,
    gi = e.EY,
    xi = e.Mc,
    wi = e.Gf,
    Ei = e.D3,
    pi = e.Cl,
    bi = e.NR,
    Ni = e.iR,
    yi = e.YK,
    Ii = e.xV,
    qi = e.Mo,
    vi = e.Dp,
    Ti = e.yF,
    Pi = e.U,
    Mi = e.MM,
    Ri = e.ZI,
    Si = e.i2,
    Oi = e.nM,
    Ci = e.GR,
    Fi = e.hj,
    Bi = e.rA,
    Zi = e.xP,
    _i = e.Ks,
    $i = e.DL,
    Ai = e.FO,
    ji = e.YX,
    Xi = e.Bq,
    Gi = e.eq,
    Wi = e.Fr,
    Di = e.uq,
    Yi = e.Qj,
    Li = e.$2,
    ki = e.cM,
    Ki = e.Wm,
    Vi = e.Tg,
    zi = e.Oq,
    Qi = e.ep,
    Ji = e.Wi,
    Hi = e.gP,
    Ui = e.Yp,
    tr = e.Ts,
    er = e.$W,
    nr = e.Jp,
    ir = e.qn,
    rr = e.bq,
    sr = e.ML,
    ar = e.nZ,
    ur = e.$Y,
    or = e.fI,
    hr = e.D$,
    lr = e.XA,
    cr = e.J_,
    mr = e.pi,
    fr = e.wc,
    dr = e.$c,
    gr = e.sp,
    xr = e.NM,
    wr = e.H0,
    Er = e.O$,
    pr = e.R_,
    br = e.GC,
    Nr = e._b,
    yr = e.$X,
    Ir = e.OR,
    qr = e.AE,
    vr = e.Pq,
    Tr = e.rP,
    Pr = e.ak,
    Mr = e.bM;
export {
    tn as BigExactNumber, en as ComplexNumber, nn as EXACT_HALF, rn as EXACT_I, sn as EXACT_NEG_I, an as EXACT_NEG_ONE, un as EXACT_ONE, on as EXACT_TWO, hn as EXACT_ZERO, ln as HALF, cn as I, mn as INEXACT_HALF, fn as INEXACT_I, dn as INEXACT_NEG_I, gn as INEXACT_NEG_ONE, xn as INEXACT_NEG_ZERO, wn as INEXACT_ONE, En as INEXACT_TWO, pn as INEXACT_ZERO, bn as INF, Nn as InexactNumber, yn as NAN, In as NEG_I, qn as NEG_INF, vn as NEG_ONE, Tn as ONE, Pn as PI, Mn as SmallExactNumber, Rn as TWO, Sn as ZERO, On as abs, Cn as acos, Fn as add, Bn as angle, Zn as approxEquals, _n as arithmeticShift, $n as asin, An as atan, jn as atan2, Xn as bigExpt, Gn as bitwiseAnd, Wn as bitwiseNot, Dn as bitwiseOr, Yn as bitwiseXor, Ln as boxNumber, kn as ceiling, Kn as conjugate, Vn as cos, zn as cosh, Qn as denominator, Jn as divide, Hn as e, Un as equals, ti as eqv, ei as exactToInexact, ni as exp, ii as expt, ri as floor, si as fromString, ai as gcd, ui as greaterThan, oi as greaterThanOrEqual, hi as i, li as imaginaryPart, ci as inexactToExact, mi as inf, fi as integerIsOne, di as integerSqrt, gi as isBoxedNumber, xi as isComplex, wi as isEven, Ei as isExact, pi as isExactInteger, bi as isExactNonNegativeInteger, Ni as isExactPositiveInteger, yi as isExactReal, Ii as isFinite, qi as isFlonum, vi as isInexact, Ti as isInexactReal, Pi as isInteger, Mi as isJSInteger, Ri as isJSNumber, Si as isNaN, Oi as isNegative, Ci as isNegativeZero, Fi as isNumber, Bi as isOdd, Zi as isPositive, _i as isRacketNumber, $i as isRational, Ai as isReal, ji as isRealNumber, Xi as isSafeInteger, Gi as isSchemeNumber, Wi as isZero, Di as lcm, Yi as lessThan, Li as lessThanOrEqual, ki as log, Ki as magnitude, Vi as makeComplex, zi as makeExact, Qi as makeFloat, Ji as makePolar, Hi as makeRational, Ui as makeRectangular, tr as matchExactness, er as modulo, nr as multiply, ir as nan, rr as negative_i, sr as negative_inf, ar as negative_one, ur as negative_zero, or as numberIsRational, hr as numberToString, lr as numerator, cr as one, mr as pi, fr as quotient, dr as realPart, gr as remainder, xr as round, wr as shouldBeBigInt, Er as sin, pr as sinh, br as sqr, Nr as sqrt, yr as subtract, Ir as tan, qr as tanh, vr as toExact, Tr as toInexact, Pr as two, Mr as zero
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YkosRUFBSUEsRUFBRXFILFVBS1YsTUFBTXRDLEdBQVUvRCxPQUFPaEIsRUFBRWlDLEtBRXpCLE9BQUl2QixFQUFjcUUsR0FDUCxJQUFJN0UsRUFBaUJNLE9BQU91RSxJQUdoQyxJQUFJNUUsRUFBZTRFLEVBQzlCLENBRU8sU0FBUzhMLEdBQWdCN1EsRUFBaUI4USxHQUM3QyxJQUFLbEYsR0FBZTVMLEtBQU80TCxHQUFla0YsR0FDdEMsTUFBTSxJQUFJNU0sVUFBVSxnREFheEIsSUFBSWEsRUFWQS9FLGFBQWFJLElBQ2JKLEVBQUlBLEVBQUVxSCxVQUlOeUosYUFBYTFRLElBQ2IwUSxFQUFJQSxFQUFFekosVUFLVixNQUFNMUYsRUFBSVgsT0FBT2hCLEVBQUVpQyxLQUNiTCxFQUFJWixPQUFPOFAsRUFBRTdPLEtBUW5CLE9BTEk4QyxFQURBbkQsRUFBSSxHQUNLRCxJQUFNQyxFQUVORCxHQUFLQyxFQUdkbEIsRUFBY3FFLEdBQ1AsSUFBSTdFLEVBQWlCTSxPQUFPdUUsSUFHaEMsSUFBSTVFLEVBQWU0RSxFQUM5QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG93ZXIuanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rvd2VyLmpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvLi9zcmMvbnVtYmVycy90eXBlcy50cyIsIndlYnBhY2s6Ly90b3dlci5qcy8uL3NyYy91dGlsLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL251bWJlcnMvdXRpbC50cyIsIndlYnBhY2s6Ly90b3dlci5qcy8uL3NyYy9udW1iZXJzL0luZXhhY3ROdW1iZXIudHMiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvLi9zcmMvbnVtYmVycy9TbWFsbEV4YWN0TnVtYmVyLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL251bWJlcnMvQmlnRXhhY3ROdW1iZXIudHMiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvLi9zcmMvbnVtYmVycy9Db21wbGV4TnVtYmVyLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL251bWJlcnMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL2Z1bmN0aW9ucy91dGlsLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL2Z1bmN0aW9ucy9wcmVkaWNhdGVzLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL2Z1bmN0aW9ucy9hcml0aG1ldGljLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL2Z1bmN0aW9ucy9jb21wYXJpc29uLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL2Z1bmN0aW9ucy9taXNjLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL2Z1bmN0aW9ucy9jb21wbGV4LnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL2Z1bmN0aW9ucy90cmlnb25vbWV0cnkudHMiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvLi9zcmMvZnVuY3Rpb25zL2NyZWF0aW9uLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL2Z1bmN0aW9ucy9iaXR3aXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHtcbiAgICBJbmV4YWN0TnVtYmVyLFxuICAgIFNtYWxsRXhhY3ROdW1iZXIsXG4gICAgQmlnRXhhY3ROdW1iZXIsXG4gICAgQ29tcGxleE51bWJlclxufSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IHR5cGUgUmFja2V0TnVtYmVyID0gbnVtYmVyIHwgQm94ZWROdW1iZXI7XG5cbmV4cG9ydCB0eXBlIEpTSW50ZWdlciA9IG51bWJlciB8IGJpZ2ludDtcblxuZXhwb3J0IHR5cGUgSlNOdW1iZXIgPSBudW1iZXIgfCBiaWdpbnQ7XG5cbmV4cG9ydCB0eXBlIEJveGVkTnVtYmVyID0gSW5leGFjdE51bWJlciB8IEV4YWN0TnVtYmVyIHwgQ29tcGxleE51bWJlcjtcbmV4cG9ydCBmdW5jdGlvbiBpc0JveGVkTnVtYmVyKG46IGFueSk6IG4gaXMgQm94ZWROdW1iZXIge1xuICAgIHJldHVybiBuIGluc3RhbmNlb2YgSW5leGFjdE51bWJlclxuICAgICAgICB8fCBuIGluc3RhbmNlb2YgU21hbGxFeGFjdE51bWJlclxuICAgICAgICB8fCBuIGluc3RhbmNlb2YgQmlnRXhhY3ROdW1iZXJcbiAgICAgICAgfHwgbiBpbnN0YW5jZW9mIENvbXBsZXhOdW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhhY3ROdW1iZXIgPSBTbWFsbEV4YWN0TnVtYmVyIHwgQmlnRXhhY3ROdW1iZXI7XG5cbmV4cG9ydCB0eXBlIFJlYWxOdW1iZXIgPSBJbmV4YWN0TnVtYmVyIHwgRXhhY3ROdW1iZXI7XG5leHBvcnQgZnVuY3Rpb24gaXNSZWFsTnVtYmVyKG46IGFueSk6IG4gaXMgUmVhbE51bWJlciB7XG4gICAgcmV0dXJuIG4gaW5zdGFuY2VvZiBJbmV4YWN0TnVtYmVyXG4gICAgICAgIHx8IG4gaW5zdGFuY2VvZiBTbWFsbEV4YWN0TnVtYmVyXG4gICAgICAgIHx8IG4gaW5zdGFuY2VvZiBCaWdFeGFjdE51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51bWJlciB7XG4gICAgaXNJbmV4YWN0KCk6IGJvb2xlYW47XG4gICAgaXNFeGFjdCgpOiBib29sZWFuO1xuXG4gICAgdG9JbmV4YWN0KCk6IEJveGVkTnVtYmVyO1xuICAgIHRvRXhhY3QoKTogQm94ZWROdW1iZXI7XG4gICAgdG9Db21wbGV4KCk6IENvbXBsZXhOdW1iZXI7XG4gICAgdG9GaXhudW0oKTogbnVtYmVyO1xuXG4gICAgaXNJbnRlZ2VyKCk6IGJvb2xlYW47XG4gICAgaXNSYXRpb25hbCgpOiBib29sZWFuO1xuICAgIGlzUmVhbCgpOiBib29sZWFuO1xuICAgIGlzQ29tcGxleCgpOiBib29sZWFuO1xuXG4gICAgaXNaZXJvKCk6IGJvb2xlYW47XG4gICAgaXNOZWdhdGl2ZVplcm8oKTogYm9vbGVhbjtcbiAgICBpc1Bvc2l0aXZlKCk6IGJvb2xlYW47XG4gICAgaXNOZWdhdGl2ZSgpOiBib29sZWFuO1xuICAgIGlzRXZlbigpOiBib29sZWFuO1xuICAgIGlzRmluaXRlKCk6IGJvb2xlYW47XG4gICAgaXNOYU4oKTogYm9vbGVhbjtcblxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcbiAgICB0b1NpZ25lZFN0cmluZygpOiBzdHJpbmc7XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludDogc3RyaW5nKTogbnVtYmVyIHwgYmlnaW50IHwgc3RyaW5nO1xuXG4gICAgZ3JlYXRlclRoYW4ob3RoZXI6IEJveGVkTnVtYmVyKTogYm9vbGVhbjtcbiAgICBncmVhdGVyVGhhbk9yRXF1YWwob3RoZXI6IEJveGVkTnVtYmVyKTogYm9vbGVhbjtcbiAgICBsZXNzVGhhbihvdGhlcjogQm94ZWROdW1iZXIpOiBib29sZWFuO1xuICAgIGxlc3NUaGFuT3JFcXVhbChvdGhlcjogQm94ZWROdW1iZXIpOiBib29sZWFuO1xuICAgIGVxdWFscyhvdGhlcjogQm94ZWROdW1iZXIpOiBib29sZWFuO1xuXG4gICAgYWRkKG90aGVyOiBCb3hlZE51bWJlcik6IEJveGVkTnVtYmVyO1xuICAgIHN1YnRyYWN0KG90aGVyOiBCb3hlZE51bWJlcik6IEJveGVkTnVtYmVyO1xuICAgIG11bHRpcGx5KG90aGVyOiBCb3hlZE51bWJlcik6IEJveGVkTnVtYmVyO1xuICAgIGRpdmlkZShvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlcjtcblxuICAgIG51bWVyYXRvcigpOiBSZWFsTnVtYmVyO1xuICAgIGRlbm9taW5hdG9yKCk6IFJlYWxOdW1iZXI7XG5cbiAgICBpbnRlZ2VyU3FydCgpOiBCb3hlZE51bWJlcjtcbiAgICBzcXJ0KCk6IEJveGVkTnVtYmVyO1xuICAgIGFicygpOiBSZWFsTnVtYmVyO1xuICAgIGZsb29yKCk6IFJlYWxOdW1iZXI7XG4gICAgY2VpbGluZygpOiBSZWFsTnVtYmVyO1xuICAgIHJvdW5kKCk6IFJlYWxOdW1iZXI7XG5cbiAgICBjb25qdWdhdGUoKTogQm94ZWROdW1iZXI7XG4gICAgbWFnbml0dWRlKCk6IEJveGVkTnVtYmVyO1xuICAgIHJlYWxQYXJ0KCk6IFJlYWxOdW1iZXI7XG4gICAgaW1hZ2luYXJ5UGFydCgpOiBSZWFsTnVtYmVyO1xuICAgIGFuZ2xlKCk6IEJveGVkTnVtYmVyO1xuXG4gICAgbG9nKCk6IEJveGVkTnVtYmVyO1xuICAgIGV4cHQocG93ZXI6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXI7XG4gICAgZXhwKCk6IEJveGVkTnVtYmVyO1xuXG4gICAgdGFuKCk6IEJveGVkTnVtYmVyO1xuICAgIGNvcygpOiBCb3hlZE51bWJlcjtcbiAgICBzaW4oKTogQm94ZWROdW1iZXI7XG4gICAgYXRhbigpOiBCb3hlZE51bWJlcjtcbiAgICBhY29zKCk6IEJveGVkTnVtYmVyO1xuICAgIGFzaW4oKTogQm94ZWROdW1iZXI7XG59XG4iLCJpbXBvcnQge1xuICAgIEpTTnVtYmVyLFxuICAgIEpTSW50ZWdlclxufSBmcm9tICcuL3Rvd2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSlNOdW1iZXIobjogYW55KTogbiBpcyBKU051bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgbiA9PT0gJ2JpZ2ludCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0pTSW50ZWdlcihuOiBhbnkpOiBuIGlzIEpTSW50ZWdlciB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIobikgfHwgdHlwZW9mIG4gPT09ICdiaWdpbnQnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYWZlSW50ZWdlcihuOiBKU0ludGVnZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBtYXggPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICBjb25zdCBtaW4gPSBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUjtcblxuICAgIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSAmJiBuID49IG1pbiAmJiBuIDw9IG1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbiA+PSBCaWdJbnQobWluKSAmJiBuIDw9IEJpZ0ludChtYXgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZEJlQmlnSW50KG46IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgJiYgIWlzU2FmZUludGVnZXIobik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaWdFeHB0KG46IGJpZ2ludCwgazogYmlnaW50KTogYmlnaW50IHtcbiAgICBsZXQgYWNjID0gMW47XG4gICAgd2hpbGUgKGsgIT09IDBuKSB7XG4gICAgICAgIGlmIChrICUgMm4gPT09IDBuKSB7XG4gICAgICAgICAgICBuID0gbiAqIG47XG4gICAgICAgICAgICBrID0gayAvIDJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjID0gYWNjICogbjtcbiAgICAgICAgICAgIGsgPSBrIC0gMW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbn1cbiIsImltcG9ydCB7XG4gICAgSlNJbnRlZ2VyLFxuICAgIEpTTnVtYmVyLFxuICAgIEJveGVkTnVtYmVyLFxuICAgIFJlYWxOdW1iZXIsXG4gICAgRXhhY3ROdW1iZXIsXG4gICAgaXNKU0ludGVnZXIsXG5cbiAgICBTbWFsbEV4YWN0TnVtYmVyLFxuICAgIEJpZ0V4YWN0TnVtYmVyXG59IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZWdlcklzT25lKG46IEpTSW50ZWdlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzSW50ZWdlciA9IGlzSlNJbnRlZ2VyKG4pO1xuICAgIGNvbnN0IGlzT25lID0gdHlwZW9mIG4gPT09ICdiaWdpbnQnID8gbiA9PT0gMW4gOiBuID09PSAxO1xuICAgIHJldHVybiBpc0ludGVnZXIgJiYgaXNPbmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJJc1JhdGlvbmFsKG46IEpTTnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNCaWdJbnQgPSB0eXBlb2YgbiA9PT0gJ2JpZ2ludCc7XG4gICAgY29uc3QgaXNSYXRpb25hbEZsb2F0ID0gTnVtYmVyLmlzRmluaXRlKG4pICYmICFOdW1iZXIuaXNOYU4obik7XG4gICAgcmV0dXJuIGlzQmlnSW50IHx8IGlzUmF0aW9uYWxGbG9hdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoRXhhY3RuZXNzKHg6IFJlYWxOdW1iZXIsIHk6IFJlYWxOdW1iZXIpOiBSZWFsTnVtYmVyW10ge1xuICAgIHggPSAheS5pc0V4YWN0KCkgPyB4LnRvSW5leGFjdCgpIDogeDtcbiAgICB5ID0gIXguaXNFeGFjdCgpID8geS50b0luZXhhY3QoKSA6IHk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXhhY3RSZWFsKG46IEJveGVkTnVtYmVyKTogbiBpcyBFeGFjdE51bWJlciB7XG4gICAgcmV0dXJuIG4gaW5zdGFuY2VvZiBTbWFsbEV4YWN0TnVtYmVyIHx8IG4gaW5zdGFuY2VvZiBCaWdFeGFjdE51bWJlcjtcbn1cblxuZXhwb3J0ICogZnJvbSAnLi4vdXRpbCc7XG4iLCJpbXBvcnQge1xuICAgIE51bWJlcixcbiAgICBCb3hlZE51bWJlcixcbiAgICBFeGFjdE51bWJlcixcbiAgICBSZWFsTnVtYmVyLFxuICAgIGlzRXhhY3RSZWFsLFxuXG4gICAgU21hbGxFeGFjdE51bWJlcixcbiAgICBDb21wbGV4TnVtYmVyLFxuXG4gICAgRVhBQ1RfWkVSTyxcbiAgICBJTkVYQUNUX1pFUk8sXG4gICAgSU5FWEFDVF9ORUdfT05FLFxufSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGNsYXNzIEluZXhhY3ROdW1iZXIgaW1wbGVtZW50cyBOdW1iZXIge1xuICAgIHB1YmxpYyByZWFkb25seSBudW06IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG51bTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubnVtID0gbnVtO1xuXG4gICAgICAgIC8vIE1ha2UgaXQgaW1tdXRhYmxlXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzSW5leGFjdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyBpc0V4YWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHRvSW5leGFjdCgpOiBJbmV4YWN0TnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHB1YmxpYyB0b0V4YWN0KCk6IEV4YWN0TnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gZXhhY3QgcmVwcmVzZW50YXRpb24gb2YgJHt0aGlzfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0cmluZ1JlcCA9IHRoaXMubnVtLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gc3RyaW5nUmVwLm1hdGNoKC9eKC4qKVxcLiguKikkLyk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgY29uc3QgdGVuVG9EZWNpbWFsUGxhY2VzID0gTWF0aC5wb3coMTAsIG1hdGNoWzJdLmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3ROdW1iZXIoXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZCh0aGlzLm51bSAqIHRlblRvRGVjaW1hbFBsYWNlcyksXG4gICAgICAgICAgICAgICAgdGVuVG9EZWNpbWFsUGxhY2VzXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0TnVtYmVyKHRoaXMubnVtLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgdG9Db21wbGV4KCk6IENvbXBsZXhOdW1iZXIge1xuICAgICAgICByZXR1cm4gbmV3IENvbXBsZXhOdW1iZXIodGhpcywgRVhBQ1RfWkVSTyk7XG4gICAgfVxuICAgIHB1YmxpYyB0b0ZpeG51bSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLm51bSk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzSW50ZWdlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5udW0pO1xuICAgIH1cbiAgICBwdWJsaWMgaXNSYXRpb25hbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGaW5pdGUoKTtcbiAgICB9XG4gICAgcHVibGljIGlzUmVhbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyBpc0NvbXBsZXgoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1plcm8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bSA9PT0gMDtcbiAgICB9XG4gICAgcHVibGljIGlzTmVnYXRpdmVaZXJvKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmlzKHRoaXMubnVtLCAtMCk7XG4gICAgfVxuICAgIHB1YmxpYyBpc1Bvc2l0aXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5udW0gPiAwO1xuICAgIH1cbiAgICBwdWJsaWMgaXNOZWdhdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtIDwgMDtcbiAgICB9XG4gICAgcHVibGljIGlzRXZlbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtICUgMiA9PT0gMDtcbiAgICB9XG4gICAgcHVibGljIGlzRmluaXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKHRoaXMubnVtKTtcbiAgICB9XG4gICAgcHVibGljIGlzTmFOKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHRoaXMubnVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKE51bWJlci5pc05hTih0aGlzLm51bSkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIituYW4uMFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtID09PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiK2luZi4wXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5udW0gPT09IC1JbmZpbml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiLWluZi4wXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLm51bSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bS50b1N0cmluZygpICsgXCIuMFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubnVtLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHB1YmxpYyB0b1NpZ25lZFN0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh0aGlzLm51bSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5udW0gPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiK1wiICsgdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcHVibGljIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQ6IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICAgIGlmIChoaW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm51bTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ3JlYXRlclRoYW4ob3RoZXI6IEJveGVkTnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIENvbXBsZXhOdW1iZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJOb3QgZGVmaW5lZCBmb3IgY29tcGxleCBudW1iZXJzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdGhlci5pc0V4YWN0KCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTmFOKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Bvc2l0aXZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0V4YWN0KCkuZ3JlYXRlclRoYW4ob3RoZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm51bSA+IG90aGVyLm51bTtcbiAgICB9XG4gICAgcHVibGljIGdyZWF0ZXJUaGFuT3JFcXVhbChvdGhlcjogQm94ZWROdW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vdCBkZWZpbmVkIGZvciBjb21wbGV4IG51bWJlcnNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyLmlzRXhhY3QoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNOYU4oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNGaW5pdGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUG9zaXRpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRXhhY3QoKS5ncmVhdGVyVGhhbk9yRXF1YWwob3RoZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm51bSA+PSBvdGhlci5udW07XG4gICAgfVxuICAgIHB1YmxpYyBsZXNzVGhhbihvdGhlcjogQm94ZWROdW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vdCBkZWZpbmVkIGZvciBjb21wbGV4IG51bWJlcnNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyLmlzRXhhY3QoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNOYU4oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNGaW5pdGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc1Bvc2l0aXZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0V4YWN0KCkubGVzc1RoYW4ob3RoZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm51bSA8IG90aGVyLm51bTtcbiAgICB9XG4gICAgcHVibGljIGxlc3NUaGFuT3JFcXVhbChvdGhlcjogQm94ZWROdW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vdCBkZWZpbmVkIGZvciBjb21wbGV4IG51bWJlcnNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyLmlzRXhhY3QoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNOYU4oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNGaW5pdGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc1Bvc2l0aXZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0V4YWN0KCkubGVzc1RoYW5PckVxdWFsKG90aGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5udW0gPD0gb3RoZXIubnVtO1xuICAgIH1cbiAgICBwdWJsaWMgZXF1YWxzKG90aGVyOiBCb3hlZE51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5pc05hTigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Db21wbGV4KCkuZXF1YWxzKG90aGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNGaW5pdGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuICEob3RoZXIuaXNFeGFjdCgpKSAmJiB0aGlzLm51bSA9PT0gb3RoZXIubnVtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdGhlci5pc0V4YWN0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRXhhY3QoKS5lcXVhbHMob3RoZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm51bSA9PT0gb3RoZXIubnVtO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGQob3RoZXI6IFJlYWxOdW1iZXIpOiBSZWFsTnVtYmVyO1xuICAgIHB1YmxpYyBhZGQob3RoZXI6IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyO1xuICAgIHB1YmxpYyBhZGQob3RoZXI6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXI7XG4gICAgcHVibGljIGFkZChvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIENvbXBsZXhOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQ29tcGxleCgpLmFkZChvdGhlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRXhhY3RSZWFsKG90aGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKG90aGVyLnRvSW5leGFjdCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3ROdW1iZXIodGhpcy5udW0gKyBvdGhlci5udW0pO1xuICAgIH1cbiAgICBwdWJsaWMgc3VidHJhY3Qob3RoZXI6IFJlYWxOdW1iZXIpOiBSZWFsTnVtYmVyO1xuICAgIHB1YmxpYyBzdWJ0cmFjdChvdGhlcjogQ29tcGxleE51bWJlcik6IENvbXBsZXhOdW1iZXI7XG4gICAgcHVibGljIHN1YnRyYWN0KG90aGVyOiBCb3hlZE51bWJlcik6IEJveGVkTnVtYmVyO1xuICAgIHB1YmxpYyBzdWJ0cmFjdChvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIENvbXBsZXhOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQ29tcGxleCgpLnN1YnRyYWN0KG90aGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNFeGFjdFJlYWwob3RoZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChvdGhlci50b0luZXhhY3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKHRoaXMubnVtIC0gb3RoZXIubnVtKTtcbiAgICB9XG4gICAgcHVibGljIG11bHRpcGx5KG90aGVyOiBSZWFsTnVtYmVyKTogUmVhbE51bWJlcjtcbiAgICBwdWJsaWMgbXVsdGlwbHkob3RoZXI6IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyO1xuICAgIHB1YmxpYyBtdWx0aXBseShvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlcjtcbiAgICBwdWJsaWMgbXVsdGlwbHkob3RoZXI6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBDb21wbGV4TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0NvbXBsZXgoKS5tdWx0aXBseShvdGhlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRXhhY3RSZWFsKG90aGVyKSkge1xuICAgICAgICAgICAgaWYgKG90aGVyLmlzWmVybygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEVYQUNUX1pFUk87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseShvdGhlci50b0luZXhhY3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKHRoaXMubnVtICogb3RoZXIubnVtKTtcbiAgICB9XG4gICAgcHVibGljIGRpdmlkZShvdGhlcjogUmVhbE51bWJlcik6IFJlYWxOdW1iZXI7XG4gICAgcHVibGljIGRpdmlkZShvdGhlcjogQ29tcGxleE51bWJlcik6IENvbXBsZXhOdW1iZXI7XG4gICAgcHVibGljIGRpdmlkZShvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlcjtcbiAgICBwdWJsaWMgZGl2aWRlKG90aGVyOiBCb3hlZE51bWJlcik6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Db21wbGV4KCkuZGl2aWRlKG90aGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1plcm8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRXhhY3RSZWFsKG90aGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlKG90aGVyLnRvSW5leGFjdCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3ROdW1iZXIodGhpcy5udW0gLyBvdGhlci5udW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBudW1lcmF0b3IoKTogUmVhbE51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvRXhhY3QoKS5udW1lcmF0b3IoKS50b0luZXhhY3QoKTtcbiAgICB9XG4gICAgcHVibGljIGRlbm9taW5hdG9yKCk6IFJlYWxOdW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50b0V4YWN0KCkuZGVub21pbmF0b3IoKS50b0luZXhhY3QoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW50ZWdlclNxcnQoKTogUmVhbE51bWJlciB7XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdE51bWJlcihNYXRoLmZsb29yKE1hdGguc3FydCh0aGlzLm51bSkpKTtcbiAgICB9XG4gICAgcHVibGljIHNxcnQoKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc05lZ2F0aXZlKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubXVsdGlwbHkoSU5FWEFDVF9ORUdfT05FKS5zcXJ0KCkgYXMgUmVhbE51bWJlcjtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29tcGxleE51bWJlcihJTkVYQUNUX1pFUk8sIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKE1hdGguc3FydCh0aGlzLm51bSkpO1xuICAgIH1cbiAgICBwdWJsaWMgYWJzKCk6IFJlYWxOdW1iZXIge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3ROdW1iZXIoTWF0aC5hYnModGhpcy5udW0pKTtcbiAgICB9XG4gICAgcHVibGljIGZsb29yKCk6IFJlYWxOdW1iZXIge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3ROdW1iZXIoTWF0aC5mbG9vcih0aGlzLm51bSkpO1xuICAgIH1cbiAgICBwdWJsaWMgY2VpbGluZygpOiBSZWFsTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKE1hdGguY2VpbCh0aGlzLm51bSkpO1xuICAgIH1cbiAgICBwdWJsaWMgcm91bmQoKTogUmVhbE51bWJlciB7XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdE51bWJlcihNYXRoLnJvdW5kKHRoaXMubnVtKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmp1Z2F0ZSgpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwdWJsaWMgbWFnbml0dWRlKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHB1YmxpYyByZWFsUGFydCgpOiBSZWFsTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHB1YmxpYyBpbWFnaW5hcnlQYXJ0KCk6IFJlYWxOdW1iZXIge1xuICAgICAgICByZXR1cm4gRVhBQ1RfWkVSTztcbiAgICB9XG4gICAgcHVibGljIGFuZ2xlKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgaWYgKDAgPT09IHRoaXMubnVtKVxuICAgICAgICAgICAgcmV0dXJuIEVYQUNUX1pFUk87XG4gICAgICAgIGlmICh0aGlzLm51bSA+IDApXG4gICAgICAgICAgICByZXR1cm4gRVhBQ1RfWkVSTztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKE1hdGguUEkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2coKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc05lZ2F0aXZlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQ29tcGxleCgpLmxvZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdE51bWJlcihNYXRoLmxvZyh0aGlzLm51bSkpO1xuICAgIH1cbiAgICBwdWJsaWMgZXhwdChwb3dlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmIChwb3dlciBpbnN0YW5jZW9mIENvbXBsZXhOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQ29tcGxleCgpLmV4cHQocG93ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0V4YWN0UmVhbChwb3dlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cHQocG93ZXIudG9JbmV4YWN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdE51bWJlcihNYXRoLnBvdyh0aGlzLm51bSwgcG93ZXIubnVtKSk7XG4gICAgfVxuICAgIHB1YmxpYyBleHAoKTogQm94ZWROdW1iZXIge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3ROdW1iZXIoTWF0aC5leHAodGhpcy5udW0pKVxuICAgIH1cblxuICAgIHB1YmxpYyB0YW4oKTogQm94ZWROdW1iZXIge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3ROdW1iZXIoTWF0aC50YW4odGhpcy5udW0pKTtcbiAgICB9XG4gICAgcHVibGljIGNvcygpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdE51bWJlcihNYXRoLmNvcyh0aGlzLm51bSkpO1xuICAgIH1cbiAgICBwdWJsaWMgc2luKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKE1hdGguc2luKHRoaXMubnVtKSk7XG4gICAgfVxuICAgIHB1YmxpYyBhdGFuKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKE1hdGguYXRhbih0aGlzLm51bSkpO1xuICAgIH1cbiAgICBwdWJsaWMgYWNvcygpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICgtMSA8PSB0aGlzLm51bSAmJiB0aGlzLm51bSA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEluZXhhY3ROdW1iZXIoTWF0aC5hY29zKHRoaXMubnVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9Db21wbGV4KCkuYWNvcygpO1xuICAgIH1cbiAgICBwdWJsaWMgYXNpbigpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICgtMSA8PSB0aGlzLm51bSAmJiB0aGlzLm51bSA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEluZXhhY3ROdW1iZXIoTWF0aC5hc2luKHRoaXMubnVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9Db21wbGV4KCkuYXNpbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgTnVtYmVyLFxuICAgIEJveGVkTnVtYmVyLFxuICAgIEV4YWN0TnVtYmVyLFxuICAgIFJlYWxOdW1iZXIsXG5cbiAgICBpc1NhZmVJbnRlZ2VyLFxuXG4gICAgSW5leGFjdE51bWJlcixcbiAgICBCaWdFeGFjdE51bWJlcixcbiAgICBDb21wbGV4TnVtYmVyLFxuXG4gICAgSU5FWEFDVF9aRVJPLFxuXG4gICAgRVhBQ1RfWkVSTyxcbiAgICBFWEFDVF9ORUdfT05FLFxufSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGNsYXNzIFNtYWxsRXhhY3ROdW1iZXIgaW1wbGVtZW50cyBOdW1iZXIge1xuICAgIHB1YmxpYyByZWFkb25seSBudW06IG51bWJlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGVuOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihudW06IG51bWJlciwgZGVuOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihudW0pICYmICFOdW1iZXIuaXNJbnRlZ2VyKGRlbikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeGFjdCBudW1iZXIgY2FuIG9ubHkgYmUgY29uc3RydWN0ZWQgZnJvbSBpbnRlZ2Vycy5cIilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgZGVuID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gT25seSB0aGUgbnVtZXJhdG9yIGNhbiBiZSBuZWdhdGl2ZS5cbiAgICAgICAgICAgIGlmIChkZW4gPCAwKSB7XG4gICAgICAgICAgICAgICAgbnVtICo9IC0xO1xuICAgICAgICAgICAgICAgIGRlbiAqPSAtMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5pcyhudW0sIC0wKSkge1xuICAgICAgICAgICAgICAgIG51bSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGdjZCA9IHRoaXMuZ2NkKG51bSwgZGVuKTtcbiAgICAgICAgICAgIHRoaXMubnVtID0gbnVtIC8gZ2NkO1xuICAgICAgICAgICAgdGhpcy5kZW4gPSBkZW4gLyBnY2Q7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeGFjdCB2YWx1ZSBudW1lcmF0b3IgYW5kIGRlbm9taW5hdG9yIHR5cGVzIG11c3QgbWF0Y2hcIilcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ha2UgaXQgaW1tdXRhYmxlXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnY2QoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgdDtcbiAgICAgICAgd2hpbGUgKGIgIT09IDApIHtcbiAgICAgICAgICAgIHQgPSBhO1xuICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgICBiID0gdCAlIGI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0V4YWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIGlzSW5leGFjdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b0luZXhhY3QoKTogSW5leGFjdE51bWJlciB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubnVtIC8gdGhpcy5kZW47XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdE51bWJlcihyZXN1bHQpO1xuICAgIH1cbiAgICBwdWJsaWMgdG9FeGFjdCgpOiBFeGFjdE51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwdWJsaWMgdG9CaWdFeGFjdCgpOiBCaWdFeGFjdE51bWJlciB7XG4gICAgICAgIHJldHVybiBuZXcgQmlnRXhhY3ROdW1iZXIoQmlnSW50KHRoaXMubnVtKSwgQmlnSW50KHRoaXMuZGVuKSk7XG4gICAgfVxuICAgIHB1YmxpYyB0b0NvbXBsZXgoKTogQ29tcGxleE51bWJlciB7XG4gICAgICAgIHJldHVybiBuZXcgQ29tcGxleE51bWJlcih0aGlzLCBFWEFDVF9aRVJPKTtcbiAgICB9XG4gICAgcHVibGljIHRvRml4bnVtKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMubnVtIC8gdGhpcy5kZW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0ludGVnZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbiA9PT0gMTtcbiAgICB9XG4gICAgcHVibGljIGlzUmF0aW9uYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgaXNSZWFsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIGlzQ29tcGxleCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGlzWmVybygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtID09PSAwO1xuICAgIH1cbiAgICBwdWJsaWMgaXNOZWdhdGl2ZVplcm8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGlzUG9zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bSA+IDA7XG4gICAgfVxuICAgIHB1YmxpYyBpc05lZ2F0aXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5udW0gPCAwO1xuICAgIH1cbiAgICBwdWJsaWMgaXNFdmVuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZW4gPT09IDEgJiYgdGhpcy5udW0gJSAyID09PSAwO1xuICAgIH1cbiAgICBwdWJsaWMgaXNGaW5pdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgaXNOYU4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZGVuID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0udG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLm51bX0vJHt0aGlzLmRlbn1gO1xuICAgIH1cbiAgICBwdWJsaWMgdG9TaWduZWRTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuaXNQb3NpdGl2ZSgpIHx8IHRoaXMuaXNaZXJvKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIitcIiArIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH1cbiAgICBwdWJsaWMgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludDogc3RyaW5nKTogbnVtYmVyIHwgYmlnaW50IHwgc3RyaW5nIHtcbiAgICAgICAgaWYgKGhpbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhpbnQgPT09ICdiaWdpbnQnICYmIHRoaXMuZGVuID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gQmlnSW50KHRoaXMubnVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm51bSAvIHRoaXMuZGVuO1xuICAgIH1cblxuXG4gICAgcHVibGljIGdyZWF0ZXJUaGFuKG90aGVyOiBCb3hlZE51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBJbmV4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAob3RoZXIuaXNOYU4oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW90aGVyLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIW90aGVyLmlzUG9zaXRpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXJUaGFuKG90aGVyLnRvRXhhY3QoKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIEJpZ0V4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0JpZ0V4YWN0KCkuZ3JlYXRlclRoYW4ob3RoZXIpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBDb21wbGV4TnVtYmVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm90IGRlZmluZWQgZm9yIGNvbXBsZXggbnVtYmVycy5cIik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNWYWwgPSB0aGlzLm51bSAqIChvdGhlci5kZW4gYXMgbnVtYmVyKTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyVmFsID0gKG90aGVyLm51bSBhcyBudW1iZXIpICogdGhpcy5kZW47XG4gICAgICAgICAgICByZXR1cm4gdGhpc1ZhbCA+IG90aGVyVmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBncmVhdGVyVGhhbk9yRXF1YWwob3RoZXI6IEJveGVkTnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEluZXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIGlmIChvdGhlci5pc05hTigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghb3RoZXIuaXNGaW5pdGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhb3RoZXIuaXNQb3NpdGl2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JlYXRlclRoYW5PckVxdWFsKG90aGVyLnRvRXhhY3QoKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIEJpZ0V4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0JpZ0V4YWN0KCkuZ3JlYXRlclRoYW5PckVxdWFsKG90aGVyKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vdCBkZWZpbmVkIGZvciBjb21wbGV4IG51bWJlcnMuXCIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0aGlzVmFsID0gdGhpcy5udW0gKiAob3RoZXIuZGVuIGFzIG51bWJlcik7XG4gICAgICAgICAgICBjb25zdCBvdGhlclZhbCA9IChvdGhlci5udW0gYXMgbnVtYmVyKSAqIHRoaXMuZGVuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNWYWwgPj0gb3RoZXJWYWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGxlc3NUaGFuKG90aGVyOiBCb3hlZE51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBJbmV4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAob3RoZXIuaXNOYU4oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW90aGVyLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXIuaXNQb3NpdGl2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVzc1RoYW4ob3RoZXIudG9FeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQmlnRXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQmlnRXhhY3QoKS5sZXNzVGhhbihvdGhlcik7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIENvbXBsZXhOdW1iZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJOb3QgZGVmaW5lZCBmb3IgY29tcGxleCBudW1iZXJzLlwiKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGhpc1ZhbCA9IHRoaXMubnVtICogKG90aGVyLmRlbiBhcyBudW1iZXIpO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJWYWwgPSAob3RoZXIubnVtIGFzIG51bWJlcikgKiB0aGlzLmRlbjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzVmFsIDwgb3RoZXJWYWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGxlc3NUaGFuT3JFcXVhbChvdGhlcjogQm94ZWROdW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdE51bWJlcikge1xuICAgICAgICAgICAgaWYgKG90aGVyLmlzTmFOKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFvdGhlci5pc0Zpbml0ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyLmlzUG9zaXRpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlc3NUaGFuT3JFcXVhbChvdGhlci50b0V4YWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBCaWdFeGFjdE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CaWdFeGFjdCgpLmxlc3NUaGFuT3JFcXVhbChvdGhlcik7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIENvbXBsZXhOdW1iZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJOb3QgZGVmaW5lZCBmb3IgY29tcGxleCBudW1iZXJzLlwiKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGhpc1ZhbCA9IHRoaXMubnVtICogKG90aGVyLmRlbiBhcyBudW1iZXIpO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJWYWwgPSAob3RoZXIubnVtIGFzIG51bWJlcikgKiB0aGlzLmRlbjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzVmFsIDw9IG90aGVyVmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBlcXVhbHMob3RoZXI6IEJveGVkTnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEluZXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIGlmICghb3RoZXIuaXNGaW5pdGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVxdWFscyhvdGhlci50b0V4YWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBCaWdFeGFjdE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CaWdFeGFjdCgpLmVxdWFscyhvdGhlcik7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIENvbXBsZXhOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQ29tcGxleCgpLmVxdWFscyhvdGhlcik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNWYWwgPSB0aGlzLm51bSAqIChvdGhlci5kZW4gYXMgbnVtYmVyKTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyVmFsID0gKG90aGVyLm51bSBhcyBudW1iZXIpICogdGhpcy5kZW47XG4gICAgICAgICAgICByZXR1cm4gdGhpc1ZhbCA9PT0gb3RoZXJWYWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkKG90aGVyOiBSZWFsTnVtYmVyKTogUmVhbE51bWJlcjtcbiAgICBwdWJsaWMgYWRkKG90aGVyOiBDb21wbGV4TnVtYmVyKTogQ29tcGxleE51bWJlcjtcbiAgICBwdWJsaWMgYWRkKG90aGVyOiBCb3hlZE51bWJlcik6IEJveGVkTnVtYmVyO1xuICAgIHB1YmxpYyBhZGQob3RoZXI6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBJbmV4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0luZXhhY3QoKS5hZGQob3RoZXIpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBCaWdFeGFjdE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CaWdFeGFjdCgpLmFkZChvdGhlcik7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIENvbXBsZXhOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQ29tcGxleCgpLmFkZChvdGhlcik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9ICh0aGlzLm51bSAqIG90aGVyLmRlbikgKyAob3RoZXIubnVtICogdGhpcy5kZW4pO1xuICAgICAgICAgICAgY29uc3QgZGVuID0gdGhpcy5kZW4gKiBvdGhlci5kZW47XG5cbiAgICAgICAgICAgIGlmICghaXNTYWZlSW50ZWdlcihudW0pIHx8ICFpc1NhZmVJbnRlZ2VyKGRlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b0JpZ0V4YWN0KCkuYWRkKG90aGVyLnRvQmlnRXhhY3QoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdE51bWJlcihudW0sIGRlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHN1YnRyYWN0KG90aGVyOiBSZWFsTnVtYmVyKTogUmVhbE51bWJlcjtcbiAgICBwdWJsaWMgc3VidHJhY3Qob3RoZXI6IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyO1xuICAgIHB1YmxpYyBzdWJ0cmFjdChvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlcjtcbiAgICBwdWJsaWMgc3VidHJhY3Qob3RoZXI6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBJbmV4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0luZXhhY3QoKS5zdWJ0cmFjdChvdGhlcik7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIEJpZ0V4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0JpZ0V4YWN0KCkuc3VidHJhY3Qob3RoZXIpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBDb21wbGV4TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0NvbXBsZXgoKS5zdWJ0cmFjdChvdGhlcik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9ICh0aGlzLm51bSAqIG90aGVyLmRlbikgLSAob3RoZXIubnVtICogdGhpcy5kZW4pO1xuICAgICAgICAgICAgY29uc3QgZGVuID0gdGhpcy5kZW4gKiBvdGhlci5kZW47XG5cbiAgICAgICAgICAgIGlmICghaXNTYWZlSW50ZWdlcihudW0pIHx8ICFpc1NhZmVJbnRlZ2VyKGRlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b0JpZ0V4YWN0KCkuc3VidHJhY3Qob3RoZXIudG9CaWdFeGFjdCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0TnVtYmVyKG51bSwgZGVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgbXVsdGlwbHkob3RoZXI6IFJlYWxOdW1iZXIpOiBSZWFsTnVtYmVyO1xuICAgIHB1YmxpYyBtdWx0aXBseShvdGhlcjogQ29tcGxleE51bWJlcik6IENvbXBsZXhOdW1iZXI7XG4gICAgcHVibGljIG11bHRpcGx5KG90aGVyOiBCb3hlZE51bWJlcik6IEJveGVkTnVtYmVyO1xuICAgIHB1YmxpYyBtdWx0aXBseShvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzWmVybygpIHx8IChvdGhlci5pc0V4YWN0KCkgJiYgb3RoZXIuaXNaZXJvKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gRVhBQ1RfWkVSTztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEluZXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvSW5leGFjdCgpLm11bHRpcGx5KG90aGVyKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQmlnRXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQmlnRXhhY3QoKS5tdWx0aXBseShvdGhlcik7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIENvbXBsZXhOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQ29tcGxleCgpLm11bHRpcGx5KG90aGVyKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gdGhpcy5udW0gKiBvdGhlci5udW07XG4gICAgICAgICAgICBjb25zdCBkZW4gPSB0aGlzLmRlbiAqIG90aGVyLmRlbjtcblxuICAgICAgICAgICAgaWYgKCFpc1NhZmVJbnRlZ2VyKG51bSkgfHwgIWlzU2FmZUludGVnZXIoZGVuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQmlnRXhhY3QoKS5tdWx0aXBseShvdGhlci50b0JpZ0V4YWN0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3ROdW1iZXIobnVtLCBkZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBkaXZpZGUob3RoZXI6IFJlYWxOdW1iZXIpOiBSZWFsTnVtYmVyO1xuICAgIHB1YmxpYyBkaXZpZGUob3RoZXI6IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyO1xuICAgIHB1YmxpYyBkaXZpZGUob3RoZXI6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXI7XG4gICAgcHVibGljIGRpdmlkZShvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzWmVybygpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEluZXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvSW5leGFjdCgpLmRpdmlkZShvdGhlcik7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIEJpZ0V4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0JpZ0V4YWN0KCkuZGl2aWRlKG90aGVyKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Db21wbGV4KCkuZGl2aWRlKG90aGVyKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyLmlzWmVybygpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIvOiBkaXZpc2lvbiBieSB6ZXJvXCIgKyB0aGlzICsgb3RoZXIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSB0aGlzLm51bSAqIG90aGVyLmRlbjtcbiAgICAgICAgICAgIGNvbnN0IGRlbiA9IHRoaXMuZGVuICogb3RoZXIubnVtO1xuXG4gICAgICAgICAgICBpZiAoIWlzU2FmZUludGVnZXIobnVtKSB8fCAhaXNTYWZlSW50ZWdlcihkZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CaWdFeGFjdCgpLmRpdmlkZShvdGhlci50b0JpZ0V4YWN0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3ROdW1iZXIobnVtLCBkZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG51bWVyYXRvcigpOiBSZWFsTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0TnVtYmVyKHRoaXMubnVtKTtcbiAgICB9XG4gICAgcHVibGljIGRlbm9taW5hdG9yKCk6IFJlYWxOdW1iZXIge1xuICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3ROdW1iZXIodGhpcy5kZW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnRlZ2VyU3FydCgpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzTmVnYXRpdmUoKSkge1xuICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMubXVsdGlwbHkoRVhBQ1RfTkVHX09ORSk7XG4gICAgICAgICAgICBjb25zdCBzcXJ0ID0gbi5zcXJ0KCkucmVhbFBhcnQoKS5mbG9vcigpO1xuICAgICAgICAgICAgY29uc3QgemVybyA9IHNxcnQuaXNFeGFjdCgpID8gRVhBQ1RfWkVSTyA6IElORVhBQ1RfWkVSTztcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29tcGxleE51bWJlcih6ZXJvLCBzcXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zcXJ0KCkucmVhbFBhcnQoKS5mbG9vcigpO1xuICAgIH1cbiAgICBwdWJsaWMgc3FydCgpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzTmVnYXRpdmUoKSkge1xuICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMubXVsdGlwbHkoRVhBQ1RfTkVHX09ORSk7XG4gICAgICAgICAgICBjb25zdCBzcXJ0ID0gbi5zcXJ0KCkucmVhbFBhcnQoKTtcblxuICAgICAgICAgICAgaWYgKHNxcnQuaXNFeGFjdCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21wbGV4TnVtYmVyKEVYQUNUX1pFUk8sIHNxcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21wbGV4TnVtYmVyKElORVhBQ1RfWkVSTywgc3FydCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBudW0gPSBNYXRoLnNxcnQodGhpcy5udW0pO1xuICAgICAgICBjb25zdCBkZW4gPSBNYXRoLnNxcnQodGhpcy5kZW4pO1xuXG4gICAgICAgIGlmIChudW0gPT09IE1hdGguZmxvb3IobnVtKSAmJiBkZW4gPT09IE1hdGguZmxvb3IoZGVuKSkge1xuICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3ROdW1iZXIobnVtLCBkZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKG51bSAvIGRlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGFicygpOiBSZWFsTnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZWdhdGl2ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3ROdW1iZXIoLTEgKiB0aGlzLm51bSwgdGhpcy5kZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGZsb29yKCk6IFJlYWxOdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5kZW4gPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0TnVtYmVyKE1hdGguZmxvb3IodGhpcy5udW0gLyB0aGlzLmRlbikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBjZWlsaW5nKCk6IFJlYWxOdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5kZW4gPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0TnVtYmVyKE1hdGguY2VpbCh0aGlzLm51bSAvIHRoaXMuZGVuKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJvdW5kKCk6IFJlYWxOdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5kZW4gPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0TnVtYmVyKE1hdGgucm91bmQodGhpcy5udW0gLyB0aGlzLmRlbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmp1Z2F0ZSgpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwdWJsaWMgbWFnbml0dWRlKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWJzKCk7XG4gICAgfVxuICAgIHB1YmxpYyByZWFsUGFydCgpOiBSZWFsTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHB1YmxpYyBpbWFnaW5hcnlQYXJ0KCk6IFJlYWxOdW1iZXIge1xuICAgICAgICByZXR1cm4gRVhBQ1RfWkVSTztcbiAgICB9XG4gICAgcHVibGljIGFuZ2xlKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICBpZiAodGhpcy5pc05lZ2F0aXZlKCkpIHtcbiAgICAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKE1hdGguUEkpO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdE51bWJlcigwKTtcbiAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGxvZygpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzTmVnYXRpdmUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Db21wbGV4KCkubG9nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKE1hdGgubG9nKHRoaXMubnVtIC8gdGhpcy5kZW4pKTtcbiAgICB9XG4gICAgcHVibGljIGV4cHQocG93ZXI6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAocG93ZXIgaW5zdGFuY2VvZiBDb21wbGV4TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0NvbXBsZXgoKS5leHB0KHBvd2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3dlci5pc0V4YWN0KCkgJiYgcG93ZXIuaXNJbnRlZ2VyKCkgJiYgIXBvd2VyLmlzTmVnYXRpdmUoKSkge1xuICAgICAgICAgICAgY29uc3QgZXhwID0gcG93ZXIudG9GaXhudW0oKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBleHAgPT09ICdiaWdpbnQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CaWdFeGFjdCgpLmV4cHQocG93ZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBudW0gPSBNYXRoLnBvdyh0aGlzLm51bSwgZXhwKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbiA9IE1hdGgucG93KHRoaXMuZGVuLCBleHApO1xuXG4gICAgICAgICAgICBpZiAoIWlzU2FmZUludGVnZXIobnVtKSB8fCAhaXNTYWZlSW50ZWdlcihkZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CaWdFeGFjdCgpLmV4cHQocG93ZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3ROdW1iZXIobnVtLCBkZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudG9JbmV4YWN0KCkuZXhwdChwb3dlcik7XG4gICAgfVxuICAgIHB1YmxpYyBleHAoKTogQm94ZWROdW1iZXIge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3ROdW1iZXIoTWF0aC5leHAodGhpcy5udW0gLyB0aGlzLmRlbikpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YW4oKTogQm94ZWROdW1iZXIge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3ROdW1iZXIoTWF0aC50YW4odGhpcy5udW0gLyB0aGlzLmRlbikpO1xuICAgIH1cbiAgICBwdWJsaWMgY29zKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKE1hdGguY29zKHRoaXMubnVtIC8gdGhpcy5kZW4pKTtcbiAgICB9XG4gICAgcHVibGljIHNpbigpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdE51bWJlcihNYXRoLnNpbih0aGlzLm51bSAvIHRoaXMuZGVuKSk7XG4gICAgfVxuICAgIHB1YmxpYyBhdGFuKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKE1hdGguYXRhbih0aGlzLm51bSAvIHRoaXMuZGVuKSk7XG4gICAgfVxuICAgIHB1YmxpYyBhY29zKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKE1hdGguYWNvcyh0aGlzLm51bSAvIHRoaXMuZGVuKSk7XG4gICAgfVxuICAgIHB1YmxpYyBhc2luKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKE1hdGguYXNpbih0aGlzLm51bSAvIHRoaXMuZGVuKSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQge1xuICAgIE51bWJlcixcbiAgICBCb3hlZE51bWJlcixcbiAgICBFeGFjdE51bWJlcixcbiAgICBSZWFsTnVtYmVyLFxuXG4gICAgSW5leGFjdE51bWJlcixcbiAgICBTbWFsbEV4YWN0TnVtYmVyLFxuICAgIENvbXBsZXhOdW1iZXIsXG5cbiAgICBiaWdFeHB0LFxuICAgIGlzU2FmZUludGVnZXIsXG5cbiAgICBFWEFDVF9aRVJPLFxufSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGNsYXNzIEJpZ0V4YWN0TnVtYmVyIGltcGxlbWVudHMgTnVtYmVyIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgbnVtOiBiaWdpbnQ7XG4gICAgcHVibGljIHJlYWRvbmx5IGRlbjogYmlnaW50O1xuXG4gICAgY29uc3RydWN0b3IobnVtOiBiaWdpbnQsIGRlbjogYmlnaW50ID0gMW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBudW0gPT09ICdiaWdpbnQnICYmIHR5cGVvZiBkZW4gPT09ICdiaWdpbnQnKSB7XG4gICAgICAgICAgICAvLyBPbmx5IHRoZSBudW1lcmF0b3IgY2FuIGJlIG5lZ2F0aXZlLlxuICAgICAgICAgICAgaWYgKGRlbiA8IDApIHtcbiAgICAgICAgICAgICAgICBudW0gKj0gLTFuO1xuICAgICAgICAgICAgICAgIGRlbiAqPSAtMW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGdjZCA9IHRoaXMuZ2NkKG51bSwgZGVuKTtcbiAgICAgICAgICAgIHRoaXMubnVtID0gbnVtIC8gZ2NkO1xuICAgICAgICAgICAgdGhpcy5kZW4gPSBkZW4gLyBnY2Q7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeGFjdCB2YWx1ZSBudW1lcmF0b3IgYW5kIGRlbm9taW5hdG9yIHR5cGVzIG11c3QgbWF0Y2hcIilcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ha2UgaXQgaW1tdXRhYmxlXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnY2QoYTogYmlnaW50LCBiOiBiaWdpbnQpOiBiaWdpbnQge1xuICAgICAgICBsZXQgdDogYmlnaW50O1xuICAgICAgICB3aGlsZSAoYiAhPT0gMG4pIHtcbiAgICAgICAgICAgIHQgPSBhO1xuICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgICBiID0gdCAlIGI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYSA8IDBuKSB7XG4gICAgICAgICAgICByZXR1cm4gLTFuICogYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0luZXhhY3QoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGlzRXhhY3QoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b0luZXhhY3QoKTogSW5leGFjdE51bWJlciB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IE51bWJlcih0aGlzLm51bSkgLyBOdW1iZXIodGhpcy5kZW4pO1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3ROdW1iZXIocmVzdWx0KTtcbiAgICB9XG4gICAgcHVibGljIHRvRXhhY3QoKTogRXhhY3ROdW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcHVibGljIHRvU21hbGxFeGFjdCgpOiBTbWFsbEV4YWN0TnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0TnVtYmVyKE51bWJlcih0aGlzLm51bSksIE51bWJlcih0aGlzLmRlbikpO1xuICAgIH1cbiAgICBwdWJsaWMgdG9Db21wbGV4KCk6IENvbXBsZXhOdW1iZXIge1xuICAgICAgICByZXR1cm4gbmV3IENvbXBsZXhOdW1iZXIodGhpcywgRVhBQ1RfWkVSTyk7XG4gICAgfVxuICAgIHB1YmxpYyB0b0ZpeG51bSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMubnVtIC8gdGhpcy5kZW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0ludGVnZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbiA9PT0gMW47XG4gICAgfVxuICAgIHB1YmxpYyBpc1JhdGlvbmFsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIGlzUmVhbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyBpc0NvbXBsZXgoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1plcm8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bSA9PT0gMG47XG4gICAgfVxuICAgIHB1YmxpYyBpc05lZ2F0aXZlWmVybygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwdWJsaWMgaXNQb3NpdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtID4gMG47XG4gICAgfVxuICAgIHB1YmxpYyBpc05lZ2F0aXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5udW0gPCAwbjtcbiAgICB9XG4gICAgcHVibGljIGlzRXZlbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVuID09PSAxbiAmJiB0aGlzLm51bSAlIDJuID09PSAwbjtcbiAgICB9XG4gICAgcHVibGljIGlzRmluaXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIGlzTmFOKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG51bVN0ciA9IHRoaXMubnVtLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGRlblN0ciA9IHRoaXMuZGVuLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVuID09PSAxbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bVN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHtudW1TdHJ9LyR7ZGVuU3RyfWA7XG4gICAgfVxuICAgIHB1YmxpYyB0b1NpZ25lZFN0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5pc05lZ2F0aXZlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiK1wiICsgdGhpcy50b1N0cmluZygpO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50OiBzdHJpbmcpOiBudW1iZXIgfCBiaWdpbnQgfCBzdHJpbmcge1xuICAgICAgICBpZiAoaGludCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGludCA9PT0gJ2JpZ2ludCcgJiYgdGhpcy5kZW4gPT09IDFuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZW4gPT09IDFuKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMubnVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5udW0pIC8gTnVtYmVyKHRoaXMuZGVuKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ3JlYXRlclRoYW4ob3RoZXI6IEJveGVkTnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEluZXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIGlmIChvdGhlci5pc05hTigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghb3RoZXIuaXNGaW5pdGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhb3RoZXIuaXNQb3NpdGl2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JlYXRlclRoYW4ob3RoZXIudG9FeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgU21hbGxFeGFjdE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JlYXRlclRoYW4ob3RoZXIudG9CaWdFeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Db21wbGV4KCkuZ3JlYXRlclRoYW4ob3RoZXIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0aGlzVmFsID0gdGhpcy5udW0gKiBvdGhlci5kZW47XG4gICAgICAgICAgICBjb25zdCBvdGhlclZhbCA9IG90aGVyLm51bSAqIHRoaXMuZGVuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNWYWwgPiBvdGhlclZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ3JlYXRlclRoYW5PckVxdWFsKG90aGVyOiBCb3hlZE51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBJbmV4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAob3RoZXIuaXNOYU4oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW90aGVyLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIW90aGVyLmlzUG9zaXRpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXJUaGFuT3JFcXVhbChvdGhlci50b0V4YWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBTbWFsbEV4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmVhdGVyVGhhbk9yRXF1YWwob3RoZXIudG9CaWdFeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Db21wbGV4KCkuZ3JlYXRlclRoYW5PckVxdWFsKG90aGVyKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGhpc1ZhbCA9IHRoaXMubnVtICogb3RoZXIuZGVuO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJWYWwgPSBvdGhlci5udW0gKiB0aGlzLmRlbjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzVmFsID49IG90aGVyVmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBsZXNzVGhhbihvdGhlcjogQm94ZWROdW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdE51bWJlcikge1xuICAgICAgICAgICAgaWYgKG90aGVyLmlzTmFOKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFvdGhlci5pc0Zpbml0ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyLmlzUG9zaXRpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlc3NUaGFuKG90aGVyLnRvRXhhY3QoKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIFNtYWxsRXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlc3NUaGFuKG90aGVyLnRvQmlnRXhhY3QoKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIENvbXBsZXhOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQ29tcGxleCgpLmxlc3NUaGFuKG90aGVyKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGhpc1ZhbCA9IHRoaXMubnVtICogb3RoZXIuZGVuO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJWYWwgPSBvdGhlci5udW0gKiB0aGlzLmRlbjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzVmFsIDwgb3RoZXJWYWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGxlc3NUaGFuT3JFcXVhbChvdGhlcjogQm94ZWROdW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdE51bWJlcikge1xuICAgICAgICAgICAgaWYgKG90aGVyLmlzTmFOKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFvdGhlci5pc0Zpbml0ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyLmlzUG9zaXRpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlc3NUaGFuT3JFcXVhbChvdGhlci50b0V4YWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBTbWFsbEV4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZXNzVGhhbk9yRXF1YWwob3RoZXIudG9CaWdFeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Db21wbGV4KCkubGVzc1RoYW5PckVxdWFsKG90aGVyKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGhpc1ZhbCA9IHRoaXMubnVtICogb3RoZXIuZGVuO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJWYWwgPSBvdGhlci5udW0gKiB0aGlzLmRlbjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzVmFsIDw9IG90aGVyVmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBlcXVhbHMob3RoZXI6IEJveGVkTnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEluZXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIGlmICghb3RoZXIuaXNGaW5pdGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVxdWFscyhvdGhlci50b0V4YWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBTbWFsbEV4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcXVhbHMob3RoZXIudG9CaWdFeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Db21wbGV4KCkuZXF1YWxzKG90aGVyKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGhpc1ZhbCA9IHRoaXMubnVtICogb3RoZXIuZGVuO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJWYWwgPSBvdGhlci5udW0gKiB0aGlzLmRlbjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzVmFsID09PSBvdGhlclZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGQob3RoZXI6IFJlYWxOdW1iZXIpOiBSZWFsTnVtYmVyO1xuICAgIHB1YmxpYyBhZGQob3RoZXI6IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyO1xuICAgIHB1YmxpYyBhZGQob3RoZXI6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXI7XG4gICAgcHVibGljIGFkZChvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEluZXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvSW5leGFjdCgpLmFkZChvdGhlcik7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIFNtYWxsRXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChvdGhlci50b0JpZ0V4YWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBDb21wbGV4TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0NvbXBsZXgoKS5hZGQob3RoZXIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSAodGhpcy5udW0gKiBvdGhlci5kZW4pICsgKG90aGVyLm51bSAqIHRoaXMuZGVuKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbiA9IHRoaXMuZGVuICogb3RoZXIuZGVuO1xuXG4gICAgICAgICAgICBpZiAoaXNTYWZlSW50ZWdlcihudW0pICYmIGlzU2FmZUludGVnZXIoZGVuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdE51bWJlcihOdW1iZXIobnVtKSwgTnVtYmVyKGRlbikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0V4YWN0TnVtYmVyKG51bSwgZGVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3VidHJhY3Qob3RoZXI6IFJlYWxOdW1iZXIpOiBSZWFsTnVtYmVyO1xuICAgIHB1YmxpYyBzdWJ0cmFjdChvdGhlcjogQ29tcGxleE51bWJlcik6IENvbXBsZXhOdW1iZXI7XG4gICAgcHVibGljIHN1YnRyYWN0KG90aGVyOiBCb3hlZE51bWJlcik6IEJveGVkTnVtYmVyO1xuICAgIHB1YmxpYyBzdWJ0cmFjdChvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEluZXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvSW5leGFjdCgpLnN1YnRyYWN0KG90aGVyKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgU21hbGxFeGFjdE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3Qob3RoZXIudG9CaWdFeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Db21wbGV4KCkuc3VidHJhY3Qob3RoZXIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSAodGhpcy5udW0gKiBvdGhlci5kZW4pIC0gKG90aGVyLm51bSAqIHRoaXMuZGVuKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbiA9IHRoaXMuZGVuICogb3RoZXIuZGVuO1xuXG4gICAgICAgICAgICBpZiAoaXNTYWZlSW50ZWdlcihudW0pICYmIGlzU2FmZUludGVnZXIoZGVuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdE51bWJlcihOdW1iZXIobnVtKSwgTnVtYmVyKGRlbikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0V4YWN0TnVtYmVyKG51bSwgZGVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgbXVsdGlwbHkob3RoZXI6IFJlYWxOdW1iZXIpOiBSZWFsTnVtYmVyO1xuICAgIHB1YmxpYyBtdWx0aXBseShvdGhlcjogQ29tcGxleE51bWJlcik6IENvbXBsZXhOdW1iZXI7XG4gICAgcHVibGljIG11bHRpcGx5KG90aGVyOiBCb3hlZE51bWJlcik6IEJveGVkTnVtYmVyO1xuICAgIHB1YmxpYyBtdWx0aXBseShvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICgob3RoZXIuaXNFeGFjdCgpICYmIG90aGVyLmlzWmVybygpKSB8fCB0aGlzLmlzWmVybygpKSB7XG4gICAgICAgICAgICByZXR1cm4gRVhBQ1RfWkVSTztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEluZXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvSW5leGFjdCgpLm11bHRpcGx5KG90aGVyKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgU21hbGxFeGFjdE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHkob3RoZXIudG9CaWdFeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Db21wbGV4KCkubXVsdGlwbHkob3RoZXIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSB0aGlzLm51bSAqIG90aGVyLm51bTtcbiAgICAgICAgICAgIGNvbnN0IGRlbiA9IHRoaXMuZGVuICogb3RoZXIuZGVuO1xuXG4gICAgICAgICAgICBpZiAoaXNTYWZlSW50ZWdlcihudW0pICYmIGlzU2FmZUludGVnZXIoZGVuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdE51bWJlcihOdW1iZXIobnVtKSwgTnVtYmVyKGRlbikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0V4YWN0TnVtYmVyKG51bSwgZGVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZGl2aWRlKG90aGVyOiBSZWFsTnVtYmVyKTogUmVhbE51bWJlcjtcbiAgICBwdWJsaWMgZGl2aWRlKG90aGVyOiBDb21wbGV4TnVtYmVyKTogQ29tcGxleE51bWJlcjtcbiAgICBwdWJsaWMgZGl2aWRlKG90aGVyOiBCb3hlZE51bWJlcik6IEJveGVkTnVtYmVyO1xuICAgIHB1YmxpYyBkaXZpZGUob3RoZXI6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc1plcm8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIEVYQUNUX1pFUk87XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBJbmV4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0luZXhhY3QoKS5kaXZpZGUob3RoZXIpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBTbWFsbEV4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGUob3RoZXIudG9CaWdFeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Db21wbGV4KCkuZGl2aWRlKG90aGVyKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gdGhpcy5udW0gKiBvdGhlci5kZW47XG4gICAgICAgICAgICBjb25zdCBkZW4gPSB0aGlzLmRlbiAqIG90aGVyLm51bTtcblxuICAgICAgICAgICAgaWYgKGlzU2FmZUludGVnZXIobnVtKSAmJiBpc1NhZmVJbnRlZ2VyKGRlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3ROdW1iZXIoTnVtYmVyKG51bSksIE51bWJlcihkZW4pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdFeGFjdE51bWJlcihudW0sIGRlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbnVtZXJhdG9yKCk6IFJlYWxOdW1iZXIge1xuICAgICAgICBpZiAoaXNTYWZlSW50ZWdlcih0aGlzLm51bSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdE51bWJlcihOdW1iZXIodGhpcy5udW0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEJpZ0V4YWN0TnVtYmVyKHRoaXMubnVtKTtcbiAgICB9XG4gICAgcHVibGljIGRlbm9taW5hdG9yKCk6IFJlYWxOdW1iZXIge1xuICAgICAgICBpZiAoaXNTYWZlSW50ZWdlcih0aGlzLmRlbikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdE51bWJlcihOdW1iZXIodGhpcy5kZW4pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEJpZ0V4YWN0TnVtYmVyKHRoaXMuZGVuKVxuICAgIH1cblxuICAgIHB1YmxpYyBpbnRlZ2VyU3FydCgpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnNxcnQoKS5mbG9vcigpO1xuICAgIH1cbiAgICBwdWJsaWMgc3FydCgpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU21hbGxFeGFjdCgpLnNxcnQoKTtcbiAgICB9XG4gICAgcHVibGljIGFicygpOiBSZWFsTnVtYmVyIHtcbiAgICAgICAgaWYgKGlzU2FmZUludGVnZXIodGhpcy5udW0pICYmIGlzU2FmZUludGVnZXIodGhpcy5kZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3ROdW1iZXIoTnVtYmVyKHRoaXMubnVtKSwgTnVtYmVyKHRoaXMuZGVuKSkuYWJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc05lZ2F0aXZlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnRXhhY3ROdW1iZXIodGhpcy5udW0gKiAtMW4sIHRoaXMuZGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBmbG9vcigpOiBSZWFsTnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuZGVuID09PSAxbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0V4YWN0TnVtYmVyKHRoaXMubnVtIC8gdGhpcy5kZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBjZWlsaW5nKCk6IFJlYWxOdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5kZW4gPT09IDFuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnRXhhY3ROdW1iZXIoKHRoaXMubnVtIC8gdGhpcy5kZW4pICsgMW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyByb3VuZCgpOiBSZWFsTnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuZGVuID09PSAxbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmbG9vciA9IHRoaXMuZmxvb3IoKTtcbiAgICAgICAgICAgIGNvbnN0IGZsb29yZGlmZiA9IHRoaXMuc3VidHJhY3QoZmxvb3IpLmFicygpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWlsID0gdGhpcy5jZWlsaW5nKCk7XG4gICAgICAgICAgICBjb25zdCBjZWlsZGlmZiA9IGNlaWwuc3VidHJhY3QodGhpcykuYWJzKCk7XG5cbiAgICAgICAgICAgIGlmIChjZWlsZGlmZi5ncmVhdGVyVGhhbk9yRXF1YWwoZmxvb3JkaWZmKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjZWlsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmxvb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY29uanVnYXRlKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHB1YmxpYyBtYWduaXR1ZGUoKTogQm94ZWROdW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcHVibGljIHJlYWxQYXJ0KCk6IFJlYWxOdW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcHVibGljIGltYWdpbmFyeVBhcnQoKTogUmVhbE51bWJlciB7XG4gICAgICAgIHJldHVybiBFWEFDVF9aRVJPO1xuICAgIH1cbiAgICBwdWJsaWMgYW5nbGUoKTogQm94ZWROdW1iZXIge1xuICAgICAgICByZXR1cm4gbmV3IEJpZ0V4YWN0TnVtYmVyKDBuKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZWdhdGl2ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0NvbXBsZXgoKS5sb2coKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b0luZXhhY3QoKS5sb2coKTtcbiAgICB9XG4gICAgcHVibGljIGV4cHQocG93ZXI6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAocG93ZXIgaW5zdGFuY2VvZiBDb21wbGV4TnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0NvbXBsZXgoKS5leHB0KHBvd2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3dlci5pc0V4YWN0KCkgJiYgcG93ZXIuaXNJbnRlZ2VyKCkgJiYgIXBvd2VyLmlzTmVnYXRpdmUoKSkge1xuICAgICAgICAgICAgY29uc3QgZXhwID0gQmlnSW50KHBvd2VyLnRvRml4bnVtKCkpO1xuICAgICAgICAgICAgY29uc3QgbnVtID0gYmlnRXhwdCh0aGlzLm51bSwgZXhwKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbiA9IGJpZ0V4cHQodGhpcy5kZW4sIGV4cCk7XG5cbiAgICAgICAgICAgIGlmIChpc1NhZmVJbnRlZ2VyKG51bSkgJiYgaXNTYWZlSW50ZWdlcihkZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0TnVtYmVyKE51bWJlcihudW0pLCBOdW1iZXIoZGVuKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnRXhhY3ROdW1iZXIobnVtLCBkZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudG9JbmV4YWN0KCkuZXhwdChwb3dlcik7XG4gICAgfVxuICAgIHB1YmxpYyBleHAoKTogQm94ZWROdW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50b1NtYWxsRXhhY3QoKS5leHAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGFuKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TbWFsbEV4YWN0KCkudGFuKCk7XG4gICAgfVxuICAgIHB1YmxpYyBjb3MoKTogQm94ZWROdW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50b1NtYWxsRXhhY3QoKS5jb3MoKTtcbiAgICB9XG4gICAgcHVibGljIHNpbigpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU21hbGxFeGFjdCgpLnNpbigpO1xuICAgIH1cbiAgICBwdWJsaWMgYXRhbigpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU21hbGxFeGFjdCgpLmF0YW4oKTtcbiAgICB9XG4gICAgcHVibGljIGFjb3MoKTogQm94ZWROdW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50b1NtYWxsRXhhY3QoKS5hY29zKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhc2luKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TbWFsbEV4YWN0KCkuYXNpbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgTnVtYmVyLFxuICAgIEJveGVkTnVtYmVyLFxuICAgIFJlYWxOdW1iZXIsXG5cbiAgICBtYXRjaEV4YWN0bmVzcyxcblxuICAgIFpFUk8sXG4gICAgT05FLFxuICAgIEhBTEYsXG4gICAgVFdPLFxuICAgIE5FR19PTkUsXG5cbiAgICBJLFxuICAgIE5FR19JLFxuXG4gICAgUEksXG4gICAgTkVHX0lORixcbn0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wbGV4TnVtYmVyIGltcGxlbWVudHMgTnVtYmVyIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmVhbDogUmVhbE51bWJlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW1hZzogUmVhbE51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHJlYWw6IFJlYWxOdW1iZXIsIGltYWc/OiBSZWFsTnVtYmVyKSB7XG4gICAgICAgIHRoaXMucmVhbCA9IHJlYWw7XG5cbiAgICAgICAgaWYgKGltYWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5pbWFnID0gWkVSTztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZyA9IGltYWc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWtlIGl0IGltbXV0YWJsZVxuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0V4YWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmlzRXhhY3QoKSAmJiB0aGlzLmltYWcuaXNFeGFjdCgpO1xuICAgIH1cbiAgICBwdWJsaWMgaXNJbmV4YWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNFeGFjdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b0luZXhhY3QoKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc0luZXhhY3QoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWwudG9JbmV4YWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb21wbGV4TnVtYmVyKHRoaXMucmVhbC50b0luZXhhY3QoKSwgdGhpcy5pbWFnLnRvSW5leGFjdCgpKTtcbiAgICB9XG4gICAgcHVibGljIHRvRXhhY3QoKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc0V4YWN0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFsLnRvRXhhY3QoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENvbXBsZXhOdW1iZXIodGhpcy5yZWFsLnRvRXhhY3QoKSwgdGhpcy5pbWFnLnRvRXhhY3QoKSk7XG4gICAgfVxuICAgIHB1YmxpYyB0b1JlYWwoKTogUmVhbE51bWJlciB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNvbXBsZXggbnVtYmVyIGNhbm5vdCBiZSBtYWRlIHJlYWwuXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbDtcbiAgICB9XG4gICAgcHVibGljIHRvQ29tcGxleCgpOiBDb21wbGV4TnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHB1YmxpYyB0b0ZpeG51bSgpOiBudW1iZXIge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJOb3QgZGVmaW5lZCBmb3IgY29tcGxleCBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFsLnRvRml4bnVtKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzSW50ZWdlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNSYXRpb25hbCgpICYmIHRoaXMucmVhbC5pc0ludGVnZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGlzUmF0aW9uYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUmVhbCgpICYmIHRoaXMuaXNGaW5pdGUoKTtcbiAgICB9XG4gICAgcHVibGljIGlzUmVhbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZy5pc1plcm8oKSAmJiB0aGlzLmltYWcuaXNFeGFjdCgpO1xuICAgIH1cbiAgICBwdWJsaWMgaXNDb21wbGV4KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNaZXJvKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmlzWmVybygpICYmIHRoaXMuaW1hZy5pc1plcm8oKTtcbiAgICB9XG4gICAgcHVibGljIGlzTmVnYXRpdmVaZXJvKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1JlYWwoKSAmJiB0aGlzLnJlYWwuaXNOZWdhdGl2ZVplcm8oKTtcbiAgICB9XG4gICAgcHVibGljIGlzUG9zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vdCBkZWZpbmVkIGZvciBjb21wbGV4IG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWwuaXNQb3NpdGl2ZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgaXNOZWdhdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm90IGRlZmluZWQgZm9yIGNvbXBsZXggbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5pc05lZ2F0aXZlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBpc0V2ZW4oKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5pc0ludGVnZXIoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9ubHkgZGVmaW5lZCBmb3IgSW50ZWdlcnMuXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5pc0V2ZW4oKTtcbiAgICB9XG4gICAgcHVibGljIGlzRmluaXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmlzRmluaXRlKCkgJiYgdGhpcy5pbWFnLmlzRmluaXRlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBpc05hTigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5pc05hTigpIHx8IHRoaXMuaW1hZy5pc05hTigpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhbC50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhbC50b1N0cmluZygpICsgdGhpcy5pbWFnLnRvU2lnbmVkU3RyaW5nKCkgKyBcImlcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgdG9TaWduZWRTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbC50b1NpZ25lZFN0cmluZygpICsgdGhpcy5pbWFnLnRvU2lnbmVkU3RyaW5nKCkgKyBcImlcIjtcbiAgICB9XG4gICAgcHVibGljIFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQ6IHN0cmluZyk6IG51bWJlciB8IGJpZ2ludCB8IHN0cmluZyB7XG4gICAgICAgIGlmIChoaW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlci5OYU47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmltaXRpdmUgPSB0aGlzLnJlYWxbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50KTtcblxuICAgICAgICBpZiAoaGludCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHByaW1pdGl2ZSA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIocHJpbWl0aXZlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoaW50ID09PSAnZGVmYXVsdCcgJiYgdHlwZW9mIHByaW1pdGl2ZSA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIocHJpbWl0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmltaXRpdmU7XG4gICAgfVxuXG4gICAgcHVibGljIGdyZWF0ZXJUaGFuKG90aGVyOiBCb3hlZE51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFsKCkgfHwgIW90aGVyLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHcmVhdGVyIHRoYW4gbm90IGRlZmluZWQgZm9yIGNvbXBsZXggbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5ncmVhdGVyVGhhbihvdGhlcik7XG4gICAgfVxuICAgIHB1YmxpYyBncmVhdGVyVGhhbk9yRXF1YWwob3RoZXI6IEJveGVkTnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWwoKSB8fCAhb3RoZXIuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdyZWF0ZXIgdGhhbiBvciBlcXVhbCBub3QgZGVmaW5lZCBmb3IgY29tcGxleCBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmdyZWF0ZXJUaGFuT3JFcXVhbChvdGhlcik7XG4gICAgfVxuICAgIHB1YmxpYyBsZXNzVGhhbihvdGhlcjogQm94ZWROdW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhbCgpIHx8ICFvdGhlci5pc1JlYWwoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTGVzcyB0aGFuIG5vdCBkZWZpbmVkIGZvciBjb21wbGV4IG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWwubGVzc1RoYW4ob3RoZXIpO1xuICAgIH1cbiAgICBwdWJsaWMgbGVzc1RoYW5PckVxdWFsKG90aGVyOiBCb3hlZE51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFsKCkgfHwgIW90aGVyLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMZXNzIHRoYW4gb3IgZXF1YWwgbm90IGRlZmluZWQgZm9yIGNvbXBsZXggbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5sZXNzVGhhbk9yRXF1YWwob3RoZXIpO1xuICAgIH1cbiAgICBwdWJsaWMgZXF1YWxzKG90aGVyOiBCb3hlZE51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBvdGhlciA9IG90aGVyLnRvQ29tcGxleCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmVxdWFscyhvdGhlci5yZWFsKSAmJiB0aGlzLmltYWcuZXF1YWxzKG90aGVyLmltYWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGQob3RoZXI6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXIge1xuICAgICAgICBsZXQgcmVhbCA9IHRoaXMucmVhbFBhcnQoKS5hZGQob3RoZXIucmVhbFBhcnQoKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNSZWFsKCkgJiYgb3RoZXIuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGltYWcgPSB0aGlzLmltYWdpbmFyeVBhcnQoKS5hZGQob3RoZXIuaW1hZ2luYXJ5UGFydCgpKTtcblxuICAgICAgICBbcmVhbCwgaW1hZ10gPSBtYXRjaEV4YWN0bmVzcyhyZWFsLCBpbWFnKTtcblxuICAgICAgICByZXR1cm4gbmV3IENvbXBsZXhOdW1iZXIocmVhbCwgaW1hZyk7XG4gICAgfVxuICAgIHB1YmxpYyBzdWJ0cmFjdChvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGxldCByZWFsID0gdGhpcy5yZWFsUGFydCgpLnN1YnRyYWN0KG90aGVyLnJlYWxQYXJ0KCkpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzUmVhbCgpICYmIG90aGVyLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbWFnID0gdGhpcy5pbWFnaW5hcnlQYXJ0KCkuc3VidHJhY3Qob3RoZXIuaW1hZ2luYXJ5UGFydCgpKTtcblxuICAgICAgICBbcmVhbCwgaW1hZ10gPSBtYXRjaEV4YWN0bmVzcyhyZWFsLCBpbWFnKTtcblxuICAgICAgICByZXR1cm4gbmV3IENvbXBsZXhOdW1iZXIocmVhbCwgaW1hZyk7XG4gICAgfVxuICAgIHB1YmxpYyBtdWx0aXBseShvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGNvbnN0IHRoaXNSZWFsID0gdGhpcy5yZWFsUGFydCgpO1xuICAgICAgICBjb25zdCB0aGlzSW1hZyA9IHRoaXMuaW1hZ2luYXJ5UGFydCgpO1xuICAgICAgICBjb25zdCBvdGhlclJlYWwgPSBvdGhlci5yZWFsUGFydCgpO1xuICAgICAgICBjb25zdCBvdGhlckltYWcgPSBvdGhlci5pbWFnaW5hcnlQYXJ0KCk7XG5cbiAgICAgICAgbGV0IHJlYWwgPSB0aGlzUmVhbC5tdWx0aXBseShvdGhlclJlYWwpLnN1YnRyYWN0KHRoaXNJbWFnLm11bHRpcGx5KG90aGVySW1hZykpO1xuICAgICAgICBjb25zdCBpbWFnID0gdGhpc1JlYWwubXVsdGlwbHkob3RoZXJJbWFnKS5hZGQodGhpc0ltYWcubXVsdGlwbHkob3RoZXJSZWFsKSk7XG5cbiAgICAgICAgcmVhbCA9ICFpbWFnLmlzRXhhY3QoKSA/IHJlYWwudG9JbmV4YWN0KCkgOiByZWFsO1xuXG4gICAgICAgIGlmIChpbWFnLmlzRXhhY3QoKSAmJiBpbWFnLmlzWmVybygpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgQ29tcGxleE51bWJlcihyZWFsLCBpbWFnKTtcbiAgICB9XG4gICAgcHVibGljIGRpdmlkZShvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIC8vIElmIHRoZSBvdGhlciB2YWx1ZSBpcyByZWFsLCBqdXN0IGRvIHByaW1pdGl2ZSBkaXZpc2lvblxuICAgICAgICBpZiAob3RoZXIuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWwgPSB0aGlzLnJlYWxQYXJ0KCkuZGl2aWRlKG90aGVyLnJlYWxQYXJ0KCkpO1xuICAgICAgICAgICAgY29uc3QgaW1hZyA9IHRoaXMuaW1hZ2luYXJ5UGFydCgpLmRpdmlkZShvdGhlci5yZWFsUGFydCgpKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29tcGxleE51bWJlcihyZWFsLCBpbWFnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhLCBiLCBjLCBkLCByLCB4LCB5O1xuICAgICAgICBpZiAodGhpcy5pc0luZXhhY3QoKSB8fCBvdGhlci5pc0luZXhhY3QoKSkge1xuICAgICAgICAgICAgLy8gaHR0cDovL3BvcnRhbC5hY20ub3JnL2NpdGF0aW9uLmNmbT9pZD0xMDM5ODE0XG4gICAgICAgICAgICAvLyBXZSBjdXJyZW50bHkgdXNlIFNtaXRoJ3MgbWV0aG9kLCB0aG91Z2ggd2Ugc2hvdWxkXG4gICAgICAgICAgICAvLyBwcm9iYWJseSBzd2l0Y2ggb3ZlciB0byBQcmllc3QncyBtZXRob2QuXG4gICAgICAgICAgICBhID0gdGhpcy5yZWFsUGFydCgpO1xuICAgICAgICAgICAgYiA9IHRoaXMuaW1hZ2luYXJ5UGFydCgpO1xuICAgICAgICAgICAgYyA9IG90aGVyLnJlYWxQYXJ0KCk7XG4gICAgICAgICAgICBkID0gb3RoZXIuaW1hZ2luYXJ5UGFydCgpO1xuICAgICAgICAgICAgaWYgKGQuYWJzKCkubGVzc1RoYW5PckVxdWFsKGMuYWJzKCkpKSB7XG4gICAgICAgICAgICAgICAgciA9IGQuZGl2aWRlKGMpO1xuICAgICAgICAgICAgICAgIHggPSBhLmFkZChiLm11bHRpcGx5KHIpKS5kaXZpZGUoYy5hZGQoZC5tdWx0aXBseShyKSkpO1xuICAgICAgICAgICAgICAgIHkgPSBiLnN1YnRyYWN0KGEubXVsdGlwbHkocikpLmRpdmlkZShjLmFkZChkLm11bHRpcGx5KHIpKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHIgPSBjLmRpdmlkZShkKTtcbiAgICAgICAgICAgICAgICB4ID0gYS5tdWx0aXBseShyKS5hZGQoYikuZGl2aWRlKGMubXVsdGlwbHkocikuYWRkKGQpKTtcbiAgICAgICAgICAgICAgICB5ID0gYi5tdWx0aXBseShyKS5zdWJ0cmFjdChhKS5kaXZpZGUoYy5tdWx0aXBseShyKS5hZGQoZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21wbGV4TnVtYmVyKHgsIHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY29uID0gb3RoZXIuY29uanVnYXRlKCk7XG4gICAgICAgICAgICBjb25zdCB1cCA9IHRoaXMubXVsdGlwbHkoY29uKTtcblxuICAgICAgICAgICAgLy8gRG93biBpcyBndWFyYW50ZWVkIHRvIGJlIHJlYWwgYnkgdGhpcyBwb2ludC5cbiAgICAgICAgICAgIGNvbnN0IGRvd24gPSBvdGhlci5tdWx0aXBseShjb24pLnJlYWxQYXJ0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlYWwgPSB1cC5yZWFsUGFydCgpLmRpdmlkZShkb3duKS5yZWFsUGFydCgpO1xuICAgICAgICAgICAgY29uc3QgaW1hZyA9IHVwLmltYWdpbmFyeVBhcnQoKS5kaXZpZGUoZG93bikucmVhbFBhcnQoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29tcGxleE51bWJlcihyZWFsLCBpbWFnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBudW1lcmF0b3IoKTogUmVhbE51bWJlciB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTnVtZXJhdG9yIG5vdCBkZWZpbmVkIGZvciBjb21wbGV4IG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWwubnVtZXJhdG9yKCk7XG4gICAgfVxuICAgIHB1YmxpYyBkZW5vbWluYXRvcigpOiBSZWFsTnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEZW5vbWluYXRvciBub3QgZGVmaW5lZCBmb3IgY29tcGxleCBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmRlbm9taW5hdG9yKCk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogQ29udGludWUgaGVyZS4uLlxuICAgIHB1YmxpYyBpbnRlZ2VyU3FydCgpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzSW50ZWdlcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmludGVnZXJTcXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnRlZ2VyU3FydCBvbmx5IGRlZmluZWQgZm9yIGludGVnZXJzLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3FydCgpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVhbCgpICYmICF0aGlzLmlzTmVnYXRpdmUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5zcXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NxdWFyZV9yb290I1NxdWFyZV9yb290c19vZl9uZWdhdGl2ZV9hbmRfY29tcGxleF9udW1iZXJzXG4gICAgICAgIGNvbnN0IG1hZyA9IHRoaXMubWFnbml0dWRlKCkucmVhbFBhcnQoKTtcbiAgICAgICAgY29uc3Qgcl9wbHVzX3ggPSBtYWcuYWRkKHRoaXMucmVhbCk7XG5cbiAgICAgICAgY29uc3QgcmVhbCA9IHJfcGx1c194LmRpdmlkZShUV08pLnNxcnQoKS5yZWFsUGFydCgpO1xuICAgICAgICBjb25zdCBpbWFnID0gdGhpcy5pbWFnLmRpdmlkZShyX3BsdXNfeC5tdWx0aXBseShUV08pLnNxcnQoKSkucmVhbFBhcnQoKTtcblxuICAgICAgICByZXR1cm4gbmV3IENvbXBsZXhOdW1iZXIocmVhbCwgaW1hZyk7XG4gICAgfVxuICAgIHB1YmxpYyBhYnMoKTogUmVhbE51bWJlciB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYWJzIGlzIG5vdCBkZWZpbmVkIGZvciBjb21wbGV4IG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWwuYWJzKCk7XG4gICAgfVxuICAgIHB1YmxpYyBmbG9vcigpOiBSZWFsTnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmbG9vciBpcyBub3QgZGVmaW5lZCBmb3IgY29tcGxleCBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmZsb29yKCk7XG4gICAgfVxuICAgIHB1YmxpYyBjZWlsaW5nKCk6IFJlYWxOdW1iZXIge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNlaWxpbmcgaXMgbm90IGRlZmluZWQgZm9yIGNvbXBsZXggbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5jZWlsaW5nKCk7XG4gICAgfVxuICAgIHB1YmxpYyByb3VuZCgpOiBSZWFsTnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyb3VuZCBpcyBub3QgZGVmaW5lZCBmb3IgY29tcGxleCBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFsLnJvdW5kKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmp1Z2F0ZSgpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIHJldHVybiBuZXcgQ29tcGxleE51bWJlcih0aGlzLnJlYWwsIFpFUk8uc3VidHJhY3QodGhpcy5pbWFnKSk7XG4gICAgfVxuICAgIHB1YmxpYyBtYWduaXR1ZGUoKTogQm94ZWROdW1iZXIge1xuICAgICAgICBjb25zdCByZWFsU3FyID0gdGhpcy5yZWFsLm11bHRpcGx5KHRoaXMucmVhbCk7XG4gICAgICAgIGNvbnN0IGltYWdTcXIgPSB0aGlzLmltYWcubXVsdGlwbHkodGhpcy5pbWFnKTtcbiAgICAgICAgY29uc3Qgc3VtID0gcmVhbFNxci5hZGQoaW1hZ1Nxcik7XG4gICAgICAgIHJldHVybiBzdW0uc3FydCgpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVhbFBhcnQoKTogUmVhbE51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWw7XG4gICAgfVxuICAgIHB1YmxpYyBpbWFnaW5hcnlQYXJ0KCk6IFJlYWxOdW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2coKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc1JlYWwoKSAmJiB0aGlzLmlzUG9zaXRpdmUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5sb2coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hZyA9IHRoaXMubWFnbml0dWRlKCkucmVhbFBhcnQoKTtcbiAgICAgICAgY29uc3QgbWFnX2xvZyA9IG1hZy5sb2coKTtcblxuICAgICAgICBjb25zdCB0aGV0YSA9IHRoaXMuYW5nbGUoKTtcblxuICAgICAgICByZXR1cm4gbWFnX2xvZy5hZGQodGhldGEubXVsdGlwbHkoSSkpO1xuICAgIH1cbiAgICBwdWJsaWMgZXhwdChwb3dlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmIChwb3dlci5pc0V4YWN0KCkgJiYgcG93ZXIuaXNJbnRlZ2VyKCkgJiYgcG93ZXIuZ3JlYXRlclRoYW5PckVxdWFsKFpFUk8pKSB7XG4gICAgICAgICAgICBsZXQgbjogQm94ZWROdW1iZXIgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IGs6IGJpZ2ludCA9IEJpZ0ludChwb3dlci50b0ZpeG51bSgpKTtcblxuICAgICAgICAgICAgbGV0IGFjYzogQm94ZWROdW1iZXIgPSBPTkU7XG5cbiAgICAgICAgICAgIHdoaWxlIChrICE9PSAwbikge1xuICAgICAgICAgICAgICAgIGlmIChrICUgMm4gPT09IDBuKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBuLm11bHRpcGx5KG4pO1xuICAgICAgICAgICAgICAgICAgICBrID0gayAvIDJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFjYyA9IGFjYy5tdWx0aXBseShuKTtcbiAgICAgICAgICAgICAgICAgICAgayA9IGsgLSAxbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhwbyA9IHBvd2VyLm11bHRpcGx5KHRoaXMubG9nKCkpO1xuICAgICAgICByZXR1cm4gZXhwby5leHAoKTtcbiAgICB9XG4gICAgcHVibGljIGV4cCgpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmV4cCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgciA9IHRoaXMucmVhbC5leHAoKTtcbiAgICAgICAgY29uc3QgY29zX2EgPSB0aGlzLmltYWcuY29zKCk7XG4gICAgICAgIGNvbnN0IHNpbl9hID0gdGhpcy5pbWFnLnNpbigpO1xuXG4gICAgICAgIHJldHVybiByLm11bHRpcGx5KGNvc19hLmFkZChzaW5fYS5tdWx0aXBseShJKSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbmdsZSgpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmFuZ2xlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVhbC5pc1plcm8oKSkge1xuICAgICAgICAgICAgY29uc3QgaGFsZlBJID0gUEkuZGl2aWRlKFRXTyk7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnLmlzUG9zaXRpdmUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYWxmUEk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYWxmUEkubXVsdGlwbHkoTkVHX09ORSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0bXAgPSB0aGlzLmltYWdpbmFyeVBhcnQoKS5hYnMoKS5kaXZpZGUodGhpcy5yZWFsUGFydCgpLmFicygpKS5hdGFuKCk7XG4gICAgICAgIGlmICh0aGlzLnJlYWwuaXNQb3NpdGl2ZSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnLmlzUG9zaXRpdmUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0bXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0bXAubXVsdGlwbHkoTkVHX09ORSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnLmlzUG9zaXRpdmUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQSS5zdWJ0cmFjdCh0bXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG1wLnN1YnRyYWN0KFBJKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgdGFuKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWwudGFuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2luKCkuZGl2aWRlKHRoaXMuY29zKCkpO1xuICAgIH1cbiAgICBwdWJsaWMgY29zKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWwuY29zKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXogPSB0aGlzLm11bHRpcGx5KEkpO1xuICAgICAgICBjb25zdCBpel9uZWdhdGUgPSBpei5tdWx0aXBseShORUdfT05FKTtcbiAgICAgICAgcmV0dXJuIGl6LmV4cCgpLmFkZChpel9uZWdhdGUuZXhwKCkpLmRpdmlkZShUV08pO1xuICAgIH1cbiAgICBwdWJsaWMgc2luKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWwuc2luKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXogPSB0aGlzLm11bHRpcGx5KEkpO1xuICAgICAgICBjb25zdCBpel9uZWdhdGUgPSBpei5tdWx0aXBseShORUdfT05FKTtcbiAgICAgICAgY29uc3QgejIgPSBuZXcgQ29tcGxleE51bWJlcihaRVJPLCBUV08pO1xuICAgICAgICBjb25zdCBleHBfbmVnYXRlID0gaXouZXhwKCkuc3VidHJhY3QoaXpfbmVnYXRlLmV4cCgpKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZXhwX25lZ2F0ZS5kaXZpZGUoejIpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgYXRhbigpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzWmVybygpKSB7XG4gICAgICAgICAgICByZXR1cm4gWkVSTztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5hdGFuKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZXF1YWxzKEkpIHx8IHRoaXMuZXF1YWxzKE5FR19JKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5FR19JTkY7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0OiBCb3hlZE51bWJlcjtcbiAgICAgICAgcmVzdWx0ID0gWkVSTy5zdWJ0cmFjdCh0aGlzKTtcbiAgICAgICAgcmVzdWx0ID0gSS5hZGQocmVzdWx0KTtcbiAgICAgICAgcmVzdWx0ID0gSS5hZGQodGhpcykuZGl2aWRlKHJlc3VsdCk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5sb2coKTtcbiAgICAgICAgcmVzdWx0ID0gSEFMRi5tdWx0aXBseShyZXN1bHQpO1xuICAgICAgICByZXN1bHQgPSBJLm11bHRpcGx5KHJlc3VsdCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHVibGljIGFjb3MoKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc1JlYWwoKSAmJiB0aGlzLmdyZWF0ZXJUaGFuT3JFcXVhbChORUdfT05FKSAmJiB0aGlzLmxlc3NUaGFuT3JFcXVhbChPTkUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmFjb3MoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwaV9oYWxmID0gUEkuZGl2aWRlKFRXTyk7XG4gICAgICAgIGNvbnN0IGl6ID0gdGhpcy5tdWx0aXBseShJKTtcbiAgICAgICAgY29uc3Qgcm9vdCA9IE9ORS5zdWJ0cmFjdCh0aGlzLm11bHRpcGx5KHRoaXMpKS5zcXJ0KCk7XG4gICAgICAgIGNvbnN0IGwgPSBpei5hZGQocm9vdCkubG9nKCkubXVsdGlwbHkoSSk7XG4gICAgICAgIHJldHVybiBwaV9oYWxmLmFkZChsKTtcbiAgICB9XG4gICAgcHVibGljIGFzaW4oKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc1JlYWwoKSAmJiB0aGlzLmdyZWF0ZXJUaGFuT3JFcXVhbChORUdfT05FKSAmJiB0aGlzLmxlc3NUaGFuT3JFcXVhbChPTkUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmFzaW4oKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbmVOZWdhdGVUaGlzU3EgPSBPTkUuc3VidHJhY3QodGhpcy5tdWx0aXBseSh0aGlzKSk7XG4gICAgICAgIGNvbnN0IHNxcnRPbmVOZWdhdGVUaGlzU3EgPSBvbmVOZWdhdGVUaGlzU3Euc3FydCgpO1xuICAgICAgICByZXR1cm4gVFdPLm11bHRpcGx5KHRoaXMuZGl2aWRlKE9ORS5hZGQoc3FydE9uZU5lZ2F0ZVRoaXNTcSkpLmF0YW4oKSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQge1xuICAgIEluZXhhY3ROdW1iZXIsXG4gICAgU21hbGxFeGFjdE51bWJlcixcbiAgICBDb21wbGV4TnVtYmVyXG59IGZyb20gJy4vaW5kZXgnO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBFeGFjdCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZXhwb3J0IGNvbnN0IEVYQUNUX1pFUk8gPSBuZXcgU21hbGxFeGFjdE51bWJlcigwLCAxKTtcbmV4cG9ydCBjb25zdCBFWEFDVF9IQUxGID0gbmV3IFNtYWxsRXhhY3ROdW1iZXIoMSwgMik7XG5leHBvcnQgY29uc3QgRVhBQ1RfT05FID0gbmV3IFNtYWxsRXhhY3ROdW1iZXIoMSwgMSk7XG5leHBvcnQgY29uc3QgRVhBQ1RfVFdPID0gbmV3IFNtYWxsRXhhY3ROdW1iZXIoMiwgMSk7XG5leHBvcnQgY29uc3QgRVhBQ1RfTkVHX09ORSA9IG5ldyBTbWFsbEV4YWN0TnVtYmVyKC0xLCAxKTtcblxuZXhwb3J0IGNvbnN0IFpFUk8gPSBFWEFDVF9aRVJPO1xuZXhwb3J0IGNvbnN0IE9ORSA9IEVYQUNUX09ORTtcbmV4cG9ydCBjb25zdCBIQUxGID0gRVhBQ1RfSEFMRjtcbmV4cG9ydCBjb25zdCBUV08gPSBFWEFDVF9UV087XG5leHBvcnQgY29uc3QgTkVHX09ORSA9IEVYQUNUX05FR19PTkU7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEluZXhhY3QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydCBjb25zdCBJTkVYQUNUX1pFUk8gPSBuZXcgSW5leGFjdE51bWJlcigwKTtcbmV4cG9ydCBjb25zdCBJTkVYQUNUX05FR19aRVJPID0gbmV3IEluZXhhY3ROdW1iZXIoLTApO1xuZXhwb3J0IGNvbnN0IElORVhBQ1RfSEFMRiA9IG5ldyBJbmV4YWN0TnVtYmVyKDAuNSk7XG5leHBvcnQgY29uc3QgSU5FWEFDVF9PTkUgPSBuZXcgSW5leGFjdE51bWJlcigxKTtcbmV4cG9ydCBjb25zdCBJTkVYQUNUX1RXTyA9IG5ldyBJbmV4YWN0TnVtYmVyKDIpO1xuZXhwb3J0IGNvbnN0IElORVhBQ1RfTkVHX09ORSA9IG5ldyBJbmV4YWN0TnVtYmVyKC0xKTtcblxuZXhwb3J0IGNvbnN0IFBJID0gbmV3IEluZXhhY3ROdW1iZXIoTWF0aC5QSSk7XG5cbmV4cG9ydCBjb25zdCBJTkYgPSBuZXcgSW5leGFjdE51bWJlcihJbmZpbml0eSk7XG5leHBvcnQgY29uc3QgTkVHX0lORiA9IG5ldyBJbmV4YWN0TnVtYmVyKC1JbmZpbml0eSk7XG5cbmV4cG9ydCBjb25zdCBOQU4gPSBuZXcgSW5leGFjdE51bWJlcihOYU4pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBDb21wbGV4IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5leHBvcnQgY29uc3QgRVhBQ1RfSSA9IG5ldyBDb21wbGV4TnVtYmVyKFpFUk8sIE9ORSk7XG5leHBvcnQgY29uc3QgRVhBQ1RfTkVHX0kgPSBuZXcgQ29tcGxleE51bWJlcihaRVJPLCBORUdfT05FKTtcblxuZXhwb3J0IGNvbnN0IElORVhBQ1RfSSA9IG5ldyBDb21wbGV4TnVtYmVyKElORVhBQ1RfWkVSTywgSU5FWEFDVF9PTkUpO1xuZXhwb3J0IGNvbnN0IElORVhBQ1RfTkVHX0kgPSBuZXcgQ29tcGxleE51bWJlcihJTkVYQUNUX1pFUk8sIElORVhBQ1RfTkVHX09ORSk7XG5cbmV4cG9ydCBjb25zdCBJID0gRVhBQ1RfSVxuZXhwb3J0IGNvbnN0IE5FR19JID0gRVhBQ1RfTkVHX0k7XG5cblxuLy8vLy8vLy8gQmFja3dhcmRzIENvbXBhdGliaWxpdHkgd2l0aCBqcy1udW1iZXJzIC8vLy8vL1xuZXhwb3J0IGNvbnN0IHplcm8gPSBFWEFDVF9aRVJPO1xuZXhwb3J0IGNvbnN0IG9uZSA9IEVYQUNUX09ORTtcbmV4cG9ydCBjb25zdCB0d28gPSBFWEFDVF9UV087XG5leHBvcnQgY29uc3QgbmVnYXRpdmVfb25lID0gRVhBQ1RfTkVHX09ORTtcblxuZXhwb3J0IGNvbnN0IHBpID0gUEk7XG5leHBvcnQgY29uc3QgZSA9IG5ldyBJbmV4YWN0TnVtYmVyKE1hdGguRSk7XG5leHBvcnQgY29uc3QgbmFuID0gTkFOO1xuZXhwb3J0IGNvbnN0IG5lZ2F0aXZlX2luZiA9IE5FR19JTkY7XG5leHBvcnQgY29uc3QgaW5mID0gSU5GO1xuZXhwb3J0IGNvbnN0IG5lZ2F0aXZlX3plcm8gPSBJTkVYQUNUX05FR19aRVJPO1xuXG5leHBvcnQgY29uc3QgaSA9IEVYQUNUX0lcbmV4cG9ydCBjb25zdCBuZWdhdGl2ZV9pID0gRVhBQ1RfTkVHX0k7XG4iLCJpbXBvcnQge1xuICAgIFJhY2tldE51bWJlcixcbiAgICBJbmV4YWN0TnVtYmVyLFxufSBmcm9tICcuLi90b3dlcic7XG5cbnR5cGUgTm9ybWFsaXphYmxlID0gKC4uLm46IFJhY2tldE51bWJlcltdKSA9PiBSYWNrZXROdW1iZXI7XG50eXBlIE5vcm1hbGl6ZWQ8RiBleHRlbmRzIE5vcm1hbGl6YWJsZT4gPSAoLi4ubjogUGFyYW1ldGVyczxGPikgPT4gUmFja2V0TnVtYmVyO1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZWQ8RnVuYyBleHRlbmRzIE5vcm1hbGl6YWJsZT4oZm46IEZ1bmMpOiBOb3JtYWxpemVkPEZ1bmM+IHtcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4ubnVtczogUmFja2V0TnVtYmVyW10pOiBSYWNrZXROdW1iZXIge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBudW1zW2ldO1xuICAgICAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBJbmV4YWN0TnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgbnVtc1tpXSA9IG4ubnVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4oLi4ubnVtcyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEluZXhhY3ROdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQubnVtO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKHg6IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKHggaW5zdGFuY2VvZiBJbmV4YWN0TnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB4Lm51bTtcbiAgICB9XG4gICAgcmV0dXJuIHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29tcGF0aWJsZSh4OiBSYWNrZXROdW1iZXIsIHk6IFJhY2tldE51bWJlcik6IFtSYWNrZXROdW1iZXIsIFJhY2tldE51bWJlcl0ge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHggPSBuZXcgSW5leGFjdE51bWJlcih4KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB5ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgeSA9IG5ldyBJbmV4YWN0TnVtYmVyKHkpO1xuICAgIH1cbiAgICByZXR1cm4gW3gsIHldO1xufVxuXG5leHBvcnQgKiBmcm9tICcuLi91dGlsJztcbiIsImltcG9ydCB7XG4gICAgUmFja2V0TnVtYmVyLFxuICAgIGlzQm94ZWROdW1iZXJcbn0gZnJvbSBcIi4uL3Rvd2VyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih4OiBhbnkpOiB4IGlzIFJhY2tldE51bWJlciB7XG4gICAgY29uc3QgaXNOdW1iZXIgPSB0eXBlb2YgeCA9PT0gJ251bWJlcic7XG4gICAgY29uc3QgaXNCb3hlZCA9IGlzQm94ZWROdW1iZXIoeCk7XG4gICAgcmV0dXJuIGlzTnVtYmVyIHx8IGlzQm94ZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBpc0NvbXBsZXggPSBpc051bWJlcjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhbCh4OiBhbnkpOiB4IGlzIFJhY2tldE51bWJlciB7XG4gICAgY29uc3QgaXNOdW1iZXIgPSB0eXBlb2YgeCA9PT0gJ251bWJlcic7XG4gICAgY29uc3QgaXNCb3hlZFJlYWwgPSBpc0JveGVkTnVtYmVyKHgpICYmIHguaXNSZWFsKCk7XG4gICAgcmV0dXJuIGlzTnVtYmVyIHx8IGlzQm94ZWRSZWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSYXRpb25hbCh4OiBhbnkpOiB4IGlzIFJhY2tldE51bWJlciB7XG4gICAgY29uc3QgaXNOdW1iZXIgPSB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzRmluaXRlKHgpO1xuICAgIGNvbnN0IGlzQm94ZWRSYXRpb25hbCA9IGlzQm94ZWROdW1iZXIoeCkgJiYgeC5pc1JhdGlvbmFsKCk7XG4gICAgcmV0dXJuIGlzTnVtYmVyIHx8IGlzQm94ZWRSYXRpb25hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcih4OiBhbnkpOiB4IGlzIFJhY2tldE51bWJlciB7XG4gICAgY29uc3QgaXNOdW1iZXIgPSB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzSW50ZWdlcih4KTtcbiAgICBjb25zdCBpc0JveGVkSW50ZWdlciA9IGlzQm94ZWROdW1iZXIoeCkgJiYgeC5pc0ludGVnZXIoKTtcbiAgICByZXR1cm4gaXNOdW1iZXIgfHwgaXNCb3hlZEludGVnZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V4YWN0SW50ZWdlcih4OiBhbnkpOiB4IGlzIFJhY2tldE51bWJlciB7XG4gICAgcmV0dXJuIGlzQm94ZWROdW1iZXIoeCkgJiYgeC5pc0ludGVnZXIoKSAmJiB4LmlzRXhhY3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXhhY3ROb25OZWdhdGl2ZUludGVnZXIoeDogYW55KTogeCBpcyBSYWNrZXROdW1iZXIge1xuICAgIHJldHVybiBpc0JveGVkTnVtYmVyKHgpICYmIHguaXNJbnRlZ2VyKCkgJiYgeC5pc0V4YWN0KCkgJiYgIXguaXNOZWdhdGl2ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFeGFjdFBvc2l0aXZlSW50ZWdlcih4OiBhbnkpOiB4IGlzIFJhY2tldE51bWJlciB7XG4gICAgcmV0dXJuIGlzQm94ZWROdW1iZXIoeCkgJiYgeC5pc0ludGVnZXIoKSAmJiB4LmlzRXhhY3QoKSAmJiB4LmlzUG9zaXRpdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5leGFjdFJlYWwoeDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJ1xuICAgICAgICB8fCAoaXNCb3hlZE51bWJlcih4KSAmJiB4LmlzUmVhbCgpICYmIHguaXNJbmV4YWN0KCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGbG9udW0oeDogYW55KTogeCBpcyBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1plcm8objogUmFja2V0TnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZm9yTnVtYmVyID0gdHlwZW9mIG4gPT09ICdudW1iZXInICYmIG4gPT09IDA7XG4gICAgY29uc3QgZm9yQm94ZWQgPSBpc0JveGVkTnVtYmVyKG4pICYmIG4uaXNaZXJvKCk7XG4gICAgcmV0dXJuIGZvck51bWJlciB8fCBmb3JCb3hlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUG9zaXRpdmUobjogUmFja2V0TnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZm9yTnVtYmVyID0gdHlwZW9mIG4gPT09ICdudW1iZXInICYmIG4gPiAwO1xuICAgIGNvbnN0IGZvckJveGVkID0gaXNCb3hlZE51bWJlcihuKSAmJiBuLmlzUG9zaXRpdmUoKTtcbiAgICByZXR1cm4gZm9yTnVtYmVyIHx8IGZvckJveGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOZWdhdGl2ZShuOiBSYWNrZXROdW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBmb3JOdW1iZXIgPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgJiYgbiA8IDA7XG4gICAgY29uc3QgZm9yQm94ZWQgPSBpc0JveGVkTnVtYmVyKG4pICYmIG4uaXNOZWdhdGl2ZSgpO1xuICAgIHJldHVybiBmb3JOdW1iZXIgfHwgZm9yQm94ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V2ZW4objogUmFja2V0TnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKCFpc0ludGVnZXIobikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIidpc0V2ZW4nIG9ubHkgZGVmaW5lZCBmb3IgaW50ZWdlcnNcIik7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yTnVtYmVyID0gdHlwZW9mIG4gPT09ICdudW1iZXInICYmIG4gJSAyID09PSAwO1xuICAgIGNvbnN0IGZvckJveGVkID0gaXNCb3hlZE51bWJlcihuKSAmJiBuLmlzRXZlbigpO1xuICAgIHJldHVybiBmb3JOdW1iZXIgfHwgZm9yQm94ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09kZChuOiBSYWNrZXROdW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoIWlzSW50ZWdlcihuKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiJ2lzT2RkJyBvbmx5IGRlZmluZWQgZm9yIGludGVnZXJzXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAhaXNFdmVuKG4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFeGFjdChuOiBSYWNrZXROdW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNCb3hlZE51bWJlcihuKSAmJiBuLmlzRXhhY3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5leGFjdChuOiBSYWNrZXROdW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInXG4gICAgICAgIHx8IChpc0JveGVkTnVtYmVyKG4pICYmIG4uaXNJbmV4YWN0KCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSYWNrZXROdW1iZXIobjogUmFja2V0TnVtYmVyKTogbiBpcyBSYWNrZXROdW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcidcbiAgICAgICAgfHwgaXNCb3hlZE51bWJlcihuKTtcbn1cbmV4cG9ydCBjb25zdCBpc1NjaGVtZU51bWJlciA9IGlzUmFja2V0TnVtYmVyOyAvLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRmluaXRlKG46IFJhY2tldE51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmIChpc0JveGVkTnVtYmVyKG4pKSB7XG4gICAgICAgIHJldHVybiBuLmlzRmluaXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTmFOKG46IFJhY2tldE51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmIChpc0JveGVkTnVtYmVyKG4pKSB7XG4gICAgICAgIHJldHVybiBuLmlzTmFOKCk7XG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIuaXNOYU4obik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05lZ2F0aXZlWmVybyhuOiBSYWNrZXROdW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoaXNCb3hlZE51bWJlcihuKSkge1xuICAgICAgICByZXR1cm4gbi5pc05lZ2F0aXZlWmVybygpO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmlzKG4sIC0wKTtcbn1cbiIsImltcG9ydCB7XG4gICAgUmFja2V0TnVtYmVyLFxuICAgIEJveGVkTnVtYmVyLFxuICAgIGlzQm94ZWROdW1iZXIsXG4gICAgSW5leGFjdE51bWJlcixcbiAgICBTbWFsbEV4YWN0TnVtYmVyLFxuICAgIEJpZ0V4YWN0TnVtYmVyLFxuICAgIENvbXBsZXhOdW1iZXIsXG4gICAgRVhBQ1RfSEFMRixcbiAgICBOQU4sXG4gICAgT05FLFxuICAgIEVYQUNUX1pFUk8sXG4gICAgRVhBQ1RfT05FLFxuICAgIElORVhBQ1RfWkVSTyxcbiAgICBFWEFDVF9ORUdfT05FLFxuICAgIGJveE51bWJlcixcbn0gZnJvbSAnLi4vdG93ZXInO1xuaW1wb3J0IHtcbiAgICBub3JtYWxpemUsXG4gICAgbm9ybWFsaXplZCxcbiAgICBtYWtlQ29tcGF0aWJsZSxcbn0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7XG4gICAgaXNOZWdhdGl2ZSxcbiAgICBpc1Bvc2l0aXZlLFxuICAgIGlzRXhhY3QsXG4gICAgaXNaZXJvLFxufSBmcm9tICcuL3ByZWRpY2F0ZXMnO1xuXG50eXBlIE51bWJlckJpbm9wID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBSYWNrZXROdW1iZXI7XG50eXBlIEJveGVkTnVtYmVyQmlub3AgPSAoeDogQm94ZWROdW1iZXIsIHk6IEJveGVkTnVtYmVyKSA9PiBSYWNrZXROdW1iZXI7XG5cbi8qXG4gKiBNYWtlcyBhIGZ1bmN0aW9uIHRoYXQgb3BlcmF0ZXMgb24gUmFja2V0TnVtYmVycy4gVGhlIGZ1bmN0aW9uIHRha2VzXG4gKiBhdCBsZWFzdCB0d28gYXJndW1lbnRzIGFuZCBmb2xkcyB0aGUgZ2l2ZW4gYmluYXJ5IG9wZXJhdGlvbnMgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICovXG5mdW5jdGlvbiBtYWtlTXVsdGlBcml0eShmbkZvck51bWJlcnM6IE51bWJlckJpbm9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm5Gb3JCb3hlZE51bWJlcnM6IEJveGVkTnVtYmVyQmlub3ApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oYXJnczogUmFja2V0TnVtYmVyW10pOiBSYWNrZXROdW1iZXIge1xuICAgICAgICBsZXQgYWNjID0gYXJnc1swXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBtYWtlQ29tcGF0aWJsZShhY2MsIGFyZ3NbaV0pO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgYWNjID0gZm5Gb3JOdW1iZXJzKHgsIHkgYXMgbnVtYmVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjID0gZm5Gb3JCb3hlZE51bWJlcnMoeCwgeSBhcyBCb3hlZE51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZCA9IG5vcm1hbGl6ZWQoKC4uLm51bXM6IFJhY2tldE51bWJlcltdKTogUmFja2V0TnVtYmVyID0+IHtcbiAgICBpZiAobnVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEVYQUNUX1pFUk87XG4gICAgfVxuXG4gICAgaWYgKG51bXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBudW1zWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRlcihudW1zKTtcbn0pO1xuXG5jb25zdCBhZGRlciA9IG1ha2VNdWx0aUFyaXR5KFxuICAgICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4geCArIHksXG4gICAgKHg6IEJveGVkTnVtYmVyLCB5OiBCb3hlZE51bWJlcikgPT4geC5hZGQoeSlcbik7XG5cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdCA9IG5vcm1hbGl6ZWQoKC4uLm51bXM6IFJhY2tldE51bWJlcltdKTogUmFja2V0TnVtYmVyID0+IHtcbiAgICBpZiAobnVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHN1YnRyYWN0ZXIoW0VYQUNUX1pFUk8sIG51bXNbMF1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3VidHJhY3RlcihudW1zKTtcbiAgICB9XG59KTtcblxuY29uc3Qgc3VidHJhY3RlciA9IG1ha2VNdWx0aUFyaXR5KFxuICAgICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4geCAtIHksXG4gICAgKHg6IEJveGVkTnVtYmVyLCB5OiBCb3hlZE51bWJlcikgPT4geC5zdWJ0cmFjdCh5KVxuKTtcblxuZXhwb3J0IGNvbnN0IG11bHRpcGx5ID0gbm9ybWFsaXplZCgoLi4ubnVtczogUmFja2V0TnVtYmVyW10pOiBSYWNrZXROdW1iZXIgPT4ge1xuICAgIGlmIChudW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gRVhBQ1RfT05FO1xuICAgIH1cblxuICAgIGlmIChudW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gbnVtc1swXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbXVsdGlwbGllcihudW1zKTtcbn0pO1xuXG5jb25zdCBtdWx0aXBsaWVyID0gbWFrZU11bHRpQXJpdHkoXG4gICAgKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB4ICogeSxcbiAgICAoeDogQm94ZWROdW1iZXIsIHk6IEJveGVkTnVtYmVyKSA9PiB4Lm11bHRpcGx5KHkpXG4pO1xuXG5leHBvcnQgY29uc3QgZGl2aWRlID0gbm9ybWFsaXplZCgoLi4ubnVtczogUmFja2V0TnVtYmVyW10pOiBSYWNrZXROdW1iZXIgPT4ge1xuICAgIGlmIChudW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBhcmcgPSBudW1zWzBdO1xuICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXZpZGVyKFsxLCBhcmddKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGl2aWRlcihbRVhBQ1RfT05FLCBhcmddKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aWRlcihudW1zKTtcbn0pO1xuXG5jb25zdCBkaXZpZGVyID0gbWFrZU11bHRpQXJpdHkoXG4gICAgKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB4IC8geSxcbiAgICAoeDogQm94ZWROdW1iZXIsIHk6IEJveGVkTnVtYmVyKSA9PiB4LmRpdmlkZSh5KVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHF1b3RpZW50KG46IFJhY2tldE51bWJlciwgazogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBbbiwga10gPSBtYWtlQ29tcGF0aWJsZShuLCBrKTtcblxuICAgIGxldCByZXN1bHQ6IFJhY2tldE51bWJlcjtcbiAgICBpZiAoaXNCb3hlZE51bWJlcihuKSkge1xuICAgICAgICByZXN1bHQgPSBuLmRpdmlkZShrIGFzIEJveGVkTnVtYmVyKS5mbG9vcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IE1hdGguZmxvb3IobiAvIChrIGFzIG51bWJlcikpO1xuICAgIH1cblxuICAgIHJldHVybiBub3JtYWxpemUocmVzdWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbWFpbmRlcihuOiBSYWNrZXROdW1iZXIsIGs6IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgW24sIGtdID0gbWFrZUNvbXBhdGlibGUobiwgayk7XG5cbiAgICBsZXQgcmVzdWx0OiBSYWNrZXROdW1iZXI7XG4gICAgaWYgKGlzQm94ZWROdW1iZXIobikpIHtcbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBuLmRpdmlkZShrIGFzIEJveGVkTnVtYmVyKS5mbG9vcigpO1xuICAgICAgICByZXN1bHQgPSBuLnN1YnRyYWN0KChrIGFzIEJveGVkTnVtYmVyKS5tdWx0aXBseShxdW90aWVudCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IG4gJSAoayBhcyBudW1iZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBub3JtYWxpemUocmVzdWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vZHVsbyhuOiBSYWNrZXROdW1iZXIsIGs6IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgW24sIGtdID0gbWFrZUNvbXBhdGlibGUobiwgayk7XG5cbiAgICBsZXQgcmVzdWx0ID0gcmVtYWluZGVyKG4sIGspO1xuICAgIGNvbnN0IG5lZ2sgPSBpc05lZ2F0aXZlKGspO1xuXG4gICAgaWYgKG5lZ2spIHtcbiAgICAgICAgaWYgKGlzUG9zaXRpdmUocmVzdWx0KSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gYWRkKHJlc3VsdCwgayk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNOZWdhdGl2ZShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhZGQocmVzdWx0LCBrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub3JtYWxpemUocmVzdWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNxcihuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChpc0JveGVkTnVtYmVyKG4pKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUobi5tdWx0aXBseShuKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZShuICogbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcXJ0KG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgbiA9IG5vcm1hbGl6ZShuKTtcblxuICAgIGlmIChpc0JveGVkTnVtYmVyKG4pKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUobi5zcXJ0KCkpO1xuICAgIH1cblxuICAgIGlmIChuIDwgMCkge1xuICAgICAgICByZXR1cm4gbmV3IENvbXBsZXhOdW1iZXIoSU5FWEFDVF9aRVJPLCBuZXcgSW5leGFjdE51bWJlcihNYXRoLnNxcnQoLW4pKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGguc3FydChuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludGVnZXJTcXJ0KG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgbiA9IG5vcm1hbGl6ZShuKTtcblxuICAgIGlmIChpc0JveGVkTnVtYmVyKG4pKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUobi5pbnRlZ2VyU3FydCgpKTtcbiAgICB9XG5cbiAgICBpZiAobiA8IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb21wbGV4TnVtYmVyKElORVhBQ1RfWkVSTywgbmV3IEluZXhhY3ROdW1iZXIoTWF0aC5mbG9vcihNYXRoLnNxcnQoLW4pKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGguc3FydChuKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHB0KHo6IFJhY2tldE51bWJlciwgdzogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBbeiwgd10gPSBtYWtlQ29tcGF0aWJsZShub3JtYWxpemUoeiksIG5vcm1hbGl6ZSh3KSk7XG5cbiAgICAvLyBFeGFtaW5lIHNwZWNpYWwgY2FzZXMgZm9yIGJveGVkIG51bWJlcnNcbiAgICBpZiAoaXNCb3hlZE51bWJlcih6KSkge1xuICAgICAgICB3ID0gdyBhcyBCb3hlZE51bWJlcjtcblxuICAgICAgICBpZiAody5pc0V4YWN0KCkgJiYgdy5pc1plcm8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIE9ORTtcbiAgICAgICAgfVxuICAgICAgICBpZiAody5pc0luZXhhY3QoKSAmJiB3LmlzWmVybygpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAody5pc0V4YWN0KCkgJiYgdy5lcXVhbHMoRVhBQ1RfSEFMRikpIHtcbiAgICAgICAgICAgIHJldHVybiBzcXJ0KHopO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3LmlzTmFOKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB3LmlzUmVhbCgpID8gTmFOIDogbmV3IENvbXBsZXhOdW1iZXIoTkFOLCBOQU4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh6LmlzTmVnYXRpdmVaZXJvKCkgJiYgdy5pc05lZ2F0aXZlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB3LmlzRXZlbigpID8gSW5maW5pdHkgOiAtSW5maW5pdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF6LmlzRmluaXRlKCkgJiYgIXouaXNOYU4oKSAmJiB6LmlzTmVnYXRpdmUoKSAmJiB3LmlzSW50ZWdlcigpICYmIHcuaXNOZWdhdGl2ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdy5pc0V2ZW4oKSA/IDAgOiAtMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXouaXNGaW5pdGUoKSAmJiAhei5pc05hTigpICYmIHouaXNQb3NpdGl2ZSgpICYmIHcuaXNJbnRlZ2VyKCkgJiYgdy5pc1Bvc2l0aXZlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB3LmlzRXZlbigpID8gSW5maW5pdHkgOiAtSW5maW5pdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHouaXNFeGFjdCgpICYmIHouaXNaZXJvKCkgJiYgdy5lcXVhbHMoRVhBQ1RfTkVHX09ORSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJleHB0IG5vdCBkZWZpbmVkIGZvciAwIGFuZCAtMVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub3JtYWxpemUoei5leHB0KHcgYXMgQm94ZWROdW1iZXIpKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHcgPSB3IGFzIG51bWJlcjtcbiAgICAgICAgeiA9IHogYXMgbnVtYmVyO1xuXG4gICAgICAgIC8vIEV4YW1pbmUgc3BlY2lhbCBjYXNlcyBmb3IgdW5ib3hlZCBudW1iZXJzLlxuICAgICAgICBpZiAodyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE51bWJlci5pc05hTih3KSkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmlzKHosIC0wKSkge1xuICAgICAgICAgICAgaWYgKHcgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHcgJSAyID09PSAwID8gSW5maW5pdHkgOiAtSW5maW5pdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoeikgJiYgIU51bWJlci5pc05hTih6KSkge1xuICAgICAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIodykpIHtcbiAgICAgICAgICAgICAgICBpZiAoeiA8IDAgJiYgdyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHcgJSAyID09PSAwID8gMCA6IC0wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoeiA+IDAgJiYgdyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHcgJSAyID09PSAwID8gSW5maW5pdHkgOiAtSW5maW5pdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHogYXMgbnVtYmVyLCB3IGFzIG51bWJlcik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgbiA9IG5vcm1hbGl6ZShuKTtcblxuICAgIGlmIChpc0JveGVkTnVtYmVyKG4pKSB7XG4gICAgICAgIGlmIChuLmVxdWFscyhFWEFDVF9aRVJPKSkge1xuICAgICAgICAgICAgcmV0dXJuIEVYQUNUX09ORTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub3JtYWxpemUobi5leHAoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGguZXhwKG4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nKHo6IFJhY2tldE51bWJlciwgYj86IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgbGV0IHJlc3VsdDogUmFja2V0TnVtYmVyO1xuXG4gICAgaWYgKGlzQm94ZWROdW1iZXIoeikpIHtcbiAgICAgICAgaWYgKHouaXNFeGFjdCgpICYmIHouZXF1YWxzKEVYQUNUX09ORSkpIHtcbiAgICAgICAgICAgIHJldHVybiBFWEFDVF9aRVJPO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gei5sb2coKTtcblxuICAgICAgICBpZiAoYikge1xuICAgICAgICAgICAgcmVzdWx0ID0gZGl2aWRlKHJlc3VsdCwgbG9nKGIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub3JtYWxpemUocmVzdWx0KTtcbiAgICB9XG5cbiAgICBpZiAoeiA9PT0gMSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAoeiA8IDApIHtcbiAgICAgICAgcmV0dXJuIGxvZyhuZXcgSW5leGFjdE51bWJlcih6KSwgYik7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gTWF0aC5sb2coeik7XG5cbiAgICBpZiAoYikge1xuICAgICAgICByZXR1cm4gZGl2aWRlKHJlc3VsdCwgbG9nKGIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtZXJhdG9yKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZShib3hOdW1iZXIobikubnVtZXJhdG9yKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVub21pbmF0b3IobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICByZXR1cm4gbm9ybWFsaXplKGJveE51bWJlcihuKS5kZW5vbWluYXRvcigpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdjZCA9IG5vcm1hbGl6ZWQoKC4uLmFyZ3M6IFJhY2tldE51bWJlcltdKTogUmFja2V0TnVtYmVyID0+IHtcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEVYQUNUX1pFUk87XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2NkZXIoYXJncyk7XG59KTtcblxuY29uc3QgZ2NkZXIgPSBtYWtlTXVsdGlBcml0eShcbiAgICAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IHQ7XG4gICAgICAgIHdoaWxlICh5ICE9PSAwKSB7XG4gICAgICAgICAgICB0ID0geDtcbiAgICAgICAgICAgIHggPSB5O1xuICAgICAgICAgICAgeSA9IHQgJSB5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4O1xuICAgIH0sXG4gICAgKHg6IEJveGVkTnVtYmVyLCB5OiBCb3hlZE51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBpc0V4YWN0ID0geC5pc0V4YWN0KCkgJiYgeS5pc0V4YWN0KCk7XG5cbiAgICAgICAgLy8gVGhlIG51bWVyYXRvciBvZiB0aGUgcmVzdWx0IGlzIHRoZSBnY2Qgb2YgdGhlIG51bWVyYXRvcnMgb2YgdGhlXG4gICAgICAgIC8vIGFyZ3VtZW50cy5cbiAgICAgICAgY29uc3QgYW4gPSB4Lm51bWVyYXRvcigpO1xuICAgICAgICBjb25zdCBibiA9IHkubnVtZXJhdG9yKCk7XG4gICAgICAgIGxldCBudW07XG4gICAgICAgIGlmICh0eXBlb2YgYW4ubnVtID09PSAnYmlnaW50JyB8fCB0eXBlb2YgYm4ubnVtID09PSAnYmlnaW50Jykge1xuICAgICAgICAgICAgbGV0IHggPSBCaWdJbnQoYW4ubnVtKTtcbiAgICAgICAgICAgIGxldCB5ID0gQmlnSW50KGJuLm51bSk7XG4gICAgICAgICAgICBsZXQgdDtcbiAgICAgICAgICAgIHdoaWxlICh5ICE9PSAwbikge1xuICAgICAgICAgICAgICAgIHQgPSB4O1xuICAgICAgICAgICAgICAgIHggPSB5O1xuICAgICAgICAgICAgICAgIHkgPSB0ICUgeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG51bSA9IG5ldyBCaWdFeGFjdE51bWJlcih4KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHggPSBhbi5udW07XG4gICAgICAgICAgICBsZXQgeSA9IGJuLm51bTtcbiAgICAgICAgICAgIGxldCB0O1xuICAgICAgICAgICAgd2hpbGUgKHkgIT09IDApIHtcbiAgICAgICAgICAgICAgICB0ID0geDtcbiAgICAgICAgICAgICAgICB4ID0geTtcbiAgICAgICAgICAgICAgICB5ID0gdCAlIHk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG51bSA9IGlzRXhhY3QgPyBuZXcgU21hbGxFeGFjdE51bWJlcih4KSA6IG5ldyBJbmV4YWN0TnVtYmVyKHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIGRlbm9taW5hdG9yIG9mIHRoZSByZXN1bHQgaXMgdGhlIGxjbSBvZiB0aGUgZGVub21pbmF0b3JzIG9mIHRoZVxuICAgICAgICAvLyBhcmd1bWVudHMuXG4gICAgICAgIGNvbnN0IGFkID0geC5kZW5vbWluYXRvcigpO1xuICAgICAgICBjb25zdCBiZCA9IHkuZGVub21pbmF0b3IoKTtcblxuICAgICAgICBpZiAoYWQuZXF1YWxzKE9ORSkgJiYgYmQuZXF1YWxzKE9ORSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudW07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZW4gPSBsY20oYWQsIGJkKTtcblxuICAgICAgICByZXR1cm4gZGl2aWRlKG51bSwgZGVuKTtcbiAgICB9XG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gbGNtKC4uLmFyZ3M6IFJhY2tldE51bWJlcltdKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEVYQUNUX09ORTtcbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGFicyhhcmdzWzBdKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzWmVybyhhcmdzW2ldKSkge1xuICAgICAgICAgICAgaWYgKGlzRXhhY3QoYXJnc1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRVhBQ1RfWkVSTztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxjbShiaW5vcExjbShhcmdzWzBdLCBhcmdzWzFdKSwgLi4uYXJncy5zbGljZSgyKSk7XG59XG5cbmZ1bmN0aW9uIGJpbm9wTGNtKHg6IFJhY2tldE51bWJlciwgeTogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBjb25zdCBwcm9kdWN0ID0gbXVsdGlwbHkoeCwgeSk7XG4gICAgY29uc3QgZGVuID0gZ2NkKHgsIHkpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGFicyhkaXZpZGUocHJvZHVjdCwgZGVuKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFicyhuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChpc0JveGVkTnVtYmVyKG4pKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUobi5hYnMoKSk7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLmFicyhuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKGlzQm94ZWROdW1iZXIobikpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuLmZsb29yKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG4pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlaWxpbmcobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoaXNCb3hlZE51bWJlcihuKSkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKG4uY2VpbGluZygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG4pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKGlzQm94ZWROdW1iZXIobikpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuLnJvdW5kKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG4pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgUmFja2V0TnVtYmVyLFxuICAgIGlzQm94ZWROdW1iZXIsXG4gICAgQm94ZWROdW1iZXIsXG4gICAgc3VidHJhY3QsXG4gICAgYWJzXG59IGZyb20gJy4uL3Rvd2VyJztcbmltcG9ydCB7XG4gICAgbWFrZUNvbXBhdGlibGVcbn0gZnJvbSAnLi91dGlsJztcblxudHlwZSBOdW1iZXJDb21wYXJlID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBib29sZWFuO1xudHlwZSBCb3hlZE51bWJlckNvbXBhcmUgPSAoeDogQm94ZWROdW1iZXIsIHk6IEJveGVkTnVtYmVyKSA9PiBib29sZWFuO1xuXG5jb25zdCBtYWtlTXVsdGlBcml0eSA9IGZ1bmN0aW9uIChmbkZvck51bWJlcnM6IE51bWJlckNvbXBhcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbkZvckJveGVkTnVtYmVyczogQm94ZWROdW1iZXJDb21wYXJlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3M6IFJhY2tldE51bWJlcltdKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgYmUgY2FsbGVkIHdpdGggYXQgbGVhc3QgdHdvIGFyZ3VtZW50cy5cIilcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB4ID0gYXJnc1tpXTtcbiAgICAgICAgICAgIGxldCB5ID0gYXJnc1tpKzFdO1xuXG4gICAgICAgICAgICBbeCwgeV0gPSBtYWtlQ29tcGF0aWJsZSh4LCB5KTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiAhZm5Gb3JOdW1iZXJzKHgsIHkgYXMgbnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNCb3hlZE51bWJlcih4KSAmJiAhZm5Gb3JCb3hlZE51bWJlcnMoeCBhcyBCb3hlZE51bWJlciwgeSBhcyBCb3hlZE51bWJlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKC4uLm51bXM6IFJhY2tldE51bWJlcltdKTogYm9vbGVhbiB7XG4gICAgaWYgKG51bXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZXF1YWxDb21wKC4uLm51bXMpO1xufVxuXG5jb25zdCBlcXVhbENvbXAgPSBtYWtlTXVsdGlBcml0eShcbiAgICAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHggPT09IHksXG4gICAgKHg6IEJveGVkTnVtYmVyLCB5OiBCb3hlZE51bWJlcikgPT4geC5lcXVhbHMoeSlcbik7XG5cbi8vIFRoaXMgaXMgcHJvdmlkZWQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgb3JpZ2luYWwganMtbnVtYmVycyBsaWJyYXJ5XG5leHBvcnQgZnVuY3Rpb24gZXF2KHg6IFJhY2tldE51bWJlciwgeTogUmFja2V0TnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGVxdWFscyh4LCB5KTtcbn1cblxuLy8gVGhpcyBpcyBwcm92aWRlZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBvcmlnaW5hbCBqcy1udW1iZXJzIGxpYnJhcnlcbmV4cG9ydCBmdW5jdGlvbiBhcHByb3hFcXVhbHMoeDogUmFja2V0TnVtYmVyLCB5OiBSYWNrZXROdW1iZXIsIGRlbHRhOiBSYWNrZXROdW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbGVzc1RoYW5PckVxdWFsKGFicyhzdWJ0cmFjdCh4LCB5KSksIGFicyhkZWx0YSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlYXRlclRoYW4oLi4ubnVtczogUmFja2V0TnVtYmVyW10pOiBib29sZWFuIHtcbiAgICBpZiAobnVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBndENvbXAoLi4ubnVtcyk7XG59XG5cbmNvbnN0IGd0Q29tcCA9IG1ha2VNdWx0aUFyaXR5KFxuICAgICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4geCA+IHksXG4gICAgKHg6IEJveGVkTnVtYmVyLCB5OiBCb3hlZE51bWJlcikgPT4geC5ncmVhdGVyVGhhbih5KVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWF0ZXJUaGFuT3JFcXVhbCguLi5udW1zOiBSYWNrZXROdW1iZXJbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChudW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGd0ZUNvbXAoLi4ubnVtcyk7XG59XG5cbmNvbnN0IGd0ZUNvbXAgPSBtYWtlTXVsdGlBcml0eShcbiAgICAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHggPj0geSxcbiAgICAoeDogQm94ZWROdW1iZXIsIHk6IEJveGVkTnVtYmVyKSA9PiB4LmdyZWF0ZXJUaGFuT3JFcXVhbCh5KVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxlc3NUaGFuKC4uLm51bXM6IFJhY2tldE51bWJlcltdKTogYm9vbGVhbiB7XG4gICAgaWYgKG51bXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gbHRDb21wKC4uLm51bXMpO1xufVxuXG5jb25zdCBsdENvbXAgPSBtYWtlTXVsdGlBcml0eShcbiAgICAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHggPCB5LFxuICAgICh4OiBCb3hlZE51bWJlciwgeTogQm94ZWROdW1iZXIpID0+IHgubGVzc1RoYW4oeSlcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXNzVGhhbk9yRXF1YWwoLi4ubnVtczogUmFja2V0TnVtYmVyW10pOiBib29sZWFuIHtcbiAgICBpZiAobnVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBsdGVDb21wKC4uLm51bXMpO1xufVxuXG5jb25zdCBsdGVDb21wID0gbWFrZU11bHRpQXJpdHkoXG4gICAgKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB4IDw9IHksXG4gICAgKHg6IEJveGVkTnVtYmVyLCB5OiBCb3hlZE51bWJlcikgPT4geC5sZXNzVGhhbk9yRXF1YWwoeSlcbik7XG4iLCJpbXBvcnQge1xuICAgIFJhY2tldE51bWJlcixcbiAgICBpc0JveGVkTnVtYmVyLFxuICAgIGJveE51bWJlclxufSBmcm9tICcuLi90b3dlcic7XG5pbXBvcnQge1xuICAgIG5vcm1hbGl6ZVxufSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5leGFjdFRvRXhhY3QobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoaXNCb3hlZE51bWJlcihuKSkge1xuICAgICAgICByZXR1cm4gbi50b0V4YWN0KCk7XG4gICAgfVxuICAgIHJldHVybiBib3hOdW1iZXIobikudG9FeGFjdCgpO1xufVxuZXhwb3J0IGNvbnN0IHRvRXhhY3QgPSBpbmV4YWN0VG9FeGFjdDsgLy8gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdFRvSW5leGFjdChuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChpc0JveGVkTnVtYmVyKG4pKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUobi50b0luZXhhY3QoKSk7XG4gICAgfVxuICAgIHJldHVybiBuO1xufVxuZXhwb3J0IGNvbnN0IHRvSW5leGFjdCA9IGV4YWN0VG9JbmV4YWN0OyAvLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvU3RyaW5nKG46IFJhY2tldE51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihuKSkge1xuICAgICAgICAgICAgcmV0dXJuIG4udG9TdHJpbmcoKSArIFwiLjBcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKG4pKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIrbmFuLjBcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobiA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIitpbmYuMFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIi1pbmYuMFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuLnRvU3RyaW5nKCk7XG59XG4iLCJpbXBvcnQge1xuICAgIFJhY2tldE51bWJlcixcbiAgICBCb3hlZE51bWJlcixcbiAgICBJTkVYQUNUX1pFUk8sXG4gICAgRVhBQ1RfWkVSTyxcbiAgICBFWEFDVF9JLFxuICAgIElORixcbiAgICBORUdfSU5GLFxuICAgIGlzUmVhbCxcbiAgICBpc1plcm8sXG4gICAgaXNQb3NpdGl2ZSxcbiAgICBhZGQsXG4gICAgbXVsdGlwbHksXG4gICAgYWJzLFxuICAgIHNpbixcbiAgICBjb3MsXG4gICAgQ29tcGxleE51bWJlcixcbiAgICBib3hOdW1iZXIsXG4gICAgaXNSZWFsTnVtYmVyLFxuICAgIGlzRXhhY3QsXG4gICAgaXNJbmV4YWN0LFxuICAgIGV4YWN0VG9JbmV4YWN0LFxuICAgIFJlYWxOdW1iZXIsXG4gICAgaXNDb21wbGV4LFxufSBmcm9tICcuLi90b3dlcidcbmltcG9ydCB7XG4gICAgbm9ybWFsaXplXG59IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUmVjdGFuZ3VsYXIocmVhbDogUmFja2V0TnVtYmVyLCBpbWFnOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIHJlYWwgPSBib3hOdW1iZXIocmVhbCk7XG4gICAgaW1hZyA9IGJveE51bWJlcihpbWFnKTtcblxuICAgIGlmICghaXNSZWFsTnVtYmVyKHJlYWwpIHx8ICFpc1JlYWxOdW1iZXIoaW1hZykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm1ha2VSZWN0YW5ndWxhciBhcmd1bWVudHMgbXVzdCBiZSByZWFsIG51bWJlcnNcIik7XG4gICAgfVxuXG4gICAgaWYgKGltYWcuZXF1YWxzKEVYQUNUX1pFUk8pICYmIGltYWcuaXNFeGFjdCgpKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUocmVhbCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSW5leGFjdChyZWFsKSAmJiBpc0V4YWN0KGltYWcpKSB7XG4gICAgICAgIGltYWcgPSBleGFjdFRvSW5leGFjdChpbWFnKTtcbiAgICAgICAgaW1hZyA9IGJveE51bWJlcihpbWFnKSBhcyBSZWFsTnVtYmVyO1xuICAgICAgICByZXR1cm4gbmV3IENvbXBsZXhOdW1iZXIocmVhbCwgaW1hZyk7XG4gICAgfVxuXG4gICAgaWYgKGlzSW5leGFjdChpbWFnKSAmJiBpc0V4YWN0KHJlYWwpKSB7XG4gICAgICAgIHJlYWwgPSBleGFjdFRvSW5leGFjdChyZWFsKTtcbiAgICAgICAgcmVhbCA9IGJveE51bWJlcihyZWFsKSBhcyBSZWFsTnVtYmVyO1xuICAgICAgICByZXR1cm4gbmV3IENvbXBsZXhOdW1iZXIocmVhbCwgaW1hZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBDb21wbGV4TnVtYmVyKHJlYWwsIGltYWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBvbGFyKHI6IFJhY2tldE51bWJlciwgdGhldGE6IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgcmV0dXJuIGFkZChtdWx0aXBseShyLCBjb3ModGhldGEpKSwgbXVsdGlwbHkociwgc2luKHRoZXRhKSwgRVhBQ1RfSSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFnbml0dWRlKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKGlzQ29tcGxleChuKSkge1xuICAgICAgICBuID0gbiBhcyBCb3hlZE51bWJlcjtcblxuICAgICAgICBpZiAoY29udGFpbnNJbmZpbml0eShuKSkge1xuICAgICAgICAgICAgcmV0dXJuIElORjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub3JtYWxpemUobi5tYWduaXR1ZGUoKSk7XG4gICAgfVxuICAgIHJldHVybiBhYnMobik7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zSW5maW5pdHkobjogQm94ZWROdW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWFsID0gbi5yZWFsUGFydCgpO1xuICAgIGNvbnN0IGltYWcgPSBuLmltYWdpbmFyeVBhcnQoKTtcbiAgICByZXR1cm4gcmVhbC5lcXVhbHMoSU5GKVxuICAgICAgICB8fCByZWFsLmVxdWFscyhORUdfSU5GKVxuICAgICAgICB8fCBpbWFnLmVxdWFscyhJTkYpXG4gICAgICAgIHx8IGltYWcuZXF1YWxzKE5FR19JTkYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5nbGUobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoaXNaZXJvKG4pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpdmlkZSBieSB6ZXJvXCIpO1xuICAgIH1cblxuICAgIGlmIChpc1JlYWwobikpIHtcbiAgICAgICAgcmV0dXJuIGlzUG9zaXRpdmUobikgPyBFWEFDVF9aRVJPIDogTWF0aC5QSTtcbiAgICB9XG5cbiAgICAvLyBXZSBrbm93IG4gaXMgYSBjb21wbGV4IG51bWJlciBpZiBpdCdzIG5vdCByZWFsXG4gICAgbiA9IG4gYXMgQ29tcGxleE51bWJlcjtcbiAgICBpZiAoY29udGFpbnNJbmZpbml0eShuKSkge1xuICAgICAgICBjb25zdCByZWFsID0gbi5yZWFsUGFydCgpO1xuICAgICAgICBjb25zdCBpbWFnID0gbi5pbWFnaW5hcnlQYXJ0KCk7XG5cbiAgICAgICAgaWYgKHJlYWwuZXF1YWxzKElORikgJiYgaW1hZy5lcXVhbHMoSU5GKSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguUEkgLyA0O1xuICAgICAgICB9IGVsc2UgaWYgKHJlYWwuZXF1YWxzKElORikgJiYgaW1hZy5lcXVhbHMoTkVHX0lORikpIHtcbiAgICAgICAgICAgIHJldHVybiAtMSAqIChNYXRoLlBJIC8gNCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVhbC5lcXVhbHMoTkVHX0lORikgJiYgaW1hZy5lcXVhbHMoTkVHX0lORikpIHtcbiAgICAgICAgICAgIHJldHVybiAtMyAqIChNYXRoLlBJIC8gNCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVhbC5lcXVhbHMoTkVHX0lORikgJiYgaW1hZy5lcXVhbHMoSU5GKSkge1xuICAgICAgICAgICAgcmV0dXJuIDMgKiAoTWF0aC5QSSAvIDQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25lIG9mIHRoZSB0d28gaXMgbm90IGluZmluaXR5XG4gICAgICAgIGlmIChyZWFsLmVxdWFscyhJTkYpKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplKElORVhBQ1RfWkVSTy5tdWx0aXBseShpbWFnKSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVhbC5lcXVhbHMoTkVHX0lORikpIHtcbiAgICAgICAgICAgIHJldHVybiBpbWFnLmlzUG9zaXRpdmUoKSA/IE1hdGguUEkgOiAtTWF0aC5QSTtcbiAgICAgICAgfSBlbHNlIGlmIChpbWFnLmVxdWFscyhJTkYpKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5QSSAvIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLShNYXRoLlBJIC8gMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9ybWFsaXplKG4uYW5nbGUoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFsUGFydChuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChpc1JlYWwobikpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vcm1hbGl6ZSgobiBhcyBDb21wbGV4TnVtYmVyKS5yZWFsUGFydCgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdpbmFyeVBhcnQobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoaXNSZWFsKG4pKSB7XG4gICAgICAgIHJldHVybiBFWEFDVF9aRVJPO1xuICAgIH1cbiAgICByZXR1cm4gbm9ybWFsaXplKChuIGFzIENvbXBsZXhOdW1iZXIpLmltYWdpbmFyeVBhcnQoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25qdWdhdGUobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoaXNSZWFsKG4pKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUobik7XG4gICAgfVxuICAgIHJldHVybiAobiBhcyBDb21wbGV4TnVtYmVyKS5jb25qdWdhdGUoKTtcbn1cbiIsImltcG9ydCB7XG4gICAgUmFja2V0TnVtYmVyLFxuICAgIEluZXhhY3ROdW1iZXIsXG4gICAgaXNCb3hlZE51bWJlcixcbiAgICBpc0V4YWN0LFxuICAgIGlzTmFOLFxuICAgIEVYQUNUX1pFUk8sXG4gICAgRVhBQ1RfT05FLFxuICAgIEVYQUNUX1RXTyxcbiAgICBFWEFDVF9ORUdfT05FLFxuICAgIFBJLFxuICAgIElORixcbiAgICBORUdfSU5GLFxuICAgIGFkZCxcbiAgICBzdWJ0cmFjdCxcbiAgICBtdWx0aXBseSxcbiAgICBkaXZpZGUsXG4gICAgZXhwLFxuICAgIGlzUG9zaXRpdmUsXG4gICAgaXNOZWdhdGl2ZSxcbiAgICBpc1plcm8sXG4gICAgZXF1YWxzLFxufSBmcm9tIFwiLi4vdG93ZXJcIjtcbmltcG9ydCB7XG4gICAgbm9ybWFsaXplXG59IGZyb20gJy4vdXRpbCc7XG5cbmZ1bmN0aW9uIGlzT25lKG46IFJhY2tldE51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmIChpc0JveGVkTnVtYmVyKG4pKSB7XG4gICAgICAgIHJldHVybiBuLmVxdWFscyhFWEFDVF9PTkUpO1xuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKG4pID09PSAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKGlzRXhhY3QobikgJiYgaXNaZXJvKG4pKSB7XG4gICAgICAgIHJldHVybiBFWEFDVF9aRVJPO1xuICAgIH1cblxuICAgIGlmIChpc0JveGVkTnVtYmVyKG4pKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUobi5zaW4oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGguc2luKG4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29zKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKGlzRXhhY3QobikgJiYgaXNaZXJvKG4pKSB7XG4gICAgICAgIHJldHVybiBFWEFDVF9PTkU7XG4gICAgfVxuXG4gICAgaWYgKGlzQm94ZWROdW1iZXIobikpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuLmNvcygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5jb3Mobik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YW4objogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoaXNFeGFjdChuKSAmJiBpc1plcm8obikpIHtcbiAgICAgICAgcmV0dXJuIEVYQUNUX1pFUk87XG4gICAgfVxuXG4gICAgaWYgKGlzQm94ZWROdW1iZXIobikpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuLnRhbigpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC50YW4obik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2luKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKGlzRXhhY3QobikgJiYgaXNaZXJvKG4pKSB7XG4gICAgICAgIHJldHVybiBFWEFDVF9aRVJPO1xuICAgIH1cblxuICAgIGlmIChpc0JveGVkTnVtYmVyKG4pKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUobi5hc2luKCkpO1xuICAgIH1cblxuICAgIGlmICgtMSA8PSBuICYmIG4gPD0gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5hc2luKG4pO1xuICAgIH1cbiAgICByZXR1cm4gKG5ldyBJbmV4YWN0TnVtYmVyKG4pKS5hc2luKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY29zKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKGlzRXhhY3QobikgJiYgaXNPbmUobikpIHtcbiAgICAgICAgcmV0dXJuIEVYQUNUX1pFUk87XG4gICAgfVxuXG4gICAgaWYgKGlzQm94ZWROdW1iZXIobikpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuLmFjb3MoKSk7XG5cbiAgICB9XG5cbiAgICBpZiAoLTEgPD0gbiAmJiBuIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWNvcyhuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBJbmV4YWN0TnVtYmVyKG4pKS5hY29zKCk7XG59XG5cbmV4cG9ydCBjb25zdCBhdGFuMiA9IGF0YW47IC8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIGpzLW51bWJlcnNcblxuZXhwb3J0IGZ1bmN0aW9uIGF0YW4oeTogUmFja2V0TnVtYmVyLCB4PzogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoeCA9PT0gdW5kZWZpbmVkICYmIGlzRXhhY3QoeSkgJiYgaXNaZXJvKHkpKSB7XG4gICAgICAgIHJldHVybiBFWEFDVF9aRVJPO1xuICAgIH1cblxuICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGF0YW4xKHkpO1xuICAgIH1cblxuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0F0YW4yXG4gICAgY29uc3QgYXJnID0gZGl2aWRlKHksIHgpO1xuXG4gICAgaWYgKGlzTmFOKGFyZykpIHtcbiAgICAgICAgaWYgKGVxdWFscyh5LCBJTkYpICYmIGVxdWFscyh4LCBJTkYpKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5QSSAvIDQ7XG5cbiAgICAgICAgfSBlbHNlIGlmIChlcXVhbHMoeSwgSU5GKSAmJiBlcXVhbHMoeCwgTkVHX0lORikpIHtcbiAgICAgICAgICAgIHJldHVybiAzICogKE1hdGguUEkgLyA0KTtcblxuICAgICAgICB9IGVsc2UgaWYgKGVxdWFscyh5LCBORUdfSU5GKSAmJiBlcXVhbHMoeCwgTkVHX0lORikpIHtcbiAgICAgICAgICAgIHJldHVybiAtMyAqIChNYXRoLlBJIC8gNCk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChlcXVhbHMoeSwgTkVHX0lORikgJiYgZXF1YWxzKHgsIElORikpIHtcbiAgICAgICAgICAgIHJldHVybiAtMSAqIChNYXRoLlBJIC8gNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNQb3NpdGl2ZSh4KSkge1xuICAgICAgICByZXR1cm4gYXRhbjEoYXJnKTtcblxuICAgIH0gZWxzZSBpZiAoaXNOZWdhdGl2ZSh4KSAmJiAoaXNQb3NpdGl2ZSh5KSB8fCBpc1plcm8oeSkpKSB7XG4gICAgICAgIHJldHVybiBhZGQoYXRhbjEoYXJnKSwgUEkpO1xuXG4gICAgfSBlbHNlIGlmIChpc05lZ2F0aXZlKHgpICYmIGlzTmVnYXRpdmUoeSkpIHtcbiAgICAgICAgcmV0dXJuIHN1YnRyYWN0KGF0YW4xKGFyZyksIFBJKTtcblxuICAgIH0gZWxzZSBpZiAoaXNaZXJvKHgpICYmIGlzUG9zaXRpdmUoeSkpIHtcbiAgICAgICAgcmV0dXJuIGRpdmlkZShQSSwgRVhBQ1RfVFdPKTtcblxuICAgIH0gZWxzZSBpZiAoaXNaZXJvKHgpICYmIGlzTmVnYXRpdmUoeSkpIHtcbiAgICAgICAgcmV0dXJuIHN1YnRyYWN0KEVYQUNUX1pFUk8sIGRpdmlkZShQSSwgRVhBQ1RfVFdPKSk7XG5cbiAgICB9IGVsc2UgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXRhbiBub3QgZGVmaW5lZCBmb3IgY29vcmRpbmF0ZXMgKDAsIDApXCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYXRhbjEobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoaXNCb3hlZE51bWJlcihuKSkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKG4uYXRhbigpKTtcblxuICAgIH0gZWxzZSBpZiAobiA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgcmV0dXJuIDg4NDI3OTcxOTAwMzU1NSAvIDU2Mjk0OTk1MzQyMTMxMjtcblxuICAgIH0gZWxzZSBpZiAobiA9PT0gLUluZmluaXR5KSB7XG4gICAgICAgIHJldHVybiAtODg0Mjc5NzE5MDAzNTU1IC8gNTYyOTQ5OTUzNDIxMzEyO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLmF0YW4obik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5oKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgcmV0dXJuIGRpdmlkZShzdWJ0cmFjdChleHAobiksIGV4cChtdWx0aXBseShuLCBFWEFDVF9ORUdfT05FKSkpLCBFWEFDVF9UV08pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29zaChuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChpc1plcm8obikpIHtcbiAgICAgICAgcmV0dXJuIDE7IC8vIFJhY2tldCByZXR1cm5zIGluZXhhY3QgMSBoZXJlLlxuICAgIH1cbiAgICByZXR1cm4gZGl2aWRlKGFkZChleHAobiksIGV4cChtdWx0aXBseShuLCBFWEFDVF9ORUdfT05FKSkpLCBFWEFDVF9UV08pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFuaChuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIHJldHVybiBkaXZpZGUoc3VidHJhY3QoZXhwKG11bHRpcGx5KEVYQUNUX1RXTywgbikpLCBFWEFDVF9PTkUpLCBhZGQoZXhwKG11bHRpcGx5KEVYQUNUX1RXTywgbikpLCBFWEFDVF9PTkUpKVxufVxuIiwiaW1wb3J0IHtcbiAgICBSYWNrZXROdW1iZXIsXG4gICAgSlNJbnRlZ2VyLFxuICAgIEJveGVkTnVtYmVyLFxuICAgIFNtYWxsRXhhY3ROdW1iZXIsXG4gICAgQmlnRXhhY3ROdW1iZXIsXG4gICAgQ29tcGxleE51bWJlcixcbiAgICBJbmV4YWN0TnVtYmVyLFxuICAgIG1ha2VSZWN0YW5ndWxhcixcbiAgICBFeGFjdE51bWJlcixcbiAgICBpc1NhZmVJbnRlZ2VyLFxufSBmcm9tICcuLi90b3dlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBib3hOdW1iZXIobjogUmFja2V0TnVtYmVyKTogQm94ZWROdW1iZXIge1xuICAgIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKG4pO1xuICAgIH1cbiAgICByZXR1cm4gbjtcbn1cblxuY29uc3QgZnJhY3Rpb25SZWdleHAgPSBuZXcgUmVnRXhwKFwiXihbKy1dP1xcXFxkKykvKFxcXFxkKykkXCIpO1xuY29uc3QgY29tcGxleFJlZ2V4cCA9IG5ldyBSZWdFeHAoXCJeKFsrLV0/W1xcXFxkXFxcXHcvXFxcXC5dKikoWystXSkoW1xcXFxkXFxcXHcvXFxcXC5dKilpJFwiKTtcbmNvbnN0IGludGVnZXJSZWdleHAgPSBuZXcgUmVnRXhwKFwiXlsrLV0/XFxcXGQrJFwiKTtcbmNvbnN0IGRlY2ltYWxSZWdleHAgPSBuZXcgUmVnRXhwKFwiXihbKy1dP1xcXFxkKilcXFxcLihcXFxcZCopJFwiKTtcbmNvbnN0IHNjaWVudGlmaWNSZWdleHAgPSBuZXcgUmVnRXhwKFwiXihbKy1dP1xcXFxkKlxcXFwuP1xcXFxkKilbRWVdKFxcXFwrP1xcXFxkKykkXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVN0cmluZyhzdHI6IHN0cmluZyk6IFJhY2tldE51bWJlciB8IGZhbHNlIHtcbiAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTsgLy8gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGgganMtbnVtYmVyc1xuXG4gICAgY29uc3QgbWF0Y2hFeGFjdCA9IHN0ci5tYXRjaChmcmFjdGlvblJlZ2V4cCk7XG4gICAgaWYgKG1hdGNoRXhhY3QpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRXhhY3Qoc3RyKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaENvbXBsZXggPSBzdHIubWF0Y2goY29tcGxleFJlZ2V4cCk7XG4gICAgaWYgKG1hdGNoQ29tcGxleCkge1xuICAgICAgICBjb25zdCByZWFsU3RyID0gbWF0Y2hDb21wbGV4WzFdIHx8IFwiMFwiO1xuICAgICAgICBjb25zdCBpbWFnU3RyID0gbWF0Y2hDb21wbGV4WzJdICsgKG1hdGNoQ29tcGxleFszXSB8fCBcIjFcIik7XG5cbiAgICAgICAgaWYgKGNvbXBsZXhJc0V4YWN0KG1hdGNoQ29tcGxleCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWwgPSBwYXJzZUV4YWN0KHJlYWxTdHIpO1xuICAgICAgICAgICAgY29uc3QgaW1hZyA9IHBhcnNlRXhhY3QoaW1hZ1N0cik7XG4gICAgICAgICAgICByZXR1cm4gbWFrZVJlY3Rhbmd1bGFyKHJlYWwsIGltYWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVhbCA9IG5ldyBJbmV4YWN0TnVtYmVyKE51bWJlcihyZWFsU3RyKSk7XG4gICAgICAgIGNvbnN0IGltYWcgPSBuZXcgSW5leGFjdE51bWJlcihOdW1iZXIoaW1hZ1N0cikpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ29tcGxleE51bWJlcihyZWFsLCBpbWFnKTtcbiAgICB9XG5cbiAgICBpZiAoc3RyID09PSAnK25hbi4wJyB8fCBzdHIgPT09ICctbmFuLjAnIHx8IHN0ciA9PT0gJytuYW4uZicgfHwgc3RyID09PSAnLW5hbi5mJyApIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9IGVsc2UgaWYgKHN0ciA9PT0gJytpbmYuMCcgfHwgc3RyID09PSAnK2luZi5mJykge1xuICAgICAgICByZXR1cm4gSW5maW5pdHk7XG4gICAgfSBlbHNlIGlmIChzdHIgPT09ICctaW5mLjAnIHx8IHN0ciA9PT0gJy1pbmYuZicpIHtcbiAgICAgICAgcmV0dXJuIC1JbmZpbml0eTtcbiAgICB9IGVsc2UgaWYgKHN0ciA9PT0gJy0wLjAnKSB7XG4gICAgICAgIHJldHVybiAtMDtcbiAgICB9XG5cbiAgICBpZiAoc3RyLm1hdGNoKGRlY2ltYWxSZWdleHApIHx8IHN0ci5tYXRjaChzY2llbnRpZmljUmVnZXhwKSkge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHN0cik7XG4gICAgfVxuXG4gICAgaWYgKHN0ci5tYXRjaChpbnRlZ2VyUmVnZXhwKSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnRlZ2VyKHN0cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjb21wbGV4SXNFeGFjdChtYXRjaGVkOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlYWwgPSBtYXRjaGVkWzFdLm1hdGNoKGludGVnZXJSZWdleHApICE9PSBudWxsIHx8IG1hdGNoZWRbMV0ubWF0Y2goZnJhY3Rpb25SZWdleHApICE9PSBudWxsO1xuICAgIGNvbnN0IGltYWcgPSBtYXRjaGVkWzNdLm1hdGNoKGludGVnZXJSZWdleHApICE9PSBudWxsIHx8IG1hdGNoZWRbM10ubWF0Y2goZnJhY3Rpb25SZWdleHApICE9PSBudWxsO1xuICAgIHJldHVybiByZWFsICYmIGltYWc7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRXhhY3Qoc3RyOiBzdHJpbmcpOiBSYWNrZXROdW1iZXIge1xuICAgIGNvbnN0IG1hdGNoSW50ZWdlciA9IHN0ci5tYXRjaChpbnRlZ2VyUmVnZXhwKTtcbiAgICBpZiAobWF0Y2hJbnRlZ2VyKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludGVnZXIoc3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRnJhY3Rpb24oc3RyKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VJbnRlZ2VyKHN0cjogc3RyaW5nKTogRXhhY3ROdW1iZXIge1xuICAgIGNvbnN0IG4gPSBOdW1iZXIoc3RyKTtcbiAgICBpZiAoTnVtYmVyLmlzU2FmZUludGVnZXIobikpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0TnVtYmVyKG4pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEJpZ0V4YWN0TnVtYmVyKEJpZ0ludChzdHIpKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VGcmFjdGlvbihzdHI6IHN0cmluZyk6IFJhY2tldE51bWJlciB7XG4gICAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2goZnJhY3Rpb25SZWdleHApO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICBsZXQgbnVtID0gcGFyc2VJbnRlZ2VyKG1hdGNoWzFdKS5udW07XG4gICAgICAgIGxldCBkZW4gPSBwYXJzZUludGVnZXIobWF0Y2hbMl0pLm51bTtcblxuICAgICAgICBpZiAodHlwZW9mIG51bSA9PT0gJ2JpZ2ludCcgfHwgdHlwZW9mIGRlbiA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgICAgIG51bSA9IEJpZ0ludChudW0pO1xuICAgICAgICAgICAgZGVuID0gQmlnSW50KGRlbik7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnRXhhY3ROdW1iZXIobnVtLCBkZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0TnVtYmVyKG51bSwgZGVuKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBGcmFjdGlvbiBub3QgZm91bmQgaW4gJHtzdHJ9YCk7XG59XG5cbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIGpzLW51bWJlcnMuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZsb2F0KG46IG51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgcmV0dXJuIG5ldyBJbmV4YWN0TnVtYmVyKG4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFeGFjdChuOiBKU0ludGVnZXIsIGQ/OiBKU0ludGVnZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuICE9PSB0eXBlb2YgZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm51bWVyYXRvciBhbmQgZGVub21pbmF0b3IgbXVzdCBiZSBzYW1lIHR5cGUuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicgJiYgKCFOdW1iZXIuaXNJbnRlZ2VyKG4pIHx8ICFOdW1iZXIuaXNJbnRlZ2VyKGQpKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm51bWVyYXRvciBhbmQgZGVub21pbmF0b3IgbXVzdCBiZSBpbnRlZ2Vyc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NhZmVJbnRlZ2VyKG4pICYmIGlzU2FmZUludGVnZXIoZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdE51bWJlcihOdW1iZXIobiksIE51bWJlcihkKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IEJpZ0V4YWN0TnVtYmVyKEJpZ0ludChuKSwgQmlnSW50KGQpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNTYWZlSW50ZWdlcihuKSkge1xuICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3ROdW1iZXIoTnVtYmVyKG4pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEJpZ0V4YWN0TnVtYmVyKEJpZ0ludChuKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbWFrZVJhdGlvbmFsKG46IG51bWJlciwgZDogbnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIobikgfHwgIU51bWJlci5pc0ludGVnZXIoZCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm51bWVyYXRvciBhbmQgZGVub21pbmF0b3IgbXVzdCBiZSBpbnRlZ2Vycy5cIilcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0TnVtYmVyKG4sIGQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb21wbGV4KHJlYWw6IFJhY2tldE51bWJlciwgaW1hZzogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICByZXR1cm4gIG1ha2VSZWN0YW5ndWxhcihyZWFsLCBpbWFnKTtcbn1cbiIsImltcG9ydCB7XG4gICAgUmFja2V0TnVtYmVyLFxuICAgIFJlYWxOdW1iZXIsXG4gICAgQ29tcGxleE51bWJlcixcbiAgICBpc0V4YWN0SW50ZWdlcixcbiAgICBTbWFsbEV4YWN0TnVtYmVyLFxuICAgIEJpZ0V4YWN0TnVtYmVyLFxufSBmcm9tICcuLi90b3dlcic7XG5pbXBvcnQge1xuICAgIGlzU2FmZUludGVnZXJcbn0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJpdHdpc2VPciguLi5vcGVyYW5kczogUmFja2V0TnVtYmVyW10pOiBSYWNrZXROdW1iZXIge1xuICAgIGZvciAoY29uc3QgcGFyYW0gb2Ygb3BlcmFuZHMpIHtcbiAgICAgICAgaWYgKCFpc0V4YWN0SW50ZWdlcihwYXJhbSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJiaXR3aXNlIG9wZXJhdG9ycyBvbmx5IGRlZmluZWQgZm9yIGV4YWN0IGludGVnZXJzLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhY2MgPSAwbjtcbiAgICBmb3IgKGxldCBwYXJhbSBvZiBvcGVyYW5kcykge1xuICAgICAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBDb21wbGV4TnVtYmVyKSB7XG4gICAgICAgICAgICBwYXJhbSA9IHBhcmFtLnRvUmVhbCgpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtID0gcGFyYW0gYXMgUmVhbE51bWJlcjtcbiAgICAgICAgYWNjIHw9IEJpZ0ludChwYXJhbS5udW0pO1xuICAgIH1cblxuICAgIGlmIChpc1NhZmVJbnRlZ2VyKGFjYykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0TnVtYmVyKE51bWJlcihhY2MpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEJpZ0V4YWN0TnVtYmVyKGFjYyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaXR3aXNlWG9yKC4uLm9wZXJhbmRzOiBSYWNrZXROdW1iZXJbXSk6IFJhY2tldE51bWJlciB7XG4gICAgZm9yIChjb25zdCBwYXJhbSBvZiBvcGVyYW5kcykge1xuICAgICAgICBpZiAoIWlzRXhhY3RJbnRlZ2VyKHBhcmFtKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImJpdHdpc2Ugb3BlcmF0b3JzIG9ubHkgZGVmaW5lZCBmb3IgZXhhY3QgaW50ZWdlcnMuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFjYyA9IDBuO1xuICAgIGZvciAobGV0IHBhcmFtIG9mIG9wZXJhbmRzKSB7XG4gICAgICAgIGlmIChwYXJhbSBpbnN0YW5jZW9mIENvbXBsZXhOdW1iZXIpIHtcbiAgICAgICAgICAgIHBhcmFtID0gcGFyYW0udG9SZWFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbSA9IHBhcmFtIGFzIFJlYWxOdW1iZXI7XG5cbiAgICAgICAgYWNjIF49IEJpZ0ludChwYXJhbS5udW0pO1xuICAgIH1cblxuICAgIGlmIChpc1NhZmVJbnRlZ2VyKGFjYykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0TnVtYmVyKE51bWJlcihhY2MpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEJpZ0V4YWN0TnVtYmVyKGFjYyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaXR3aXNlQW5kKC4uLm9wZXJhbmRzOiBSYWNrZXROdW1iZXJbXSk6IFJhY2tldE51bWJlciB7XG4gICAgZm9yIChjb25zdCBwYXJhbSBvZiBvcGVyYW5kcykge1xuICAgICAgICBpZiAoIWlzRXhhY3RJbnRlZ2VyKHBhcmFtKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImJpdHdpc2Ugb3BlcmF0b3JzIG9ubHkgZGVmaW5lZCBmb3IgZXhhY3QgaW50ZWdlcnMuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFjYyA9IC0xbjtcbiAgICBmb3IgKGxldCBwYXJhbSBvZiBvcGVyYW5kcykge1xuICAgICAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBDb21wbGV4TnVtYmVyKSB7XG4gICAgICAgICAgICBwYXJhbSA9IHBhcmFtLnRvUmVhbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW0gPSBwYXJhbSBhcyBSZWFsTnVtYmVyO1xuXG4gICAgICAgIGFjYyAmPSBCaWdJbnQocGFyYW0ubnVtKTtcbiAgICB9XG5cbiAgICBpZiAoaXNTYWZlSW50ZWdlcihhY2MpKSB7XG4gICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdE51bWJlcihOdW1iZXIoYWNjKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBCaWdFeGFjdE51bWJlcihhY2MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYml0d2lzZU5vdChuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmICghaXNFeGFjdEludGVnZXIobikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImJpdHdpc2Ugb3BlcmF0b3JzIG9ubHkgZGVmaW5lZCBmb3IgZXhhY3QgaW50ZWdlcnMuXCIpO1xuICAgIH1cblxuICAgIGlmIChuIGluc3RhbmNlb2YgQ29tcGxleE51bWJlcikge1xuICAgICAgICBuID0gbi50b1JlYWwoKTtcbiAgICB9XG5cbiAgICBuID0gbiBhcyBSZWFsTnVtYmVyO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gfkJpZ0ludChuLm51bSk7XG5cbiAgICBpZiAoaXNTYWZlSW50ZWdlcihyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdE51bWJlcihOdW1iZXIocmVzdWx0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBCaWdFeGFjdE51bWJlcihyZXN1bHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJpdGhtZXRpY1NoaWZ0KG46IFJhY2tldE51bWJlciwgbTogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoIWlzRXhhY3RJbnRlZ2VyKG4pIHx8ICFpc0V4YWN0SW50ZWdlcihtKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYml0d2lzZSBvcGVyYXRvcnMgb25seSBkZWZpbmVkIGZvciBpbnRlZ2Vycy5cIik7XG4gICAgfVxuXG4gICAgaWYgKG4gaW5zdGFuY2VvZiBDb21wbGV4TnVtYmVyKSB7XG4gICAgICAgIG4gPSBuLnRvUmVhbCgpO1xuICAgIH1cbiAgICBuID0gbiBhcyBSZWFsTnVtYmVyO1xuXG4gICAgaWYgKG0gaW5zdGFuY2VvZiBDb21wbGV4TnVtYmVyKSB7XG4gICAgICAgIG0gPSBtLnRvUmVhbCgpO1xuICAgIH1cbiAgICBtID0gbSBhcyBSZWFsTnVtYmVyO1xuXG4gICAgbGV0IHJlc3VsdDtcbiAgICBjb25zdCB4ID0gQmlnSW50KG4ubnVtKTtcbiAgICBjb25zdCB5ID0gQmlnSW50KG0ubnVtKTtcblxuICAgIGlmICh5IDwgMG4pIHtcbiAgICAgICAgcmVzdWx0ID0geCA+PiAteTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB4IDw8IHk7XG4gICAgfVxuXG4gICAgaWYgKGlzU2FmZUludGVnZXIocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3ROdW1iZXIoTnVtYmVyKHJlc3VsdCkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQmlnRXhhY3ROdW1iZXIocmVzdWx0KTtcbn1cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImlzQm94ZWROdW1iZXIiLCJuIiwiSW5leGFjdE51bWJlciIsIlNtYWxsRXhhY3ROdW1iZXIiLCJCaWdFeGFjdE51bWJlciIsIkNvbXBsZXhOdW1iZXIiLCJpc1JlYWxOdW1iZXIiLCJpc0pTTnVtYmVyIiwiaXNKU0ludGVnZXIiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJpc1NhZmVJbnRlZ2VyIiwibWF4IiwiTUFYX1NBRkVfSU5URUdFUiIsIm1pbiIsIk1JTl9TQUZFX0lOVEVHRVIiLCJpc0Zpbml0ZSIsIkJpZ0ludCIsInNob3VsZEJlQmlnSW50IiwiYmlnRXhwdCIsImsiLCJhY2MiLCJpbnRlZ2VySXNPbmUiLCJudW1iZXJJc1JhdGlvbmFsIiwiaXNCaWdJbnQiLCJpc1JhdGlvbmFsRmxvYXQiLCJpc05hTiIsIm1hdGNoRXhhY3RuZXNzIiwieCIsInkiLCJpc0V4YWN0IiwidG9JbmV4YWN0IiwiaXNFeGFjdFJlYWwiLCJjb25zdHJ1Y3RvciIsIm51bSIsInRoaXMiLCJmcmVlemUiLCJpc0luZXhhY3QiLCJ0b0V4YWN0IiwiRXJyb3IiLCJtYXRjaCIsInRvU3RyaW5nIiwidGVuVG9EZWNpbWFsUGxhY2VzIiwiTWF0aCIsInBvdyIsImxlbmd0aCIsInJvdW5kIiwidG9Db21wbGV4IiwiRVhBQ1RfWkVSTyIsInRvRml4bnVtIiwiZmxvb3IiLCJpc1JhdGlvbmFsIiwiaXNSZWFsIiwiaXNDb21wbGV4IiwiaXNaZXJvIiwiaXNOZWdhdGl2ZVplcm8iLCJpcyIsImlzUG9zaXRpdmUiLCJpc05lZ2F0aXZlIiwiaXNFdmVuIiwiSW5maW5pdHkiLCJ0b1NpZ25lZFN0cmluZyIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiaGludCIsImdyZWF0ZXJUaGFuIiwib3RoZXIiLCJUeXBlRXJyb3IiLCJncmVhdGVyVGhhbk9yRXF1YWwiLCJsZXNzVGhhbiIsImxlc3NUaGFuT3JFcXVhbCIsImVxdWFscyIsImFkZCIsInN1YnRyYWN0IiwibXVsdGlwbHkiLCJkaXZpZGUiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsImludGVnZXJTcXJ0Iiwic3FydCIsInJlc3VsdCIsIklORVhBQ1RfTkVHX09ORSIsIklORVhBQ1RfWkVSTyIsImFicyIsImNlaWxpbmciLCJjZWlsIiwiY29uanVnYXRlIiwibWFnbml0dWRlIiwicmVhbFBhcnQiLCJpbWFnaW5hcnlQYXJ0IiwiYW5nbGUiLCJQSSIsImxvZyIsImV4cHQiLCJwb3dlciIsImV4cCIsInRhbiIsImNvcyIsInNpbiIsImF0YW4iLCJhY29zIiwiYXNpbiIsImRlbiIsImdjZCIsImEiLCJiIiwidCIsInRvQmlnRXhhY3QiLCJFWEFDVF9ORUdfT05FIiwiemVybyIsInRvU21hbGxFeGFjdCIsIm51bVN0ciIsImRlblN0ciIsImZsb29yZGlmZiIsInJlYWwiLCJpbWFnIiwidW5kZWZpbmVkIiwiWkVSTyIsInRvUmVhbCIsIk5hTiIsInByaW1pdGl2ZSIsInRoaXNSZWFsIiwidGhpc0ltYWciLCJvdGhlclJlYWwiLCJvdGhlckltYWciLCJjIiwiZCIsInIiLCJjb24iLCJ1cCIsImRvd24iLCJyX3BsdXNfeCIsIlRXTyIsInJlYWxTcXIiLCJpbWFnU3FyIiwibWFnX2xvZyIsInRoZXRhIiwiSSIsIk9ORSIsImNvc19hIiwic2luX2EiLCJoYWxmUEkiLCJORUdfT05FIiwidG1wIiwiaXoiLCJpel9uZWdhdGUiLCJ6MiIsIk5FR19JIiwiTkVHX0lORiIsIkhBTEYiLCJwaV9oYWxmIiwicm9vdCIsImwiLCJzcXJ0T25lTmVnYXRlVGhpc1NxIiwiRVhBQ1RfSEFMRiIsIkVYQUNUX09ORSIsIkVYQUNUX1RXTyIsIklORVhBQ1RfTkVHX1pFUk8iLCJJTkVYQUNUX0hBTEYiLCJJTkVYQUNUX09ORSIsIklORVhBQ1RfVFdPIiwiSU5GIiwiTkFOIiwiRVhBQ1RfSSIsIkVYQUNUX05FR19JIiwiSU5FWEFDVF9JIiwiSU5FWEFDVF9ORUdfSSIsIm9uZSIsInR3byIsIm5lZ2F0aXZlX29uZSIsInBpIiwiZSIsIkUiLCJuYW4iLCJuZWdhdGl2ZV9pbmYiLCJpbmYiLCJuZWdhdGl2ZV96ZXJvIiwiaSIsIm5lZ2F0aXZlX2kiLCJub3JtYWxpemVkIiwiZm4iLCJudW1zIiwibm9ybWFsaXplIiwibWFrZUNvbXBhdGlibGUiLCJpc051bWJlciIsImlzQm94ZWQiLCJpc0JveGVkUmVhbCIsImlzQm94ZWRSYXRpb25hbCIsImlzQm94ZWRJbnRlZ2VyIiwiaXNFeGFjdEludGVnZXIiLCJpc0V4YWN0Tm9uTmVnYXRpdmVJbnRlZ2VyIiwiaXNFeGFjdFBvc2l0aXZlSW50ZWdlciIsImlzSW5leGFjdFJlYWwiLCJpc0Zsb251bSIsImZvck51bWJlciIsImZvckJveGVkIiwiaXNPZGQiLCJpc1JhY2tldE51bWJlciIsImlzU2NoZW1lTnVtYmVyIiwibWFrZU11bHRpQXJpdHkiLCJmbkZvck51bWJlcnMiLCJmbkZvckJveGVkTnVtYmVycyIsImFyZ3MiLCJhZGRlciIsInN1YnRyYWN0ZXIiLCJtdWx0aXBsaWVyIiwiYXJnIiwiZGl2aWRlciIsInF1b3RpZW50IiwicmVtYWluZGVyIiwibW9kdWxvIiwic3FyIiwieiIsInciLCJib3hOdW1iZXIiLCJnY2RlciIsImFuIiwiYm4iLCJhZCIsImJkIiwibGNtIiwicHJvZHVjdCIsImJpbm9wTGNtIiwic2xpY2UiLCJlcXVhbENvbXAiLCJlcXYiLCJhcHByb3hFcXVhbHMiLCJkZWx0YSIsImd0Q29tcCIsImd0ZUNvbXAiLCJsdENvbXAiLCJsdGVDb21wIiwiaW5leGFjdFRvRXhhY3QiLCJleGFjdFRvSW5leGFjdCIsIm51bWJlclRvU3RyaW5nIiwibWFrZVJlY3Rhbmd1bGFyIiwibWFrZVBvbGFyIiwiY29udGFpbnNJbmZpbml0eSIsImlzT25lIiwiYXRhbjIiLCJhdGFuMSIsInNpbmgiLCJjb3NoIiwidGFuaCIsImZyYWN0aW9uUmVnZXhwIiwiUmVnRXhwIiwiY29tcGxleFJlZ2V4cCIsImludGVnZXJSZWdleHAiLCJkZWNpbWFsUmVnZXhwIiwic2NpZW50aWZpY1JlZ2V4cCIsImZyb21TdHJpbmciLCJzdHIiLCJwYXJzZUV4YWN0IiwibWF0Y2hDb21wbGV4IiwicmVhbFN0ciIsImltYWdTdHIiLCJtYXRjaGVkIiwiY29tcGxleElzRXhhY3QiLCJwYXJzZUludGVnZXIiLCJwYXJzZUZyYWN0aW9uIiwibWFrZUZsb2F0IiwibWFrZUV4YWN0IiwibWFrZVJhdGlvbmFsIiwibWFrZUNvbXBsZXgiLCJiaXR3aXNlT3IiLCJvcGVyYW5kcyIsInBhcmFtIiwiYml0d2lzZVhvciIsImJpdHdpc2VBbmQiLCJiaXR3aXNlTm90IiwiYXJpdGhtZXRpY1NoaWZ0IiwibSJdLCJzb3VyY2VSb290IjoiIn0=