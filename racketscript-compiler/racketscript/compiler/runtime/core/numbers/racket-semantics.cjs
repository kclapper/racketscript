/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/arithmetic.ts":
/*!*************************************!*\
  !*** ./src/functions/arithmetic.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs),
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   ceiling: () => (/* binding */ ceiling),
/* harmony export */   denominator: () => (/* binding */ denominator),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   exp: () => (/* binding */ exp),
/* harmony export */   expt: () => (/* binding */ expt),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   gcd: () => (/* binding */ gcd),
/* harmony export */   integerSqrt: () => (/* binding */ integerSqrt),
/* harmony export */   lcm: () => (/* binding */ lcm),
/* harmony export */   log: () => (/* binding */ log),
/* harmony export */   modulo: () => (/* binding */ modulo),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   numerator: () => (/* binding */ numerator),
/* harmony export */   quotient: () => (/* binding */ quotient),
/* harmony export */   remainder: () => (/* binding */ remainder),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   sqr: () => (/* binding */ sqr),
/* harmony export */   sqrt: () => (/* binding */ sqrt),
/* harmony export */   subtract: () => (/* binding */ subtract)
/* harmony export */ });
/* harmony import */ var _tower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tower */ "./src/tower.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/functions/util.ts");
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predicates */ "./src/functions/predicates.ts");
/* harmony import */ var _comparison__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comparison */ "./src/functions/comparison.ts");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misc */ "./src/functions/misc.ts");





/*
 * Makes a function that operates on RacketNumbers. The function takes
 * at least two arguments and folds the given binary operations from left to right.
 */
function makeMultiArity(fnForNumbers, fnForBigInts, fnForBoxedNumbers) {
    return function recur(...args) {
        if (args.length < 2) {
            throw new Error("Must be called with at least two arguments.");
        }
        let x = args[0];
        let y = args[1];
        [x, y] = (0,_util__WEBPACK_IMPORTED_MODULE_1__.matchTypes)(x, y);
        let result;
        if (typeof x === 'number') {
            result = fnForNumbers(x, y);
            if (!Number.isSafeInteger(result)) {
                result = fnForBigInts(BigInt(x), BigInt(y));
            }
        }
        else if (typeof x === 'bigint') {
            result = fnForBigInts(x, y);
        }
        else {
            result = fnForBoxedNumbers(x, y);
        }
        if (args.length === 2) {
            return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(result);
        }
        else {
            return recur(result, ...args.slice(2));
        }
    };
}
function add(...nums) {
    const adder = makeMultiArity(function (x, y) {
        return x + y;
    }, function (x, y) {
        return x + y;
    }, function (x, y) {
        return x.add(y);
    });
    if (nums.length === 0) {
        return 0;
    }
    else if (nums.length === 1) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(nums[0]);
    }
    else {
        return adder(...nums);
    }
}
function subtract(...nums) {
    const subtracter = makeMultiArity(function (x, y) {
        return x - y;
    }, function (x, y) {
        return x - y;
    }, function (x, y) {
        return x.subtract(y);
    });
    if (nums.length === 1) {
        return subtracter(0, nums[0]);
    }
    else {
        return subtracter(...nums);
    }
}
function multiply(...nums) {
    const multiplier = makeMultiArity(function (x, y) {
        return x * y;
    }, function (x, y) {
        return x * y;
    }, function (x, y) {
        return x.multiply(y);
    });
    if (nums.length === 0) {
        return 1;
    }
    else if (nums.length === 1) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(nums[0]);
    }
    else {
        return multiplier(...nums);
    }
}
function divide(...nums) {
    const divider = makeMultiArity(function (x, y) {
        if (x % y === 0) {
            return x / y;
        }
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: x, den: 1 }).divide(_tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: y, den: 1 }));
    }, function (x, y) {
        if (x % y === 0n) {
            return x / y;
        }
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: x, den: 1n }).divide(_tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: y, den: 1n }));
    }, function (x, y) {
        return x.divide(y);
    });
    if (nums.length === 1) {
        return divider(1, nums[0]);
    }
    else {
        return divider(...nums);
    }
}
function quotient(n, k) {
    [n, k] = (0,_util__WEBPACK_IMPORTED_MODULE_1__.matchTypes)(n, k);
    let result;
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        result = n.divide(k).floor();
    }
    else if (typeof n === 'number') {
        result = Math.floor(n / k);
    }
    else {
        result = n / k;
    }
    return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(result);
}
function remainder(n, k) {
    [n, k] = (0,_util__WEBPACK_IMPORTED_MODULE_1__.matchTypes)(n, k);
    let result;
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        const quotient = n.divide(k).floor();
        result = n.subtract(k.multiply(quotient));
    }
    else if (typeof n === 'number') {
        result = n % k;
    }
    else {
        result = n % k;
    }
    return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(result);
}
function modulo(n, k) {
    [n, k] = (0,_util__WEBPACK_IMPORTED_MODULE_1__.matchTypes)(n, k);
    let result = remainder(n, k);
    const negk = (0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isNegative)(k);
    if (negk) {
        if ((0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isPositive)(result)) {
            result = add(result, k);
        }
    }
    else {
        if ((0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isNegative)(result)) {
            result = add(result, k);
        }
    }
    return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(result);
}
function sqr(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n.multiply(n));
    }
    else if (typeof n === 'number') {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n * n);
    }
    else {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n * n);
    }
}
function sqrt(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n.sqrt());
    }
    else if (typeof n === 'number') {
        if (n < 0) {
            n = -n;
            const result = Math.sqrt(n);
            if (Number.isInteger(result)) {
                return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: 0, den: 1, imagNum: result, imagDen: 1 });
            }
            else {
                return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: 0, imagNum: result });
            }
        }
        else {
            const result = Math.sqrt(n);
            if (Number.isInteger(result)) {
                return result;
            }
            else {
                return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: result });
            }
        }
    }
    else {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(_tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: n, den: 1n }).sqrt());
    }
}
function integerSqrt(n) {
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isNegative)(n)) {
        const result = integerSqrt(multiply(n, -1));
        if ((0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isExact)(result)) {
            return multiply(result, _tower__WEBPACK_IMPORTED_MODULE_0__.I);
        }
        else {
            return multiply(result, _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: 0, imagNum: 1 }));
        }
    }
    const result = floor(sqrt(n));
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isExact)(n) && result instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return result.toFixnum();
    }
    else {
        return result;
    }
}
function expt(z, w) {
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isInexact)(w) && (0,_comparison__WEBPACK_IMPORTED_MODULE_3__.equals)(w, _tower__WEBPACK_IMPORTED_MODULE_0__.INEXACT_ZERO)) {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.INEXACT_ONE;
    }
    else if ((0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isExact)(w) && (0,_comparison__WEBPACK_IMPORTED_MODULE_3__.equals)(w, _tower__WEBPACK_IMPORTED_MODULE_0__.EXACT_HALF)) {
        return sqrt(z);
    }
    else if ((0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isNaN)(w)) {
        return (0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isReal)(w) ? _tower__WEBPACK_IMPORTED_MODULE_0__.NAN : _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: NaN, imagNum: NaN });
    }
    else if ((0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isNegativeZero)(z) && (0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isNegative)(w)) {
        return (0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isEven)(w) ? _tower__WEBPACK_IMPORTED_MODULE_0__.INF : _tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF;
    }
    else if (!(0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isFinite)(z) && !(0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isNaN)(z) && (0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isNegative)(z) && (0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isInteger)(w) && (0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isNegative)(w)) {
        return (0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isEven)(w) ? _tower__WEBPACK_IMPORTED_MODULE_0__.INEXACT_ZERO : _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: -0 });
    }
    else if (!(0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isFinite)(z) && !(0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isNaN)(z) && (0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isPositive)(z) && (0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isInteger)(w) && (0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isPositive)(w)) {
        return (0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isEven)(w) ? _tower__WEBPACK_IMPORTED_MODULE_0__.INF : _tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF;
    }
    [z, w] = (0,_util__WEBPACK_IMPORTED_MODULE_1__.matchTypes)(z, w);
    if (z instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(z.expt(w));
    }
    else if (typeof z === 'number') {
        const result = Math.pow(z, w);
        if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.shouldBeBigInt)(result) || !Number.isFinite(result)) {
            return (0,_util__WEBPACK_IMPORTED_MODULE_1__.bigExpt)(BigInt(z), BigInt(w));
        }
        return result;
    }
    else {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.bigExpt)(z, w);
    }
}
function exp(n) {
    if (n === 0 || n === 0n) {
        return 1;
    }
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return n.exp();
    }
    else if (typeof n === 'number') {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Math.exp(n) });
    }
    else {
        return exp(_tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: n, den: 1n }));
    }
}
function log(z, b) {
    let result;
    if (z instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        if (z.isExact() && z.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.ONE)) {
            return 0;
        }
        result = z.log();
        if (b) {
            result = divide(result, log(b));
        }
        return result;
    }
    else if (typeof z === 'number') {
        if (z === 1) {
            return 0;
        }
        if (z < 0) {
            return log(_tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: z, den: 1 }), b);
        }
        result = Math.log(z);
        if (b) {
            return divide(result, log(b));
        }
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: result });
    }
    else {
        if (z === 1n) {
            return 0;
        }
        return log(_tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: z, den: 1n }), b);
    }
}
function numerator(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n.numerator());
    }
    return n;
}
function denominator(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n.denominator());
    }
    return 1;
}
function gcd(...args) {
    if (args.length === 0) {
        return 0;
    }
    if (args.length === 1) {
        return args[0];
    }
    const gcder = makeMultiArity(function (x, y) {
        let t;
        while (y !== 0) {
            t = x;
            x = y;
            y = t % y;
        }
        return x;
    }, function (x, y) {
        let t;
        while (y !== 0n) {
            t = x;
            x = y;
            y = t % y;
        }
        return x;
    }, function (x, y) {
        const isExact = x.isExact() && y.isExact();
        let an = numerator(x);
        let ad = denominator(x);
        if (an instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
            an = an.toFixnum();
        }
        if (ad instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
            ad = ad.toFixnum();
        }
        let bn = numerator(y);
        let bd = denominator(y);
        if (bn instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
            bn = bn.toFixnum();
        }
        if (bd instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
            bd = bd.toFixnum();
        }
        const num = gcd(an, bn);
        const den = lcm(ad, bd);
        const result = divide(num, den);
        return isExact ? result : (0,_misc__WEBPACK_IMPORTED_MODULE_4__.exactToInexact)(result);
    });
    return gcder(...args);
}
function lcm(...args) {
    if (args.length === 0) {
        return 1;
    }
    if (args.length === 1) {
        return abs(args[0]);
    }
    for (let i = 0; i < args.length; i++) {
        if ((0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isZero)(args[i])) {
            if ((0,_predicates__WEBPACK_IMPORTED_MODULE_2__.isExact)(args[i])) {
                return _tower__WEBPACK_IMPORTED_MODULE_0__.EXACT_ZERO;
            }
            return _tower__WEBPACK_IMPORTED_MODULE_0__.INEXACT_ZERO;
        }
    }
    const binopLcm = function (x, y) {
        const product = multiply(x, y);
        const den = gcd(x, y);
        const result = abs(divide(product, den));
        return result;
    };
    return lcm(binopLcm(args[0], args[1]), ...args.slice(2));
}
function abs(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n.abs());
    }
    else if (typeof n === 'number') {
        return Math.abs(n);
    }
    else if (typeof n === 'bigint' && n >= 0n) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n);
    }
    else {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n * -1n);
    }
}
function floor(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n.floor());
    }
    else if (typeof n === 'bigint') {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n);
    }
    else {
        return n;
    }
}
function ceiling(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n.ceiling());
    }
    else if (typeof n === 'bigint') {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n);
    }
    else {
        return n;
    }
}
function round(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n.round());
    }
    else if (typeof n === 'bigint') {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n);
    }
    else {
        return n;
    }
}


/***/ }),

/***/ "./src/functions/bitwise.ts":
/*!**********************************!*\
  !*** ./src/functions/bitwise.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arithmeticShift: () => (/* binding */ arithmeticShift),
/* harmony export */   bitwiseAnd: () => (/* binding */ bitwiseAnd),
/* harmony export */   bitwiseNot: () => (/* binding */ bitwiseNot),
/* harmony export */   bitwiseOr: () => (/* binding */ bitwiseOr),
/* harmony export */   bitwiseXor: () => (/* binding */ bitwiseXor)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/functions/util.ts");

function bitwiseOr(...operands) {
    operands = operands.map(_util__WEBPACK_IMPORTED_MODULE_0__.normalize);
    for (const param of operands) {
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isJSInteger)(param)) {
            throw new TypeError("bitwise operators only defined for integers.");
        }
    }
    const isBig = operands.reduce((acc, n) => acc || typeof n === 'bigint', false);
    if (isBig) {
        operands = operands.map((n) => BigInt(n));
    }
    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.normalize)(operands.reduce((a, b) => a | b, isBig ? 0n : 0));
}
function bitwiseXor(...operands) {
    operands = operands.map(_util__WEBPACK_IMPORTED_MODULE_0__.normalize);
    for (const param of operands) {
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isJSInteger)(param)) {
            throw new TypeError("bitwise operators only defined for integers.");
        }
    }
    const isBig = operands.reduce((acc, n) => acc || typeof n === 'bigint', false);
    if (isBig) {
        operands = operands.map((n) => BigInt(n));
    }
    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.normalize)(operands.reduce((a, b) => a ^ b, isBig ? 0n : 0));
}
function bitwiseAnd(...operands) {
    operands = operands.map(_util__WEBPACK_IMPORTED_MODULE_0__.normalize);
    for (const param of operands) {
        if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isJSInteger)(param)) {
            throw new TypeError("bitwise operators only defined for integers.");
        }
    }
    const isBig = operands.reduce((acc, n) => acc || typeof n === 'bigint', false);
    if (isBig) {
        operands = operands.map((n) => BigInt(n));
    }
    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.normalize)(operands.reduce((a, b) => a & b, isBig ? -1n : -1));
}
function bitwiseNot(n) {
    n = (0,_util__WEBPACK_IMPORTED_MODULE_0__.normalize)(n);
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isJSInteger)(n)) {
        throw new TypeError("bitwise operators only defined for integers.");
    }
    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.normalize)(~n);
}
function arithmeticShift(n, m) {
    n = (0,_util__WEBPACK_IMPORTED_MODULE_0__.normalize)(n);
    m = (0,_util__WEBPACK_IMPORTED_MODULE_0__.normalize)(m);
    if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isJSInteger)(n) || !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isJSInteger)(m)) {
        throw new TypeError("bitwise operators only defined for integers.");
    }
    n = typeof m === 'bigint' ? BigInt(n) : n;
    m = typeof n === 'bigint' ? BigInt(m) : m;
    if (m < (typeof m === 'number' ? 0 : 0n)) {
        return n >> -m;
    }
    else {
        return n << m;
    }
}


/***/ }),

/***/ "./src/functions/comparison.ts":
/*!*************************************!*\
  !*** ./src/functions/comparison.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   approxEquals: () => (/* binding */ approxEquals),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   eqv: () => (/* binding */ eqv),
/* harmony export */   greaterThan: () => (/* binding */ greaterThan),
/* harmony export */   greaterThanOrEqual: () => (/* binding */ greaterThanOrEqual),
/* harmony export */   lessThan: () => (/* binding */ lessThan),
/* harmony export */   lessThanOrEqual: () => (/* binding */ lessThanOrEqual)
/* harmony export */ });
/* harmony import */ var _tower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tower */ "./src/tower.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/functions/util.ts");


const makeMultiArity = function (fnForNumbers, fnForBigInt, fnForBoxedNumbers) {
    return function (...args) {
        if (args.length < 2) {
            throw new Error("Must be called with at least two arguments.");
        }
        for (let i = 0; i < args.length - 1; i++) {
            let x = args[i];
            let y = args[i + 1];
            [x, y] = (0,_util__WEBPACK_IMPORTED_MODULE_1__.matchTypes)(x, y);
            if (typeof x === 'number' && !fnForNumbers(x, y)) {
                return false;
            }
            else if (typeof x === 'bigint' && !fnForBigInt(x, y)) {
                return false;
            }
            else if (x instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber && !fnForBoxedNumbers(x, y)) {
                return false;
            }
        }
        return true;
    };
};
function equals(...nums) {
    if (nums.length === 1) {
        return true;
    }
    const equalComp = makeMultiArity(function (x, y) {
        return x === y;
    }, function (x, y) {
        return x === y;
    }, function (x, y) {
        return x.equals(y);
    });
    return equalComp(...nums);
}
// This is provided for compatibility with the original js-numbers library
function eqv(x, y) {
    return equals(x, y);
}
// This is provided for compatibility with the original js-numbers library
function approxEquals(x, y, delta) {
    return lessThanOrEqual((0,_tower__WEBPACK_IMPORTED_MODULE_0__.abs)((0,_tower__WEBPACK_IMPORTED_MODULE_0__.subtract)(x, y)), (0,_tower__WEBPACK_IMPORTED_MODULE_0__.abs)(delta));
}
function greaterThan(...nums) {
    if (nums.length === 1) {
        return true;
    }
    const gtComp = makeMultiArity(function (x, y) {
        return x > y;
    }, function (x, y) {
        return x > y;
    }, function (x, y) {
        return x.greaterThan(y);
    });
    return gtComp(...nums);
}
function greaterThanOrEqual(...nums) {
    if (nums.length === 1) {
        return true;
    }
    const gteComp = makeMultiArity(function (x, y) {
        return x >= y;
    }, function (x, y) {
        return x >= y;
    }, function (x, y) {
        return x.greaterThanOrEqual(y);
    });
    return gteComp(...nums);
}
function lessThan(...nums) {
    if (nums.length === 1) {
        return true;
    }
    const ltComp = makeMultiArity(function (x, y) {
        return x < y;
    }, function (x, y) {
        return x < y;
    }, function (x, y) {
        return x.lessThan(y);
    });
    return ltComp(...nums);
}
function lessThanOrEqual(...nums) {
    if (nums.length === 1) {
        return true;
    }
    const lteComp = makeMultiArity(function (x, y) {
        return x <= y;
    }, function (x, y) {
        return x <= y;
    }, function (x, y) {
        return x.lessThanOrEqual(y);
    });
    return lteComp(...nums);
}


/***/ }),

/***/ "./src/functions/complex.ts":
/*!**********************************!*\
  !*** ./src/functions/complex.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   angle: () => (/* binding */ angle),
/* harmony export */   conjugate: () => (/* binding */ conjugate),
/* harmony export */   imaginaryPart: () => (/* binding */ imaginaryPart),
/* harmony export */   magnitude: () => (/* binding */ magnitude),
/* harmony export */   makePolar: () => (/* binding */ makePolar),
/* harmony export */   makeRectangular: () => (/* binding */ makeRectangular),
/* harmony export */   realPart: () => (/* binding */ realPart)
/* harmony export */ });
/* harmony import */ var _tower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tower */ "./src/tower.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/functions/util.ts");


function makeRectangular(real, imag) {
    return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.add)(real, (0,_tower__WEBPACK_IMPORTED_MODULE_0__.multiply)(imag, _tower__WEBPACK_IMPORTED_MODULE_0__.EXACT_I));
}
function makePolar(r, theta) {
    return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.add)((0,_tower__WEBPACK_IMPORTED_MODULE_0__.multiply)(r, (0,_tower__WEBPACK_IMPORTED_MODULE_0__.cos)(theta)), (0,_tower__WEBPACK_IMPORTED_MODULE_0__.multiply)(r, (0,_tower__WEBPACK_IMPORTED_MODULE_0__.sin)(theta), _tower__WEBPACK_IMPORTED_MODULE_0__.EXACT_I));
}
function magnitude(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        if (containsInfinity(n)) {
            return _tower__WEBPACK_IMPORTED_MODULE_0__.INF;
        }
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n.magnitude());
    }
    return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.abs)(n);
}
function containsInfinity(n) {
    const real = n.realPart();
    const imag = n.imaginaryPart();
    return real.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.INF)
        || real.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF)
        || imag.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.INF)
        || imag.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF);
}
function angle(n) {
    if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isZero)(n)) {
        throw new Error("Divide by zero");
    }
    if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isReal)(n)) {
        return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.isPositive)(n) ? 0 : _tower__WEBPACK_IMPORTED_MODULE_0__.PI;
    }
    // We know n is a boxed number if it's not real
    n = n;
    if (containsInfinity(n)) {
        const real = n.realPart();
        const imag = n.imaginaryPart();
        if (real.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.INF) && imag.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.INF)) {
            return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)(_tower__WEBPACK_IMPORTED_MODULE_0__.PI, 4);
        }
        else if (real.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.INF) && imag.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF)) {
            return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.multiply)(-1, (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)(_tower__WEBPACK_IMPORTED_MODULE_0__.PI, 4));
        }
        else if (real.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF) && imag.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF)) {
            return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.multiply)(-3, (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)(_tower__WEBPACK_IMPORTED_MODULE_0__.PI, 4));
        }
        else if (real.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF) && imag.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.INF)) {
            return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.multiply)(3, (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)(_tower__WEBPACK_IMPORTED_MODULE_0__.PI, 4));
        }
        // One of the two is not infinity
        if (real.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.INF)) {
            return _tower__WEBPACK_IMPORTED_MODULE_0__.INEXACT_ZERO.multiply(imag);
        }
        else if (real.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF)) {
            return imag.isPositive() ? _tower__WEBPACK_IMPORTED_MODULE_0__.PI : _tower__WEBPACK_IMPORTED_MODULE_0__.PI.multiply(_tower__WEBPACK_IMPORTED_MODULE_0__.EXACT_NEG_ONE);
        }
        else if (imag.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.INF)) {
            return _tower__WEBPACK_IMPORTED_MODULE_0__.PI.divide(_tower__WEBPACK_IMPORTED_MODULE_0__.EXACT_TWO);
        }
        else {
            return _tower__WEBPACK_IMPORTED_MODULE_0__.PI.divide(_tower__WEBPACK_IMPORTED_MODULE_0__.EXACT_TWO).multiply(_tower__WEBPACK_IMPORTED_MODULE_0__.EXACT_NEG_ONE);
        }
    }
    return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n.angle());
}
function realPart(n) {
    if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isReal)(n)) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n);
    }
    return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n.realPart());
}
function imaginaryPart(n) {
    if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isReal)(n)) {
        return 0;
    }
    return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n.imaginaryPart());
}
function conjugate(n) {
    if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isReal)(n)) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n);
    }
    return n.conjugate();
}


/***/ }),

/***/ "./src/functions/creation.ts":
/*!***********************************!*\
  !*** ./src/functions/creation.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boxFixnum: () => (/* binding */ boxFixnum),
/* harmony export */   fromJSNumber: () => (/* binding */ fromJSNumber),
/* harmony export */   fromString: () => (/* binding */ fromString),
/* harmony export */   makeComplex: () => (/* binding */ makeComplex),
/* harmony export */   makeComplexNumber: () => (/* binding */ makeComplexNumber),
/* harmony export */   makeFloat: () => (/* binding */ makeFloat),
/* harmony export */   makeNumber: () => (/* binding */ makeNumber),
/* harmony export */   makeRational: () => (/* binding */ makeRational),
/* harmony export */   toFixnum: () => (/* binding */ toFixnum)
/* harmony export */ });
/* harmony import */ var _tower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tower */ "./src/tower.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/functions/util.ts");


function toFixnum(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return n.toFixnum();
    }
    return n;
}
function fromJSNumber(n) {
    if (typeof n === 'bigint') {
        return n;
    }
    else {
        return Number.isInteger(n) ? n : _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: n });
    }
}
function boxFixnum(n) {
    return typeof n === 'number' ? _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: n, den: 1 }) : _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: n, den: 1n });
}
const fractionRegexp = new RegExp("^([+-]?\\d+)/(\\d+)$");
const complexRegexp = new RegExp("^([+-]?[\\d\\w/\\.]*)([+-])([\\d\\w/\\.]*)i$");
const integerRegexp = new RegExp("^[+-]?\\d+$");
const decimalRegexp = new RegExp("^([+-]?\\d*)\\.(\\d*)$");
const scientificRegexp = new RegExp("^([+-]?\\d*\\.?\\d*)[Ee](\\+?\\d+)$");
function fromString(str) {
    str = str.toString(); // For backwards compatibility with js-numbers
    const matchExact = str.match(fractionRegexp);
    if (matchExact) {
        return parseExact(str);
    }
    const matchComplex = str.match(complexRegexp);
    if (matchComplex) {
        const realStr = matchComplex[1] || "0";
        const imagStr = matchComplex[2] + (matchComplex[3] || "1");
        if (complexIsExact(matchComplex)) {
            const real = parseExact(realStr);
            const imag = parseExact(imagStr);
            return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.makeRectangular)(real, imag);
        }
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Number(realStr), imagNum: Number(imagStr) });
    }
    if (str === '+nan.0' || str === '-nan.0' || str === '+nan.f' || str === '-nan.f') {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.NAN;
    }
    else if (str === '+inf.0' || str === '+inf.f') {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.INF;
    }
    else if (str === '-inf.0' || str === '-inf.f') {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF;
    }
    else if (str === '-0.0') {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: -0.0 });
    }
    if (str.match(decimalRegexp) || str.match(scientificRegexp)) {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Number(str) });
    }
    if (str.match(integerRegexp)) {
        return parseInteger(str);
    }
    return false;
}
function complexIsExact(matched) {
    const real = matched[1].match(integerRegexp) !== null || matched[1].match(fractionRegexp) !== null;
    const imag = matched[3].match(integerRegexp) !== null || matched[3].match(fractionRegexp) !== null;
    return real && imag;
}
function parseExact(str) {
    const matchInteger = str.match(integerRegexp);
    if (matchInteger) {
        return parseInteger(str);
    }
    const [num, den] = parseFraction(str);
    return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: num, den: den });
}
function parseInteger(str) {
    const n = Number(str);
    if (Number.isSafeInteger(n)) {
        return n;
    }
    else if (Number.isInteger(n)) {
        return BigInt(str);
    }
    else {
        throw new Error(`${str} is not an integer`);
    }
}
function parseFraction(str) {
    const match = str.match(fractionRegexp);
    if (match) {
        let num = parseInteger(match[1]);
        let den = parseInteger(match[2]);
        if (typeof num !== typeof den) {
            num = BigInt(num);
            den = BigInt(den);
        }
        return [num, den];
    }
    throw new Error(`Fraction now found in ${str}`);
}
function makeNumber(num, den) {
    return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(_tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: num, den: den }));
}
function makeComplexNumber(num, imagNum, den, imagDen) {
    return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(_tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: num, den: den, imagNum: imagNum, imagDen: imagDen }));
}
// For backwards compatibility with js-numbers.
function makeFloat(n) {
    return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(_tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: n }));
}
function makeRational(n, d) {
    return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(_tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: n, den: d }));
}
function makeComplex(real, imag) {
    return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.makeRectangular)(real, imag);
}


/***/ }),

/***/ "./src/functions/misc.ts":
/*!*******************************!*\
  !*** ./src/functions/misc.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exactToInexact: () => (/* binding */ exactToInexact),
/* harmony export */   inexactToExact: () => (/* binding */ inexactToExact),
/* harmony export */   toExact: () => (/* binding */ toExact),
/* harmony export */   toInexact: () => (/* binding */ toInexact)
/* harmony export */ });
/* harmony import */ var _tower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tower */ "./src/tower.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/functions/util.ts");


function inexactToExact(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalize)(n.toExact());
    }
    return n;
}
const toExact = inexactToExact; // For backwards compatibility
function exactToInexact(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return n.toInexact();
    }
    return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Number(n) });
}
const toInexact = exactToInexact; // For backwards compatibility


/***/ }),

/***/ "./src/functions/predicates.ts":
/*!*************************************!*\
  !*** ./src/functions/predicates.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isComplex: () => (/* binding */ isComplex),
/* harmony export */   isEven: () => (/* binding */ isEven),
/* harmony export */   isExact: () => (/* binding */ isExact),
/* harmony export */   isExactInteger: () => (/* binding */ isExactInteger),
/* harmony export */   isExactNonNegativeInteger: () => (/* binding */ isExactNonNegativeInteger),
/* harmony export */   isExactPositiveInteger: () => (/* binding */ isExactPositiveInteger),
/* harmony export */   isFinite: () => (/* binding */ isFinite),
/* harmony export */   isFixnum: () => (/* binding */ isFixnum),
/* harmony export */   isFlonum: () => (/* binding */ isFlonum),
/* harmony export */   isInexact: () => (/* binding */ isInexact),
/* harmony export */   isInexactReal: () => (/* binding */ isInexactReal),
/* harmony export */   isInteger: () => (/* binding */ isInteger),
/* harmony export */   isNaN: () => (/* binding */ isNaN),
/* harmony export */   isNegative: () => (/* binding */ isNegative),
/* harmony export */   isNegativeZero: () => (/* binding */ isNegativeZero),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isOdd: () => (/* binding */ isOdd),
/* harmony export */   isPositive: () => (/* binding */ isPositive),
/* harmony export */   isRacketNumber: () => (/* binding */ isRacketNumber),
/* harmony export */   isRational: () => (/* binding */ isRational),
/* harmony export */   isReal: () => (/* binding */ isReal),
/* harmony export */   isSchemeNumber: () => (/* binding */ isSchemeNumber),
/* harmony export */   isZero: () => (/* binding */ isZero)
/* harmony export */ });
/* harmony import */ var _numbers_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../numbers/util */ "./src/numbers/util.ts");
/* harmony import */ var _tower__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tower */ "./src/tower.ts");


function isNumber(x) {
    const isNumber = typeof x === 'number' && Number.isInteger(x);
    const isBigInt = typeof x === 'bigint';
    const isBoxed = x instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber;
    return isNumber || isBigInt || isBoxed;
}
const isComplex = isNumber;
function isReal(x) {
    const isNumber = typeof x === 'number' && Number.isInteger(x);
    const isBigInt = typeof x === 'bigint';
    const isBoxedReal = x instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && x.isReal();
    return isNumber || isBigInt || isBoxedReal;
}
function isRational(x) {
    const isNumber = typeof x === 'number' && Number.isInteger(x);
    const isBigInt = typeof x === 'bigint';
    const isBoxedRational = x instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && x.isRational();
    return isNumber || isBigInt || isBoxedRational;
}
function isInteger(x) {
    const isNumber = typeof x === 'number' && Number.isInteger(x);
    const isBigInt = typeof x === 'bigint';
    const isBoxedInteger = x instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && x.isInteger();
    return isNumber || isBigInt || isBoxedInteger;
}
function isExactInteger(x) {
    const isNumber = typeof x === 'number' && Number.isInteger(x);
    const isBigInt = typeof x === 'bigint';
    const isBoxedExactInteger = x instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && x.isInteger() && x.isExact();
    return isNumber || isBigInt || isBoxedExactInteger;
}
function isExactNonNegativeInteger(x) {
    const forNumber = typeof x === 'number' && Number.isInteger(x) && x >= 0;
    const forBigInt = typeof x === 'bigint' && x >= 0n;
    const forBoxed = x instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && x.isInteger() && x.isExact() && !x.isNegative();
    return forNumber || forBigInt || forBoxed;
}
function isExactPositiveInteger(x) {
    const forNumber = typeof x === 'number' && Number.isInteger(x) && x > 0;
    const forBigInt = typeof x === 'bigint' && x > 0n;
    const forBoxed = x instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && x.isInteger() && x.isExact() && x.isPositive();
    return forNumber || forBigInt || forBoxed;
}
function isInexactReal(x) {
    return x instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && x.isReal() && x.isInexact();
}
function isFixnum(x) {
    const forNumber = typeof x === 'number' && Number.isInteger(x);
    const forBigInt = typeof x === 'bigint';
    return forNumber || forBigInt;
}
function isFlonum(x) {
    return x instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && x.isReal() && x.isInexact();
}
function isZero(n) {
    const forNumber = typeof n === 'number' && n === 0;
    const forBigInt = typeof n === 'bigint' && n === 0n;
    const forBoxed = n instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && n.isZero();
    return forNumber || forBigInt || forBoxed;
}
function isPositive(n) {
    const forNumber = typeof n === 'number' && n > 0;
    const forBigInt = typeof n === 'bigint' && n > 0n;
    const forBoxed = n instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && n.isPositive();
    return forNumber || forBigInt || forBoxed;
}
function isNegative(n) {
    const forNumber = typeof n === 'number' && n < 0;
    const forBigInt = typeof n === 'bigint' && n < 0n;
    const forBoxed = n instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && n.isNegative();
    return forNumber || forBigInt || forBoxed;
}
function isEven(n) {
    const forNumber = typeof n === 'number' && n % 2 === 0;
    const forBigInt = typeof n === 'bigint' && n % 2n === 0n;
    const forBoxed = n instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && n.isEven();
    return forNumber || forBigInt || forBoxed;
}
function isOdd(n) {
    return !isEven(n);
}
function isExact(n) {
    const forNumber = typeof n === 'number';
    const forBigInt = typeof n === 'bigint';
    const forBoxed = n instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && n.isExact();
    return forNumber || forBigInt || forBoxed;
}
function isInexact(n) {
    return n instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber && n.isInexact();
}
function isRacketNumber(n) {
    return n instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber || (0,_numbers_util__WEBPACK_IMPORTED_MODULE_0__.isJSInteger)(n);
}
const isSchemeNumber = isRacketNumber; // For backwards compatibility
function isFinite(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber) {
        return n.isFinite();
    }
    else if (typeof n === 'number') {
        return Number.isFinite(n);
    }
    return true;
}
function isNaN(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber) {
        return n.isNaN();
    }
    return Number.isNaN(n);
}
function isNegativeZero(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber) {
        return n.isNegativeZero();
    }
    return false;
}


/***/ }),

/***/ "./src/functions/trigonometry.ts":
/*!***************************************!*\
  !*** ./src/functions/trigonometry.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   acos: () => (/* binding */ acos),
/* harmony export */   asin: () => (/* binding */ asin),
/* harmony export */   atan: () => (/* binding */ atan),
/* harmony export */   atan2: () => (/* binding */ atan2),
/* harmony export */   cos: () => (/* binding */ cos),
/* harmony export */   cosh: () => (/* binding */ cosh),
/* harmony export */   sin: () => (/* binding */ sin),
/* harmony export */   sinh: () => (/* binding */ sinh),
/* harmony export */   tan: () => (/* binding */ tan),
/* harmony export */   tanh: () => (/* binding */ tanh)
/* harmony export */ });
/* harmony import */ var _tower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tower */ "./src/tower.ts");

function isOne(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return n.equals(_tower__WEBPACK_IMPORTED_MODULE_0__.EXACT_ONE);
    }
    return Number(n) === 1;
}
function sin(n) {
    if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isExact)(n) && (0,_tower__WEBPACK_IMPORTED_MODULE_0__.isZero)(n)) {
        return 0;
    }
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return n.sin();
    }
    else if (typeof n === 'number') {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Math.sin(n) });
    }
    else {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Math.sin(Number(n)) });
    }
}
function cos(n) {
    if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isExact)(n) && (0,_tower__WEBPACK_IMPORTED_MODULE_0__.isZero)(n)) {
        return 1;
    }
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return n.cos();
    }
    else if (typeof n === 'number') {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Math.cos(n) });
    }
    else {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Math.cos(Number(n)) });
    }
}
function tan(n) {
    if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isExact)(n) && (0,_tower__WEBPACK_IMPORTED_MODULE_0__.isZero)(n)) {
        return 0;
    }
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return n.tan();
    }
    else if (typeof n === 'number') {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Math.tan(n) });
    }
    else {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Math.tan(Number(n)) });
    }
}
function asin(n) {
    if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isExact)(n) && (0,_tower__WEBPACK_IMPORTED_MODULE_0__.isZero)(n)) {
        return 0;
    }
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return n.asin();
    }
    else if (typeof n === 'number') {
        if (-1 <= n && n <= 1) {
            return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Math.asin(n) });
        }
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: n, den: 1 }).asin();
    }
    else {
        if (-1n <= n && n <= 1n) {
            return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Math.asin(Number(n)) });
        }
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: n, den: 1n }).asin();
    }
}
function acos(n) {
    if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isExact)(n) && isOne(n)) {
        return 0;
    }
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return n.acos();
    }
    else if (typeof n === 'number') {
        if (-1 <= n && n <= 1) {
            return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Math.acos(n) });
        }
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: n, den: 1 }).acos();
    }
    else {
        if (-1n <= n && n <= 1n) {
            return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Math.acos(Number(n)) });
        }
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: n, den: 1n }).acos();
    }
}
const atan2 = atan; // For backwards compatibility with js-numbers
function atan(y, x) {
    if (x === undefined && (0,_tower__WEBPACK_IMPORTED_MODULE_0__.isExact)(y) && (0,_tower__WEBPACK_IMPORTED_MODULE_0__.isZero)(y)) {
        return 0;
    }
    if (x === undefined) {
        return atan1(y);
    }
    // https://en.wikipedia.org/wiki/Atan2
    const arg = (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)(y, x);
    if (arg instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber && arg.isNaN()) {
        if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.equals)(y, _tower__WEBPACK_IMPORTED_MODULE_0__.INF) && (0,_tower__WEBPACK_IMPORTED_MODULE_0__.equals)(x, _tower__WEBPACK_IMPORTED_MODULE_0__.INF)) {
            return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)(_tower__WEBPACK_IMPORTED_MODULE_0__.PI, 4);
        }
        else if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.equals)(y, _tower__WEBPACK_IMPORTED_MODULE_0__.INF) && (0,_tower__WEBPACK_IMPORTED_MODULE_0__.equals)(x, _tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF)) {
            return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.multiply)(3, (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)(_tower__WEBPACK_IMPORTED_MODULE_0__.PI, 4));
        }
        else if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.equals)(y, _tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF) && (0,_tower__WEBPACK_IMPORTED_MODULE_0__.equals)(x, _tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF)) {
            return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.multiply)(-3, (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)(_tower__WEBPACK_IMPORTED_MODULE_0__.PI, 4));
        }
        else if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.equals)(y, _tower__WEBPACK_IMPORTED_MODULE_0__.NEG_INF) && (0,_tower__WEBPACK_IMPORTED_MODULE_0__.equals)(x, _tower__WEBPACK_IMPORTED_MODULE_0__.INF)) {
            return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.multiply)(-1, (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)(_tower__WEBPACK_IMPORTED_MODULE_0__.PI, 4));
        }
    }
    if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isPositive)(x)) {
        return atan1(arg);
    }
    else if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isNegative)(x) && ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isPositive)(y) || (0,_tower__WEBPACK_IMPORTED_MODULE_0__.isZero)(y))) {
        return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.add)(atan1(arg), _tower__WEBPACK_IMPORTED_MODULE_0__.PI);
    }
    else if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isNegative)(x) && (0,_tower__WEBPACK_IMPORTED_MODULE_0__.isNegative)(y)) {
        return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.subtract)(atan1(arg), _tower__WEBPACK_IMPORTED_MODULE_0__.PI);
    }
    else if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isZero)(x) && (0,_tower__WEBPACK_IMPORTED_MODULE_0__.isPositive)(y)) {
        return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)(_tower__WEBPACK_IMPORTED_MODULE_0__.PI, 2);
    }
    else if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isZero)(x) && (0,_tower__WEBPACK_IMPORTED_MODULE_0__.isNegative)(y)) {
        return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.subtract)(0, (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)(_tower__WEBPACK_IMPORTED_MODULE_0__.PI, 2));
    }
    else {
        throw new Error("atan not defined for coordinates (0, 0)");
    }
}
function atan1(n) {
    if (n instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        return n.atan();
    }
    else if (n === Infinity) {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: 884279719003555 / 562949953421312 });
    }
    else if (n === -Infinity) {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: -884279719003555 / 562949953421312 });
    }
    else if (typeof n === 'number') {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Math.atan(n) });
    }
    else {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: Math.atan(Number(n)) });
    }
}
function sinh(n) {
    return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)((0,_tower__WEBPACK_IMPORTED_MODULE_0__.subtract)((0,_tower__WEBPACK_IMPORTED_MODULE_0__.exp)(n), (0,_tower__WEBPACK_IMPORTED_MODULE_0__.exp)((0,_tower__WEBPACK_IMPORTED_MODULE_0__.multiply)(n, -1))), 2);
}
function cosh(n) {
    if ((0,_tower__WEBPACK_IMPORTED_MODULE_0__.isZero)(n)) {
        return _tower__WEBPACK_IMPORTED_MODULE_0__.INEXACT_ONE; // Racket returns inexact 1 here.
    }
    return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)((0,_tower__WEBPACK_IMPORTED_MODULE_0__.add)((0,_tower__WEBPACK_IMPORTED_MODULE_0__.exp)(n), (0,_tower__WEBPACK_IMPORTED_MODULE_0__.exp)((0,_tower__WEBPACK_IMPORTED_MODULE_0__.multiply)(n, -1))), 2);
}
function tanh(n) {
    return (0,_tower__WEBPACK_IMPORTED_MODULE_0__.divide)((0,_tower__WEBPACK_IMPORTED_MODULE_0__.subtract)((0,_tower__WEBPACK_IMPORTED_MODULE_0__.exp)((0,_tower__WEBPACK_IMPORTED_MODULE_0__.multiply)(2, n)), 1), (0,_tower__WEBPACK_IMPORTED_MODULE_0__.add)((0,_tower__WEBPACK_IMPORTED_MODULE_0__.exp)((0,_tower__WEBPACK_IMPORTED_MODULE_0__.multiply)(2, n)), 1));
}


/***/ }),

/***/ "./src/functions/util.ts":
/*!*******************************!*\
  !*** ./src/functions/util.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bigExpt: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_1__.bigExpt),
/* harmony export */   isJSInteger: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_1__.isJSInteger),
/* harmony export */   isJSNumber: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_1__.isJSNumber),
/* harmony export */   isSafeInteger: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_1__.isSafeInteger),
/* harmony export */   matchTypes: () => (/* binding */ matchTypes),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   shouldBeBigInt: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_1__.shouldBeBigInt)
/* harmony export */ });
/* harmony import */ var _tower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tower */ "./src/tower.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.ts");


function normalize(x) {
    // Don't keep BoxedNumbers if unnecessary
    if (x instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber
        && x.isReal()
        && x.isInteger()
        && x.isExact()) {
        x = x.toFixnum();
    }
    // Don't keep bigints if unnecessary
    if (typeof x === 'bigint' && (0,_util__WEBPACK_IMPORTED_MODULE_1__.isSafeInteger)(x)) {
        x = Number(x);
    }
    return x;
}
function matchTypes(x, y) {
    // Check if they're already the same
    if (typeof x === typeof y) {
        return [x, y];
    }
    // Make types match
    if (x instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
        if (typeof y === 'bigint') {
            return [x, _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: y, den: 1n })];
        }
        else {
            return [x, _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: y, den: 1 })];
        }
    }
    else if (typeof x === 'bigint') {
        if (y instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
            return [_tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: x, den: 1n }), y];
        }
        else {
            return [x, BigInt(y)];
        }
    }
    else if (typeof x === 'number') {
        if (y instanceof _tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber) {
            return [_tower__WEBPACK_IMPORTED_MODULE_0__.BoxedNumber.makeInstance({ num: x, den: 1 }), y];
        }
        else {
            return [BigInt(x), y];
        }
    }
    else {
        throw new TypeError(`Cannot match values ${x} ${y}`);
    }
}



/***/ }),

/***/ "./src/numbers/BoxedNumber.ts":
/*!************************************!*\
  !*** ./src/numbers/BoxedNumber.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxedNumber: () => (/* binding */ BoxedNumber),
/* harmony export */   EXACT_HALF: () => (/* binding */ EXACT_HALF),
/* harmony export */   EXACT_I: () => (/* binding */ EXACT_I),
/* harmony export */   EXACT_NEG_I: () => (/* binding */ EXACT_NEG_I),
/* harmony export */   EXACT_NEG_ONE: () => (/* binding */ EXACT_NEG_ONE),
/* harmony export */   EXACT_ONE: () => (/* binding */ EXACT_ONE),
/* harmony export */   EXACT_TWO: () => (/* binding */ EXACT_TWO),
/* harmony export */   EXACT_ZERO: () => (/* binding */ EXACT_ZERO),
/* harmony export */   HALF: () => (/* binding */ HALF),
/* harmony export */   I: () => (/* binding */ I),
/* harmony export */   INEXACT_HALF: () => (/* binding */ INEXACT_HALF),
/* harmony export */   INEXACT_I: () => (/* binding */ INEXACT_I),
/* harmony export */   INEXACT_NEG_I: () => (/* binding */ INEXACT_NEG_I),
/* harmony export */   INEXACT_NEG_ONE: () => (/* binding */ INEXACT_NEG_ONE),
/* harmony export */   INEXACT_NEG_ZERO: () => (/* binding */ INEXACT_NEG_ZERO),
/* harmony export */   INEXACT_ONE: () => (/* binding */ INEXACT_ONE),
/* harmony export */   INEXACT_TWO: () => (/* binding */ INEXACT_TWO),
/* harmony export */   INEXACT_ZERO: () => (/* binding */ INEXACT_ZERO),
/* harmony export */   INF: () => (/* binding */ INF),
/* harmony export */   NAN: () => (/* binding */ NAN),
/* harmony export */   NEG_I: () => (/* binding */ NEG_I),
/* harmony export */   NEG_INF: () => (/* binding */ NEG_INF),
/* harmony export */   NEG_ONE: () => (/* binding */ NEG_ONE),
/* harmony export */   ONE: () => (/* binding */ ONE),
/* harmony export */   PI: () => (/* binding */ PI),
/* harmony export */   TWO: () => (/* binding */ TWO),
/* harmony export */   ZERO: () => (/* binding */ ZERO),
/* harmony export */   e: () => (/* binding */ e),
/* harmony export */   i: () => (/* binding */ i),
/* harmony export */   inf: () => (/* binding */ inf),
/* harmony export */   nan: () => (/* binding */ nan),
/* harmony export */   negative_i: () => (/* binding */ negative_i),
/* harmony export */   negative_inf: () => (/* binding */ negative_inf),
/* harmony export */   negative_one: () => (/* binding */ negative_one),
/* harmony export */   negative_zero: () => (/* binding */ negative_zero),
/* harmony export */   one: () => (/* binding */ one),
/* harmony export */   pi: () => (/* binding */ pi),
/* harmony export */   two: () => (/* binding */ two),
/* harmony export */   zero: () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/numbers/types.ts");
/* harmony import */ var _Value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Value */ "./src/numbers/Value.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/numbers/util.ts");



class BoxedNumber {
    constructor(real, imag) {
        this.real = real;
        if (imag === undefined) {
            this.imag = _Value__WEBPACK_IMPORTED_MODULE_1__.ZERO_VAL;
        }
        else {
            this.imag = imag;
        }
        let level;
        if (this.isInteger()) {
            level = _types__WEBPACK_IMPORTED_MODULE_0__.Level.INTEGER;
        }
        else if (this.isRational()) {
            level = _types__WEBPACK_IMPORTED_MODULE_0__.Level.RATIONAL;
        }
        else if (this.isReal()) {
            level = _types__WEBPACK_IMPORTED_MODULE_0__.Level.REAL;
        }
        else {
            level = _types__WEBPACK_IMPORTED_MODULE_0__.Level.COMPLEX;
        }
        this.level = level;
        // Make it immutable
        Object.freeze(this);
    }
    static makeInstance({ num, den, imagNum, imagDen }) {
        const isReal = imagNum === undefined;
        if (isReal && imagDen !== undefined) {
            throw new Error("Must specify both a numerator and denominator.");
        }
        const denominatorsExist = den !== undefined && imagDen !== undefined;
        if (!isReal && !denominatorsExist && (den !== undefined || imagDen !== undefined)) {
            throw new Error("Real and imaginary part must be the same exactness.");
        }
        let isExact;
        if (isReal) {
            isExact = den !== undefined
                && (0,_util__WEBPACK_IMPORTED_MODULE_2__.isJSInteger)(num)
                && (0,_util__WEBPACK_IMPORTED_MODULE_2__.isJSInteger)(den);
        }
        else {
            isExact = den !== undefined
                && (0,_util__WEBPACK_IMPORTED_MODULE_2__.isJSInteger)(num)
                && (0,_util__WEBPACK_IMPORTED_MODULE_2__.isJSInteger)(den)
                && imagDen != undefined
                && (0,_util__WEBPACK_IMPORTED_MODULE_2__.isJSInteger)(imagNum)
                && (0,_util__WEBPACK_IMPORTED_MODULE_2__.isJSInteger)(imagDen);
        }
        if (!isExact && typeof num === 'bigint') {
            throw new TypeError("bigints can only be used with exact numbers");
        }
        let typesAreSame;
        if (isReal && isExact) {
            typesAreSame = typeof num === typeof den;
        }
        else if (isReal && !isExact) {
            typesAreSame = true;
        }
        else if (!isReal && isExact) {
            typesAreSame = typeof num === typeof imagNum
                && typeof den === typeof imagDen
                && typeof num === typeof den;
        }
        else {
            typesAreSame = typeof num === typeof imagNum;
        }
        if (!typesAreSame) {
            throw new TypeError("All makeInstance arguments must be the same type.");
        }
        const isBig = typeof num === 'bigint';
        let realVal, imagVal;
        if (isReal && isExact && isBig) {
            realVal = new _Value__WEBPACK_IMPORTED_MODULE_1__.BigExactValue(num, den);
            imagVal = _Value__WEBPACK_IMPORTED_MODULE_1__.ZERO_VAL;
        }
        else if (isReal && isExact && !isBig) {
            realVal = new _Value__WEBPACK_IMPORTED_MODULE_1__.SmallExactValue(num, den);
            imagVal = _Value__WEBPACK_IMPORTED_MODULE_1__.ZERO_VAL;
        }
        else if (isReal && !isExact) {
            realVal = new _Value__WEBPACK_IMPORTED_MODULE_1__.InexactValue(num);
            imagVal = _Value__WEBPACK_IMPORTED_MODULE_1__.ZERO_VAL;
        }
        else if (!isReal && isExact && isBig) {
            realVal = new _Value__WEBPACK_IMPORTED_MODULE_1__.BigExactValue(num, den);
            imagVal = new _Value__WEBPACK_IMPORTED_MODULE_1__.BigExactValue(imagNum, imagDen);
        }
        else if (!isReal && isExact && !isBig) {
            realVal = new _Value__WEBPACK_IMPORTED_MODULE_1__.SmallExactValue(num, den);
            imagVal = new _Value__WEBPACK_IMPORTED_MODULE_1__.SmallExactValue(imagNum, imagDen);
        }
        else if (!isReal && !isExact && !isBig) {
            realVal = new _Value__WEBPACK_IMPORTED_MODULE_1__.InexactValue(num);
            imagVal = new _Value__WEBPACK_IMPORTED_MODULE_1__.InexactValue(imagNum);
        }
        else {
            // Should never get here
            throw new Error(`Error creating BoxedNumber`);
        }
        return new BoxedNumber(realVal, imagVal);
    }
    toString() {
        if (this.isNaN()) {
            return "+nan.0";
        }
        if (!this.isFinite()) {
            return this.isPositive() ? "+inf.0" : "-inf.0";
        }
        if (this.isReal()) {
            return this.real.toString();
        }
        else {
            return this.real.toString() + this.imag.toSignedString() + "i";
        }
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
        else if (hint === 'bigint' && typeof primitive === 'number') {
            return BigInt(primitive);
        }
        return primitive;
    }
    isInteger() {
        return this.isRational() && this.real.isInteger();
    }
    isRational() {
        return this.isReal() && this.isFinite();
    }
    isFinite() {
        return this.real.isFinite() && this.imag.isFinite();
    }
    isReal() {
        return this.imag.isZero() && this.imag.isExact();
    }
    isComplex() {
        return true;
    }
    isExact() {
        return this.real.isExact() && this.imag.isExact();
    }
    isInexact() {
        return !this.isExact();
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
    isNaN() {
        return this.real.isNaN() || this.imag.isNaN();
    }
    toInexact() {
        if (this.isInexact()) {
            return this;
        }
        if (this.isReal()) {
            return new BoxedNumber(this.real.toInexact());
        }
        return new BoxedNumber(this.real.toInexact(), this.imag.toInexact());
    }
    toExact() {
        return new BoxedNumber(this.real.toExact(), this.imag.toExact());
    }
    toFixnum() {
        if (!this.isReal()) {
            throw new TypeError("Not defined for complex numbers.");
        }
        return this.real.toFixnum();
    }
    greaterThan(other) {
        if (!this.isReal() || !other.isReal()) {
            throw new Error("Greater than not defined for complex numbers.");
        }
        return this.real.greaterThan(other.real);
    }
    greaterThanOrEqual(other) {
        if (!this.isReal() || !other.isReal()) {
            throw new Error("Greater than or equal not defined for complex numbers.");
        }
        return this.real.greaterThanOrEqual(other.real);
    }
    lessThan(other) {
        if (!this.isReal() || !other.isReal()) {
            throw new Error("Less than not defined for complex numbers.");
        }
        return this.real.lessThan(other.real);
    }
    lessThanOrEqual(other) {
        if (!this.isReal() || !other.isReal()) {
            throw new Error("Less than or equal not defined for complex numbers.");
        }
        return this.real.lessThanOrEqual(other.real);
    }
    equals(other) {
        return this.real.equals(other.real) && this.imag.equals(other.imag);
    }
    add(other) {
        if (this.isReal() && other.isReal()) {
            return new BoxedNumber(this.real.add(other.real));
        }
        let real = this.real.add(other.real);
        let imag = this.imag.add(other.imag);
        [real, imag] = (0,_util__WEBPACK_IMPORTED_MODULE_2__.matchExactness)(real, imag);
        return new BoxedNumber(real, imag);
    }
    subtract(other) {
        if (this.isReal() && other.isReal()) {
            return new BoxedNumber(this.real.subtract(other.real));
        }
        let real = this.real.subtract(other.real);
        let imag = this.imag.subtract(other.imag);
        [real, imag] = (0,_util__WEBPACK_IMPORTED_MODULE_2__.matchExactness)(real, imag);
        return new BoxedNumber(real, imag);
    }
    multiply(other) {
        let real = this.real.multiply(other.real).subtract(this.imag.multiply(other.imag));
        const imag = this.real.multiply(other.imag).add(this.imag.multiply(other.real));
        real = !imag.isExact() ? real.toInexact() : real;
        return new BoxedNumber(real, imag);
    }
    divide(other) {
        // If the other value is real, just do primitive division
        if (other.isReal()) {
            const real = this.real.divide(other.real);
            const imag = this.imag.divide(other.real);
            return new BoxedNumber(real, imag);
        }
        let a, b, c, d, r, x, y;
        if (this.isInexact() || other.isInexact()) {
            // http://portal.acm.org/citation.cfm?id=1039814
            // We currently use Smith's method, though we should
            // probably switch over to Priest's method.
            a = this.real;
            b = this.imag;
            c = other.real;
            d = other.imag;
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
            return new BoxedNumber(x, y);
        }
        else {
            const con = other.conjugate();
            const up = this.multiply(con);
            // Down is guaranteed to be real by this point.
            const down = other.multiply(con).realPart();
            const real = up.realPart().divide(down).real;
            const imag = up.imaginaryPart().divide(down).real;
            return new BoxedNumber(real, imag);
        }
    }
    numerator() {
        if (!this.isReal()) {
            throw new Error("Numerator not defined for complex numbers.");
        }
        return new BoxedNumber(this.real.numerator());
    }
    denominator() {
        if (!this.isReal()) {
            throw new Error("Denominator not defined for complex numbers.");
        }
        return new BoxedNumber(this.real.denominator());
    }
    integerSqrt() {
        if (this.isInteger()) {
            return new BoxedNumber(this.real.integerSqrt());
        }
        else {
            throw new Error("IntegerSqrt only defined for integers.");
        }
    }
    sqrt() {
        if (this.isReal()) {
            if (this.isNegative()) {
                const imag = this.real.multiply(_Value__WEBPACK_IMPORTED_MODULE_1__.NEG_ONE_VAL).sqrt();
                const real = this.isExact() ? _Value__WEBPACK_IMPORTED_MODULE_1__.ZERO_VAL : new _Value__WEBPACK_IMPORTED_MODULE_1__.InexactValue(0);
                return new BoxedNumber(real, imag);
            }
            else {
                return new BoxedNumber(this.real.sqrt());
            }
        }
        // http://en.wikipedia.org/wiki/Square_root#Square_roots_of_negative_and_complex_numbers
        const mag = this.magnitude().real;
        const r_plus_x = mag.add(this.real);
        const real = r_plus_x.divide(new _Value__WEBPACK_IMPORTED_MODULE_1__.SmallExactValue(2)).sqrt();
        const imag = this.imag.divide(r_plus_x.multiply(_Value__WEBPACK_IMPORTED_MODULE_1__.TWO_VAL).sqrt());
        return new BoxedNumber(real, imag);
    }
    abs() {
        if (!this.isReal()) {
            throw new Error("abs is not defined for complex numbers.");
        }
        return new BoxedNumber(this.real.abs());
    }
    floor() {
        if (!this.isReal()) {
            throw new Error("floor is not defined for complex numbers.");
        }
        return new BoxedNumber(this.real.floor());
    }
    ceiling() {
        if (!this.isReal()) {
            throw new Error("ceiling is not defined for complex numbers.");
        }
        return new BoxedNumber(this.real.ceiling());
    }
    round() {
        if (!this.isReal()) {
            throw new Error("round is not defined for complex numbers.");
        }
        return new BoxedNumber(this.real.round());
    }
    conjugate() {
        return new BoxedNumber(this.real, new _Value__WEBPACK_IMPORTED_MODULE_1__.SmallExactValue(0).subtract(this.imag));
    }
    magnitude() {
        const realSqr = this.real.multiply(this.real);
        const imagSqr = this.imag.multiply(this.imag);
        const sum = realSqr.add(imagSqr);
        return new BoxedNumber(sum.sqrt());
    }
    realPart() {
        return new BoxedNumber(this.real);
    }
    imaginaryPart() {
        return new BoxedNumber(this.imag);
    }
    log() {
        if (this.isReal() && this.isPositive()) {
            return new BoxedNumber(this.real.log());
        }
        const mag = this.magnitude().real;
        const mag_log = new BoxedNumber(mag.log());
        const theta = this.angle();
        return mag_log.add(theta.multiply(I));
    }
    expt(power) {
        if (power.isExact() && power.isInteger() && power.greaterThanOrEqual(ZERO)) {
            // HACK: k can be a bigint or a number so we need some gross casting.
            let n = this;
            let k = power.toFixnum();
            const isNumber = typeof k === 'number';
            const zero = (isNumber ? 0 : 0n);
            const one = (isNumber ? 1 : 1n);
            const two = (isNumber ? 2 : 2n);
            let acc = ONE;
            while (k !== zero) {
                if (k % two === zero) {
                    n = n.multiply(n);
                    k = k / two;
                }
                else {
                    acc = acc.multiply(n);
                    k = k - one;
                }
            }
            return acc;
        }
        const expo = power.multiply(this.log());
        return expo.exp();
    }
    exp() {
        if (this.isReal()) {
            return new BoxedNumber(this.real.exp());
        }
        const r = new BoxedNumber(this.real.exp());
        const cos_a = new BoxedNumber(this.imag.cos());
        const sin_a = new BoxedNumber(this.imag.sin());
        return r.multiply(cos_a.add(sin_a.multiply(I)));
    }
    angle() {
        if (this.isReal()) {
            return new BoxedNumber(this.real.angle());
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
            return new BoxedNumber(this.real.tan());
        }
        return this.sin().divide(this.cos());
    }
    cos() {
        if (this.isReal()) {
            return new BoxedNumber(this.real.cos());
        }
        const iz = this.multiply(I);
        const iz_negate = iz.multiply(NEG_ONE);
        return iz.exp().add(iz_negate.exp()).divide(TWO);
    }
    sin() {
        if (this.isReal()) {
            return new BoxedNumber(this.real.sin());
        }
        const iz = this.multiply(I);
        const iz_negate = iz.multiply(NEG_ONE);
        const z2 = new BoxedNumber(_Value__WEBPACK_IMPORTED_MODULE_1__.ZERO_VAL, _Value__WEBPACK_IMPORTED_MODULE_1__.TWO_VAL);
        const exp_negate = iz.exp().subtract(iz_negate.exp());
        const result = exp_negate.divide(z2);
        return result;
    }
    atan() {
        if (this.isZero()) {
            return ZERO;
        }
        if (this.isReal()) {
            return new BoxedNumber(this.real.atan());
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
            return new BoxedNumber(this.real.acos());
        }
        const pi_half = PI.divide(TWO);
        const iz = this.multiply(I);
        const root = ONE.subtract(this.multiply(this)).sqrt();
        const l = iz.add(root).log().multiply(I);
        return pi_half.add(l);
    }
    asin() {
        if (this.isReal() && this.greaterThanOrEqual(NEG_ONE) && this.lessThanOrEqual(ONE)) {
            return new BoxedNumber(this.real.asin());
        }
        const oneNegateThisSq = ONE.subtract(this.multiply(this));
        const sqrtOneNegateThisSq = oneNegateThisSq.sqrt();
        return TWO.multiply(this.divide(ONE.add(sqrtOneNegateThisSq)).atan());
    }
}
/////////////////////// Constants ///////////////////////
const EXACT_ZERO = BoxedNumber.makeInstance({ num: 0, den: 1 });
const EXACT_HALF = BoxedNumber.makeInstance({ num: 1, den: 2 });
const EXACT_ONE = BoxedNumber.makeInstance({ num: 1, den: 1 });
const EXACT_TWO = BoxedNumber.makeInstance({ num: 2, den: 1 });
const EXACT_NEG_ONE = BoxedNumber.makeInstance({ num: -1, den: 1 });
const EXACT_I = BoxedNumber.makeInstance({ num: 0, den: 1, imagNum: 1, imagDen: 1 });
const EXACT_NEG_I = BoxedNumber.makeInstance({ num: 0, den: 1, imagNum: -1, imagDen: 1 });
const INEXACT_ZERO = BoxedNumber.makeInstance({ num: 0 });
const INEXACT_NEG_ZERO = BoxedNumber.makeInstance({ num: -0 });
const INEXACT_HALF = BoxedNumber.makeInstance({ num: 0.5 });
const INEXACT_ONE = BoxedNumber.makeInstance({ num: 1 });
const INEXACT_TWO = BoxedNumber.makeInstance({ num: 2 });
const INEXACT_NEG_ONE = BoxedNumber.makeInstance({ num: -1 });
const INEXACT_I = BoxedNumber.makeInstance({ num: 0, imagNum: 1 });
const INEXACT_NEG_I = BoxedNumber.makeInstance({ num: 0, imagNum: -1 });
const ZERO = EXACT_ZERO;
const ONE = EXACT_ONE;
const HALF = EXACT_HALF;
const TWO = EXACT_TWO;
const NEG_ONE = EXACT_NEG_ONE;
const I = EXACT_I;
const NEG_I = EXACT_NEG_I;
const PI = BoxedNumber.makeInstance({ num: Math.PI });
const INF = BoxedNumber.makeInstance({ num: Number.POSITIVE_INFINITY });
const NEG_INF = BoxedNumber.makeInstance({ num: Number.NEGATIVE_INFINITY });
const NAN = BoxedNumber.makeInstance({ num: Number.NaN });
// For backwards compatibility with js-numbers
const zero = EXACT_ZERO;
const one = EXACT_ONE;
const two = EXACT_TWO;
const negative_one = EXACT_NEG_ONE;
const i = EXACT_I;
const negative_i = EXACT_NEG_I;
const pi = PI;
const e = BoxedNumber.makeInstance({ num: Math.E });
const nan = NAN;
const negative_inf = NEG_INF;
const inf = INF;
const negative_zero = INEXACT_NEG_ZERO;


/***/ }),

/***/ "./src/numbers/Value.ts":
/*!******************************!*\
  !*** ./src/numbers/Value.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BigExactValue: () => (/* binding */ BigExactValue),
/* harmony export */   ExactValue: () => (/* binding */ ExactValue),
/* harmony export */   INF_VAL: () => (/* binding */ INF_VAL),
/* harmony export */   InexactValue: () => (/* binding */ InexactValue),
/* harmony export */   NAN_VAL: () => (/* binding */ NAN_VAL),
/* harmony export */   NEG_INF_VAL: () => (/* binding */ NEG_INF_VAL),
/* harmony export */   NEG_ONE_VAL: () => (/* binding */ NEG_ONE_VAL),
/* harmony export */   ONE_VAL: () => (/* binding */ ONE_VAL),
/* harmony export */   PI_VAL: () => (/* binding */ PI_VAL),
/* harmony export */   SmallExactValue: () => (/* binding */ SmallExactValue),
/* harmony export */   TWO_VAL: () => (/* binding */ TWO_VAL),
/* harmony export */   ZERO_VAL: () => (/* binding */ ZERO_VAL)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/numbers/util.ts");

class AbstractValue {
}
class InexactValue extends AbstractValue {
    constructor(num) {
        super();
        this.num = num;
        // Make it immutable
        Object.freeze(this);
    }
    isFinite() {
        return Number.isFinite(this.num);
    }
    isInexact() {
        return true;
    }
    isExact() {
        return false;
    }
    isInteger() {
        return Number.isInteger(this.num);
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
            return ExactValue.makeInstance(Math.round(this.num * tenToDecimalPlaces), tenToDecimalPlaces);
        }
        else {
            return ExactValue.makeInstance(this.num, 1);
        }
    }
    toFixnum() {
        return Math.floor(this.num);
    }
    toString() {
        if (Number.isInteger(this.num)) {
            return this.num.toString() + ".0";
        }
        return this.num.toString();
    }
    toSignedString() {
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
        if (other instanceof ExactValue) {
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
        if (other instanceof ExactValue) {
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
        if (other instanceof ExactValue) {
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
        if (other instanceof ExactValue) {
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
        if (!this.isFinite()) {
            return !(other instanceof ExactValue) && this.num === other.num;
        }
        if (other instanceof ExactValue) {
            return this.toExact().equals(other);
        }
        return this.num === other.num;
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
    isNaN() {
        return Number.isNaN(this.num);
    }
    add(other) {
        if (other instanceof ExactValue) {
            return this.add(other.toInexact());
        }
        return new InexactValue(this.num + other.num);
    }
    subtract(other) {
        if (other instanceof ExactValue) {
            return this.subtract(other.toInexact());
        }
        return new InexactValue(this.num - other.num);
    }
    multiply(other) {
        if (other instanceof ExactValue) {
            if (other.isZero()) {
                return ZERO_VAL;
            }
            return this.multiply(other.toInexact());
        }
        return new InexactValue(this.num * other.num);
    }
    divide(other) {
        if (this.isZero()) {
            return this;
        }
        if (other instanceof ExactValue) {
            return this.divide(other.toInexact());
        }
        return new InexactValue(this.num / other.num);
    }
    numerator() {
        return this.toExact().numerator().toInexact();
    }
    denominator() {
        return this.toExact().denominator().toInexact();
    }
    integerSqrt() {
        return new InexactValue(Math.floor(Math.sqrt(this.num)));
    }
    sqrt() {
        return new InexactValue(Math.sqrt(this.num));
    }
    abs() {
        return new InexactValue(Math.abs(this.num));
    }
    floor() {
        return new InexactValue(Math.floor(this.num));
    }
    ceiling() {
        return new InexactValue(Math.ceil(this.num));
    }
    round() {
        return new InexactValue(Math.round(this.num));
    }
    log() {
        return new InexactValue(Math.log(this.num));
    }
    expt(power) {
        if (power instanceof ExactValue) {
            return this.expt(power.toInexact());
        }
        return new InexactValue(Math.pow(this.num, power.num));
    }
    exp() {
        return new InexactValue(Math.exp(this.num));
    }
    angle() {
        if (0 === this.num)
            return EXACT_ZERO;
        if (this.num > 0)
            return EXACT_ZERO;
        else
            return new InexactValue(Math.PI);
    }
    tan() {
        return new InexactValue(Math.tan(this.num));
    }
    cos() {
        return new InexactValue(Math.cos(this.num));
    }
    sin() {
        return new InexactValue(Math.sin(this.num));
    }
    atan() {
        return new InexactValue(Math.atan(this.num));
    }
    acos() {
        return new InexactValue(Math.acos(this.num));
    }
    asin() {
        return new InexactValue(Math.asin(this.num));
    }
}
class ExactValue extends AbstractValue {
    static makeInstance(num, den) {
        if (typeof num === 'bigint' && typeof den === 'bigint') {
            return new BigExactValue(num, den);
        }
        else if (typeof num === 'number' && typeof den === 'number') {
            return new SmallExactValue(num, den);
        }
        else {
            throw new TypeError(`Numberator and denominator types must match, given ${typeof num} and ${typeof den}`);
        }
    }
}
class SmallExactValue extends ExactValue {
    constructor(num, den = 1) {
        super();
        if (!Number.isInteger(num) && !Number.isInteger(den)) {
            throw new TypeError("Exact number can only be constructed from integers.");
        }
        if (typeof num === 'number' && typeof den === 'number') {
            // Only the numerator can be negative.
            if (den < 0) {
                num *= -1;
                den *= -1;
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
    isFinite() {
        return true;
    }
    isInexact() {
        return false;
    }
    isExact() {
        return true;
    }
    isInteger() {
        return this.den === 1;
    }
    toInexact() {
        const result = this.num / this.den;
        return new InexactValue(result);
    }
    toExact() {
        return this;
    }
    toBigExact() {
        return new BigExactValue(BigInt(this.num), BigInt(this.den));
    }
    toFixnum() {
        return Math.floor(this.num / this.den);
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
        return this.num / this.den;
    }
    greaterThan(other) {
        if (other instanceof InexactValue) {
            if (other.isNaN()) {
                return false;
            }
            else if (!other.isFinite()) {
                return !other.isPositive();
            }
            return this.greaterThan(other.toExact());
        }
        else if (other instanceof BigExactValue) {
            return this.toBigExact().greaterThan(other);
        }
        else {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal > otherVal;
        }
    }
    greaterThanOrEqual(other) {
        if (other instanceof InexactValue) {
            if (other.isNaN()) {
                return false;
            }
            else if (!other.isFinite()) {
                return !other.isPositive();
            }
            return this.greaterThanOrEqual(other.toExact());
        }
        else if (other instanceof BigExactValue) {
            return this.toBigExact().greaterThanOrEqual(other);
        }
        else {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal >= otherVal;
        }
    }
    lessThan(other) {
        if (other instanceof InexactValue) {
            if (other.isNaN()) {
                return false;
            }
            else if (!other.isFinite()) {
                return other.isPositive();
            }
            return this.lessThan(other.toExact());
        }
        else if (other instanceof BigExactValue) {
            return this.toBigExact().lessThan(other);
        }
        else {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal < otherVal;
        }
    }
    lessThanOrEqual(other) {
        if (other instanceof InexactValue) {
            if (other.isNaN()) {
                return false;
            }
            else if (!other.isFinite()) {
                return other.isPositive();
            }
            return this.lessThanOrEqual(other.toExact());
        }
        else if (other instanceof BigExactValue) {
            return this.toBigExact().lessThanOrEqual(other);
        }
        else {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal <= otherVal;
        }
    }
    equals(other) {
        if (other instanceof InexactValue) {
            if (!other.isFinite()) {
                return false;
            }
            return this.equals(other.toExact());
        }
        else if (other instanceof BigExactValue) {
            return this.toBigExact().equals(other);
        }
        else {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal === otherVal;
        }
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
        return this.den === 1 && this.num % 2 === 0;
    }
    isNaN() {
        return false;
    }
    add(other) {
        if (other instanceof InexactValue) {
            return this.toInexact().add(other);
        }
        else if (other instanceof BigExactValue) {
            return this.toBigExact().add(other);
        }
        else if (other instanceof SmallExactValue) {
            const num = (this.num * other.den) + (other.num * this.den);
            const den = this.den * other.den;
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(num) || !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(den)) {
                return this.toBigExact().add(other.toBigExact());
            }
            return new SmallExactValue(num, den);
        }
        else {
            throw new Error(`Cannot add ${this} to value ${other}`);
        }
    }
    subtract(other) {
        if (other instanceof InexactValue) {
            return this.toInexact().subtract(other);
        }
        else if (other instanceof BigExactValue) {
            return this.toBigExact().subtract(other);
        }
        else if (other instanceof SmallExactValue) {
            const num = (this.num * other.den) - (other.num * this.den);
            const den = this.den * other.den;
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(num) || !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(den)) {
                return this.toBigExact().subtract(other.toBigExact());
            }
            return new SmallExactValue(num, den);
        }
        else {
            throw new Error(`Cannot subtract ${this} and ${other}`);
        }
    }
    multiply(other) {
        if (this.isZero() || (other.isExact() && other.isZero())) {
            return ZERO_VAL;
        }
        if (other instanceof InexactValue) {
            return this.toInexact().multiply(other);
        }
        else if (other instanceof BigExactValue) {
            return this.toBigExact().multiply(other);
        }
        else if (other instanceof SmallExactValue) {
            const num = this.num * other.num;
            const den = this.den * other.den;
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(num) || !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(den)) {
                return this.toBigExact().multiply(other.toBigExact());
            }
            return new SmallExactValue(num, den);
        }
        else {
            throw new Error(`Cannot multiply ${this} and ${other}`);
        }
    }
    divide(other) {
        if (this.isZero()) {
            return this;
        }
        if (other instanceof InexactValue) {
            return this.toInexact().divide(other);
        }
        else if (other instanceof BigExactValue) {
            return this.toBigExact().divide(other);
        }
        else if (other.isZero()) {
            throw new Error("/: division by zero" + this + other);
        }
        else if (other instanceof SmallExactValue) {
            const num = this.num * other.den;
            const den = this.den * other.num;
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(num) || !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(den)) {
                return this.toBigExact().divide(other.toBigExact());
            }
            return new SmallExactValue(num, den);
        }
        else {
            throw new Error(`Cannot divide ${this} and ${other}`);
        }
    }
    numerator() {
        return new SmallExactValue(this.num);
    }
    denominator() {
        return new SmallExactValue(this.den);
    }
    integerSqrt() {
        return this.sqrt().floor();
    }
    sqrt() {
        if (this.isNegative()) {
            throw new Error("Cannot take square root of negative number " + this);
        }
        const num = Math.sqrt(this.num);
        const den = Math.sqrt(this.den);
        if (num === Math.floor(num) && den === Math.floor(den)) {
            return new SmallExactValue(num, den);
        }
        else {
            return new InexactValue(num / den);
        }
    }
    abs() {
        if (this.isNegative()) {
            return new SmallExactValue(-1 * this.num, this.den);
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
            return new SmallExactValue(Math.floor(this.num / this.den));
        }
    }
    ceiling() {
        if (this.den === 1) {
            return this;
        }
        else {
            return new SmallExactValue(Math.ceil(this.num / this.den));
        }
    }
    round() {
        if (this.den === 1) {
            return this;
        }
        else {
            return new SmallExactValue(Math.round(this.num / this.den));
        }
    }
    log() {
        return new InexactValue(Math.log(this.num / this.den));
    }
    expt(power) {
        power = power.toInexact();
        if (power.isInteger()) {
            const exp = power.num;
            const num = Math.pow(this.num, exp);
            const den = Math.pow(this.den, exp);
            if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(num) || !(0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(den)) {
                return this.toBigExact().expt(power);
            }
            return new SmallExactValue(num, den);
        }
        else {
            return this.toInexact().expt(power);
        }
    }
    exp() {
        return new InexactValue(Math.exp(this.num / this.den));
    }
    angle() {
        if (this.isNegative()) {
            return new InexactValue(Math.PI);
        }
        else {
            return new SmallExactValue(0);
        }
    }
    tan() {
        return new InexactValue(Math.tan(this.num / this.den));
    }
    cos() {
        return new InexactValue(Math.cos(this.num / this.den));
    }
    sin() {
        return new InexactValue(Math.sin(this.num / this.den));
    }
    atan() {
        return new InexactValue(Math.atan(this.num / this.den));
    }
    acos() {
        return new InexactValue(Math.acos(this.num / this.den));
    }
    asin() {
        return new InexactValue(Math.asin(this.num / this.den));
    }
}
class BigExactValue extends ExactValue {
    constructor(num, den = 1n) {
        super();
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
    isFinite() {
        return true;
    }
    isInexact() {
        return false;
    }
    isExact() {
        return true;
    }
    isInteger() {
        return this.den === 1n;
    }
    toInexact() {
        const result = Number(this.num) / Number(this.den);
        return new InexactValue(result);
    }
    toExact() {
        return this;
    }
    toSmallExact() {
        return new SmallExactValue(Number(this.num), Number(this.den));
    }
    toFixnum() {
        return this.num / this.den;
    }
    toString() {
        const numStr = this.num.toString().slice(0, -1);
        const denStr = this.den.toString().slice(0, -1);
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
        if (this.den === 1n) {
            return this.num;
        }
        return Number(this.num) / Number(this.den);
    }
    greaterThan(other) {
        if (other instanceof InexactValue) {
            if (other.isNaN()) {
                return false;
            }
            else if (!other.isFinite()) {
                return !other.isPositive();
            }
            return this.greaterThan(other.toExact());
        }
        else if (other instanceof SmallExactValue) {
            return this.greaterThan(other.toBigExact());
        }
        else if (other instanceof BigExactValue) {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal > otherVal;
        }
        else {
            throw new Error(`Cannot compare ${this} and ${other}`);
        }
    }
    greaterThanOrEqual(other) {
        if (other instanceof InexactValue) {
            if (other.isNaN()) {
                return false;
            }
            else if (!other.isFinite()) {
                return !other.isPositive();
            }
            return this.greaterThanOrEqual(other.toExact());
        }
        else if (other instanceof SmallExactValue) {
            return this.greaterThanOrEqual(other.toBigExact());
        }
        else if (other instanceof BigExactValue) {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal >= otherVal;
        }
        else {
            throw new Error(`Cannot compare ${this} and ${other}`);
        }
    }
    lessThan(other) {
        if (other instanceof InexactValue) {
            if (other.isNaN()) {
                return false;
            }
            else if (!other.isFinite()) {
                return other.isPositive();
            }
            return this.lessThan(other.toExact());
        }
        else if (other instanceof SmallExactValue) {
            return this.lessThan(other.toBigExact());
        }
        else if (other instanceof BigExactValue) {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal < otherVal;
        }
        else {
            throw new Error(`Cannot compare ${this} and ${other}`);
        }
    }
    lessThanOrEqual(other) {
        if (other instanceof InexactValue) {
            if (other.isNaN()) {
                return false;
            }
            else if (!other.isFinite()) {
                return other.isPositive();
            }
            return this.lessThanOrEqual(other.toExact());
        }
        else if (other instanceof SmallExactValue) {
            return this.lessThanOrEqual(other.toBigExact());
        }
        else if (other instanceof BigExactValue) {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal <= otherVal;
        }
        else {
            throw new Error(`Cannot compare ${this} and ${other}`);
        }
    }
    equals(other) {
        if (other instanceof InexactValue) {
            if (!other.isFinite()) {
                return false;
            }
            return this.equals(other.toExact());
        }
        else if (other instanceof SmallExactValue) {
            return this.equals(other.toBigExact());
        }
        else if (other instanceof BigExactValue) {
            const thisVal = this.num * other.den;
            const otherVal = other.num * this.den;
            return thisVal === otherVal;
        }
        else {
            throw new Error(`Cannot compare ${this} and ${other}`);
        }
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
    isNaN() {
        return false;
    }
    add(other) {
        if (other instanceof InexactValue) {
            return this.toInexact().add(other);
        }
        else if (other instanceof SmallExactValue) {
            return this.add(other.toBigExact());
        }
        else if (other instanceof BigExactValue) {
            const num = (this.num * other.den) + (other.num * this.den);
            const den = this.den * other.den;
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(num) && (0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(den)) {
                return new SmallExactValue(Number(num), Number(den));
            }
            return new BigExactValue(num, den);
        }
        else {
            throw new Error(`Cannot add ${this} and ${other}`);
        }
    }
    subtract(other) {
        if (other instanceof InexactValue) {
            return this.toInexact().subtract(other);
        }
        else if (other instanceof SmallExactValue) {
            return this.subtract(other.toBigExact());
        }
        else if (other instanceof BigExactValue) {
            const num = (this.num * other.den) - (other.num * this.den);
            const den = this.den * other.den;
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(num) && (0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(den)) {
                return new SmallExactValue(Number(num), Number(den));
            }
            return new BigExactValue(num, den);
        }
        else {
            throw new Error(`Cannot subtract ${this} and ${other}`);
        }
    }
    multiply(other) {
        if ((other.isExact() && other.isZero()) || this.isZero()) {
            return ZERO_VAL;
        }
        if (other instanceof InexactValue) {
            return this.toInexact().multiply(other);
        }
        else if (other instanceof SmallExactValue) {
            return this.multiply(other.toBigExact());
        }
        else if (other instanceof BigExactValue) {
            const num = this.num * other.num;
            const den = this.den * other.den;
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(num) && (0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(den)) {
                return new SmallExactValue(Number(num), Number(den));
            }
            return new BigExactValue(num, den);
        }
        else {
            throw new Error(`Cannot multiply ${this} and ${other}`);
        }
    }
    divide(other) {
        if (this.isZero()) {
            return ZERO_VAL;
        }
        if (other instanceof InexactValue) {
            return this.toInexact().divide(other);
        }
        else if (other instanceof SmallExactValue) {
            return this.divide(other.toBigExact());
        }
        else if (other instanceof BigExactValue) {
            const num = this.num * other.den;
            const den = this.den * other.num;
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(num) && (0,_util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger)(den)) {
                return new SmallExactValue(Number(num), Number(den));
            }
            return new BigExactValue(num, den);
        }
        else {
            throw new Error(`Cannot divide ${this} and ${other}`);
        }
    }
    numerator() {
        return new BigExactValue(this.num);
    }
    denominator() {
        return new BigExactValue(this.den);
    }
    integerSqrt() {
        return this.sqrt().floor();
    }
    sqrt() {
        return this.toSmallExact().sqrt();
    }
    abs() {
        if (this.isNegative()) {
            return new BigExactValue(this.num * -1n, this.den);
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
            return new BigExactValue(this.num / this.den);
        }
    }
    ceiling() {
        if (this.den === 1n) {
            return this;
        }
        else {
            return new BigExactValue((this.num / this.den) + 1n);
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
    log() {
        return this.toSmallExact().log();
    }
    expt(power) {
        power = power.toInexact();
        if (power.isInteger()) {
            const exp = BigInt(power.num);
            const num = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bigExpt)(this.num, exp);
            const den = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bigExpt)(this.den, exp);
            return new BigExactValue(num, den);
        }
        return this.toSmallExact().expt(power);
    }
    exp() {
        return this.toSmallExact().exp();
    }
    angle() {
        return new BigExactValue(0n);
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
const EXACT_ZERO = new SmallExactValue(0);
/////////////////////// Constants ///////////////////////
const ZERO_VAL = new SmallExactValue(0);
const ONE_VAL = new SmallExactValue(1);
const TWO_VAL = new SmallExactValue(2);
const NEG_ONE_VAL = new SmallExactValue(-1);
const PI_VAL = new InexactValue(Math.PI);
const INF_VAL = new InexactValue(Number.POSITIVE_INFINITY);
const NEG_INF_VAL = new InexactValue(Number.NEGATIVE_INFINITY);
const NAN_VAL = new InexactValue(Number.NaN);


/***/ }),

/***/ "./src/numbers/types.ts":
/*!******************************!*\
  !*** ./src/numbers/types.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Level: () => (/* binding */ Level)
/* harmony export */ });
var Level;
(function (Level) {
    Level[Level["INTEGER"] = 0] = "INTEGER";
    Level[Level["RATIONAL"] = 1] = "RATIONAL";
    Level[Level["REAL"] = 2] = "REAL";
    Level[Level["COMPLEX"] = 3] = "COMPLEX";
})(Level || (Level = {}));


/***/ }),

/***/ "./src/numbers/util.ts":
/*!*****************************!*\
  !*** ./src/numbers/util.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bigExpt: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.bigExpt),
/* harmony export */   integerIsOne: () => (/* binding */ integerIsOne),
/* harmony export */   isJSInteger: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.isJSInteger),
/* harmony export */   isJSNumber: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.isJSNumber),
/* harmony export */   isSafeInteger: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.isSafeInteger),
/* harmony export */   matchExactness: () => (/* binding */ matchExactness),
/* harmony export */   numberIsRational: () => (/* binding */ numberIsRational),
/* harmony export */   shouldBeBigInt: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.shouldBeBigInt)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.ts");

function integerIsOne(n) {
    const isInteger = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isJSInteger)(n);
    const isOne = typeof n === 'bigint' ? n === 1n : n === 1;
    return isInteger && isOne;
}
function numberIsRational(n) {
    const isBigInt = typeof n === 'bigint';
    const isRationalFloat = Number.isFinite(n) && !Number.isNaN(n);
    return isBigInt || isRationalFloat;
}
function matchExactness(x, y) {
    x = !y.isExact() ? x.toInexact() : x;
    y = !x.isExact() ? y.toInexact() : y;
    return [x, y];
}



/***/ }),

/***/ "./src/tower.ts":
/*!**********************!*\
  !*** ./src/tower.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxedNumber: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.BoxedNumber),
/* harmony export */   EXACT_HALF: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.EXACT_HALF),
/* harmony export */   EXACT_I: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.EXACT_I),
/* harmony export */   EXACT_NEG_I: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.EXACT_NEG_I),
/* harmony export */   EXACT_NEG_ONE: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.EXACT_NEG_ONE),
/* harmony export */   EXACT_ONE: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.EXACT_ONE),
/* harmony export */   EXACT_TWO: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.EXACT_TWO),
/* harmony export */   EXACT_ZERO: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.EXACT_ZERO),
/* harmony export */   HALF: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.HALF),
/* harmony export */   I: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   INEXACT_HALF: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.INEXACT_HALF),
/* harmony export */   INEXACT_I: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.INEXACT_I),
/* harmony export */   INEXACT_NEG_I: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.INEXACT_NEG_I),
/* harmony export */   INEXACT_NEG_ONE: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.INEXACT_NEG_ONE),
/* harmony export */   INEXACT_NEG_ZERO: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.INEXACT_NEG_ZERO),
/* harmony export */   INEXACT_ONE: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.INEXACT_ONE),
/* harmony export */   INEXACT_TWO: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.INEXACT_TWO),
/* harmony export */   INEXACT_ZERO: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.INEXACT_ZERO),
/* harmony export */   INF: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.INF),
/* harmony export */   Level: () => (/* reexport safe */ _numbers_types__WEBPACK_IMPORTED_MODULE_0__.Level),
/* harmony export */   NAN: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.NAN),
/* harmony export */   NEG_I: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.NEG_I),
/* harmony export */   NEG_INF: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.NEG_INF),
/* harmony export */   NEG_ONE: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.NEG_ONE),
/* harmony export */   ONE: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.ONE),
/* harmony export */   PI: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.PI),
/* harmony export */   TWO: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.TWO),
/* harmony export */   ZERO: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.ZERO),
/* harmony export */   abs: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.abs),
/* harmony export */   acos: () => (/* reexport safe */ _functions_trigonometry__WEBPACK_IMPORTED_MODULE_7__.acos),
/* harmony export */   add: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.add),
/* harmony export */   angle: () => (/* reexport safe */ _functions_complex__WEBPACK_IMPORTED_MODULE_6__.angle),
/* harmony export */   approxEquals: () => (/* reexport safe */ _functions_comparison__WEBPACK_IMPORTED_MODULE_3__.approxEquals),
/* harmony export */   arithmeticShift: () => (/* reexport safe */ _functions_bitwise__WEBPACK_IMPORTED_MODULE_9__.arithmeticShift),
/* harmony export */   asin: () => (/* reexport safe */ _functions_trigonometry__WEBPACK_IMPORTED_MODULE_7__.asin),
/* harmony export */   atan: () => (/* reexport safe */ _functions_trigonometry__WEBPACK_IMPORTED_MODULE_7__.atan),
/* harmony export */   atan2: () => (/* reexport safe */ _functions_trigonometry__WEBPACK_IMPORTED_MODULE_7__.atan2),
/* harmony export */   bitwiseAnd: () => (/* reexport safe */ _functions_bitwise__WEBPACK_IMPORTED_MODULE_9__.bitwiseAnd),
/* harmony export */   bitwiseNot: () => (/* reexport safe */ _functions_bitwise__WEBPACK_IMPORTED_MODULE_9__.bitwiseNot),
/* harmony export */   bitwiseOr: () => (/* reexport safe */ _functions_bitwise__WEBPACK_IMPORTED_MODULE_9__.bitwiseOr),
/* harmony export */   bitwiseXor: () => (/* reexport safe */ _functions_bitwise__WEBPACK_IMPORTED_MODULE_9__.bitwiseXor),
/* harmony export */   boxFixnum: () => (/* reexport safe */ _functions_creation__WEBPACK_IMPORTED_MODULE_8__.boxFixnum),
/* harmony export */   ceiling: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.ceiling),
/* harmony export */   conjugate: () => (/* reexport safe */ _functions_complex__WEBPACK_IMPORTED_MODULE_6__.conjugate),
/* harmony export */   cos: () => (/* reexport safe */ _functions_trigonometry__WEBPACK_IMPORTED_MODULE_7__.cos),
/* harmony export */   cosh: () => (/* reexport safe */ _functions_trigonometry__WEBPACK_IMPORTED_MODULE_7__.cosh),
/* harmony export */   denominator: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.denominator),
/* harmony export */   divide: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.divide),
/* harmony export */   e: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.e),
/* harmony export */   equals: () => (/* reexport safe */ _functions_comparison__WEBPACK_IMPORTED_MODULE_3__.equals),
/* harmony export */   eqv: () => (/* reexport safe */ _functions_comparison__WEBPACK_IMPORTED_MODULE_3__.eqv),
/* harmony export */   exactToInexact: () => (/* reexport safe */ _functions_misc__WEBPACK_IMPORTED_MODULE_5__.exactToInexact),
/* harmony export */   exp: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.exp),
/* harmony export */   expt: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.expt),
/* harmony export */   floor: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.floor),
/* harmony export */   fromJSNumber: () => (/* reexport safe */ _functions_creation__WEBPACK_IMPORTED_MODULE_8__.fromJSNumber),
/* harmony export */   fromString: () => (/* reexport safe */ _functions_creation__WEBPACK_IMPORTED_MODULE_8__.fromString),
/* harmony export */   gcd: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.gcd),
/* harmony export */   greaterThan: () => (/* reexport safe */ _functions_comparison__WEBPACK_IMPORTED_MODULE_3__.greaterThan),
/* harmony export */   greaterThanOrEqual: () => (/* reexport safe */ _functions_comparison__WEBPACK_IMPORTED_MODULE_3__.greaterThanOrEqual),
/* harmony export */   i: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.i),
/* harmony export */   imaginaryPart: () => (/* reexport safe */ _functions_complex__WEBPACK_IMPORTED_MODULE_6__.imaginaryPart),
/* harmony export */   inexactToExact: () => (/* reexport safe */ _functions_misc__WEBPACK_IMPORTED_MODULE_5__.inexactToExact),
/* harmony export */   inf: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.inf),
/* harmony export */   integerSqrt: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.integerSqrt),
/* harmony export */   isComplex: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isComplex),
/* harmony export */   isEven: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isEven),
/* harmony export */   isExact: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isExact),
/* harmony export */   isExactInteger: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isExactInteger),
/* harmony export */   isExactNonNegativeInteger: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isExactNonNegativeInteger),
/* harmony export */   isExactPositiveInteger: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isExactPositiveInteger),
/* harmony export */   isFinite: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isFinite),
/* harmony export */   isFixnum: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isFixnum),
/* harmony export */   isFlonum: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isFlonum),
/* harmony export */   isInexact: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isInexact),
/* harmony export */   isInexactReal: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isInexactReal),
/* harmony export */   isInteger: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isInteger),
/* harmony export */   isNaN: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isNaN),
/* harmony export */   isNegative: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isNegative),
/* harmony export */   isNegativeZero: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isNegativeZero),
/* harmony export */   isNumber: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isNumber),
/* harmony export */   isOdd: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isOdd),
/* harmony export */   isPositive: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isPositive),
/* harmony export */   isRacketNumber: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isRacketNumber),
/* harmony export */   isRational: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isRational),
/* harmony export */   isReal: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isReal),
/* harmony export */   isSchemeNumber: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isSchemeNumber),
/* harmony export */   isZero: () => (/* reexport safe */ _functions_predicates__WEBPACK_IMPORTED_MODULE_4__.isZero),
/* harmony export */   lcm: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.lcm),
/* harmony export */   lessThan: () => (/* reexport safe */ _functions_comparison__WEBPACK_IMPORTED_MODULE_3__.lessThan),
/* harmony export */   lessThanOrEqual: () => (/* reexport safe */ _functions_comparison__WEBPACK_IMPORTED_MODULE_3__.lessThanOrEqual),
/* harmony export */   log: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.log),
/* harmony export */   magnitude: () => (/* reexport safe */ _functions_complex__WEBPACK_IMPORTED_MODULE_6__.magnitude),
/* harmony export */   makeComplex: () => (/* reexport safe */ _functions_creation__WEBPACK_IMPORTED_MODULE_8__.makeComplex),
/* harmony export */   makeComplexNumber: () => (/* reexport safe */ _functions_creation__WEBPACK_IMPORTED_MODULE_8__.makeComplexNumber),
/* harmony export */   makeFloat: () => (/* reexport safe */ _functions_creation__WEBPACK_IMPORTED_MODULE_8__.makeFloat),
/* harmony export */   makeNumber: () => (/* reexport safe */ _functions_creation__WEBPACK_IMPORTED_MODULE_8__.makeNumber),
/* harmony export */   makePolar: () => (/* reexport safe */ _functions_complex__WEBPACK_IMPORTED_MODULE_6__.makePolar),
/* harmony export */   makeRational: () => (/* reexport safe */ _functions_creation__WEBPACK_IMPORTED_MODULE_8__.makeRational),
/* harmony export */   makeRectangular: () => (/* reexport safe */ _functions_complex__WEBPACK_IMPORTED_MODULE_6__.makeRectangular),
/* harmony export */   modulo: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.modulo),
/* harmony export */   multiply: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.multiply),
/* harmony export */   nan: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.nan),
/* harmony export */   negative_i: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.negative_i),
/* harmony export */   negative_inf: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.negative_inf),
/* harmony export */   negative_one: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.negative_one),
/* harmony export */   negative_zero: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.negative_zero),
/* harmony export */   numerator: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.numerator),
/* harmony export */   one: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.one),
/* harmony export */   pi: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.pi),
/* harmony export */   quotient: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.quotient),
/* harmony export */   realPart: () => (/* reexport safe */ _functions_complex__WEBPACK_IMPORTED_MODULE_6__.realPart),
/* harmony export */   remainder: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.remainder),
/* harmony export */   round: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.round),
/* harmony export */   sin: () => (/* reexport safe */ _functions_trigonometry__WEBPACK_IMPORTED_MODULE_7__.sin),
/* harmony export */   sinh: () => (/* reexport safe */ _functions_trigonometry__WEBPACK_IMPORTED_MODULE_7__.sinh),
/* harmony export */   sqr: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.sqr),
/* harmony export */   sqrt: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.sqrt),
/* harmony export */   subtract: () => (/* reexport safe */ _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__.subtract),
/* harmony export */   tan: () => (/* reexport safe */ _functions_trigonometry__WEBPACK_IMPORTED_MODULE_7__.tan),
/* harmony export */   tanh: () => (/* reexport safe */ _functions_trigonometry__WEBPACK_IMPORTED_MODULE_7__.tanh),
/* harmony export */   toExact: () => (/* reexport safe */ _functions_misc__WEBPACK_IMPORTED_MODULE_5__.toExact),
/* harmony export */   toFixnum: () => (/* reexport safe */ _functions_creation__WEBPACK_IMPORTED_MODULE_8__.toFixnum),
/* harmony export */   toInexact: () => (/* reexport safe */ _functions_misc__WEBPACK_IMPORTED_MODULE_5__.toInexact),
/* harmony export */   two: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.two),
/* harmony export */   zero: () => (/* reexport safe */ _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__.zero)
/* harmony export */ });
/* harmony import */ var _numbers_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numbers/types */ "./src/numbers/types.ts");
/* harmony import */ var _numbers_BoxedNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numbers/BoxedNumber */ "./src/numbers/BoxedNumber.ts");
/* harmony import */ var _functions_arithmetic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/arithmetic */ "./src/functions/arithmetic.ts");
/* harmony import */ var _functions_comparison__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/comparison */ "./src/functions/comparison.ts");
/* harmony import */ var _functions_predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/predicates */ "./src/functions/predicates.ts");
/* harmony import */ var _functions_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/misc */ "./src/functions/misc.ts");
/* harmony import */ var _functions_complex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/complex */ "./src/functions/complex.ts");
/* harmony import */ var _functions_trigonometry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/trigonometry */ "./src/functions/trigonometry.ts");
/* harmony import */ var _functions_creation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/creation */ "./src/functions/creation.ts");
/* harmony import */ var _functions_bitwise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/bitwise */ "./src/functions/bitwise.ts");












/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bigExpt: () => (/* binding */ bigExpt),
/* harmony export */   isJSInteger: () => (/* binding */ isJSInteger),
/* harmony export */   isJSNumber: () => (/* binding */ isJSNumber),
/* harmony export */   isSafeInteger: () => (/* binding */ isSafeInteger),
/* harmony export */   shouldBeBigInt: () => (/* binding */ shouldBeBigInt)
/* harmony export */ });
function isJSNumber(n) {
    return typeof n === 'number' || typeof n === 'bigint';
}
function isJSInteger(n) {
    return Number.isInteger(n) || typeof n === 'bigint';
}
function isSafeInteger(n) {
    const max = Number.MAX_SAFE_INTEGER;
    const min = Number.MIN_SAFE_INTEGER;
    if (typeof n === 'number') {
        return Number.isFinite(n) && n >= min && n <= max;
    }
    else {
        return n >= BigInt(min) && n <= BigInt(max);
    }
}
function shouldBeBigInt(n) {
    return Number.isFinite(n) && !isSafeInteger(n);
}
function bigExpt(n, k) {
    let acc = 1n;
    while (k !== 0n) {
        if (k % 2n === 0n) {
            n = n * n;
            k = k / 2n;
        }
        else {
            acc = acc * n;
            k = k - 1n;
        }
    }
    return acc;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/tower.ts");
/******/ 	exports.BoxedNumber = __webpack_exports__.BoxedNumber;
/******/ 	exports.EXACT_HALF = __webpack_exports__.EXACT_HALF;
/******/ 	exports.EXACT_I = __webpack_exports__.EXACT_I;
/******/ 	exports.EXACT_NEG_I = __webpack_exports__.EXACT_NEG_I;
/******/ 	exports.EXACT_NEG_ONE = __webpack_exports__.EXACT_NEG_ONE;
/******/ 	exports.EXACT_ONE = __webpack_exports__.EXACT_ONE;
/******/ 	exports.EXACT_TWO = __webpack_exports__.EXACT_TWO;
/******/ 	exports.EXACT_ZERO = __webpack_exports__.EXACT_ZERO;
/******/ 	exports.HALF = __webpack_exports__.HALF;
/******/ 	exports.I = __webpack_exports__.I;
/******/ 	exports.INEXACT_HALF = __webpack_exports__.INEXACT_HALF;
/******/ 	exports.INEXACT_I = __webpack_exports__.INEXACT_I;
/******/ 	exports.INEXACT_NEG_I = __webpack_exports__.INEXACT_NEG_I;
/******/ 	exports.INEXACT_NEG_ONE = __webpack_exports__.INEXACT_NEG_ONE;
/******/ 	exports.INEXACT_NEG_ZERO = __webpack_exports__.INEXACT_NEG_ZERO;
/******/ 	exports.INEXACT_ONE = __webpack_exports__.INEXACT_ONE;
/******/ 	exports.INEXACT_TWO = __webpack_exports__.INEXACT_TWO;
/******/ 	exports.INEXACT_ZERO = __webpack_exports__.INEXACT_ZERO;
/******/ 	exports.INF = __webpack_exports__.INF;
/******/ 	exports.Level = __webpack_exports__.Level;
/******/ 	exports.NAN = __webpack_exports__.NAN;
/******/ 	exports.NEG_I = __webpack_exports__.NEG_I;
/******/ 	exports.NEG_INF = __webpack_exports__.NEG_INF;
/******/ 	exports.NEG_ONE = __webpack_exports__.NEG_ONE;
/******/ 	exports.ONE = __webpack_exports__.ONE;
/******/ 	exports.PI = __webpack_exports__.PI;
/******/ 	exports.TWO = __webpack_exports__.TWO;
/******/ 	exports.ZERO = __webpack_exports__.ZERO;
/******/ 	exports.abs = __webpack_exports__.abs;
/******/ 	exports.acos = __webpack_exports__.acos;
/******/ 	exports.add = __webpack_exports__.add;
/******/ 	exports.angle = __webpack_exports__.angle;
/******/ 	exports.approxEquals = __webpack_exports__.approxEquals;
/******/ 	exports.arithmeticShift = __webpack_exports__.arithmeticShift;
/******/ 	exports.asin = __webpack_exports__.asin;
/******/ 	exports.atan = __webpack_exports__.atan;
/******/ 	exports.atan2 = __webpack_exports__.atan2;
/******/ 	exports.bitwiseAnd = __webpack_exports__.bitwiseAnd;
/******/ 	exports.bitwiseNot = __webpack_exports__.bitwiseNot;
/******/ 	exports.bitwiseOr = __webpack_exports__.bitwiseOr;
/******/ 	exports.bitwiseXor = __webpack_exports__.bitwiseXor;
/******/ 	exports.boxFixnum = __webpack_exports__.boxFixnum;
/******/ 	exports.ceiling = __webpack_exports__.ceiling;
/******/ 	exports.conjugate = __webpack_exports__.conjugate;
/******/ 	exports.cos = __webpack_exports__.cos;
/******/ 	exports.cosh = __webpack_exports__.cosh;
/******/ 	exports.denominator = __webpack_exports__.denominator;
/******/ 	exports.divide = __webpack_exports__.divide;
/******/ 	exports.e = __webpack_exports__.e;
/******/ 	exports.equals = __webpack_exports__.equals;
/******/ 	exports.eqv = __webpack_exports__.eqv;
/******/ 	exports.exactToInexact = __webpack_exports__.exactToInexact;
/******/ 	exports.exp = __webpack_exports__.exp;
/******/ 	exports.expt = __webpack_exports__.expt;
/******/ 	exports.floor = __webpack_exports__.floor;
/******/ 	exports.fromJSNumber = __webpack_exports__.fromJSNumber;
/******/ 	exports.fromString = __webpack_exports__.fromString;
/******/ 	exports.gcd = __webpack_exports__.gcd;
/******/ 	exports.greaterThan = __webpack_exports__.greaterThan;
/******/ 	exports.greaterThanOrEqual = __webpack_exports__.greaterThanOrEqual;
/******/ 	exports.i = __webpack_exports__.i;
/******/ 	exports.imaginaryPart = __webpack_exports__.imaginaryPart;
/******/ 	exports.inexactToExact = __webpack_exports__.inexactToExact;
/******/ 	exports.inf = __webpack_exports__.inf;
/******/ 	exports.integerSqrt = __webpack_exports__.integerSqrt;
/******/ 	exports.isComplex = __webpack_exports__.isComplex;
/******/ 	exports.isEven = __webpack_exports__.isEven;
/******/ 	exports.isExact = __webpack_exports__.isExact;
/******/ 	exports.isExactInteger = __webpack_exports__.isExactInteger;
/******/ 	exports.isExactNonNegativeInteger = __webpack_exports__.isExactNonNegativeInteger;
/******/ 	exports.isExactPositiveInteger = __webpack_exports__.isExactPositiveInteger;
/******/ 	exports.isFinite = __webpack_exports__.isFinite;
/******/ 	exports.isFixnum = __webpack_exports__.isFixnum;
/******/ 	exports.isFlonum = __webpack_exports__.isFlonum;
/******/ 	exports.isInexact = __webpack_exports__.isInexact;
/******/ 	exports.isInexactReal = __webpack_exports__.isInexactReal;
/******/ 	exports.isInteger = __webpack_exports__.isInteger;
/******/ 	exports.isNaN = __webpack_exports__.isNaN;
/******/ 	exports.isNegative = __webpack_exports__.isNegative;
/******/ 	exports.isNegativeZero = __webpack_exports__.isNegativeZero;
/******/ 	exports.isNumber = __webpack_exports__.isNumber;
/******/ 	exports.isOdd = __webpack_exports__.isOdd;
/******/ 	exports.isPositive = __webpack_exports__.isPositive;
/******/ 	exports.isRacketNumber = __webpack_exports__.isRacketNumber;
/******/ 	exports.isRational = __webpack_exports__.isRational;
/******/ 	exports.isReal = __webpack_exports__.isReal;
/******/ 	exports.isSchemeNumber = __webpack_exports__.isSchemeNumber;
/******/ 	exports.isZero = __webpack_exports__.isZero;
/******/ 	exports.lcm = __webpack_exports__.lcm;
/******/ 	exports.lessThan = __webpack_exports__.lessThan;
/******/ 	exports.lessThanOrEqual = __webpack_exports__.lessThanOrEqual;
/******/ 	exports.log = __webpack_exports__.log;
/******/ 	exports.magnitude = __webpack_exports__.magnitude;
/******/ 	exports.makeComplex = __webpack_exports__.makeComplex;
/******/ 	exports.makeComplexNumber = __webpack_exports__.makeComplexNumber;
/******/ 	exports.makeFloat = __webpack_exports__.makeFloat;
/******/ 	exports.makeNumber = __webpack_exports__.makeNumber;
/******/ 	exports.makePolar = __webpack_exports__.makePolar;
/******/ 	exports.makeRational = __webpack_exports__.makeRational;
/******/ 	exports.makeRectangular = __webpack_exports__.makeRectangular;
/******/ 	exports.modulo = __webpack_exports__.modulo;
/******/ 	exports.multiply = __webpack_exports__.multiply;
/******/ 	exports.nan = __webpack_exports__.nan;
/******/ 	exports.negative_i = __webpack_exports__.negative_i;
/******/ 	exports.negative_inf = __webpack_exports__.negative_inf;
/******/ 	exports.negative_one = __webpack_exports__.negative_one;
/******/ 	exports.negative_zero = __webpack_exports__.negative_zero;
/******/ 	exports.numerator = __webpack_exports__.numerator;
/******/ 	exports.one = __webpack_exports__.one;
/******/ 	exports.pi = __webpack_exports__.pi;
/******/ 	exports.quotient = __webpack_exports__.quotient;
/******/ 	exports.realPart = __webpack_exports__.realPart;
/******/ 	exports.remainder = __webpack_exports__.remainder;
/******/ 	exports.round = __webpack_exports__.round;
/******/ 	exports.sin = __webpack_exports__.sin;
/******/ 	exports.sinh = __webpack_exports__.sinh;
/******/ 	exports.sqr = __webpack_exports__.sqr;
/******/ 	exports.sqrt = __webpack_exports__.sqrt;
/******/ 	exports.subtract = __webpack_exports__.subtract;
/******/ 	exports.tan = __webpack_exports__.tan;
/******/ 	exports.tanh = __webpack_exports__.tanh;
/******/ 	exports.toExact = __webpack_exports__.toExact;
/******/ 	exports.toFixnum = __webpack_exports__.toFixnum;
/******/ 	exports.toInexact = __webpack_exports__.toInexact;
/******/ 	exports.two = __webpack_exports__.two;
/******/ 	exports.zero = __webpack_exports__.zero;
/******/ 	Object.defineProperty(exports, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsS0FBa0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSxHQUFHLENBQUMsS0FBa0I7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLHFEQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFDLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSxRQUFRLENBQUMsS0FBa0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENB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QyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDZixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7YUFBTTtZQUNILEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDZDtLQUNKO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDOzs7Ozs7O1VDeENEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG93ZXIuanMvLi9zcmMvZnVuY3Rpb25zL2FyaXRobWV0aWMudHMiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvLi9zcmMvZnVuY3Rpb25zL2JpdHdpc2UudHMiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvLi9zcmMvZnVuY3Rpb25zL2NvbXBhcmlzb24udHMiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvLi9zcmMvZnVuY3Rpb25zL2NvbXBsZXgudHMiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvLi9zcmMvZnVuY3Rpb25zL2NyZWF0aW9uLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL2Z1bmN0aW9ucy9taXNjLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL2Z1bmN0aW9ucy9wcmVkaWNhdGVzLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL2Z1bmN0aW9ucy90cmlnb25vbWV0cnkudHMiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvLi9zcmMvZnVuY3Rpb25zL3V0aWwudHMiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvLi9zcmMvbnVtYmVycy9Cb3hlZE51bWJlci50cyIsIndlYnBhY2s6Ly90b3dlci5qcy8uL3NyYy9udW1iZXJzL1ZhbHVlLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL251bWJlcnMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvLi9zcmMvbnVtYmVycy91dGlsLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL3Rvd2VyLnRzIiwid2VicGFjazovL3Rvd2VyLmpzLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rvd2VyLmpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG93ZXIuanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3dlci5qcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Rvd2VyLmpzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b3dlci5qcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBSYWNrZXROdW1iZXIsXG4gICAgQm94ZWROdW1iZXIsXG4gICAgRVhBQ1RfSEFMRixcbiAgICBJTkYsXG4gICAgTkFOLFxuICAgIE5FR19JTkYsXG4gICAgT05FLFxuICAgIEksXG4gICAgRVhBQ1RfWkVSTyxcbiAgICBJTkVYQUNUX1pFUk8sXG4gICAgSU5FWEFDVF9PTkUsXG59IGZyb20gJy4uL3Rvd2VyJztcbmltcG9ydCB7XG4gICAgbm9ybWFsaXplLFxuICAgIG1hdGNoVHlwZXMsXG4gICAgYmlnRXhwdCxcbiAgICBzaG91bGRCZUJpZ0ludCxcbn0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7XG4gICAgaXNOZWdhdGl2ZSxcbiAgICBpc1Bvc2l0aXZlLFxuICAgIGlzRXhhY3QsXG4gICAgaXNJbmV4YWN0LFxuICAgIGlzWmVybyxcbiAgICBpc0V2ZW4sXG4gICAgaXNJbnRlZ2VyLFxuICAgIGlzUmVhbCxcbiAgICBpc0Zpbml0ZSxcbiAgICBpc05hTixcbiAgICBpc05lZ2F0aXZlWmVyb1xufSBmcm9tICcuL3ByZWRpY2F0ZXMnO1xuaW1wb3J0IHtcbiAgICBlcXVhbHNcbn0gZnJvbSAnLi9jb21wYXJpc29uJztcbmltcG9ydCB7XG4gICAgZXhhY3RUb0luZXhhY3Rcbn0gZnJvbSAnLi9taXNjJztcblxudHlwZSBOdW1iZXJCaW5vcCA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gUmFja2V0TnVtYmVyO1xudHlwZSBCaWdJbnRCaW5vcCA9ICh4OiBiaWdpbnQsIHk6IGJpZ2ludCkgPT4gUmFja2V0TnVtYmVyO1xudHlwZSBCb3hlZE51bWJlckJpbm9wID0gKHg6IEJveGVkTnVtYmVyLCB5OiBCb3hlZE51bWJlcikgPT4gUmFja2V0TnVtYmVyO1xuXG4vKlxuICogTWFrZXMgYSBmdW5jdGlvbiB0aGF0IG9wZXJhdGVzIG9uIFJhY2tldE51bWJlcnMuIFRoZSBmdW5jdGlvbiB0YWtlc1xuICogYXQgbGVhc3QgdHdvIGFyZ3VtZW50cyBhbmQgZm9sZHMgdGhlIGdpdmVuIGJpbmFyeSBvcGVyYXRpb25zIGZyb20gbGVmdCB0byByaWdodC5cbiAqL1xuZnVuY3Rpb24gbWFrZU11bHRpQXJpdHkoZm5Gb3JOdW1iZXJzOiBOdW1iZXJCaW5vcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuRm9yQmlnSW50czogQmlnSW50Qmlub3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbkZvckJveGVkTnVtYmVyczogQm94ZWROdW1iZXJCaW5vcCkge1xuICAgIHJldHVybiBmdW5jdGlvbiByZWN1ciguLi5hcmdzOiBSYWNrZXROdW1iZXJbXSk6IFJhY2tldE51bWJlciB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgYmUgY2FsbGVkIHdpdGggYXQgbGVhc3QgdHdvIGFyZ3VtZW50cy5cIilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB4ID0gYXJnc1swXTtcbiAgICAgICAgbGV0IHkgPSBhcmdzWzFdO1xuXG4gICAgICAgIFt4LCB5XSA9IG1hdGNoVHlwZXMoeCwgeSk7XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gZm5Gb3JOdW1iZXJzKHgsIHkgYXMgbnVtYmVyKTtcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzU2FmZUludGVnZXIocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZuRm9yQmlnSW50cyhCaWdJbnQoeCksIEJpZ0ludCh5IGFzIG51bWJlcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSAnYmlnaW50Jykge1xuICAgICAgICAgICAgcmVzdWx0ID0gZm5Gb3JCaWdJbnRzKHgsIHkgYXMgYmlnaW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuRm9yQm94ZWROdW1iZXJzKHgsIHkgYXMgQm94ZWROdW1iZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjdXIocmVzdWx0LCAuLi5hcmdzLnNsaWNlKDIpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZCguLi5udW1zOiBSYWNrZXROdW1iZXJbXSk6IFJhY2tldE51bWJlciB7XG4gICAgY29uc3QgYWRkZXIgPSBtYWtlTXVsdGlBcml0eShcbiAgICAgICAgZnVuY3Rpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIHggKyB5O1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbih4OiBiaWdpbnQsIHk6IGJpZ2ludCk6IGJpZ2ludCB7XG4gICAgICAgICAgICByZXR1cm4geCArIHk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKHg6IEJveGVkTnVtYmVyLCB5OiBCb3hlZE51bWJlcik6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiB4LmFkZCh5KTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAobnVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIGlmIChudW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKG51bXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhZGRlciguLi5udW1zKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdCguLi5udW1zOiBSYWNrZXROdW1iZXJbXSk6IFJhY2tldE51bWJlciB7XG4gICAgY29uc3Qgc3VidHJhY3RlciA9IG1ha2VNdWx0aUFyaXR5KFxuICAgICAgICBmdW5jdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4geCAtIHk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKHg6IGJpZ2ludCwgeTogYmlnaW50KTogYmlnaW50IHtcbiAgICAgICAgICAgIHJldHVybiB4IC0geTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oeDogQm94ZWROdW1iZXIsIHk6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIHguc3VidHJhY3QoeSk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKG51bXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBzdWJ0cmFjdGVyKDAsIG51bXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdWJ0cmFjdGVyKC4uLm51bXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KC4uLm51bXM6IFJhY2tldE51bWJlcltdKTogUmFja2V0TnVtYmVyIHtcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gbWFrZU11bHRpQXJpdHkoXG4gICAgICAgIGZ1bmN0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiB4ICogeTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oeDogYmlnaW50LCB5OiBiaWdpbnQpOiBiaWdpbnQge1xuICAgICAgICAgICAgcmV0dXJuIHggKiB5O1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbih4OiBCb3hlZE51bWJlciwgeTogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgICAgICByZXR1cm4geC5tdWx0aXBseSh5KTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAobnVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChudW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKG51bXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtdWx0aXBsaWVyKC4uLm51bXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZSguLi5udW1zOiBSYWNrZXROdW1iZXJbXSk6IFJhY2tldE51bWJlciB7XG4gICAgY29uc3QgZGl2aWRlciA9IG1ha2VNdWx0aUFyaXR5KFxuICAgICAgICBmdW5jdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB8IEJveGVkTnVtYmVyIHtcbiAgICAgICAgICAgIGlmICh4ICUgeSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4IC8geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogeCwgZGVuOiAxfSkuZGl2aWRlKEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiB5LCBkZW46IDF9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKHg6IGJpZ2ludCwgeTogYmlnaW50KTogYmlnaW50IHwgQm94ZWROdW1iZXIge1xuICAgICAgICAgICAgaWYgKHggJSB5ID09PSAwbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB4IC8geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogeCwgZGVuOiAxbn0pLmRpdmlkZShCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogeSwgZGVuOiAxbn0pKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oeDogQm94ZWROdW1iZXIsIHk6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXIge1xuICAgICAgICAgICAgcmV0dXJuIHguZGl2aWRlKHkpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIGlmIChudW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZGl2aWRlcigxLCBudW1zWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGl2aWRlciguLi5udW1zKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdW90aWVudChuOiBSYWNrZXROdW1iZXIsIGs6IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgW24sIGtdID0gbWF0Y2hUeXBlcyhuLCBrKTtcblxuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKG4gaW5zdGFuY2VvZiBCb3hlZE51bWJlcikge1xuICAgICAgICByZXN1bHQgPSBuLmRpdmlkZShrIGFzIEJveGVkTnVtYmVyKS5mbG9vcigpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJlc3VsdCA9IE1hdGguZmxvb3IobiAvIChrIGFzIG51bWJlcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IG4gLyAoayBhcyBiaWdpbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBub3JtYWxpemUocmVzdWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbWFpbmRlcihuOiBSYWNrZXROdW1iZXIsIGs6IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgW24sIGtdID0gbWF0Y2hUeXBlcyhuLCBrKTtcblxuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKG4gaW5zdGFuY2VvZiBCb3hlZE51bWJlcikge1xuICAgICAgICBjb25zdCBxdW90aWVudCA9IG4uZGl2aWRlKGsgYXMgQm94ZWROdW1iZXIpLmZsb29yKCk7XG4gICAgICAgIHJlc3VsdCA9IG4uc3VidHJhY3QoKGsgYXMgQm94ZWROdW1iZXIpLm11bHRpcGx5KHF1b3RpZW50KSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmVzdWx0ID0gbiAlIChrIGFzIG51bWJlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gbiAlIChrIGFzIGJpZ2ludCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZShyZXN1bHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kdWxvKG46IFJhY2tldE51bWJlciwgazogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBbbiwga10gPSBtYXRjaFR5cGVzKG4sIGspO1xuXG4gICAgbGV0IHJlc3VsdCA9IHJlbWFpbmRlcihuLCBrKTtcbiAgICBjb25zdCBuZWdrID0gaXNOZWdhdGl2ZShrKTtcblxuICAgIGlmIChuZWdrKSB7XG4gICAgICAgIGlmIChpc1Bvc2l0aXZlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGFkZChyZXN1bHQsIGspO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzTmVnYXRpdmUocmVzdWx0KSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gYWRkKHJlc3VsdCwgayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9ybWFsaXplKHJlc3VsdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcXIobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAobiBpbnN0YW5jZW9mIEJveGVkTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUobi5tdWx0aXBseShuKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuICogbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuICogbik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3FydChuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChuIGluc3RhbmNlb2YgQm94ZWROdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuLnNxcnQoKSk7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAobiA8IDApIHtcbiAgICAgICAgICAgIG4gPSAtbjtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IE1hdGguc3FydChuKTtcbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IDAsIGRlbjogMSwgaW1hZ051bTogcmVzdWx0LCBpbWFnRGVuOiAxfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogMCwgaW1hZ051bTogcmVzdWx0fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBNYXRoLnNxcnQobik7XG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiByZXN1bHR9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogbiwgZGVuOiAxbn0pLnNxcnQoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW50ZWdlclNxcnQobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoaXNOZWdhdGl2ZShuKSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBpbnRlZ2VyU3FydChtdWx0aXBseShuLCAtMSkpO1xuICAgICAgICBpZiAoaXNFeGFjdChyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbXVsdGlwbHkocmVzdWx0LCBJKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtdWx0aXBseShyZXN1bHQsIEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiAwLCBpbWFnTnVtOiAxfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGZsb29yKHNxcnQobikpO1xuICAgIGlmIChpc0V4YWN0KG4pICYmIHJlc3VsdCBpbnN0YW5jZW9mIEJveGVkTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQudG9GaXhudW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHQoejogUmFja2V0TnVtYmVyLCB3OiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChpc0luZXhhY3QodykgJiYgZXF1YWxzKHcsIElORVhBQ1RfWkVSTykpIHtcbiAgICAgICAgcmV0dXJuIElORVhBQ1RfT05FO1xuXG4gICAgfSBlbHNlIGlmIChpc0V4YWN0KHcpICYmIGVxdWFscyh3LCBFWEFDVF9IQUxGKSkge1xuICAgICAgICByZXR1cm4gc3FydCh6KTtcblxuICAgIH0gZWxzZSBpZiAoaXNOYU4odykpIHtcbiAgICAgICAgcmV0dXJuIGlzUmVhbCh3KSA/IE5BTiA6IEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiBOYU4sIGltYWdOdW06IE5hTn0pO1xuXG4gICAgfSBlbHNlIGlmIChpc05lZ2F0aXZlWmVybyh6KSAmJiBpc05lZ2F0aXZlKHcpKSB7XG4gICAgICAgIHJldHVybiBpc0V2ZW4odykgPyBJTkYgOiBORUdfSU5GO1xuXG4gICAgfSBlbHNlIGlmICghaXNGaW5pdGUoeikgJiYgIWlzTmFOKHopICYmIGlzTmVnYXRpdmUoeikgJiYgaXNJbnRlZ2VyKHcpICYmIGlzTmVnYXRpdmUodykpIHtcbiAgICAgICAgcmV0dXJuIGlzRXZlbih3KSA/IElORVhBQ1RfWkVSTyA6IEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiAtMH0pO1xuXG4gICAgfSBlbHNlIGlmICghaXNGaW5pdGUoeikgJiYgIWlzTmFOKHopICYmIGlzUG9zaXRpdmUoeikgJiYgaXNJbnRlZ2VyKHcpICYmIGlzUG9zaXRpdmUodykpIHtcbiAgICAgICAgcmV0dXJuIGlzRXZlbih3KSA/IElORiA6IE5FR19JTkY7XG5cbiAgICB9XG5cbiAgICBbeiwgd10gPSBtYXRjaFR5cGVzKHosIHcpO1xuXG4gICAgaWYgKHogaW5zdGFuY2VvZiBCb3hlZE51bWJlcikge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKHouZXhwdCh3IGFzIEJveGVkTnVtYmVyKSk7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB6ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBNYXRoLnBvdyh6LCB3IGFzIG51bWJlcik7XG5cbiAgICAgICAgaWYgKHNob3VsZEJlQmlnSW50KHJlc3VsdCkgfHwgIU51bWJlci5pc0Zpbml0ZShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYmlnRXhwdChCaWdJbnQoeiksIEJpZ0ludCh3IGFzIG51bWJlcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBiaWdFeHB0KHosIHcgYXMgYmlnaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHAobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAobiA9PT0gMCB8fCBuID09PSAwbikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBpZiAobiBpbnN0YW5jZW9mIEJveGVkTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuLmV4cCgpO1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiBNYXRoLmV4cChuKX0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGV4cChCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogbiwgZGVuOiAxbn0pKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2coejogUmFja2V0TnVtYmVyLCBiPzogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh6IGluc3RhbmNlb2YgQm94ZWROdW1iZXIpIHtcbiAgICAgICAgaWYgKHouaXNFeGFjdCgpICYmIHouZXF1YWxzKE9ORSkpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IHoubG9nKCk7XG4gICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBkaXZpZGUocmVzdWx0LCBsb2coYikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB6ID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoeiA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHogPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9nKEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiB6LCBkZW46IDF9KSwgYik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gTWF0aC5sb2coeik7XG4gICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICByZXR1cm4gZGl2aWRlKHJlc3VsdCwgbG9nKGIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IHJlc3VsdH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHogPT09IDFuKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9nKEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiB6LCBkZW46IDFufSksIGIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bWVyYXRvcihuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChuIGluc3RhbmNlb2YgQm94ZWROdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuLm51bWVyYXRvcigpKTtcbiAgICB9XG4gICAgcmV0dXJuIG47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZW5vbWluYXRvcihuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChuIGluc3RhbmNlb2YgQm94ZWROdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuLmRlbm9taW5hdG9yKCkpO1xuICAgIH1cbiAgICByZXR1cm4gMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdjZCguLi5hcmdzOiBSYWNrZXROdW1iZXJbXSk6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfVxuXG4gICAgY29uc3QgZ2NkZXIgPSBtYWtlTXVsdGlBcml0eShcbiAgICAgICAgZnVuY3Rpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAgICAgbGV0IHQ7XG4gICAgICAgICAgICB3aGlsZSAoeSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHQgPSB4O1xuICAgICAgICAgICAgICAgIHggPSB5O1xuICAgICAgICAgICAgICAgIHkgPSB0ICUgeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbih4OiBiaWdpbnQsIHk6IGJpZ2ludCk6IGJpZ2ludCB7XG4gICAgICAgICAgICBsZXQgdDtcbiAgICAgICAgICAgIHdoaWxlICh5ICE9PSAwbikge1xuICAgICAgICAgICAgICAgIHQgPSB4O1xuICAgICAgICAgICAgICAgIHggPSB5O1xuICAgICAgICAgICAgICAgIHkgPSB0ICUgeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbih4OiBCb3hlZE51bWJlciwgeTogQm94ZWROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgICAgICAgICAgY29uc3QgaXNFeGFjdCA9IHguaXNFeGFjdCgpICYmIHkuaXNFeGFjdCgpO1xuXG4gICAgICAgICAgICBsZXQgYW4gPSBudW1lcmF0b3IoeCk7XG4gICAgICAgICAgICBsZXQgYWQgPSBkZW5vbWluYXRvcih4KTtcbiAgICAgICAgICAgIGlmIChhbiBpbnN0YW5jZW9mIEJveGVkTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgYW4gPSBhbi50b0ZpeG51bSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFkIGluc3RhbmNlb2YgQm94ZWROdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBhZCA9IGFkLnRvRml4bnVtKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBibiA9IG51bWVyYXRvcih5KTtcbiAgICAgICAgICAgIGxldCBiZCA9IGRlbm9taW5hdG9yKHkpO1xuICAgICAgICAgICAgaWYgKGJuIGluc3RhbmNlb2YgQm94ZWROdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBibiA9IGJuLnRvRml4bnVtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmQgaW5zdGFuY2VvZiBCb3hlZE51bWJlcikge1xuICAgICAgICAgICAgICAgIGJkID0gYmQudG9GaXhudW0oKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBjb25zdCBudW0gPSBnY2QoYW4sIGJuKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbiA9IGxjbShhZCwgYmQpO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkaXZpZGUobnVtLCBkZW4pO1xuXG4gICAgICAgICAgICByZXR1cm4gaXNFeGFjdD8gcmVzdWx0IDogZXhhY3RUb0luZXhhY3QocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gZ2NkZXIoLi4uYXJncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsY20oLi4uYXJnczogUmFja2V0TnVtYmVyW10pOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGFicyhhcmdzWzBdKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzWmVybyhhcmdzW2ldKSkge1xuICAgICAgICAgICAgaWYgKGlzRXhhY3QoYXJnc1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRVhBQ1RfWkVSTztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBJTkVYQUNUX1pFUk87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBiaW5vcExjbSA9IGZ1bmN0aW9uKHg6IFJhY2tldE51bWJlciwgeTogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IG11bHRpcGx5KHgsIHkpO1xuICAgICAgICBjb25zdCBkZW4gPSBnY2QoeCwgeSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGFicyhkaXZpZGUocHJvZHVjdCwgZGVuKSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxjbShiaW5vcExjbShhcmdzWzBdLCBhcmdzWzFdKSwgLi4uYXJncy5zbGljZSgyKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYnMobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAobiBpbnN0YW5jZW9mIEJveGVkTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUobi5hYnMoKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKG4pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG4gPT09ICdiaWdpbnQnICYmIG4gPj0gMG4pIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKG4gKiAtMW4pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKG4gaW5zdGFuY2VvZiBCb3hlZE51bWJlcikge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKG4uZmxvb3IoKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbiA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjZWlsaW5nKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKG4gaW5zdGFuY2VvZiBCb3hlZE51bWJlcikge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKG4uY2VpbGluZygpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBuID09PSAnYmlnaW50Jykge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKG4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKG4gaW5zdGFuY2VvZiBCb3hlZE51bWJlcikge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKG4ucm91bmQoKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbiA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIFJhY2tldE51bWJlclxufSBmcm9tICcuLi90b3dlcic7XG5pbXBvcnQge1xuICAgIG5vcm1hbGl6ZSxcbiAgICBpc0pTSW50ZWdlclxufSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYml0d2lzZU9yKC4uLm9wZXJhbmRzOiBSYWNrZXROdW1iZXJbXSk6IFJhY2tldE51bWJlciB7XG4gICAgb3BlcmFuZHMgPSBvcGVyYW5kcy5tYXAobm9ybWFsaXplKTtcblxuICAgIGZvciAoY29uc3QgcGFyYW0gb2Ygb3BlcmFuZHMpIHtcbiAgICAgICAgaWYgKCFpc0pTSW50ZWdlcihwYXJhbSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJiaXR3aXNlIG9wZXJhdG9ycyBvbmx5IGRlZmluZWQgZm9yIGludGVnZXJzLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzQmlnID0gb3BlcmFuZHMucmVkdWNlKChhY2MsIG4pID0+IGFjYyB8fCB0eXBlb2YgbiA9PT0gJ2JpZ2ludCcsIGZhbHNlKTtcbiAgICBpZiAoaXNCaWcpIHtcbiAgICAgICAgb3BlcmFuZHMgPSBvcGVyYW5kcy5tYXAoKG4pID0+IEJpZ0ludChuIGFzIG51bWJlcikpO1xuICAgIH1cblxuICAgIHJldHVybiBub3JtYWxpemUob3BlcmFuZHMucmVkdWNlKChhLCBiKSA9PiAoYSBhcyBudW1iZXIpIHwgKGIgYXMgbnVtYmVyKSwgaXNCaWcgPyAwbiA6IDApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpdHdpc2VYb3IoLi4ub3BlcmFuZHM6IFJhY2tldE51bWJlcltdKTogUmFja2V0TnVtYmVyIHtcbiAgICBvcGVyYW5kcyA9IG9wZXJhbmRzLm1hcChub3JtYWxpemUpO1xuXG4gICAgZm9yIChjb25zdCBwYXJhbSBvZiBvcGVyYW5kcykge1xuICAgICAgICBpZiAoIWlzSlNJbnRlZ2VyKHBhcmFtKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImJpdHdpc2Ugb3BlcmF0b3JzIG9ubHkgZGVmaW5lZCBmb3IgaW50ZWdlcnMuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaXNCaWcgPSBvcGVyYW5kcy5yZWR1Y2UoKGFjYywgbikgPT4gYWNjIHx8IHR5cGVvZiBuID09PSAnYmlnaW50JywgZmFsc2UpO1xuICAgIGlmIChpc0JpZykge1xuICAgICAgICBvcGVyYW5kcyA9IG9wZXJhbmRzLm1hcCgobikgPT4gQmlnSW50KG4gYXMgbnVtYmVyKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZShvcGVyYW5kcy5yZWR1Y2UoKGEsIGIpID0+IChhIGFzIG51bWJlcikgXiAoYiBhcyBudW1iZXIpLCBpc0JpZyA/IDBuIDogMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYml0d2lzZUFuZCguLi5vcGVyYW5kczogUmFja2V0TnVtYmVyW10pOiBSYWNrZXROdW1iZXIge1xuICAgIG9wZXJhbmRzID0gb3BlcmFuZHMubWFwKG5vcm1hbGl6ZSk7XG5cbiAgICBmb3IgKGNvbnN0IHBhcmFtIG9mIG9wZXJhbmRzKSB7XG4gICAgICAgIGlmICghaXNKU0ludGVnZXIocGFyYW0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYml0d2lzZSBvcGVyYXRvcnMgb25seSBkZWZpbmVkIGZvciBpbnRlZ2Vycy5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc0JpZyA9IG9wZXJhbmRzLnJlZHVjZSgoYWNjLCBuKSA9PiBhY2MgfHwgdHlwZW9mIG4gPT09ICdiaWdpbnQnLCBmYWxzZSk7XG4gICAgaWYgKGlzQmlnKSB7XG4gICAgICAgIG9wZXJhbmRzID0gb3BlcmFuZHMubWFwKChuKSA9PiBCaWdJbnQobiBhcyBudW1iZXIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9ybWFsaXplKG9wZXJhbmRzLnJlZHVjZSgoYSwgYikgPT4gKGEgYXMgbnVtYmVyKSAmIChiIGFzIG51bWJlciksIGlzQmlnID8gLTFuIDogLTEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpdHdpc2VOb3QobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBuID0gbm9ybWFsaXplKG4pO1xuXG4gICAgaWYgKCFpc0pTSW50ZWdlcihuKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYml0d2lzZSBvcGVyYXRvcnMgb25seSBkZWZpbmVkIGZvciBpbnRlZ2Vycy5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZSh+bik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcml0aG1ldGljU2hpZnQobjogUmFja2V0TnVtYmVyLCBtOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIG4gPSBub3JtYWxpemUobik7XG4gICAgbSA9IG5vcm1hbGl6ZShtKTtcblxuICAgIGlmICghaXNKU0ludGVnZXIobikgfHwgIWlzSlNJbnRlZ2VyKG0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJiaXR3aXNlIG9wZXJhdG9ycyBvbmx5IGRlZmluZWQgZm9yIGludGVnZXJzLlwiKTtcbiAgICB9XG5cbiAgICBuID0gdHlwZW9mIG0gPT09ICdiaWdpbnQnID8gQmlnSW50KG4pIDogbjtcbiAgICBtID0gdHlwZW9mIG4gPT09ICdiaWdpbnQnID8gQmlnSW50KG0pIDogbTtcblxuICAgIGlmIChtIDwgKHR5cGVvZiBtID09PSAnbnVtYmVyJyA/IDAgOiAwbikpIHtcbiAgICAgICAgcmV0dXJuIG4gYXMgbnVtYmVyID4+IC0obSBhcyBudW1iZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuIGFzIG51bWJlciA8PCAobSBhcyBudW1iZXIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgUmFja2V0TnVtYmVyLFxuICAgIEJveGVkTnVtYmVyLFxuICAgIHN1YnRyYWN0LFxuICAgIGFic1xufSBmcm9tICcuLi90b3dlcic7XG5pbXBvcnQge1xuICAgIG1hdGNoVHlwZXNcbn0gZnJvbSAnLi91dGlsJztcblxudHlwZSBOdW1iZXJDb21wYXJlID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBib29sZWFuO1xudHlwZSBCaWdJbnRDb21wYXJlID0gKHg6IGJpZ2ludCwgeTogYmlnaW50KSA9PiBib29sZWFuO1xudHlwZSBCb3hlZE51bWJlckNvbXBhcmUgPSAoeDogQm94ZWROdW1iZXIsIHk6IEJveGVkTnVtYmVyKSA9PiBib29sZWFuO1xuXG5jb25zdCBtYWtlTXVsdGlBcml0eSA9IGZ1bmN0aW9uIChmbkZvck51bWJlcnM6IE51bWJlckNvbXBhcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbkZvckJpZ0ludDogQmlnSW50Q29tcGFyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuRm9yQm94ZWROdW1iZXJzOiBCb3hlZE51bWJlckNvbXBhcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJnczogUmFja2V0TnVtYmVyW10pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBiZSBjYWxsZWQgd2l0aCBhdCBsZWFzdCB0d28gYXJndW1lbnRzLlwiKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgbGV0IHggPSBhcmdzW2ldO1xuICAgICAgICAgICAgbGV0IHkgPSBhcmdzW2krMV07XG5cbiAgICAgICAgICAgIFt4LCB5XSA9IG1hdGNoVHlwZXMoeCwgeSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgIWZuRm9yTnVtYmVycyh4LCB5IGFzIG51bWJlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSAnYmlnaW50JyAmJiAhZm5Gb3JCaWdJbnQoeCwgeSBhcyBiaWdpbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh4IGluc3RhbmNlb2YgQm94ZWROdW1iZXIgJiYgIWZuRm9yQm94ZWROdW1iZXJzKHggYXMgQm94ZWROdW1iZXIsIHkgYXMgQm94ZWROdW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyguLi5udW1zOiBSYWNrZXROdW1iZXJbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChudW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgZXF1YWxDb21wID0gbWFrZU11bHRpQXJpdHkoXG4gICAgICAgIGZ1bmN0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgICAgICByZXR1cm4geCA9PT0geTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oeDogYmlnaW50LCB5OiBiaWdpbnQpOiBib29sZWFuIHtcbiAgICAgICAgICAgIHJldHVybiB4ID09PSB5O1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbih4OiBCb3hlZE51bWJlciwgeTogQm94ZWROdW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgICAgIHJldHVybiB4LmVxdWFscyh5KTtcbiAgICAgICAgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIGVxdWFsQ29tcCguLi5udW1zKTtcbn1cblxuLy8gVGhpcyBpcyBwcm92aWRlZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBvcmlnaW5hbCBqcy1udW1iZXJzIGxpYnJhcnlcbmV4cG9ydCBmdW5jdGlvbiBlcXYoeDogUmFja2V0TnVtYmVyLCB5OiBSYWNrZXROdW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZXF1YWxzKHgsIHkpO1xufVxuXG4vLyBUaGlzIGlzIHByb3ZpZGVkIGZvciBjb21wYXRpYmlsaXR5IHdpdGggdGhlIG9yaWdpbmFsIGpzLW51bWJlcnMgbGlicmFyeVxuZXhwb3J0IGZ1bmN0aW9uIGFwcHJveEVxdWFscyh4OiBSYWNrZXROdW1iZXIsIHk6IFJhY2tldE51bWJlciwgZGVsdGE6IFJhY2tldE51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBsZXNzVGhhbk9yRXF1YWwoYWJzKHN1YnRyYWN0KHgsIHkpKSwgYWJzKGRlbHRhKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVhdGVyVGhhbiguLi5udW1zOiBSYWNrZXROdW1iZXJbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChudW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBndENvbXAgPSBtYWtlTXVsdGlBcml0eShcbiAgICAgICAgZnVuY3Rpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgICAgIHJldHVybiB4ID4geTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oeDogYmlnaW50LCB5OiBiaWdpbnQpOiBib29sZWFuIHtcbiAgICAgICAgICAgIHJldHVybiB4ID4geTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oeDogQm94ZWROdW1iZXIsIHk6IEJveGVkTnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgICAgICByZXR1cm4geC5ncmVhdGVyVGhhbih5KTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gZ3RDb21wKC4uLm51bXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlYXRlclRoYW5PckVxdWFsKC4uLm51bXM6IFJhY2tldE51bWJlcltdKTogYm9vbGVhbiB7XG4gICAgaWYgKG51bXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGd0ZUNvbXAgPSBtYWtlTXVsdGlBcml0eShcbiAgICAgICAgZnVuY3Rpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgICAgIHJldHVybiB4ID49IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKHg6IGJpZ2ludCwgeTogYmlnaW50KTogYm9vbGVhbiB7XG4gICAgICAgICAgICByZXR1cm4geCA+PSB5O1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbih4OiBCb3hlZE51bWJlciwgeTogQm94ZWROdW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgICAgIHJldHVybiB4LmdyZWF0ZXJUaGFuT3JFcXVhbCh5KTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gZ3RlQ29tcCguLi5udW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlc3NUaGFuKC4uLm51bXM6IFJhY2tldE51bWJlcltdKTogYm9vbGVhbiB7XG4gICAgaWYgKG51bXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGx0Q29tcCA9IG1ha2VNdWx0aUFyaXR5KFxuICAgICAgICBmdW5jdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICAgICAgcmV0dXJuIHggPCB5O1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbih4OiBiaWdpbnQsIHk6IGJpZ2ludCk6IGJvb2xlYW4ge1xuICAgICAgICAgICAgcmV0dXJuIHggPCB5O1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbih4OiBCb3hlZE51bWJlciwgeTogQm94ZWROdW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgICAgIHJldHVybiB4Lmxlc3NUaGFuKHkpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBsdENvbXAoLi4ubnVtcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXNzVGhhbk9yRXF1YWwoLi4ubnVtczogUmFja2V0TnVtYmVyW10pOiBib29sZWFuIHtcbiAgICBpZiAobnVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgbHRlQ29tcCA9IG1ha2VNdWx0aUFyaXR5KFxuICAgICAgICBmdW5jdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICAgICAgcmV0dXJuIHggPD0geTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oeDogYmlnaW50LCB5OiBiaWdpbnQpOiBib29sZWFuIHtcbiAgICAgICAgICAgIHJldHVybiB4IDw9IHk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKHg6IEJveGVkTnVtYmVyLCB5OiBCb3hlZE51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICAgICAgcmV0dXJuIHgubGVzc1RoYW5PckVxdWFsKHkpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBsdGVDb21wKC4uLm51bXMpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBSYWNrZXROdW1iZXIsXG4gICAgQm94ZWROdW1iZXIsXG4gICAgSU5FWEFDVF9aRVJPLFxuICAgIEVYQUNUX05FR19PTkUsXG4gICAgRVhBQ1RfVFdPLFxuICAgIFBJLFxuICAgIEVYQUNUX0ksXG4gICAgSU5GLFxuICAgIE5FR19JTkYsXG4gICAgaXNSZWFsLFxuICAgIGlzWmVybyxcbiAgICBpc1Bvc2l0aXZlLFxuICAgIGFkZCxcbiAgICBtdWx0aXBseSxcbiAgICBkaXZpZGUsXG4gICAgYWJzLFxuICAgIHNpbixcbiAgICBjb3Ncbn0gZnJvbSAnLi4vdG93ZXInXG5pbXBvcnQge1xuICAgIG5vcm1hbGl6ZVxufSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJlY3Rhbmd1bGFyKHJlYWw6IFJhY2tldE51bWJlciwgaW1hZzogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICByZXR1cm4gYWRkKHJlYWwsIG11bHRpcGx5KGltYWcsIEVYQUNUX0kpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQb2xhcihyOiBSYWNrZXROdW1iZXIsIHRoZXRhOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIHJldHVybiBhZGQobXVsdGlwbHkociwgY29zKHRoZXRhKSksIG11bHRpcGx5KHIsIHNpbih0aGV0YSksIEVYQUNUX0kpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hZ25pdHVkZShuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChuIGluc3RhbmNlb2YgQm94ZWROdW1iZXIpIHtcbiAgICAgICAgaWYgKGNvbnRhaW5zSW5maW5pdHkobikpIHtcbiAgICAgICAgICAgIHJldHVybiBJTkY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuLm1hZ25pdHVkZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFicyhuKTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnNJbmZpbml0eShuOiBCb3hlZE51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlYWwgPSBuLnJlYWxQYXJ0KCk7XG4gICAgY29uc3QgaW1hZyA9IG4uaW1hZ2luYXJ5UGFydCgpO1xuICAgIHJldHVybiByZWFsLmVxdWFscyhJTkYpXG4gICAgICAgIHx8IHJlYWwuZXF1YWxzKE5FR19JTkYpXG4gICAgICAgIHx8IGltYWcuZXF1YWxzKElORilcbiAgICAgICAgfHwgaW1hZy5lcXVhbHMoTkVHX0lORik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmdsZShuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChpc1plcm8obikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGl2aWRlIGJ5IHplcm9cIik7XG4gICAgfVxuXG4gICAgaWYgKGlzUmVhbChuKSkge1xuICAgICAgICByZXR1cm4gaXNQb3NpdGl2ZShuKSA/IDAgOiBQSTtcbiAgICB9XG5cbiAgICAvLyBXZSBrbm93IG4gaXMgYSBib3hlZCBudW1iZXIgaWYgaXQncyBub3QgcmVhbFxuICAgIG4gPSBuIGFzIEJveGVkTnVtYmVyO1xuICAgIGlmIChjb250YWluc0luZmluaXR5KG4pKSB7XG4gICAgICAgIGNvbnN0IHJlYWwgPSBuLnJlYWxQYXJ0KCk7XG4gICAgICAgIGNvbnN0IGltYWcgPSBuLmltYWdpbmFyeVBhcnQoKTtcblxuICAgICAgICBpZiAocmVhbC5lcXVhbHMoSU5GKSAmJiBpbWFnLmVxdWFscyhJTkYpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGl2aWRlKFBJLCA0KTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsLmVxdWFscyhJTkYpICYmIGltYWcuZXF1YWxzKE5FR19JTkYpKSB7XG4gICAgICAgICAgICByZXR1cm4gbXVsdGlwbHkoLTEsIGRpdmlkZShQSSwgNCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlYWwuZXF1YWxzKE5FR19JTkYpICYmIGltYWcuZXF1YWxzKE5FR19JTkYpKSB7XG4gICAgICAgICAgICByZXR1cm4gbXVsdGlwbHkoLTMsIGRpdmlkZShQSSwgNCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlYWwuZXF1YWxzKE5FR19JTkYpICYmIGltYWcuZXF1YWxzKElORikpIHtcbiAgICAgICAgICAgIHJldHVybiBtdWx0aXBseSgzLCBkaXZpZGUoUEksIDQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9uZSBvZiB0aGUgdHdvIGlzIG5vdCBpbmZpbml0eVxuICAgICAgICBpZiAocmVhbC5lcXVhbHMoSU5GKSkge1xuICAgICAgICAgICAgcmV0dXJuIElORVhBQ1RfWkVSTy5tdWx0aXBseShpbWFnKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWFsLmVxdWFscyhORUdfSU5GKSkge1xuICAgICAgICAgICAgcmV0dXJuIGltYWcuaXNQb3NpdGl2ZSgpID8gUEkgOiBQSS5tdWx0aXBseShFWEFDVF9ORUdfT05FKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbWFnLmVxdWFscyhJTkYpKSB7XG4gICAgICAgICAgICByZXR1cm4gUEkuZGl2aWRlKEVYQUNUX1RXTyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUEkuZGl2aWRlKEVYQUNUX1RXTykubXVsdGlwbHkoRVhBQ1RfTkVHX09ORSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9ybWFsaXplKChuIGFzIEJveGVkTnVtYmVyKS5hbmdsZSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWxQYXJ0KG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKGlzUmVhbChuKSkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKG4pO1xuICAgIH1cbiAgICByZXR1cm4gbm9ybWFsaXplKChuIGFzIEJveGVkTnVtYmVyKS5yZWFsUGFydCgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdpbmFyeVBhcnQobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoaXNSZWFsKG4pKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gbm9ybWFsaXplKChuIGFzIEJveGVkTnVtYmVyKS5pbWFnaW5hcnlQYXJ0KCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uanVnYXRlKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKGlzUmVhbChuKSkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKG4pO1xuICAgIH1cbiAgICByZXR1cm4gKG4gYXMgQm94ZWROdW1iZXIpLmNvbmp1Z2F0ZSgpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBSYWNrZXROdW1iZXIsXG4gICAgQm94ZWROdW1iZXIsXG4gICAgSlNJbnRlZ2VyLFxuICAgIEpTTnVtYmVyLFxuICAgIG1ha2VSZWN0YW5ndWxhcixcbiAgICBOQU4sXG4gICAgSU5GLFxuICAgIE5FR19JTkZcbn0gZnJvbSAnLi4vdG93ZXInO1xuaW1wb3J0IHtcbiAgICBub3JtYWxpemUsXG59IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0ZpeG51bShuOiBSYWNrZXROdW1iZXIpOiBKU0ludGVnZXIge1xuICAgIGlmIChuIGluc3RhbmNlb2YgQm94ZWROdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG4udG9GaXhudW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIG47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSlNOdW1iZXIobjogSlNOdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmICh0eXBlb2YgbiA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIobikgPyBuIDogQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IG59KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3hGaXhudW0objogSlNJbnRlZ2VyKTogQm94ZWROdW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogbiwgZGVuOiAxfSkgOiBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogbiwgZGVuOiAxbn0pO1xufVxuXG5jb25zdCBmcmFjdGlvblJlZ2V4cCA9IG5ldyBSZWdFeHAoXCJeKFsrLV0/XFxcXGQrKS8oXFxcXGQrKSRcIik7XG5jb25zdCBjb21wbGV4UmVnZXhwID0gbmV3IFJlZ0V4cChcIl4oWystXT9bXFxcXGRcXFxcdy9cXFxcLl0qKShbKy1dKShbXFxcXGRcXFxcdy9cXFxcLl0qKWkkXCIpO1xuY29uc3QgaW50ZWdlclJlZ2V4cCA9IG5ldyBSZWdFeHAoXCJeWystXT9cXFxcZCskXCIpO1xuY29uc3QgZGVjaW1hbFJlZ2V4cCA9IG5ldyBSZWdFeHAoXCJeKFsrLV0/XFxcXGQqKVxcXFwuKFxcXFxkKikkXCIpO1xuY29uc3Qgc2NpZW50aWZpY1JlZ2V4cCA9IG5ldyBSZWdFeHAoXCJeKFsrLV0/XFxcXGQqXFxcXC4/XFxcXGQqKVtFZV0oXFxcXCs/XFxcXGQrKSRcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tU3RyaW5nKHN0cjogc3RyaW5nKTogUmFja2V0TnVtYmVyIHwgZmFsc2Uge1xuICAgIHN0ciA9IHN0ci50b1N0cmluZygpOyAvLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBqcy1udW1iZXJzXG5cbiAgICBjb25zdCBtYXRjaEV4YWN0ID0gc3RyLm1hdGNoKGZyYWN0aW9uUmVnZXhwKTtcbiAgICBpZiAobWF0Y2hFeGFjdCkge1xuICAgICAgICByZXR1cm4gcGFyc2VFeGFjdChzdHIpO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoQ29tcGxleCA9IHN0ci5tYXRjaChjb21wbGV4UmVnZXhwKTtcbiAgICBpZiAobWF0Y2hDb21wbGV4KSB7XG4gICAgICAgIGNvbnN0IHJlYWxTdHIgPSBtYXRjaENvbXBsZXhbMV0gfHwgXCIwXCI7XG4gICAgICAgIGNvbnN0IGltYWdTdHIgPSBtYXRjaENvbXBsZXhbMl0gKyAobWF0Y2hDb21wbGV4WzNdIHx8IFwiMVwiKTtcblxuICAgICAgICBpZiAoY29tcGxleElzRXhhY3QobWF0Y2hDb21wbGV4KSkge1xuICAgICAgICAgICAgY29uc3QgcmVhbCA9IHBhcnNlRXhhY3QocmVhbFN0cik7XG4gICAgICAgICAgICBjb25zdCBpbWFnID0gcGFyc2VFeGFjdChpbWFnU3RyKTtcbiAgICAgICAgICAgIHJldHVybiBtYWtlUmVjdGFuZ3VsYXIocmVhbCwgaW1hZyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IE51bWJlcihyZWFsU3RyKSwgaW1hZ051bTogTnVtYmVyKGltYWdTdHIpfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0ciA9PT0gJytuYW4uMCcgfHwgc3RyID09PSAnLW5hbi4wJyB8fCBzdHIgPT09ICcrbmFuLmYnIHx8IHN0ciA9PT0gJy1uYW4uZicgKSB7XG4gICAgICAgIHJldHVybiBOQU47XG4gICAgfSBlbHNlIGlmIChzdHIgPT09ICcraW5mLjAnIHx8IHN0ciA9PT0gJytpbmYuZicpIHtcbiAgICAgICAgcmV0dXJuIElORjtcbiAgICB9IGVsc2UgaWYgKHN0ciA9PT0gJy1pbmYuMCcgfHwgc3RyID09PSAnLWluZi5mJykge1xuICAgICAgICByZXR1cm4gTkVHX0lORjtcbiAgICB9IGVsc2UgaWYgKHN0ciA9PT0gJy0wLjAnKSB7XG4gICAgICAgIHJldHVybiBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogLTAuMH0pO1xuICAgIH1cblxuICAgIGlmIChzdHIubWF0Y2goZGVjaW1hbFJlZ2V4cCkgfHwgc3RyLm1hdGNoKHNjaWVudGlmaWNSZWdleHApKSB7XG4gICAgICAgIHJldHVybiBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogTnVtYmVyKHN0cil9KTtcbiAgICB9XG5cbiAgICBpZiAoc3RyLm1hdGNoKGludGVnZXJSZWdleHApKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludGVnZXIoc3RyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXhJc0V4YWN0KG1hdGNoZWQ6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVhbCA9IG1hdGNoZWRbMV0ubWF0Y2goaW50ZWdlclJlZ2V4cCkgIT09IG51bGwgfHwgbWF0Y2hlZFsxXS5tYXRjaChmcmFjdGlvblJlZ2V4cCkgIT09IG51bGw7XG4gICAgY29uc3QgaW1hZyA9IG1hdGNoZWRbM10ubWF0Y2goaW50ZWdlclJlZ2V4cCkgIT09IG51bGwgfHwgbWF0Y2hlZFszXS5tYXRjaChmcmFjdGlvblJlZ2V4cCkgIT09IG51bGw7XG4gICAgcmV0dXJuIHJlYWwgJiYgaW1hZztcbn1cblxuZnVuY3Rpb24gcGFyc2VFeGFjdChzdHI6IHN0cmluZyk6IFJhY2tldE51bWJlciB7XG4gICAgY29uc3QgbWF0Y2hJbnRlZ2VyID0gc3RyLm1hdGNoKGludGVnZXJSZWdleHApO1xuICAgIGlmIChtYXRjaEludGVnZXIpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50ZWdlcihzdHIpO1xuICAgIH1cbiAgICBjb25zdCBbbnVtLCBkZW5dID0gcGFyc2VGcmFjdGlvbihzdHIpIGFzIFtudW1iZXIsIG51bWJlcl07XG4gICAgcmV0dXJuIEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiBudW0sIGRlbjogZGVufSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW50ZWdlcihzdHI6IHN0cmluZyk6IEpTSW50ZWdlciB7XG4gICAgY29uc3QgbiA9IE51bWJlcihzdHIpO1xuICAgIGlmIChOdW1iZXIuaXNTYWZlSW50ZWdlcihuKSkge1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIobikpIHtcbiAgICAgICAgcmV0dXJuIEJpZ0ludChzdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtzdHJ9IGlzIG5vdCBhbiBpbnRlZ2VyYCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUZyYWN0aW9uKHN0cjogc3RyaW5nKTogSlNJbnRlZ2VyW10ge1xuICAgIGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKGZyYWN0aW9uUmVnZXhwKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbGV0IG51bSA9IHBhcnNlSW50ZWdlcihtYXRjaFsxXSk7XG4gICAgICAgIGxldCBkZW4gPSBwYXJzZUludGVnZXIobWF0Y2hbMl0pO1xuXG4gICAgICAgIGlmICh0eXBlb2YgbnVtICE9PSB0eXBlb2YgZGVuKSB7XG4gICAgICAgICAgICBudW0gPSBCaWdJbnQobnVtKTtcbiAgICAgICAgICAgIGRlbiA9IEJpZ0ludChkZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtudW0sIGRlbl07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgRnJhY3Rpb24gbm93IGZvdW5kIGluICR7c3RyfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU51bWJlcihudW06IEpTTnVtYmVyLCBkZW4/OiBKU0ludGVnZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIHJldHVybiBub3JtYWxpemUoQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IG51bSBhcyBudW1iZXIsIGRlbjogZGVuIGFzIG51bWJlcn0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb21wbGV4TnVtYmVyKG51bTogSlNOdW1iZXIsIGltYWdOdW06IEpTTnVtYmVyLCBkZW4/OiBKU0ludGVnZXIsIGltYWdEZW4/OiBKU0ludGVnZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIHJldHVybiBub3JtYWxpemUoQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IG51bSBhcyBudW1iZXIsIGRlbjogZGVuIGFzIG51bWJlciwgaW1hZ051bTogaW1hZ051bSBhcyBudW1iZXIsIGltYWdEZW46IGltYWdEZW4gYXMgbnVtYmVyfSkpO1xufVxuXG4vLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBqcy1udW1iZXJzLlxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGbG9hdChuOiBudW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIHJldHVybiBub3JtYWxpemUoQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IG59KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbWFrZVJhdGlvbmFsKG46IG51bWJlciwgZDogbnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICByZXR1cm4gbm9ybWFsaXplKEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiBuLCBkZW46IGR9KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbXBsZXgocmVhbDogUmFja2V0TnVtYmVyLCBpbWFnOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIHJldHVybiAgbWFrZVJlY3Rhbmd1bGFyKHJlYWwsIGltYWcpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBSYWNrZXROdW1iZXIsXG4gICAgQm94ZWROdW1iZXIsXG59IGZyb20gJy4uL3Rvd2VyJztcbmltcG9ydCB7XG4gICAgbm9ybWFsaXplXG59IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmV4YWN0VG9FeGFjdChuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChuIGluc3RhbmNlb2YgQm94ZWROdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuLnRvRXhhY3QoKSk7XG4gICAgfVxuICAgIHJldHVybiBuO1xufVxuZXhwb3J0IGNvbnN0IHRvRXhhY3QgPSBpbmV4YWN0VG9FeGFjdDsgLy8gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdFRvSW5leGFjdChuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChuIGluc3RhbmNlb2YgQm94ZWROdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG4udG9JbmV4YWN0KCk7XG4gICAgfVxuICAgIHJldHVybiBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogTnVtYmVyKG4pfSk7XG59XG5leHBvcnQgY29uc3QgdG9JbmV4YWN0ID0gZXhhY3RUb0luZXhhY3Q7IC8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuIiwiaW1wb3J0IHsgaXNKU0ludGVnZXIgfSBmcm9tIFwiLi4vbnVtYmVycy91dGlsXCI7XG5pbXBvcnQge1xuICAgIFJhY2tldE51bWJlcixcbiAgICBCb3hlZE51bWJlclxufSBmcm9tIFwiLi4vdG93ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHg6IGFueSk6IHggaXMgUmFja2V0TnVtYmVyIHtcbiAgICBjb25zdCBpc051bWJlciA9IHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNJbnRlZ2VyKHgpO1xuICAgIGNvbnN0IGlzQmlnSW50ID0gdHlwZW9mIHggPT09ICdiaWdpbnQnO1xuICAgIGNvbnN0IGlzQm94ZWQgPSB4IGluc3RhbmNlb2YgQm94ZWROdW1iZXI7XG4gICAgcmV0dXJuIGlzTnVtYmVyIHx8IGlzQmlnSW50IHx8IGlzQm94ZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBpc0NvbXBsZXggPSBpc051bWJlcjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhbCh4OiBhbnkpOiB4IGlzIFJhY2tldE51bWJlciB7XG4gICAgY29uc3QgaXNOdW1iZXIgPSB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzSW50ZWdlcih4KTtcbiAgICBjb25zdCBpc0JpZ0ludCA9IHR5cGVvZiB4ID09PSAnYmlnaW50JztcbiAgICBjb25zdCBpc0JveGVkUmVhbCA9IHggaW5zdGFuY2VvZiBCb3hlZE51bWJlciAmJiB4LmlzUmVhbCgpO1xuICAgIHJldHVybiBpc051bWJlciB8fCBpc0JpZ0ludCB8fCBpc0JveGVkUmVhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmF0aW9uYWwoeDogYW55KTogeCBpcyBSYWNrZXROdW1iZXIge1xuICAgIGNvbnN0IGlzTnVtYmVyID0gdHlwZW9mIHggPT09ICdudW1iZXInICYmIE51bWJlci5pc0ludGVnZXIoeCk7XG4gICAgY29uc3QgaXNCaWdJbnQgPSB0eXBlb2YgeCA9PT0gJ2JpZ2ludCc7XG4gICAgY29uc3QgaXNCb3hlZFJhdGlvbmFsID0geCBpbnN0YW5jZW9mIEJveGVkTnVtYmVyICYmIHguaXNSYXRpb25hbCgpO1xuICAgIHJldHVybiBpc051bWJlciB8fCBpc0JpZ0ludCB8fCBpc0JveGVkUmF0aW9uYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIoeDogYW55KTogeCBpcyBSYWNrZXROdW1iZXIge1xuICAgIGNvbnN0IGlzTnVtYmVyID0gdHlwZW9mIHggPT09ICdudW1iZXInICYmIE51bWJlci5pc0ludGVnZXIoeCk7XG4gICAgY29uc3QgaXNCaWdJbnQgPSB0eXBlb2YgeCA9PT0gJ2JpZ2ludCc7XG4gICAgY29uc3QgaXNCb3hlZEludGVnZXIgPSB4IGluc3RhbmNlb2YgQm94ZWROdW1iZXIgJiYgeC5pc0ludGVnZXIoKTtcbiAgICByZXR1cm4gaXNOdW1iZXIgfHwgaXNCaWdJbnQgfHwgaXNCb3hlZEludGVnZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V4YWN0SW50ZWdlcih4OiBhbnkpOiB4IGlzIFJhY2tldE51bWJlciB7XG4gICAgY29uc3QgaXNOdW1iZXIgPSB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzSW50ZWdlcih4KTtcbiAgICBjb25zdCBpc0JpZ0ludCA9IHR5cGVvZiB4ID09PSAnYmlnaW50JztcbiAgICBjb25zdCBpc0JveGVkRXhhY3RJbnRlZ2VyID0geCBpbnN0YW5jZW9mIEJveGVkTnVtYmVyICYmIHguaXNJbnRlZ2VyKCkgJiYgeC5pc0V4YWN0KCk7XG4gICAgcmV0dXJuIGlzTnVtYmVyIHx8IGlzQmlnSW50IHx8IGlzQm94ZWRFeGFjdEludGVnZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V4YWN0Tm9uTmVnYXRpdmVJbnRlZ2VyKHg6IGFueSk6IHggaXMgUmFja2V0TnVtYmVyIHtcbiAgICBjb25zdCBmb3JOdW1iZXIgPSB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzSW50ZWdlcih4KSAmJiB4ID49IDA7XG4gICAgY29uc3QgZm9yQmlnSW50ID0gdHlwZW9mIHggPT09ICdiaWdpbnQnICYmIHggPj0gMG47XG4gICAgY29uc3QgZm9yQm94ZWQgPSB4IGluc3RhbmNlb2YgQm94ZWROdW1iZXIgJiYgeC5pc0ludGVnZXIoKSAmJiB4LmlzRXhhY3QoKSAmJiAheC5pc05lZ2F0aXZlKCk7XG4gICAgcmV0dXJuIGZvck51bWJlciB8fCBmb3JCaWdJbnQgfHwgZm9yQm94ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V4YWN0UG9zaXRpdmVJbnRlZ2VyKHg6IGFueSk6IHggaXMgUmFja2V0TnVtYmVyIHtcbiAgICBjb25zdCBmb3JOdW1iZXIgPSB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgTnVtYmVyLmlzSW50ZWdlcih4KSAmJiB4ID4gMDtcbiAgICBjb25zdCBmb3JCaWdJbnQgPSB0eXBlb2YgeCA9PT0gJ2JpZ2ludCcgJiYgeCA+IDBuO1xuICAgIGNvbnN0IGZvckJveGVkID0geCBpbnN0YW5jZW9mIEJveGVkTnVtYmVyICYmIHguaXNJbnRlZ2VyKCkgJiYgeC5pc0V4YWN0KCkgJiYgeC5pc1Bvc2l0aXZlKCk7XG4gICAgcmV0dXJuIGZvck51bWJlciB8fCBmb3JCaWdJbnQgfHwgZm9yQm94ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luZXhhY3RSZWFsKHg6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB4IGluc3RhbmNlb2YgQm94ZWROdW1iZXIgJiYgeC5pc1JlYWwoKSAmJiB4LmlzSW5leGFjdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGaXhudW0oeDogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgZm9yTnVtYmVyID0gdHlwZW9mIHggPT09ICdudW1iZXInICYmIE51bWJlci5pc0ludGVnZXIoeCk7XG4gICAgY29uc3QgZm9yQmlnSW50ID0gdHlwZW9mIHggPT09ICdiaWdpbnQnO1xuICAgIHJldHVybiBmb3JOdW1iZXIgfHwgZm9yQmlnSW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGbG9udW0oeDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHggaW5zdGFuY2VvZiBCb3hlZE51bWJlciAmJiB4LmlzUmVhbCgpICYmIHguaXNJbmV4YWN0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1plcm8objogUmFja2V0TnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZm9yTnVtYmVyID0gdHlwZW9mIG4gPT09ICdudW1iZXInICYmIG4gPT09IDA7XG4gICAgY29uc3QgZm9yQmlnSW50ID0gdHlwZW9mIG4gPT09ICdiaWdpbnQnICYmIG4gPT09IDBuO1xuICAgIGNvbnN0IGZvckJveGVkID0gbiBpbnN0YW5jZW9mIEJveGVkTnVtYmVyICYmIG4uaXNaZXJvKCk7XG4gICAgcmV0dXJuIGZvck51bWJlciB8fCBmb3JCaWdJbnQgfHwgZm9yQm94ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Bvc2l0aXZlKG46IFJhY2tldE51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGZvck51bWJlciA9IHR5cGVvZiBuID09PSAnbnVtYmVyJyAmJiBuID4gMDtcbiAgICBjb25zdCBmb3JCaWdJbnQgPSB0eXBlb2YgbiA9PT0gJ2JpZ2ludCcgJiYgbiA+IDBuO1xuICAgIGNvbnN0IGZvckJveGVkID0gbiBpbnN0YW5jZW9mIEJveGVkTnVtYmVyICYmIG4uaXNQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBmb3JOdW1iZXIgfHwgZm9yQmlnSW50IHx8IGZvckJveGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOZWdhdGl2ZShuOiBSYWNrZXROdW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBmb3JOdW1iZXIgPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgJiYgbiA8IDA7XG4gICAgY29uc3QgZm9yQmlnSW50ID0gdHlwZW9mIG4gPT09ICdiaWdpbnQnICYmIG4gPCAwbjtcbiAgICBjb25zdCBmb3JCb3hlZCA9IG4gaW5zdGFuY2VvZiBCb3hlZE51bWJlciAmJiBuLmlzTmVnYXRpdmUoKTtcbiAgICByZXR1cm4gZm9yTnVtYmVyIHx8IGZvckJpZ0ludCB8fCBmb3JCb3hlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXZlbihuOiBSYWNrZXROdW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBmb3JOdW1iZXIgPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgJiYgbiAlIDIgPT09IDA7XG4gICAgY29uc3QgZm9yQmlnSW50ID0gdHlwZW9mIG4gPT09ICdiaWdpbnQnICYmIG4gJSAybiA9PT0gMG47XG4gICAgY29uc3QgZm9yQm94ZWQgPSBuIGluc3RhbmNlb2YgQm94ZWROdW1iZXIgJiYgbi5pc0V2ZW4oKTtcbiAgICByZXR1cm4gZm9yTnVtYmVyIHx8IGZvckJpZ0ludCB8fCBmb3JCb3hlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2RkKG46IFJhY2tldE51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNFdmVuKG4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFeGFjdChuOiBSYWNrZXROdW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBmb3JOdW1iZXIgPSB0eXBlb2YgbiA9PT0gJ251bWJlcic7XG4gICAgY29uc3QgZm9yQmlnSW50ID0gdHlwZW9mIG4gPT09ICdiaWdpbnQnO1xuICAgIGNvbnN0IGZvckJveGVkID0gbiBpbnN0YW5jZW9mIEJveGVkTnVtYmVyICYmIG4uaXNFeGFjdCgpO1xuICAgIHJldHVybiBmb3JOdW1iZXIgfHwgZm9yQmlnSW50IHx8IGZvckJveGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbmV4YWN0KG46IFJhY2tldE51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBuIGluc3RhbmNlb2YgQm94ZWROdW1iZXIgJiYgbi5pc0luZXhhY3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmFja2V0TnVtYmVyKG46IFJhY2tldE51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBuIGluc3RhbmNlb2YgQm94ZWROdW1iZXIgfHwgaXNKU0ludGVnZXIobik7XG59XG5leHBvcnQgY29uc3QgaXNTY2hlbWVOdW1iZXIgPSBpc1JhY2tldE51bWJlcjsgLy8gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Zpbml0ZShuOiBSYWNrZXROdW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAobiBpbnN0YW5jZW9mIEJveGVkTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuLmlzRmluaXRlKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05hTihuOiBSYWNrZXROdW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAobiBpbnN0YW5jZW9mIEJveGVkTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuLmlzTmFOKCk7XG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIuaXNOYU4obik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05lZ2F0aXZlWmVybyhuOiBSYWNrZXROdW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAobiBpbnN0YW5jZW9mIEJveGVkTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuLmlzTmVnYXRpdmVaZXJvKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7XG4gICAgUmFja2V0TnVtYmVyLFxuICAgIEJveGVkTnVtYmVyLFxuICAgIGlzRXhhY3QsXG4gICAgRVhBQ1RfT05FLFxuICAgIElORVhBQ1RfT05FLFxuICAgIFBJLFxuICAgIElORixcbiAgICBORUdfSU5GLFxuICAgIGFkZCxcbiAgICBzdWJ0cmFjdCxcbiAgICBtdWx0aXBseSxcbiAgICBkaXZpZGUsXG4gICAgZXhwLFxuICAgIGlzUG9zaXRpdmUsXG4gICAgaXNOZWdhdGl2ZSxcbiAgICBpc1plcm8sXG4gICAgZXF1YWxzLFxufSBmcm9tIFwiLi4vdG93ZXJcIjtcblxuZnVuY3Rpb24gaXNPbmUobjogUmFja2V0TnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKG4gaW5zdGFuY2VvZiBCb3hlZE51bWJlcikge1xuICAgICAgICByZXR1cm4gbi5lcXVhbHMoRVhBQ1RfT05FKTtcbiAgICB9XG4gICAgcmV0dXJuIE51bWJlcihuKSA9PT0gMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbihuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChpc0V4YWN0KG4pICYmIGlzWmVybyhuKSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAobiBpbnN0YW5jZW9mIEJveGVkTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuLnNpbigpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogTWF0aC5zaW4obil9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IE1hdGguc2luKE51bWJlcihuKSl9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3MobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoaXNFeGFjdChuKSAmJiBpc1plcm8obikpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgaWYgKG4gaW5zdGFuY2VvZiBCb3hlZE51bWJlcikge1xuICAgICAgICByZXR1cm4gbi5jb3MoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IE1hdGguY29zKG4pfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IE1hdGguY29zKE51bWJlcihuKSl9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YW4objogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoaXNFeGFjdChuKSAmJiBpc1plcm8obikpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgaWYgKG4gaW5zdGFuY2VvZiBCb3hlZE51bWJlcikge1xuICAgICAgICByZXR1cm4gbi50YW4oKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IE1hdGgudGFuKG4pfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IE1hdGgudGFuKE51bWJlcihuKSl9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2luKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKGlzRXhhY3QobikgJiYgaXNaZXJvKG4pKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGlmIChuIGluc3RhbmNlb2YgQm94ZWROdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG4uYXNpbigpO1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKC0xIDw9IG4gJiYgbiA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IE1hdGguYXNpbihuKX0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiBuLCBkZW46IDF9KS5hc2luKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoLTFuIDw9IG4gJiYgbiA8PSAxbikge1xuICAgICAgICAgICAgcmV0dXJuIEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiBNYXRoLmFzaW4oTnVtYmVyKG4pKX0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiBuLCBkZW46IDFufSkuYXNpbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjb3MobjogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoaXNFeGFjdChuKSAmJiBpc09uZShuKSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAobiBpbnN0YW5jZW9mIEJveGVkTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuLmFjb3MoKTtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmICgtMSA8PSBuICYmIG4gPD0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiBNYXRoLmFjb3Mobil9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogbiwgZGVuOiAxfSkuYWNvcygpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKC0xbiA8PSBuICYmIG4gPD0gMW4pIHtcbiAgICAgICAgICAgIHJldHVybiBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogTWF0aC5hY29zKE51bWJlcihuKSl9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogbiwgZGVuOiAxbn0pLmFjb3MoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdGFuMiA9IGF0YW47IC8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIGpzLW51bWJlcnNcblxuZXhwb3J0IGZ1bmN0aW9uIGF0YW4oeTogUmFja2V0TnVtYmVyLCB4PzogUmFja2V0TnVtYmVyKTogUmFja2V0TnVtYmVyIHtcbiAgICBpZiAoeCA9PT0gdW5kZWZpbmVkICYmIGlzRXhhY3QoeSkgJiYgaXNaZXJvKHkpKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGF0YW4xKHkpO1xuICAgIH1cblxuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0F0YW4yXG4gICAgY29uc3QgYXJnID0gZGl2aWRlKHksIHgpO1xuXG4gICAgaWYgKGFyZyBpbnN0YW5jZW9mIEJveGVkTnVtYmVyICYmIGFyZy5pc05hTigpKSB7XG4gICAgICAgIGlmIChlcXVhbHMoeSwgSU5GKSAmJiBlcXVhbHMoeCwgSU5GKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpdmlkZShQSSwgNCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXF1YWxzKHksIElORikgJiYgZXF1YWxzKHgsIE5FR19JTkYpKSB7XG4gICAgICAgICAgICByZXR1cm4gbXVsdGlwbHkoMywgZGl2aWRlKFBJLCA0KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXF1YWxzKHksIE5FR19JTkYpICYmIGVxdWFscyh4LCBORUdfSU5GKSkge1xuICAgICAgICAgICAgcmV0dXJuIG11bHRpcGx5KC0zLCBkaXZpZGUoUEksIDQpKTtcbiAgICAgICAgfSBlbHNlIGlmIChlcXVhbHMoeSwgTkVHX0lORikgJiYgZXF1YWxzKHgsIElORikpIHtcbiAgICAgICAgICAgIHJldHVybiBtdWx0aXBseSgtMSwgZGl2aWRlKFBJLCA0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNQb3NpdGl2ZSh4KSkge1xuICAgICAgICByZXR1cm4gYXRhbjEoYXJnKTtcbiAgICB9IGVsc2UgaWYgKGlzTmVnYXRpdmUoeCkgJiYgKGlzUG9zaXRpdmUoeSkgfHwgaXNaZXJvKHkpKSkge1xuICAgICAgICByZXR1cm4gYWRkKGF0YW4xKGFyZyksIFBJKTtcbiAgICB9IGVsc2UgaWYgKGlzTmVnYXRpdmUoeCkgJiYgaXNOZWdhdGl2ZSh5KSkge1xuICAgICAgICByZXR1cm4gc3VidHJhY3QoYXRhbjEoYXJnKSwgUEkpO1xuICAgIH0gZWxzZSBpZiAoaXNaZXJvKHgpICYmIGlzUG9zaXRpdmUoeSkpIHtcbiAgICAgICAgcmV0dXJuIGRpdmlkZShQSSwgMik7XG4gICAgfSBlbHNlIGlmIChpc1plcm8oeCkgJiYgaXNOZWdhdGl2ZSh5KSkge1xuICAgICAgICByZXR1cm4gc3VidHJhY3QoMCwgZGl2aWRlKFBJLCAyKSk7XG4gICAgfSBlbHNlICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImF0YW4gbm90IGRlZmluZWQgZm9yIGNvb3JkaW5hdGVzICgwLCAwKVwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGF0YW4xKG46IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlciB7XG4gICAgaWYgKG4gaW5zdGFuY2VvZiBCb3hlZE51bWJlcikge1xuICAgICAgICByZXR1cm4gbi5hdGFuKCk7XG4gICAgfSBlbHNlIGlmIChuID09PSBJbmZpbml0eSkge1xuICAgICAgICByZXR1cm4gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IDg4NDI3OTcxOTAwMzU1NSAvIDU2Mjk0OTk1MzQyMTMxMn0pO1xuICAgIH0gZWxzZSBpZiAobiA9PT0gLUluZmluaXR5KSB7XG4gICAgICAgIHJldHVybiBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogLTg4NDI3OTcxOTAwMzU1NSAvIDU2Mjk0OTk1MzQyMTMxMn0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogTWF0aC5hdGFuKG4pfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IE1hdGguYXRhbihOdW1iZXIobikpfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luaChuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIHJldHVybiBkaXZpZGUoc3VidHJhY3QoZXhwKG4pLCBleHAobXVsdGlwbHkobiwgLTEpKSksIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29zaChuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIGlmIChpc1plcm8obikpIHtcbiAgICAgICAgcmV0dXJuIElORVhBQ1RfT05FOyAvLyBSYWNrZXQgcmV0dXJucyBpbmV4YWN0IDEgaGVyZS5cbiAgICB9XG4gICAgcmV0dXJuIGRpdmlkZShhZGQoZXhwKG4pLCBleHAobXVsdGlwbHkobiwgLTEpKSksIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFuaChuOiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIHJldHVybiBkaXZpZGUoc3VidHJhY3QoZXhwKG11bHRpcGx5KDIsIG4pKSwgMSksIGFkZChleHAobXVsdGlwbHkoMiwgbikpLCAxKSlcbn1cbiIsImltcG9ydCB7XG4gICAgUmFja2V0TnVtYmVyLFxuICAgIEJveGVkTnVtYmVyXG59IGZyb20gJy4uL3Rvd2VyJztcbmltcG9ydCB7XG4gICAgaXNTYWZlSW50ZWdlclxufSBmcm9tICcuLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZSh4OiBSYWNrZXROdW1iZXIpOiBSYWNrZXROdW1iZXIge1xuICAgIC8vIERvbid0IGtlZXAgQm94ZWROdW1iZXJzIGlmIHVubmVjZXNzYXJ5XG4gICAgaWYgKHggaW5zdGFuY2VvZiBCb3hlZE51bWJlclxuICAgICAgICAmJiB4LmlzUmVhbCgpXG4gICAgICAgICYmIHguaXNJbnRlZ2VyKClcbiAgICAgICAgJiYgeC5pc0V4YWN0KCkpIHtcblxuICAgICAgICB4ID0geC50b0ZpeG51bSgpO1xuICAgIH1cblxuICAgIC8vIERvbid0IGtlZXAgYmlnaW50cyBpZiB1bm5lY2Vzc2FyeVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ2JpZ2ludCcgJiYgaXNTYWZlSW50ZWdlcih4KSkge1xuICAgICAgICB4ID0gTnVtYmVyKHgpO1xuICAgIH1cblxuICAgIHJldHVybiB4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hUeXBlcyh4OiBSYWNrZXROdW1iZXIsIHk6IFJhY2tldE51bWJlcik6IFJhY2tldE51bWJlcltdIHtcbiAgICAvLyBDaGVjayBpZiB0aGV5J3JlIGFscmVhZHkgdGhlIHNhbWVcbiAgICBpZiAodHlwZW9mIHggPT09IHR5cGVvZiB5KSB7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgLy8gTWFrZSB0eXBlcyBtYXRjaFxuICAgIGlmICh4IGluc3RhbmNlb2YgQm94ZWROdW1iZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB5ID09PSAnYmlnaW50Jykge1xuICAgICAgICAgICAgcmV0dXJuIFt4LCBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogeSwgZGVuOiAxbn0pXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFt4LCBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogeSBhcyBudW1iZXIsIGRlbjogMX0pXTtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgaWYgKHkgaW5zdGFuY2VvZiBCb3hlZE51bWJlcikge1xuICAgICAgICAgICByZXR1cm4gW0JveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiB4LCBkZW46IDFufSksIHldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFt4LCBCaWdJbnQoeSldO1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoeSBpbnN0YW5jZW9mIEJveGVkTnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gW0JveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiB4LCBkZW46IDF9KSwgeV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW0JpZ0ludCh4KSwgeV07XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgQ2Fubm90IG1hdGNoIHZhbHVlcyAke3h9ICR7eX1gKTtcbiAgICB9XG59XG5cbmV4cG9ydCAqIGZyb20gJy4uL3V0aWwnO1xuIiwiaW1wb3J0IHtcbiAgICBKU0ludGVnZXIsXG4gICAgSlNOdW1iZXIsXG4gICAgTGV2ZWwsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgICBJbmV4YWN0VmFsdWUsXG4gICAgU21hbGxFeGFjdFZhbHVlLFxuICAgIEJpZ0V4YWN0VmFsdWUsXG4gICAgVmFsdWUsXG4gICAgWkVST19WQUwsXG4gICAgVFdPX1ZBTCxcbiAgICBORUdfT05FX1ZBTCxcbn0gZnJvbSAnLi9WYWx1ZSc7XG5pbXBvcnQge1xuICAgIGlzSlNJbnRlZ2VyLFxuICAgIG1hdGNoRXhhY3RuZXNzXG59IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBCb3hlZE51bWJlciB7XG4gICAgcHVibGljIHJlYWRvbmx5IGxldmVsOiBMZXZlbDtcblxuICAgIHB1YmxpYyByZWFkb25seSByZWFsOiBWYWx1ZTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW1hZzogVmFsdWU7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWFsOiBWYWx1ZSwgaW1hZz86IFZhbHVlKSB7XG4gICAgICAgIHRoaXMucmVhbCA9IHJlYWw7XG5cbiAgICAgICAgaWYgKGltYWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5pbWFnID0gWkVST19WQUw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltYWcgPSBpbWFnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxldmVsO1xuICAgICAgICBpZiAodGhpcy5pc0ludGVnZXIoKSkge1xuICAgICAgICAgICAgbGV2ZWwgPSBMZXZlbC5JTlRFR0VSO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNSYXRpb25hbCgpKSB7XG4gICAgICAgICAgICBsZXZlbCA9IExldmVsLlJBVElPTkFMO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIGxldmVsID0gTGV2ZWwuUkVBTDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldmVsID0gTGV2ZWwuQ09NUExFWDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG5cbiAgICAgICAgLy8gTWFrZSBpdCBpbW11dGFibGVcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG1ha2VJbnN0YW5jZSh7bnVtfToge251bTogbnVtYmVyfSk6IEJveGVkTnVtYmVyO1xuXG4gICAgcHVibGljIHN0YXRpYyBtYWtlSW5zdGFuY2Uoe251bSwgaW1hZ051bX06IHtudW06IGJpZ2ludCwgaW1hZ051bTogYmlnaW50fSk6IEJveGVkTnVtYmVyO1xuICAgIHB1YmxpYyBzdGF0aWMgbWFrZUluc3RhbmNlKHtudW0sIGRlbn06IHtudW06IGJpZ2ludCwgZGVuOiBiaWdpbnR9KTogQm94ZWROdW1iZXI7XG4gICAgcHVibGljIHN0YXRpYyBtYWtlSW5zdGFuY2Uoe251bSwgZGVuLCBpbWFnTnVtLCBpbWFnRGVufTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bnVtOiBiaWdpbnQsIGRlbjogYmlnaW50LCBpbWFnTnVtOiBiaWdpbnQsIGltYWdEZW46IGJpZ2ludH0pOiBCb3hlZE51bWJlcjtcblxuICAgIHB1YmxpYyBzdGF0aWMgbWFrZUluc3RhbmNlKHtudW0sIGltYWdOdW19OiB7bnVtOiBudW1iZXIsIGltYWdOdW06IG51bWJlcn0pOiBCb3hlZE51bWJlcjtcbiAgICBwdWJsaWMgc3RhdGljIG1ha2VJbnN0YW5jZSh7bnVtLCBkZW59OiB7bnVtOiBudW1iZXIsIGRlbjogbnVtYmVyfSk6IEJveGVkTnVtYmVyO1xuICAgIHB1YmxpYyBzdGF0aWMgbWFrZUluc3RhbmNlKHtudW0sIGRlbiwgaW1hZ051bSwgIGltYWdEZW59OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtudW06IG51bWJlciwgZGVuOiBudW1iZXIsIGltYWdOdW06IG51bWJlciwgaW1hZ0RlbjogbnVtYmVyfSk6IEJveGVkTnVtYmVyO1xuXG4gICAgcHVibGljIHN0YXRpYyBtYWtlSW5zdGFuY2Uoe251bSwgZGVuLCBpbWFnTnVtLCBpbWFnRGVufTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bnVtOiBKU051bWJlciwgZGVuPzogSlNJbnRlZ2VyLCBpbWFnTnVtPzogSlNOdW1iZXIsIGltYWdEZW4/OiBKU0ludGVnZXJ9KTogQm94ZWROdW1iZXIge1xuICAgICAgICBjb25zdCBpc1JlYWwgPSBpbWFnTnVtID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChpc1JlYWwgJiYgaW1hZ0RlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3Qgc3BlY2lmeSBib3RoIGEgbnVtZXJhdG9yIGFuZCBkZW5vbWluYXRvci5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZW5vbWluYXRvcnNFeGlzdCA9IGRlbiAhPT0gdW5kZWZpbmVkICYmIGltYWdEZW4gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFpc1JlYWwgJiYgIWRlbm9taW5hdG9yc0V4aXN0ICYmIChkZW4gIT09IHVuZGVmaW5lZCB8fCBpbWFnRGVuICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFsIGFuZCBpbWFnaW5hcnkgcGFydCBtdXN0IGJlIHRoZSBzYW1lIGV4YWN0bmVzcy5cIilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc0V4YWN0O1xuICAgICAgICBpZiAoaXNSZWFsKSB7XG4gICAgICAgICAgICBpc0V4YWN0ID0gZGVuICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAmJiBpc0pTSW50ZWdlcihudW0pXG4gICAgICAgICAgICAgICAgJiYgaXNKU0ludGVnZXIoZGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzRXhhY3QgPSBkZW4gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICYmIGlzSlNJbnRlZ2VyKG51bSlcbiAgICAgICAgICAgICAgICAmJiBpc0pTSW50ZWdlcihkZW4pXG4gICAgICAgICAgICAgICAgJiYgaW1hZ0RlbiAhPSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAmJiBpc0pTSW50ZWdlcihpbWFnTnVtKVxuICAgICAgICAgICAgICAgICYmIGlzSlNJbnRlZ2VyKGltYWdEZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0V4YWN0ICYmIHR5cGVvZiBudW0gPT09ICdiaWdpbnQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYmlnaW50cyBjYW4gb25seSBiZSB1c2VkIHdpdGggZXhhY3QgbnVtYmVyc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0eXBlc0FyZVNhbWU7XG4gICAgICAgIGlmIChpc1JlYWwgJiYgaXNFeGFjdCkge1xuICAgICAgICAgICAgdHlwZXNBcmVTYW1lID0gdHlwZW9mIG51bSA9PT0gdHlwZW9mIGRlbjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1JlYWwgJiYgIWlzRXhhY3QpIHtcbiAgICAgICAgICAgIHR5cGVzQXJlU2FtZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzUmVhbCAmJiBpc0V4YWN0KSB7XG4gICAgICAgICAgICB0eXBlc0FyZVNhbWUgPSB0eXBlb2YgbnVtID09PSB0eXBlb2YgaW1hZ051bVxuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBkZW4gPT09IHR5cGVvZiBpbWFnRGVuXG4gICAgICAgICAgICAgICAgJiYgdHlwZW9mIG51bSA9PT0gdHlwZW9mIGRlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR5cGVzQXJlU2FtZSA9IHR5cGVvZiBudW0gPT09IHR5cGVvZiBpbWFnTnVtO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdHlwZXNBcmVTYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQWxsIG1ha2VJbnN0YW5jZSBhcmd1bWVudHMgbXVzdCBiZSB0aGUgc2FtZSB0eXBlLlwiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNCaWcgPSB0eXBlb2YgbnVtID09PSAnYmlnaW50JztcblxuICAgICAgICBsZXQgcmVhbFZhbCwgaW1hZ1ZhbDtcbiAgICAgICAgaWYgKGlzUmVhbCAmJiBpc0V4YWN0ICYmIGlzQmlnKSB7XG4gICAgICAgICAgICByZWFsVmFsID0gbmV3IEJpZ0V4YWN0VmFsdWUobnVtIGFzIGJpZ2ludCwgZGVuIGFzIGJpZ2ludCk7XG4gICAgICAgICAgICBpbWFnVmFsID0gWkVST19WQUw7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNSZWFsICYmIGlzRXhhY3QgJiYgIWlzQmlnKSB7XG4gICAgICAgICAgICByZWFsVmFsID0gbmV3IFNtYWxsRXhhY3RWYWx1ZShudW0gYXMgbnVtYmVyLCBkZW4gYXMgbnVtYmVyKTtcbiAgICAgICAgICAgIGltYWdWYWwgPSBaRVJPX1ZBTDtcbiAgICAgICAgfSBlbHNlIGlmIChpc1JlYWwgJiYgIWlzRXhhY3QpIHtcbiAgICAgICAgICAgIHJlYWxWYWwgPSBuZXcgSW5leGFjdFZhbHVlKG51bSBhcyBudW1iZXIpO1xuICAgICAgICAgICAgaW1hZ1ZhbCA9IFpFUk9fVkFMO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc1JlYWwgJiYgaXNFeGFjdCAmJiBpc0JpZykge1xuICAgICAgICAgICAgcmVhbFZhbCA9IG5ldyBCaWdFeGFjdFZhbHVlKG51bSBhcyBiaWdpbnQsIGRlbiBhcyBiaWdpbnQpO1xuICAgICAgICAgICAgaW1hZ1ZhbCA9IG5ldyBCaWdFeGFjdFZhbHVlKGltYWdOdW0gYXMgYmlnaW50LCBpbWFnRGVuIGFzIGJpZ2ludCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzUmVhbCAmJiBpc0V4YWN0ICYmICFpc0JpZykge1xuICAgICAgICAgICAgcmVhbFZhbCA9IG5ldyBTbWFsbEV4YWN0VmFsdWUobnVtIGFzIG51bWJlciwgZGVuIGFzIG51bWJlcik7XG4gICAgICAgICAgICBpbWFnVmFsID0gbmV3IFNtYWxsRXhhY3RWYWx1ZShpbWFnTnVtIGFzIG51bWJlciwgaW1hZ0RlbiBhcyBudW1iZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc1JlYWwgJiYgIWlzRXhhY3QgJiYgIWlzQmlnKSB7XG4gICAgICAgICAgICByZWFsVmFsID0gbmV3IEluZXhhY3RWYWx1ZShudW0gYXMgbnVtYmVyKTtcbiAgICAgICAgICAgIGltYWdWYWwgPSBuZXcgSW5leGFjdFZhbHVlKGltYWdOdW0gYXMgbnVtYmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNob3VsZCBuZXZlciBnZXQgaGVyZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBjcmVhdGluZyBCb3hlZE51bWJlcmApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcihyZWFsVmFsLCBpbWFnVmFsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOYU4oKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiK25hbi4wXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXNGaW5pdGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNQb3NpdGl2ZSgpID8gXCIraW5mLjBcIiA6IFwiLWluZi4wXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhbC50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhbC50b1N0cmluZygpICsgdGhpcy5pbWFnLnRvU2lnbmVkU3RyaW5nKCkgKyBcImlcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludDogc3RyaW5nKTogbnVtYmVyIHwgYmlnaW50IHwgc3RyaW5nIHtcbiAgICAgICAgaWYgKGhpbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyLk5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByaW1pdGl2ZSA9IHRoaXMucmVhbFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQpO1xuXG4gICAgICAgIGlmIChoaW50ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgcHJpbWl0aXZlID09PSAnYmlnaW50Jykge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihwcmltaXRpdmUpO1xuICAgICAgICB9IGVsc2UgaWYgKGhpbnQgPT09ICdkZWZhdWx0JyAmJiB0eXBlb2YgcHJpbWl0aXZlID09PSAnYmlnaW50Jykge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihwcmltaXRpdmUpO1xuICAgICAgICB9IGVsc2UgaWYgKGhpbnQgPT09ICdiaWdpbnQnICYmIHR5cGVvZiBwcmltaXRpdmUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gQmlnSW50KHByaW1pdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJpbWl0aXZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0ludGVnZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUmF0aW9uYWwoKSAmJiB0aGlzLnJlYWwuaXNJbnRlZ2VyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBpc1JhdGlvbmFsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1JlYWwoKSAmJiB0aGlzLmlzRmluaXRlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBpc0Zpbml0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5pc0Zpbml0ZSgpICYmIHRoaXMuaW1hZy5pc0Zpbml0ZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgaXNSZWFsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnLmlzWmVybygpICYmIHRoaXMuaW1hZy5pc0V4YWN0KCk7XG4gICAgfVxuICAgIHB1YmxpYyBpc0NvbXBsZXgoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgaXNFeGFjdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5pc0V4YWN0KCkgJiYgdGhpcy5pbWFnLmlzRXhhY3QoKTtcbiAgICB9XG4gICAgcHVibGljIGlzSW5leGFjdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzRXhhY3QoKTtcbiAgICB9XG4gICAgcHVibGljIGlzWmVybygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5pc1plcm8oKSAmJiB0aGlzLmltYWcuaXNaZXJvKCk7XG4gICAgfVxuICAgIHB1YmxpYyBpc05lZ2F0aXZlWmVybygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNSZWFsKCkgJiYgdGhpcy5yZWFsLmlzTmVnYXRpdmVaZXJvKCk7XG4gICAgfVxuICAgIHB1YmxpYyBpc1Bvc2l0aXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJOb3QgZGVmaW5lZCBmb3IgY29tcGxleCBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmlzUG9zaXRpdmUoKTtcbiAgICB9XG4gICAgcHVibGljIGlzTmVnYXRpdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vdCBkZWZpbmVkIGZvciBjb21wbGV4IG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWwuaXNOZWdhdGl2ZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgaXNFdmVuKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNJbnRlZ2VyKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPbmx5IGRlZmluZWQgZm9yIEludGVnZXJzLlwiKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWwuaXNFdmVuKCk7XG4gICAgfVxuICAgIHB1YmxpYyBpc05hTigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5pc05hTigpIHx8IHRoaXMuaW1hZy5pc05hTigpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b0luZXhhY3QoKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc0luZXhhY3QoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm94ZWROdW1iZXIodGhpcy5yZWFsLnRvSW5leGFjdCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEJveGVkTnVtYmVyKHRoaXMucmVhbC50b0luZXhhY3QoKSwgdGhpcy5pbWFnLnRvSW5leGFjdCgpKTtcbiAgICB9XG4gICAgcHVibGljIHRvRXhhY3QoKTogQm94ZWROdW1iZXIge1xuICAgICAgICByZXR1cm4gbmV3IEJveGVkTnVtYmVyKHRoaXMucmVhbC50b0V4YWN0KCksIHRoaXMuaW1hZy50b0V4YWN0KCkpO1xuICAgIH1cbiAgICBwdWJsaWMgdG9GaXhudW0oKTogSlNJbnRlZ2VyIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm90IGRlZmluZWQgZm9yIGNvbXBsZXggbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbC50b0ZpeG51bSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBncmVhdGVyVGhhbihvdGhlcjogQm94ZWROdW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhbCgpIHx8ICFvdGhlci5pc1JlYWwoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR3JlYXRlciB0aGFuIG5vdCBkZWZpbmVkIGZvciBjb21wbGV4IG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWwuZ3JlYXRlclRoYW4ob3RoZXIucmVhbCk7XG4gICAgfVxuICAgIHB1YmxpYyBncmVhdGVyVGhhbk9yRXF1YWwob3RoZXI6IEJveGVkTnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWwoKSB8fCAhb3RoZXIuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdyZWF0ZXIgdGhhbiBvciBlcXVhbCBub3QgZGVmaW5lZCBmb3IgY29tcGxleCBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmdyZWF0ZXJUaGFuT3JFcXVhbChvdGhlci5yZWFsKTtcbiAgICB9XG4gICAgcHVibGljIGxlc3NUaGFuKG90aGVyOiBCb3hlZE51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFsKCkgfHwgIW90aGVyLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMZXNzIHRoYW4gbm90IGRlZmluZWQgZm9yIGNvbXBsZXggbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhbC5sZXNzVGhhbihvdGhlci5yZWFsKTtcbiAgICB9XG4gICAgcHVibGljIGxlc3NUaGFuT3JFcXVhbChvdGhlcjogQm94ZWROdW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhbCgpIHx8ICFvdGhlci5pc1JlYWwoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTGVzcyB0aGFuIG9yIGVxdWFsIG5vdCBkZWZpbmVkIGZvciBjb21wbGV4IG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWwubGVzc1RoYW5PckVxdWFsKG90aGVyLnJlYWwpO1xuICAgIH1cbiAgICBwdWJsaWMgZXF1YWxzKG90aGVyOiBCb3hlZE51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFsLmVxdWFscyhvdGhlci5yZWFsKSAmJiB0aGlzLmltYWcuZXF1YWxzKG90aGVyLmltYWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGQob3RoZXI6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc1JlYWwoKSAmJiBvdGhlci5pc1JlYWwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcih0aGlzLnJlYWwuYWRkKG90aGVyLnJlYWwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWFsID0gdGhpcy5yZWFsLmFkZChvdGhlci5yZWFsKTtcbiAgICAgICAgbGV0IGltYWcgPSB0aGlzLmltYWcuYWRkKG90aGVyLmltYWcpO1xuXG4gICAgICAgIFtyZWFsLCBpbWFnXSA9IG1hdGNoRXhhY3RuZXNzKHJlYWwsIGltYWcpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQm94ZWROdW1iZXIocmVhbCwgaW1hZyk7XG4gICAgfVxuICAgIHB1YmxpYyBzdWJ0cmFjdChvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVhbCgpICYmIG90aGVyLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJveGVkTnVtYmVyKHRoaXMucmVhbC5zdWJ0cmFjdChvdGhlci5yZWFsKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVhbCA9IHRoaXMucmVhbC5zdWJ0cmFjdChvdGhlci5yZWFsKTtcbiAgICAgICAgbGV0IGltYWcgPSB0aGlzLmltYWcuc3VidHJhY3Qob3RoZXIuaW1hZyk7XG5cbiAgICAgICAgW3JlYWwsIGltYWddID0gbWF0Y2hFeGFjdG5lc3MocmVhbCwgaW1hZyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcihyZWFsLCBpbWFnKTtcbiAgICB9XG4gICAgcHVibGljIG11bHRpcGx5KG90aGVyOiBCb3hlZE51bWJlcik6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgbGV0IHJlYWwgPSB0aGlzLnJlYWwubXVsdGlwbHkob3RoZXIucmVhbCkuc3VidHJhY3QodGhpcy5pbWFnLm11bHRpcGx5KG90aGVyLmltYWcpKTtcbiAgICAgICAgY29uc3QgaW1hZyA9IHRoaXMucmVhbC5tdWx0aXBseShvdGhlci5pbWFnKS5hZGQodGhpcy5pbWFnLm11bHRpcGx5KG90aGVyLnJlYWwpKTtcblxuICAgICAgICByZWFsID0gIWltYWcuaXNFeGFjdCgpID8gcmVhbC50b0luZXhhY3QoKSA6IHJlYWw7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcihyZWFsLCBpbWFnKTtcbiAgICB9XG4gICAgcHVibGljIGRpdmlkZShvdGhlcjogQm94ZWROdW1iZXIpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIC8vIElmIHRoZSBvdGhlciB2YWx1ZSBpcyByZWFsLCBqdXN0IGRvIHByaW1pdGl2ZSBkaXZpc2lvblxuICAgICAgICBpZiAob3RoZXIuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWwgPSB0aGlzLnJlYWwuZGl2aWRlKG90aGVyLnJlYWwpO1xuICAgICAgICAgICAgY29uc3QgaW1hZyA9IHRoaXMuaW1hZy5kaXZpZGUob3RoZXIucmVhbCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJveGVkTnVtYmVyKHJlYWwsIGltYWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGEsIGIsIGMsIGQsIHIsIHgsIHk7XG4gICAgICAgIGlmICh0aGlzLmlzSW5leGFjdCgpIHx8IG90aGVyLmlzSW5leGFjdCgpKSB7XG4gICAgICAgICAgICAvLyBodHRwOi8vcG9ydGFsLmFjbS5vcmcvY2l0YXRpb24uY2ZtP2lkPTEwMzk4MTRcbiAgICAgICAgICAgIC8vIFdlIGN1cnJlbnRseSB1c2UgU21pdGgncyBtZXRob2QsIHRob3VnaCB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIHByb2JhYmx5IHN3aXRjaCBvdmVyIHRvIFByaWVzdCdzIG1ldGhvZC5cbiAgICAgICAgICAgIGEgPSB0aGlzLnJlYWw7XG4gICAgICAgICAgICBiID0gdGhpcy5pbWFnO1xuICAgICAgICAgICAgYyA9IG90aGVyLnJlYWw7XG4gICAgICAgICAgICBkID0gb3RoZXIuaW1hZztcbiAgICAgICAgICAgIGlmIChkLmFicygpLmxlc3NUaGFuT3JFcXVhbChjLmFicygpKSkge1xuICAgICAgICAgICAgICAgIHIgPSBkLmRpdmlkZShjKTtcbiAgICAgICAgICAgICAgICB4ID0gYS5hZGQoYi5tdWx0aXBseShyKSkuZGl2aWRlKGMuYWRkKGQubXVsdGlwbHkocikpKTtcbiAgICAgICAgICAgICAgICB5ID0gYi5zdWJ0cmFjdChhLm11bHRpcGx5KHIpKS5kaXZpZGUoYy5hZGQoZC5tdWx0aXBseShyKSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByID0gYy5kaXZpZGUoZCk7XG4gICAgICAgICAgICAgICAgeCA9IGEubXVsdGlwbHkocikuYWRkKGIpLmRpdmlkZShjLm11bHRpcGx5KHIpLmFkZChkKSk7XG4gICAgICAgICAgICAgICAgeSA9IGIubXVsdGlwbHkocikuc3VidHJhY3QoYSkuZGl2aWRlKGMubXVsdGlwbHkocikuYWRkKGQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgQm94ZWROdW1iZXIoeCwgeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjb24gPSBvdGhlci5jb25qdWdhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHVwID0gdGhpcy5tdWx0aXBseShjb24pO1xuXG4gICAgICAgICAgICAvLyBEb3duIGlzIGd1YXJhbnRlZWQgdG8gYmUgcmVhbCBieSB0aGlzIHBvaW50LlxuICAgICAgICAgICAgY29uc3QgZG93biA9IG90aGVyLm11bHRpcGx5KGNvbikucmVhbFBhcnQoKTtcblxuICAgICAgICAgICAgY29uc3QgcmVhbCA9IHVwLnJlYWxQYXJ0KCkuZGl2aWRlKGRvd24pLnJlYWw7XG4gICAgICAgICAgICBjb25zdCBpbWFnID0gdXAuaW1hZ2luYXJ5UGFydCgpLmRpdmlkZShkb3duKS5yZWFsO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcihyZWFsLCBpbWFnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBudW1lcmF0b3IoKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk51bWVyYXRvciBub3QgZGVmaW5lZCBmb3IgY29tcGxleCBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEJveGVkTnVtYmVyKHRoaXMucmVhbC5udW1lcmF0b3IoKSk7XG4gICAgfVxuICAgIHB1YmxpYyBkZW5vbWluYXRvcigpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGVub21pbmF0b3Igbm90IGRlZmluZWQgZm9yIGNvbXBsZXggbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcih0aGlzLnJlYWwuZGVub21pbmF0b3IoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGludGVnZXJTcXJ0KCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlZ2VyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm94ZWROdW1iZXIodGhpcy5yZWFsLmludGVnZXJTcXJ0KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW50ZWdlclNxcnQgb25seSBkZWZpbmVkIGZvciBpbnRlZ2Vycy5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNxcnQoKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNOZWdhdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZyA9IHRoaXMucmVhbC5tdWx0aXBseShORUdfT05FX1ZBTCkuc3FydCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWwgPSB0aGlzLmlzRXhhY3QoKSA/IFpFUk9fVkFMIDogbmV3IEluZXhhY3RWYWx1ZSgwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJveGVkTnVtYmVyKHJlYWwsIGltYWcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJveGVkTnVtYmVyKHRoaXMucmVhbC5zcXJ0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TcXVhcmVfcm9vdCNTcXVhcmVfcm9vdHNfb2ZfbmVnYXRpdmVfYW5kX2NvbXBsZXhfbnVtYmVyc1xuICAgICAgICBjb25zdCBtYWcgPSB0aGlzLm1hZ25pdHVkZSgpLnJlYWw7XG4gICAgICAgIGNvbnN0IHJfcGx1c194ID0gbWFnLmFkZCh0aGlzLnJlYWwpO1xuXG4gICAgICAgIGNvbnN0IHJlYWwgPSByX3BsdXNfeC5kaXZpZGUobmV3IFNtYWxsRXhhY3RWYWx1ZSgyKSkuc3FydCgpO1xuICAgICAgICBjb25zdCBpbWFnID0gdGhpcy5pbWFnLmRpdmlkZShyX3BsdXNfeC5tdWx0aXBseShUV09fVkFMKS5zcXJ0KCkpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQm94ZWROdW1iZXIocmVhbCwgaW1hZyk7XG4gICAgfVxuICAgIHB1YmxpYyBhYnMoKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImFicyBpcyBub3QgZGVmaW5lZCBmb3IgY29tcGxleCBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEJveGVkTnVtYmVyKHRoaXMucmVhbC5hYnMoKSk7XG4gICAgfVxuICAgIHB1YmxpYyBmbG9vcigpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZmxvb3IgaXMgbm90IGRlZmluZWQgZm9yIGNvbXBsZXggbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcih0aGlzLnJlYWwuZmxvb3IoKSk7XG4gICAgfVxuICAgIHB1YmxpYyBjZWlsaW5nKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjZWlsaW5nIGlzIG5vdCBkZWZpbmVkIGZvciBjb21wbGV4IG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQm94ZWROdW1iZXIodGhpcy5yZWFsLmNlaWxpbmcoKSk7XG4gICAgfVxuICAgIHB1YmxpYyByb3VuZCgpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicm91bmQgaXMgbm90IGRlZmluZWQgZm9yIGNvbXBsZXggbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcih0aGlzLnJlYWwucm91bmQoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbmp1Z2F0ZSgpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIHJldHVybiBuZXcgQm94ZWROdW1iZXIodGhpcy5yZWFsLCBuZXcgU21hbGxFeGFjdFZhbHVlKDApLnN1YnRyYWN0KHRoaXMuaW1hZykpO1xuICAgIH1cbiAgICBwdWJsaWMgbWFnbml0dWRlKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgY29uc3QgcmVhbFNxciA9IHRoaXMucmVhbC5tdWx0aXBseSh0aGlzLnJlYWwpO1xuICAgICAgICBjb25zdCBpbWFnU3FyID0gdGhpcy5pbWFnLm11bHRpcGx5KHRoaXMuaW1hZyk7XG4gICAgICAgIGNvbnN0IHN1bSA9IHJlYWxTcXIuYWRkKGltYWdTcXIpO1xuICAgICAgICByZXR1cm4gbmV3IEJveGVkTnVtYmVyKHN1bS5zcXJ0KCkpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVhbFBhcnQoKTogQm94ZWROdW1iZXIge1xuICAgICAgICByZXR1cm4gbmV3IEJveGVkTnVtYmVyKHRoaXMucmVhbCk7XG4gICAgfVxuICAgIHB1YmxpYyBpbWFnaW5hcnlQYXJ0KCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcih0aGlzLmltYWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2coKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc1JlYWwoKSAmJiB0aGlzLmlzUG9zaXRpdmUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcih0aGlzLnJlYWwubG9nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFnID0gdGhpcy5tYWduaXR1ZGUoKS5yZWFsO1xuICAgICAgICBjb25zdCBtYWdfbG9nID0gbmV3IEJveGVkTnVtYmVyKG1hZy5sb2coKSk7XG5cbiAgICAgICAgY29uc3QgdGhldGEgPSB0aGlzLmFuZ2xlKCk7XG5cbiAgICAgICAgcmV0dXJuIG1hZ19sb2cuYWRkKHRoZXRhLm11bHRpcGx5KEkpKTtcbiAgICB9XG4gICAgcHVibGljIGV4cHQocG93ZXI6IEJveGVkTnVtYmVyKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAocG93ZXIuaXNFeGFjdCgpICYmIHBvd2VyLmlzSW50ZWdlcigpICYmIHBvd2VyLmdyZWF0ZXJUaGFuT3JFcXVhbChaRVJPKSkge1xuICAgICAgICAgICAgLy8gSEFDSzogayBjYW4gYmUgYSBiaWdpbnQgb3IgYSBudW1iZXIgc28gd2UgbmVlZCBzb21lIGdyb3NzIGNhc3RpbmcuXG4gICAgICAgICAgICBsZXQgbjogQm94ZWROdW1iZXIgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IGs6IG51bWJlciA9IHBvd2VyLnRvRml4bnVtKCkgYXMgbnVtYmVyO1xuXG4gICAgICAgICAgICBjb25zdCBpc051bWJlciA9IHR5cGVvZiBrID09PSAnbnVtYmVyJztcbiAgICAgICAgICAgIGNvbnN0IHplcm8gPSAoaXNOdW1iZXIgPyAwIDogMG4pIGFzIG51bWJlcjtcbiAgICAgICAgICAgIGNvbnN0IG9uZSA9IChpc051bWJlciA/IDEgOiAxbikgYXMgbnVtYmVyO1xuICAgICAgICAgICAgY29uc3QgdHdvID0gKGlzTnVtYmVyID8gMiA6IDJuKSBhcyBudW1iZXI7XG5cbiAgICAgICAgICAgIGxldCBhY2M6IEJveGVkTnVtYmVyID0gT05FO1xuXG4gICAgICAgICAgICB3aGlsZSAoayAhPT0gemVybykge1xuICAgICAgICAgICAgICAgIGlmIChrICUgdHdvID09PSB6ZXJvKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBuLm11bHRpcGx5KG4pO1xuICAgICAgICAgICAgICAgICAgICBrID0gayAvIHR3bztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhY2MgPSBhY2MubXVsdGlwbHkobik7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBrIC0gb25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleHBvID0gcG93ZXIubXVsdGlwbHkodGhpcy5sb2coKSk7XG4gICAgICAgIHJldHVybiBleHBvLmV4cCgpO1xuICAgIH1cbiAgICBwdWJsaWMgZXhwKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm94ZWROdW1iZXIodGhpcy5yZWFsLmV4cCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHIgPSBuZXcgQm94ZWROdW1iZXIodGhpcy5yZWFsLmV4cCgpKTtcbiAgICAgICAgY29uc3QgY29zX2EgPSBuZXcgQm94ZWROdW1iZXIodGhpcy5pbWFnLmNvcygpKTtcbiAgICAgICAgY29uc3Qgc2luX2EgPSBuZXcgQm94ZWROdW1iZXIodGhpcy5pbWFnLnNpbigpKTtcblxuICAgICAgICByZXR1cm4gci5tdWx0aXBseShjb3NfYS5hZGQoc2luX2EubXVsdGlwbHkoSSkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYW5nbGUoKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcih0aGlzLnJlYWwuYW5nbGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVhbC5pc1plcm8oKSkge1xuICAgICAgICAgICAgY29uc3QgaGFsZlBJID0gUEkuZGl2aWRlKFRXTyk7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnLmlzUG9zaXRpdmUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYWxmUEk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYWxmUEkubXVsdGlwbHkoTkVHX09ORSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0bXAgPSB0aGlzLmltYWdpbmFyeVBhcnQoKS5hYnMoKS5kaXZpZGUodGhpcy5yZWFsUGFydCgpLmFicygpKS5hdGFuKCk7XG4gICAgICAgIGlmICh0aGlzLnJlYWwuaXNQb3NpdGl2ZSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnLmlzUG9zaXRpdmUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0bXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0bXAubXVsdGlwbHkoTkVHX09ORSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnLmlzUG9zaXRpdmUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQSS5zdWJ0cmFjdCh0bXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG1wLnN1YnRyYWN0KFBJKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgdGFuKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm94ZWROdW1iZXIodGhpcy5yZWFsLnRhbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zaW4oKS5kaXZpZGUodGhpcy5jb3MoKSk7XG4gICAgfVxuICAgIHB1YmxpYyBjb3MoKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcih0aGlzLnJlYWwuY29zKCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl6ID0gdGhpcy5tdWx0aXBseShJKTtcbiAgICAgICAgY29uc3QgaXpfbmVnYXRlID0gaXoubXVsdGlwbHkoTkVHX09ORSk7XG4gICAgICAgIHJldHVybiBpei5leHAoKS5hZGQoaXpfbmVnYXRlLmV4cCgpKS5kaXZpZGUoVFdPKTtcbiAgICB9XG4gICAgcHVibGljIHNpbigpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVhbCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJveGVkTnVtYmVyKHRoaXMucmVhbC5zaW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXogPSB0aGlzLm11bHRpcGx5KEkpO1xuICAgICAgICBjb25zdCBpel9uZWdhdGUgPSBpei5tdWx0aXBseShORUdfT05FKTtcbiAgICAgICAgY29uc3QgejIgPSBuZXcgQm94ZWROdW1iZXIoWkVST19WQUwsIFRXT19WQUwpO1xuICAgICAgICBjb25zdCBleHBfbmVnYXRlID0gaXouZXhwKCkuc3VidHJhY3QoaXpfbmVnYXRlLmV4cCgpKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZXhwX25lZ2F0ZS5kaXZpZGUoejIpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgYXRhbigpOiBCb3hlZE51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzWmVybygpKSB7XG4gICAgICAgICAgICByZXR1cm4gWkVSTztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1JlYWwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcih0aGlzLnJlYWwuYXRhbigpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lcXVhbHMoSSkgfHwgdGhpcy5lcXVhbHMoTkVHX0kpKSB7XG4gICAgICAgICAgICByZXR1cm4gTkVHX0lORjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHJlc3VsdCA9IFpFUk8uc3VidHJhY3QodGhpcyk7XG4gICAgICAgIHJlc3VsdCA9IEkuYWRkKHJlc3VsdCk7XG4gICAgICAgIHJlc3VsdCA9IEkuYWRkKHRoaXMpLmRpdmlkZShyZXN1bHQpO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQubG9nKCk7XG4gICAgICAgIHJlc3VsdCA9IEhBTEYubXVsdGlwbHkocmVzdWx0KTtcbiAgICAgICAgcmVzdWx0ID0gSS5tdWx0aXBseShyZXN1bHQpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHB1YmxpYyBhY29zKCk6IEJveGVkTnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWFsKCkgJiYgdGhpcy5ncmVhdGVyVGhhbk9yRXF1YWwoTkVHX09ORSkgJiYgdGhpcy5sZXNzVGhhbk9yRXF1YWwoT05FKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3hlZE51bWJlcih0aGlzLnJlYWwuYWNvcygpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwaV9oYWxmID0gUEkuZGl2aWRlKFRXTyk7XG4gICAgICAgIGNvbnN0IGl6ID0gdGhpcy5tdWx0aXBseShJKTtcbiAgICAgICAgY29uc3Qgcm9vdCA9IE9ORS5zdWJ0cmFjdCh0aGlzLm11bHRpcGx5KHRoaXMpKS5zcXJ0KCk7XG4gICAgICAgIGNvbnN0IGwgPSBpei5hZGQocm9vdCkubG9nKCkubXVsdGlwbHkoSSk7XG4gICAgICAgIHJldHVybiBwaV9oYWxmLmFkZChsKTtcbiAgICB9XG4gICAgcHVibGljIGFzaW4oKTogQm94ZWROdW1iZXIge1xuICAgICAgICBpZiAodGhpcy5pc1JlYWwoKSAmJiB0aGlzLmdyZWF0ZXJUaGFuT3JFcXVhbChORUdfT05FKSAmJiB0aGlzLmxlc3NUaGFuT3JFcXVhbChPTkUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJveGVkTnVtYmVyKHRoaXMucmVhbC5hc2luKCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9uZU5lZ2F0ZVRoaXNTcSA9IE9ORS5zdWJ0cmFjdCh0aGlzLm11bHRpcGx5KHRoaXMpKTtcbiAgICAgICAgY29uc3Qgc3FydE9uZU5lZ2F0ZVRoaXNTcSA9IG9uZU5lZ2F0ZVRoaXNTcS5zcXJ0KCk7XG4gICAgICAgIHJldHVybiBUV08ubXVsdGlwbHkodGhpcy5kaXZpZGUoT05FLmFkZChzcXJ0T25lTmVnYXRlVGhpc1NxKSkuYXRhbigpKTtcbiAgICB9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIENvbnN0YW50cyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3QgRVhBQ1RfWkVSTyA9IEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiAwLCBkZW46IDF9KTtcbmV4cG9ydCBjb25zdCBFWEFDVF9IQUxGID0gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IDEsIGRlbjogMn0pO1xuZXhwb3J0IGNvbnN0IEVYQUNUX09ORSA9IEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiAxLCBkZW46IDF9KTtcbmV4cG9ydCBjb25zdCBFWEFDVF9UV08gPSBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogMiwgZGVuOiAxfSk7XG5leHBvcnQgY29uc3QgRVhBQ1RfTkVHX09ORSA9IEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiAtMSwgZGVuOiAxfSk7XG5leHBvcnQgY29uc3QgRVhBQ1RfSSA9IEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiAwLCBkZW46IDEsIGltYWdOdW06IDEsIGltYWdEZW46IDF9KTtcbmV4cG9ydCBjb25zdCBFWEFDVF9ORUdfSSA9IEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiAwLCBkZW46IDEsIGltYWdOdW06IC0xLCBpbWFnRGVuOiAxfSk7XG5cbmV4cG9ydCBjb25zdCBJTkVYQUNUX1pFUk8gPSBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogMH0pO1xuZXhwb3J0IGNvbnN0IElORVhBQ1RfTkVHX1pFUk8gPSBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogLTB9KTtcbmV4cG9ydCBjb25zdCBJTkVYQUNUX0hBTEYgPSBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogMC41fSk7XG5leHBvcnQgY29uc3QgSU5FWEFDVF9PTkUgPSBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogMX0pO1xuZXhwb3J0IGNvbnN0IElORVhBQ1RfVFdPID0gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IDJ9KTtcbmV4cG9ydCBjb25zdCBJTkVYQUNUX05FR19PTkUgPSBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogLTF9KTtcbmV4cG9ydCBjb25zdCBJTkVYQUNUX0kgPSBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogMCwgaW1hZ051bTogMX0pO1xuZXhwb3J0IGNvbnN0IElORVhBQ1RfTkVHX0kgPSBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogMCwgaW1hZ051bTogLTF9KTtcblxuZXhwb3J0IGNvbnN0IFpFUk8gPSBFWEFDVF9aRVJPO1xuZXhwb3J0IGNvbnN0IE9ORSA9IEVYQUNUX09ORTtcbmV4cG9ydCBjb25zdCBIQUxGID0gRVhBQ1RfSEFMRjtcbmV4cG9ydCBjb25zdCBUV08gPSBFWEFDVF9UV087XG5leHBvcnQgY29uc3QgTkVHX09ORSA9IEVYQUNUX05FR19PTkU7XG5leHBvcnQgY29uc3QgSSA9IEVYQUNUX0lcbmV4cG9ydCBjb25zdCBORUdfSSA9IEVYQUNUX05FR19JO1xuXG5leHBvcnQgY29uc3QgUEkgPSBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogTWF0aC5QSX0pO1xuXG5leHBvcnQgY29uc3QgSU5GID0gQm94ZWROdW1iZXIubWFrZUluc3RhbmNlKHtudW06IE51bWJlci5QT1NJVElWRV9JTkZJTklUWX0pO1xuZXhwb3J0IGNvbnN0IE5FR19JTkYgPSBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZfSk7XG5cbmV4cG9ydCBjb25zdCBOQU4gPSBCb3hlZE51bWJlci5tYWtlSW5zdGFuY2Uoe251bTogTnVtYmVyLk5hTn0pO1xuXG4vLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBqcy1udW1iZXJzXG5leHBvcnQgY29uc3QgemVybyA9IEVYQUNUX1pFUk87XG5leHBvcnQgY29uc3Qgb25lID0gRVhBQ1RfT05FO1xuZXhwb3J0IGNvbnN0IHR3byA9IEVYQUNUX1RXTztcbmV4cG9ydCBjb25zdCBuZWdhdGl2ZV9vbmUgPSBFWEFDVF9ORUdfT05FO1xuZXhwb3J0IGNvbnN0IGkgPSBFWEFDVF9JXG5leHBvcnQgY29uc3QgbmVnYXRpdmVfaSA9IEVYQUNUX05FR19JO1xuZXhwb3J0IGNvbnN0IHBpID0gUEk7XG5leHBvcnQgY29uc3QgZSA9IEJveGVkTnVtYmVyLm1ha2VJbnN0YW5jZSh7bnVtOiBNYXRoLkV9KTtcbmV4cG9ydCBjb25zdCBuYW4gPSBOQU47XG5leHBvcnQgY29uc3QgbmVnYXRpdmVfaW5mID0gTkVHX0lORjtcbmV4cG9ydCBjb25zdCBpbmYgPSBJTkY7XG5leHBvcnQgY29uc3QgbmVnYXRpdmVfemVybyA9IElORVhBQ1RfTkVHX1pFUk87XG4iLCJpbXBvcnQge1xuICAgIEpTSW50ZWdlcixcbn0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gICAgYmlnRXhwdCxcbiAgICBpc1NhZmVJbnRlZ2VyXG59IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCB0eXBlIFZhbHVlID0gRXhhY3RWYWx1ZSB8IEluZXhhY3RWYWx1ZTtcblxuYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RWYWx1ZSB7XG4gICAgYWJzdHJhY3QgaXNGaW5pdGUoKTogYm9vbGVhbjtcbiAgICBhYnN0cmFjdCBpc0luZXhhY3QoKTogYm9vbGVhbjtcbiAgICBhYnN0cmFjdCBpc0V4YWN0KCk6IGJvb2xlYW47XG4gICAgYWJzdHJhY3QgaXNJbnRlZ2VyKCk6IGJvb2xlYW47XG5cbiAgICBhYnN0cmFjdCB0b0luZXhhY3QoKTogSW5leGFjdFZhbHVlO1xuICAgIGFic3RyYWN0IHRvRXhhY3QoKTogRXhhY3RWYWx1ZTtcbiAgICBhYnN0cmFjdCB0b0ZpeG51bSgpOiBKU0ludGVnZXI7XG5cbiAgICBhYnN0cmFjdCB0b1N0cmluZygpOiBzdHJpbmc7XG4gICAgYWJzdHJhY3QgdG9TaWduZWRTdHJpbmcoKTogc3RyaW5nO1xuICAgIGFic3RyYWN0IFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQ6IHN0cmluZyk6IG51bWJlciB8IGJpZ2ludCB8IHN0cmluZztcblxuICAgIGFic3RyYWN0IGdyZWF0ZXJUaGFuKG90aGVyOiBWYWx1ZSk6IGJvb2xlYW47XG4gICAgYWJzdHJhY3QgZ3JlYXRlclRoYW5PckVxdWFsKG90aGVyOiBWYWx1ZSk6IGJvb2xlYW47XG4gICAgYWJzdHJhY3QgbGVzc1RoYW4ob3RoZXI6IFZhbHVlKTogYm9vbGVhbjtcbiAgICBhYnN0cmFjdCBsZXNzVGhhbk9yRXF1YWwob3RoZXI6IFZhbHVlKTogYm9vbGVhbjtcbiAgICBhYnN0cmFjdCBlcXVhbHMob3RoZXI6IFZhbHVlKTogYm9vbGVhbjtcblxuICAgIGFic3RyYWN0IGlzWmVybygpOiBib29sZWFuO1xuICAgIGFic3RyYWN0IGlzTmVnYXRpdmVaZXJvKCk6IGJvb2xlYW47XG4gICAgYWJzdHJhY3QgaXNQb3NpdGl2ZSgpOiBib29sZWFuO1xuICAgIGFic3RyYWN0IGlzTmVnYXRpdmUoKTogYm9vbGVhbjtcbiAgICBhYnN0cmFjdCBpc0V2ZW4oKTogYm9vbGVhbjtcbiAgICBhYnN0cmFjdCBpc05hTigpOiBib29sZWFuO1xuXG4gICAgYWJzdHJhY3QgYWRkKG90aGVyOiBWYWx1ZSk6IFZhbHVlO1xuICAgIGFic3RyYWN0IHN1YnRyYWN0KG90aGVyOiBWYWx1ZSk6IFZhbHVlO1xuICAgIGFic3RyYWN0IG11bHRpcGx5KG90aGVyOiBWYWx1ZSk6IFZhbHVlO1xuICAgIGFic3RyYWN0IGRpdmlkZShvdGhlcjogVmFsdWUpOiBWYWx1ZTtcblxuICAgIGFic3RyYWN0IG51bWVyYXRvcigpOiBWYWx1ZTtcbiAgICBhYnN0cmFjdCBkZW5vbWluYXRvcigpOiBWYWx1ZTtcblxuICAgIGFic3RyYWN0IGludGVnZXJTcXJ0KCk6IFZhbHVlO1xuICAgIGFic3RyYWN0IHNxcnQoKTogVmFsdWU7XG4gICAgYWJzdHJhY3QgYWJzKCk6IFZhbHVlO1xuICAgIGFic3RyYWN0IGZsb29yKCk6IFZhbHVlO1xuICAgIGFic3RyYWN0IGNlaWxpbmcoKTogVmFsdWU7XG4gICAgYWJzdHJhY3Qgcm91bmQoKTogVmFsdWU7XG5cbiAgICBhYnN0cmFjdCBsb2coKTogVmFsdWU7XG4gICAgYWJzdHJhY3QgZXhwdChwb3dlcjogVmFsdWUpOiBWYWx1ZTtcbiAgICBhYnN0cmFjdCBleHAoKTogVmFsdWU7XG5cbiAgICBhYnN0cmFjdCBhbmdsZSgpOiBWYWx1ZTtcbiAgICBhYnN0cmFjdCB0YW4oKTogVmFsdWU7XG4gICAgYWJzdHJhY3QgY29zKCk6IFZhbHVlO1xuICAgIGFic3RyYWN0IHNpbigpOiBWYWx1ZTtcbiAgICBhYnN0cmFjdCBhdGFuKCk6IFZhbHVlO1xuICAgIGFic3RyYWN0IGFjb3MoKTogVmFsdWU7XG4gICAgYWJzdHJhY3QgYXNpbigpOiBWYWx1ZTtcbn1cblxuZXhwb3J0IGNsYXNzIEluZXhhY3RWYWx1ZSBleHRlbmRzIEFic3RyYWN0VmFsdWUge1xuICAgIHB1YmxpYyBudW06IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG51bTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubnVtID0gbnVtO1xuXG4gICAgICAgIC8vIE1ha2UgaXQgaW1tdXRhYmxlXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gICAgfVxuXG4gICAgaXNGaW5pdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUodGhpcy5udW0pO1xuICAgIH1cbiAgICBpc0luZXhhY3QoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpc0V4YWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlzSW50ZWdlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5udW0pO1xuICAgIH1cblxuICAgIHRvSW5leGFjdCgpOiBJbmV4YWN0VmFsdWUge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9FeGFjdCgpOiBFeGFjdFZhbHVlIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gZXhhY3QgcmVwcmVzZW50YXRpb24gb2YgJHt0aGlzfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0cmluZ1JlcCA9IHRoaXMubnVtLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gc3RyaW5nUmVwLm1hdGNoKC9eKC4qKVxcLiguKikkLyk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgY29uc3QgdGVuVG9EZWNpbWFsUGxhY2VzID0gTWF0aC5wb3coMTAsIG1hdGNoWzJdLmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gRXhhY3RWYWx1ZS5tYWtlSW5zdGFuY2UoXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZCh0aGlzLm51bSAqIHRlblRvRGVjaW1hbFBsYWNlcyksXG4gICAgICAgICAgICAgICAgdGVuVG9EZWNpbWFsUGxhY2VzXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEV4YWN0VmFsdWUubWFrZUluc3RhbmNlKHRoaXMubnVtLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b0ZpeG51bSgpOiBKU0ludGVnZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLm51bSk7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIodGhpcy5udW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0udG9TdHJpbmcoKSArIFwiLjBcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5udW0udG9TdHJpbmcoKTtcbiAgICB9XG4gICAgdG9TaWduZWRTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMubnVtID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcIitcIiArIHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH1cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50OiBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgICBpZiAoaGludCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5udW07XG4gICAgfVxuXG4gICAgZ3JlYXRlclRoYW4ob3RoZXI6IFZhbHVlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTmFOKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Bvc2l0aXZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0V4YWN0KCkuZ3JlYXRlclRoYW4ob3RoZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm51bSA+IG90aGVyLm51bTtcbiAgICB9XG4gICAgZ3JlYXRlclRoYW5PckVxdWFsKG90aGVyOiBWYWx1ZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc05hTigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc0Zpbml0ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNQb3NpdGl2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9FeGFjdCgpLmdyZWF0ZXJUaGFuT3JFcXVhbChvdGhlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubnVtID49IG90aGVyLm51bTtcbiAgICB9XG4gICAgbGVzc1RoYW4ob3RoZXI6IFZhbHVlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTmFOKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNQb3NpdGl2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9FeGFjdCgpLmxlc3NUaGFuKG90aGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5udW0gPCBvdGhlci5udW07XG4gICAgfVxuICAgIGxlc3NUaGFuT3JFcXVhbChvdGhlcjogVmFsdWUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgRXhhY3RWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNOYU4oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNGaW5pdGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc1Bvc2l0aXZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0V4YWN0KCkubGVzc1RoYW5PckVxdWFsKG90aGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5udW0gPD0gb3RoZXIubnVtO1xuICAgIH1cbiAgICBlcXVhbHMob3RoZXI6IFZhbHVlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmlzTmFOKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNGaW5pdGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuICEob3RoZXIgaW5zdGFuY2VvZiBFeGFjdFZhbHVlKSAmJiB0aGlzLm51bSA9PT0gb3RoZXIubnVtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRXhhY3QoKS5lcXVhbHMob3RoZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm51bSA9PT0gb3RoZXIubnVtO1xuICAgIH1cblxuICAgIGlzWmVybygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtID09PSAwO1xuICAgIH1cbiAgICBpc05lZ2F0aXZlWmVybygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5pcyh0aGlzLm51bSwgLTApO1xuICAgIH1cbiAgICBpc1Bvc2l0aXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5udW0gPiAwO1xuICAgIH1cbiAgICBpc05lZ2F0aXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5udW0gPCAwO1xuICAgIH1cbiAgICBpc0V2ZW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bSAlIDIgPT09IDA7XG4gICAgfVxuICAgIGlzTmFOKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHRoaXMubnVtKTtcbiAgICB9XG5cbiAgICBhZGQob3RoZXI6IFZhbHVlKTogVmFsdWUge1xuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQob3RoZXIudG9JbmV4YWN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdFZhbHVlKHRoaXMubnVtICsgb3RoZXIubnVtKTtcbiAgICB9XG4gICAgc3VidHJhY3Qob3RoZXI6IFZhbHVlKTogVmFsdWUge1xuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChvdGhlci50b0luZXhhY3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0VmFsdWUodGhpcy5udW0gLSBvdGhlci5udW0pO1xuICAgIH1cbiAgICBtdWx0aXBseShvdGhlcjogVmFsdWUpOiBWYWx1ZSB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChvdGhlci5pc1plcm8oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBaRVJPX1ZBTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG90aGVyLnRvSW5leGFjdCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3RWYWx1ZSh0aGlzLm51bSAqIG90aGVyLm51bSk7XG4gICAgfVxuICAgIGRpdmlkZShvdGhlcjogVmFsdWUpOiBWYWx1ZSB7XG4gICAgICAgIGlmICh0aGlzLmlzWmVybygpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGUob3RoZXIudG9JbmV4YWN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdFZhbHVlKHRoaXMubnVtIC8gb3RoZXIubnVtKTtcbiAgICB9XG5cbiAgICBudW1lcmF0b3IoKTogVmFsdWUge1xuICAgICAgICByZXR1cm4gdGhpcy50b0V4YWN0KCkubnVtZXJhdG9yKCkudG9JbmV4YWN0KCk7XG4gICAgfVxuICAgIGRlbm9taW5hdG9yKCk6IFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9FeGFjdCgpLmRlbm9taW5hdG9yKCkudG9JbmV4YWN0KCk7XG4gICAgfVxuXG4gICAgaW50ZWdlclNxcnQoKTogVmFsdWUge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3RWYWx1ZShNYXRoLmZsb29yKE1hdGguc3FydCh0aGlzLm51bSkpKTtcbiAgICB9XG4gICAgc3FydCgpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdFZhbHVlKE1hdGguc3FydCh0aGlzLm51bSkpO1xuICAgIH1cbiAgICBhYnMoKTogVmFsdWUge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3RWYWx1ZShNYXRoLmFicyh0aGlzLm51bSkpO1xuICAgIH1cbiAgICBmbG9vcigpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdFZhbHVlKE1hdGguZmxvb3IodGhpcy5udW0pKTtcbiAgICB9XG4gICAgY2VpbGluZygpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdFZhbHVlKE1hdGguY2VpbCh0aGlzLm51bSkpO1xuICAgIH1cbiAgICByb3VuZCgpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdFZhbHVlKE1hdGgucm91bmQodGhpcy5udW0pKTtcbiAgICB9XG5cbiAgICBsb2coKTogVmFsdWUge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3RWYWx1ZShNYXRoLmxvZyh0aGlzLm51bSkpO1xuICAgIH1cbiAgICBleHB0KHBvd2VyOiBWYWx1ZSk6IFZhbHVlIHtcbiAgICAgICAgaWYgKHBvd2VyIGluc3RhbmNlb2YgRXhhY3RWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwdChwb3dlci50b0luZXhhY3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0VmFsdWUoTWF0aC5wb3codGhpcy5udW0sIHBvd2VyLm51bSkpO1xuICAgIH1cbiAgICBleHAoKTogVmFsdWUge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3RWYWx1ZShNYXRoLmV4cCh0aGlzLm51bSkpXG4gICAgfVxuXG4gICAgYW5nbGUoKTogVmFsdWUge1xuICAgICAgICBpZiAoMCA9PT0gdGhpcy5udW0pXG4gICAgICAgICAgICByZXR1cm4gRVhBQ1RfWkVSTztcbiAgICAgICAgaWYgKHRoaXMubnVtID4gMClcbiAgICAgICAgICAgIHJldHVybiBFWEFDVF9aRVJPO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbmV3IEluZXhhY3RWYWx1ZShNYXRoLlBJKTtcbiAgICB9XG4gICAgdGFuKCk6IFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0VmFsdWUoTWF0aC50YW4odGhpcy5udW0pKTtcbiAgICB9XG4gICAgY29zKCk6IFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0VmFsdWUoTWF0aC5jb3ModGhpcy5udW0pKTtcbiAgICB9XG4gICAgc2luKCk6IFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0VmFsdWUoTWF0aC5zaW4odGhpcy5udW0pKTtcbiAgICB9XG4gICAgYXRhbigpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdFZhbHVlKE1hdGguYXRhbih0aGlzLm51bSkpO1xuICAgIH1cbiAgICBhY29zKCk6IFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0VmFsdWUoTWF0aC5hY29zKHRoaXMubnVtKSk7XG4gICAgfVxuICAgIGFzaW4oKTogVmFsdWUge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3RWYWx1ZShNYXRoLmFzaW4odGhpcy5udW0pKTtcbiAgICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFeGFjdFZhbHVlIGV4dGVuZHMgQWJzdHJhY3RWYWx1ZSB7XG4gICAgYWJzdHJhY3QgcmVhZG9ubHkgbnVtOiBKU0ludGVnZXI7XG4gICAgYWJzdHJhY3QgcmVhZG9ubHkgZGVuOiBKU0ludGVnZXI7XG5cbiAgICBzdGF0aWMgbWFrZUluc3RhbmNlKG51bTogbnVtYmVyLCBkZW46IG51bWJlcik6IEV4YWN0VmFsdWU7XG4gICAgc3RhdGljIG1ha2VJbnN0YW5jZShudW06IGJpZ2ludCwgZGVuOiBiaWdpbnQpOiBFeGFjdFZhbHVlO1xuICAgIHN0YXRpYyBtYWtlSW5zdGFuY2UobnVtOiBKU0ludGVnZXIsIGRlbjogSlNJbnRlZ2VyKTogRXhhY3RWYWx1ZSB7XG4gICAgICAgaWYgKHR5cGVvZiBudW0gPT09ICdiaWdpbnQnICYmIHR5cGVvZiBkZW4gPT09ICdiaWdpbnQnKSB7XG4gICAgICAgICAgIHJldHVybiBuZXcgQmlnRXhhY3RWYWx1ZShudW0sIGRlbik7XG4gICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgZGVuID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3RWYWx1ZShudW0sIGRlbik7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTnVtYmVyYXRvciBhbmQgZGVub21pbmF0b3IgdHlwZXMgbXVzdCBtYXRjaCwgZ2l2ZW4gJHt0eXBlb2YgbnVtfSBhbmQgJHt0eXBlb2YgZGVufWApXG4gICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNtYWxsRXhhY3RWYWx1ZSBleHRlbmRzIEV4YWN0VmFsdWUge1xuICAgIHB1YmxpYyByZWFkb25seSBudW06IG51bWJlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGVuOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihudW06IG51bWJlciwgZGVuOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihudW0pICYmICFOdW1iZXIuaXNJbnRlZ2VyKGRlbikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeGFjdCBudW1iZXIgY2FuIG9ubHkgYmUgY29uc3RydWN0ZWQgZnJvbSBpbnRlZ2Vycy5cIilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgZGVuID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gT25seSB0aGUgbnVtZXJhdG9yIGNhbiBiZSBuZWdhdGl2ZS5cbiAgICAgICAgICAgIGlmIChkZW4gPCAwKSB7XG4gICAgICAgICAgICAgICAgbnVtICo9IC0xO1xuICAgICAgICAgICAgICAgIGRlbiAqPSAtMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZ2NkID0gdGhpcy5nY2QobnVtLCBkZW4pO1xuICAgICAgICAgICAgdGhpcy5udW0gPSBudW0gLyBnY2Q7XG4gICAgICAgICAgICB0aGlzLmRlbiA9IGRlbiAvIGdjZDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4YWN0IHZhbHVlIG51bWVyYXRvciBhbmQgZGVub21pbmF0b3IgdHlwZXMgbXVzdCBtYXRjaFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFrZSBpdCBpbW11dGFibGVcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdjZChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCB0O1xuICAgICAgICB3aGlsZSAoYiAhPT0gMCkge1xuICAgICAgICAgICAgdCA9IGE7XG4gICAgICAgICAgICBhID0gYjtcbiAgICAgICAgICAgIGIgPSB0ICUgYjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5hYnMoYSk7XG4gICAgfVxuXG4gICAgaXNGaW5pdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpc0luZXhhY3QoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaXNFeGFjdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlzSW50ZWdlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVuID09PSAxO1xuICAgIH1cblxuICAgIHRvSW5leGFjdCgpOiBJbmV4YWN0VmFsdWUge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm51bSAvIHRoaXMuZGVuO1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3RWYWx1ZShyZXN1bHQpO1xuICAgIH1cbiAgICB0b0V4YWN0KCk6IEV4YWN0VmFsdWUge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9CaWdFeGFjdCgpOiBCaWdFeGFjdFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdFeGFjdFZhbHVlKEJpZ0ludCh0aGlzLm51bSksIEJpZ0ludCh0aGlzLmRlbikpO1xuICAgIH1cbiAgICB0b0ZpeG51bSgpOiBKU0ludGVnZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLm51bSAvIHRoaXMuZGVuKTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5kZW4gPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bS50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMubnVtfS8ke3RoaXMuZGVufWA7XG4gICAgfVxuICAgIHRvU2lnbmVkU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmlzUG9zaXRpdmUoKSB8fCB0aGlzLmlzWmVybygpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIrXCIgKyB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludDogc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgICAgaWYgKGhpbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubnVtIC8gdGhpcy5kZW47XG4gICAgfVxuXG5cbiAgICBncmVhdGVyVGhhbihvdGhlcjogVmFsdWUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAob3RoZXIuaXNOYU4oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW90aGVyLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIW90aGVyLmlzUG9zaXRpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXJUaGFuKG90aGVyLnRvRXhhY3QoKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIEJpZ0V4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQmlnRXhhY3QoKS5ncmVhdGVyVGhhbihvdGhlcik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNWYWwgPSB0aGlzLm51bSAqIChvdGhlci5kZW4gYXMgbnVtYmVyKTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyVmFsID0gKG90aGVyLm51bSBhcyBudW1iZXIpICogdGhpcy5kZW47XG4gICAgICAgICAgICByZXR1cm4gdGhpc1ZhbCA+IG90aGVyVmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdyZWF0ZXJUaGFuT3JFcXVhbChvdGhlcjogVmFsdWUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAob3RoZXIuaXNOYU4oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW90aGVyLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIW90aGVyLmlzUG9zaXRpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXJUaGFuT3JFcXVhbChvdGhlci50b0V4YWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBCaWdFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0JpZ0V4YWN0KCkuZ3JlYXRlclRoYW5PckVxdWFsKG90aGVyKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGhpc1ZhbCA9IHRoaXMubnVtICogKG90aGVyLmRlbiBhcyBudW1iZXIpO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJWYWwgPSAob3RoZXIubnVtIGFzIG51bWJlcikgKiB0aGlzLmRlbjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzVmFsID49IG90aGVyVmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxlc3NUaGFuKG90aGVyOiBWYWx1ZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBJbmV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChvdGhlci5pc05hTigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghb3RoZXIuaXNGaW5pdGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvdGhlci5pc1Bvc2l0aXZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZXNzVGhhbihvdGhlci50b0V4YWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBCaWdFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0JpZ0V4YWN0KCkubGVzc1RoYW4ob3RoZXIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0aGlzVmFsID0gdGhpcy5udW0gKiAob3RoZXIuZGVuIGFzIG51bWJlcik7XG4gICAgICAgICAgICBjb25zdCBvdGhlclZhbCA9IChvdGhlci5udW0gYXMgbnVtYmVyKSAqIHRoaXMuZGVuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNWYWwgPCBvdGhlclZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXNzVGhhbk9yRXF1YWwob3RoZXI6IFZhbHVlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEluZXhhY3RWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKG90aGVyLmlzTmFOKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFvdGhlci5pc0Zpbml0ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyLmlzUG9zaXRpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlc3NUaGFuT3JFcXVhbChvdGhlci50b0V4YWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBCaWdFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0JpZ0V4YWN0KCkubGVzc1RoYW5PckVxdWFsKG90aGVyKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGhpc1ZhbCA9IHRoaXMubnVtICogKG90aGVyLmRlbiBhcyBudW1iZXIpO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJWYWwgPSAob3RoZXIubnVtIGFzIG51bWJlcikgKiB0aGlzLmRlbjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzVmFsIDw9IG90aGVyVmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVxdWFscyhvdGhlcjogVmFsdWUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIW90aGVyLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcXVhbHMob3RoZXIudG9FeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQmlnRXhhY3RWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CaWdFeGFjdCgpLmVxdWFscyhvdGhlcik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNWYWwgPSB0aGlzLm51bSAqIChvdGhlci5kZW4gYXMgbnVtYmVyKTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyVmFsID0gKG90aGVyLm51bSBhcyBudW1iZXIpICogdGhpcy5kZW47XG4gICAgICAgICAgICByZXR1cm4gdGhpc1ZhbCA9PT0gb3RoZXJWYWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1plcm8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bSA9PT0gMDtcbiAgICB9XG4gICAgaXNOZWdhdGl2ZVplcm8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuaXModGhpcy5udW0sIC0wKTtcbiAgICB9XG4gICAgaXNQb3NpdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtID4gMDtcbiAgICB9XG4gICAgaXNOZWdhdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtIDwgMDtcbiAgICB9XG4gICAgaXNFdmVuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZW4gPT09IDEgJiYgdGhpcy5udW0gJSAyID09PSAwO1xuICAgIH1cbiAgICBpc05hTigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGFkZChvdGhlcjogVmFsdWUpOiBWYWx1ZSB7XG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEluZXhhY3RWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9JbmV4YWN0KCkuYWRkKG90aGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIEJpZ0V4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQmlnRXhhY3QoKS5hZGQob3RoZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgU21hbGxFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSAodGhpcy5udW0gKiBvdGhlci5kZW4pICsgKG90aGVyLm51bSAqIHRoaXMuZGVuKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbiA9IHRoaXMuZGVuICogb3RoZXIuZGVuO1xuXG4gICAgICAgICAgICBpZiAoIWlzU2FmZUludGVnZXIobnVtKSB8fCAhaXNTYWZlSW50ZWdlcihkZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CaWdFeGFjdCgpLmFkZChvdGhlci50b0JpZ0V4YWN0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3RWYWx1ZShudW0sIGRlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBhZGQgJHt0aGlzfSB0byB2YWx1ZSAke290aGVyfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN1YnRyYWN0KG90aGVyOiBWYWx1ZSk6IFZhbHVlIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0luZXhhY3QoKS5zdWJ0cmFjdChvdGhlcik7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBCaWdFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0JpZ0V4YWN0KCkuc3VidHJhY3Qob3RoZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgU21hbGxFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSAodGhpcy5udW0gKiBvdGhlci5kZW4pIC0gKG90aGVyLm51bSAqIHRoaXMuZGVuKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbiA9IHRoaXMuZGVuICogb3RoZXIuZGVuO1xuXG4gICAgICAgICAgICBpZiAoIWlzU2FmZUludGVnZXIobnVtKSB8fCAhaXNTYWZlSW50ZWdlcihkZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CaWdFeGFjdCgpLnN1YnRyYWN0KG90aGVyLnRvQmlnRXhhY3QoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdFZhbHVlKG51bSwgZGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHN1YnRyYWN0ICR7dGhpc30gYW5kICR7b3RoZXJ9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbXVsdGlwbHkob3RoZXI6IFZhbHVlKTogVmFsdWUge1xuICAgICAgICBpZiAodGhpcy5pc1plcm8oKSB8fCAob3RoZXIuaXNFeGFjdCgpICYmIG90aGVyLmlzWmVybygpKSkge1xuICAgICAgICAgICAgcmV0dXJuIFpFUk9fVkFMO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0luZXhhY3QoKS5tdWx0aXBseShvdGhlcik7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBCaWdFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0JpZ0V4YWN0KCkubXVsdGlwbHkob3RoZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgU21hbGxFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSB0aGlzLm51bSAqIG90aGVyLm51bTtcbiAgICAgICAgICAgIGNvbnN0IGRlbiA9IHRoaXMuZGVuICogb3RoZXIuZGVuO1xuXG4gICAgICAgICAgICBpZiAoIWlzU2FmZUludGVnZXIobnVtKSB8fCAhaXNTYWZlSW50ZWdlcihkZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CaWdFeGFjdCgpLm11bHRpcGx5KG90aGVyLnRvQmlnRXhhY3QoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdFZhbHVlKG51bSwgZGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IG11bHRpcGx5ICR7dGhpc30gYW5kICR7b3RoZXJ9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGl2aWRlKG90aGVyOiBWYWx1ZSk6IFZhbHVlIHtcbiAgICAgICAgaWYgKHRoaXMuaXNaZXJvKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0luZXhhY3QoKS5kaXZpZGUob3RoZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQmlnRXhhY3RWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9CaWdFeGFjdCgpLmRpdmlkZShvdGhlcik7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIuaXNaZXJvKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIi86IGRpdmlzaW9uIGJ5IHplcm9cIiArIHRoaXMgKyBvdGhlcik7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBTbWFsbEV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IHRoaXMubnVtICogb3RoZXIuZGVuO1xuICAgICAgICAgICAgY29uc3QgZGVuID0gdGhpcy5kZW4gKiBvdGhlci5udW07XG5cbiAgICAgICAgICAgIGlmICghaXNTYWZlSW50ZWdlcihudW0pIHx8ICFpc1NhZmVJbnRlZ2VyKGRlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b0JpZ0V4YWN0KCkuZGl2aWRlKG90aGVyLnRvQmlnRXhhY3QoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdFZhbHVlKG51bSwgZGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGRpdmlkZSAke3RoaXN9IGFuZCAke290aGVyfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbnVtZXJhdG9yKCk6IFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0VmFsdWUodGhpcy5udW0pO1xuICAgIH1cbiAgICBkZW5vbWluYXRvcigpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdFZhbHVlKHRoaXMuZGVuKTtcbiAgICB9XG5cbiAgICBpbnRlZ2VyU3FydCgpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNxcnQoKS5mbG9vcigpO1xuICAgIH1cbiAgICBzcXJ0KCk6IFZhbHVlIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZWdhdGl2ZSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdGFrZSBzcXVhcmUgcm9vdCBvZiBuZWdhdGl2ZSBudW1iZXIgXCIgKyB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG51bSA9IE1hdGguc3FydCh0aGlzLm51bSk7XG4gICAgICAgIGNvbnN0IGRlbiA9IE1hdGguc3FydCh0aGlzLmRlbik7XG5cbiAgICAgICAgaWYgKG51bSA9PT0gTWF0aC5mbG9vcihudW0pICYmIGRlbiA9PT0gTWF0aC5mbG9vcihkZW4pKSB7XG4gICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdFZhbHVlKG51bSwgZGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW5leGFjdFZhbHVlKG51bSAvIGRlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWJzKCk6IFZhbHVlIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZWdhdGl2ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3RWYWx1ZSgtMSAqIHRoaXMubnVtLCB0aGlzLmRlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmbG9vcigpOiBWYWx1ZSB7XG4gICAgICAgIGlmICh0aGlzLmRlbiA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3RWYWx1ZShNYXRoLmZsb29yKHRoaXMubnVtIC8gdGhpcy5kZW4pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjZWlsaW5nKCk6IFZhbHVlIHtcbiAgICAgICAgaWYgKHRoaXMuZGVuID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdFZhbHVlKE1hdGguY2VpbCh0aGlzLm51bSAvIHRoaXMuZGVuKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcm91bmQoKTogVmFsdWUge1xuICAgICAgICBpZiAodGhpcy5kZW4gPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0VmFsdWUoTWF0aC5yb3VuZCh0aGlzLm51bSAvIHRoaXMuZGVuKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2coKTogVmFsdWUge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3RWYWx1ZShNYXRoLmxvZyh0aGlzLm51bSAvIHRoaXMuZGVuKSk7XG4gICAgfVxuICAgIGV4cHQocG93ZXI6IFZhbHVlKTogVmFsdWUge1xuICAgICAgICBwb3dlciA9IHBvd2VyLnRvSW5leGFjdCgpO1xuICAgICAgICBpZiAocG93ZXIuaXNJbnRlZ2VyKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cCA9IHBvd2VyLm51bTtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IE1hdGgucG93KHRoaXMubnVtLCBleHApO1xuICAgICAgICAgICAgY29uc3QgZGVuID0gTWF0aC5wb3codGhpcy5kZW4sIGV4cCk7XG5cbiAgICAgICAgICAgIGlmICghaXNTYWZlSW50ZWdlcihudW0pIHx8ICFpc1NhZmVJbnRlZ2VyKGRlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b0JpZ0V4YWN0KCkuZXhwdChwb3dlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdFZhbHVlKG51bSwgZGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvSW5leGFjdCgpLmV4cHQocG93ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cCgpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdFZhbHVlKE1hdGguZXhwKHRoaXMubnVtIC8gdGhpcy5kZW4pKTtcbiAgICB9XG5cbiAgICBhbmdsZSgpOiBWYWx1ZSB7XG4gICAgICAgaWYgKHRoaXMuaXNOZWdhdGl2ZSgpKSB7XG4gICAgICAgICAgIHJldHVybiBuZXcgSW5leGFjdFZhbHVlKE1hdGguUEkpO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdFZhbHVlKDApO1xuICAgICAgIH1cbiAgICB9XG4gICAgdGFuKCk6IFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0VmFsdWUoTWF0aC50YW4odGhpcy5udW0gLyB0aGlzLmRlbikpO1xuICAgIH1cbiAgICBjb3MoKTogVmFsdWUge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3RWYWx1ZShNYXRoLmNvcyh0aGlzLm51bSAvIHRoaXMuZGVuKSk7XG4gICAgfVxuICAgIHNpbigpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdFZhbHVlKE1hdGguc2luKHRoaXMubnVtIC8gdGhpcy5kZW4pKTtcbiAgICB9XG4gICAgYXRhbigpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdFZhbHVlKE1hdGguYXRhbih0aGlzLm51bSAvIHRoaXMuZGVuKSk7XG4gICAgfVxuICAgIGFjb3MoKTogVmFsdWUge1xuICAgICAgICByZXR1cm4gbmV3IEluZXhhY3RWYWx1ZShNYXRoLmFjb3ModGhpcy5udW0gLyB0aGlzLmRlbikpO1xuICAgIH1cbiAgICBhc2luKCk6IFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbmV4YWN0VmFsdWUoTWF0aC5hc2luKHRoaXMubnVtIC8gdGhpcy5kZW4pKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaWdFeGFjdFZhbHVlIGV4dGVuZHMgRXhhY3RWYWx1ZSB7XG4gICAgcHVibGljIHJlYWRvbmx5IG51bTogYmlnaW50O1xuICAgIHB1YmxpYyByZWFkb25seSBkZW46IGJpZ2ludDtcblxuICAgIGNvbnN0cnVjdG9yKG51bTogYmlnaW50LCBkZW46IGJpZ2ludCA9IDFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmICh0eXBlb2YgbnVtID09PSAnYmlnaW50JyAmJiB0eXBlb2YgZGVuID09PSAnYmlnaW50Jykge1xuICAgICAgICAgICAgLy8gT25seSB0aGUgbnVtZXJhdG9yIGNhbiBiZSBuZWdhdGl2ZS5cbiAgICAgICAgICAgIGlmIChkZW4gPCAwKSB7XG4gICAgICAgICAgICAgICAgbnVtICo9IC0xbjtcbiAgICAgICAgICAgICAgICBkZW4gKj0gLTFuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBnY2QgPSB0aGlzLmdjZChudW0sIGRlbik7XG4gICAgICAgICAgICB0aGlzLm51bSA9IG51bSAvIGdjZDtcbiAgICAgICAgICAgIHRoaXMuZGVuID0gZGVuIC8gZ2NkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhhY3QgdmFsdWUgbnVtZXJhdG9yIGFuZCBkZW5vbWluYXRvciB0eXBlcyBtdXN0IG1hdGNoXCIpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWtlIGl0IGltbXV0YWJsZVxuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2NkKGE6IGJpZ2ludCwgYjogYmlnaW50KTogYmlnaW50IHtcbiAgICAgICAgbGV0IHQ7XG4gICAgICAgIHdoaWxlIChiICE9PSAwbikge1xuICAgICAgICAgICAgdCA9IGE7XG4gICAgICAgICAgICBhID0gYjtcbiAgICAgICAgICAgIGIgPSB0ICUgYjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhIDwgMG4pIHtcbiAgICAgICAgICAgIHJldHVybiAtMW4gKiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgaXNGaW5pdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpc0luZXhhY3QoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaXNFeGFjdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlzSW50ZWdlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVuID09PSAxbjtcbiAgICB9XG5cbiAgICB0b0luZXhhY3QoKTogSW5leGFjdFZhbHVlIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gTnVtYmVyKHRoaXMubnVtKSAvIE51bWJlcih0aGlzLmRlbik7XG4gICAgICAgIHJldHVybiBuZXcgSW5leGFjdFZhbHVlKHJlc3VsdCk7XG4gICAgfVxuICAgIHRvRXhhY3QoKTogRXhhY3RWYWx1ZSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b1NtYWxsRXhhY3QoKTogU21hbGxFeGFjdFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0VmFsdWUoTnVtYmVyKHRoaXMubnVtKSwgTnVtYmVyKHRoaXMuZGVuKSk7XG4gICAgfVxuICAgIHRvRml4bnVtKCk6IEpTSW50ZWdlciB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bSAvIHRoaXMuZGVuO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG51bVN0ciA9IHRoaXMubnVtLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpO1xuICAgICAgICBjb25zdCBkZW5TdHIgPSB0aGlzLmRlbi50b1N0cmluZygpLnNsaWNlKDAsIC0xKTtcblxuICAgICAgICBpZiAodGhpcy5kZW4gPT09IDFuKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtU3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke251bVN0cn0vJHtkZW5TdHJ9YDtcbiAgICB9XG4gICAgdG9TaWduZWRTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZWdhdGl2ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIitcIiArIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludDogc3RyaW5nKTogbnVtYmVyIHwgYmlnaW50IHwgc3RyaW5nIHtcbiAgICAgICAgaWYgKGhpbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVuID09PSAxbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLm51bSkgLyBOdW1iZXIodGhpcy5kZW4pO1xuICAgIH1cblxuICAgIGdyZWF0ZXJUaGFuKG90aGVyOiBWYWx1ZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBJbmV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChvdGhlci5pc05hTigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghb3RoZXIuaXNGaW5pdGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhb3RoZXIuaXNQb3NpdGl2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JlYXRlclRoYW4ob3RoZXIudG9FeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgU21hbGxFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmVhdGVyVGhhbihvdGhlci50b0JpZ0V4YWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBCaWdFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB0aGlzVmFsID0gdGhpcy5udW0gKiBvdGhlci5kZW47XG4gICAgICAgICAgICBjb25zdCBvdGhlclZhbCA9IG90aGVyLm51bSAqIHRoaXMuZGVuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNWYWwgPiBvdGhlclZhbDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY29tcGFyZSAke3RoaXN9IGFuZCAke290aGVyfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdyZWF0ZXJUaGFuT3JFcXVhbChvdGhlcjogVmFsdWUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAob3RoZXIuaXNOYU4oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW90aGVyLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIW90aGVyLmlzUG9zaXRpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXJUaGFuT3JFcXVhbChvdGhlci50b0V4YWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBTbWFsbEV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyZWF0ZXJUaGFuT3JFcXVhbChvdGhlci50b0JpZ0V4YWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBCaWdFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB0aGlzVmFsID0gdGhpcy5udW0gKiBvdGhlci5kZW47XG4gICAgICAgICAgICBjb25zdCBvdGhlclZhbCA9IG90aGVyLm51bSAqIHRoaXMuZGVuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNWYWwgPj0gb3RoZXJWYWw7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGNvbXBhcmUgJHt0aGlzfSBhbmQgJHtvdGhlcn1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXNzVGhhbihvdGhlcjogVmFsdWUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAob3RoZXIuaXNOYU4oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW90aGVyLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXIuaXNQb3NpdGl2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVzc1RoYW4ob3RoZXIudG9FeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgU21hbGxFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZXNzVGhhbihvdGhlci50b0JpZ0V4YWN0KCkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBCaWdFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB0aGlzVmFsID0gdGhpcy5udW0gKiBvdGhlci5kZW47XG4gICAgICAgICAgICBjb25zdCBvdGhlclZhbCA9IG90aGVyLm51bSAqIHRoaXMuZGVuO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNWYWwgPCBvdGhlclZhbDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY29tcGFyZSAke3RoaXN9IGFuZCAke290aGVyfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxlc3NUaGFuT3JFcXVhbChvdGhlcjogVmFsdWUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAob3RoZXIuaXNOYU4oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW90aGVyLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXIuaXNQb3NpdGl2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVzc1RoYW5PckVxdWFsKG90aGVyLnRvRXhhY3QoKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIFNtYWxsRXhhY3RWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVzc1RoYW5PckVxdWFsKG90aGVyLnRvQmlnRXhhY3QoKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIEJpZ0V4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNWYWwgPSB0aGlzLm51bSAqIG90aGVyLmRlbjtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyVmFsID0gb3RoZXIubnVtICogdGhpcy5kZW47XG4gICAgICAgICAgICByZXR1cm4gdGhpc1ZhbCA8PSBvdGhlclZhbDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY29tcGFyZSAke3RoaXN9IGFuZCAke290aGVyfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVxdWFscyhvdGhlcjogVmFsdWUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIW90aGVyLmlzRmluaXRlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcXVhbHMob3RoZXIudG9FeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgU21hbGxFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcXVhbHMob3RoZXIudG9CaWdFeGFjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQmlnRXhhY3RWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdGhpc1ZhbCA9IHRoaXMubnVtICogb3RoZXIuZGVuO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJWYWwgPSBvdGhlci5udW0gKiB0aGlzLmRlbjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzVmFsID09PSBvdGhlclZhbDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY29tcGFyZSAke3RoaXN9IGFuZCAke290aGVyfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNaZXJvKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5udW0gPT09IDBuO1xuICAgIH1cbiAgICBpc05lZ2F0aXZlWmVybygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc1Bvc2l0aXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5udW0gPiAwbjtcbiAgICB9XG4gICAgaXNOZWdhdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtIDwgMG47XG4gICAgfVxuICAgIGlzRXZlbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVuID09PSAxbiAmJiB0aGlzLm51bSAlIDJuID09PSAwbjtcbiAgICB9XG4gICAgaXNOYU4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGQob3RoZXI6IFZhbHVlKTogVmFsdWUge1xuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBJbmV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvSW5leGFjdCgpLmFkZChvdGhlcik7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBTbWFsbEV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChvdGhlci50b0JpZ0V4YWN0KCkpO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQmlnRXhhY3RWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gKHRoaXMubnVtICogb3RoZXIuZGVuKSArIChvdGhlci5udW0gKiB0aGlzLmRlbik7XG4gICAgICAgICAgICBjb25zdCBkZW4gPSB0aGlzLmRlbiAqIG90aGVyLmRlbjtcblxuICAgICAgICAgICAgaWYgKGlzU2FmZUludGVnZXIobnVtKSAmJiBpc1NhZmVJbnRlZ2VyKGRlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3RWYWx1ZShOdW1iZXIobnVtKSwgTnVtYmVyKGRlbikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0V4YWN0VmFsdWUobnVtLCBkZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgYWRkICR7dGhpc30gYW5kICR7b3RoZXJ9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3VidHJhY3Qob3RoZXI6IFZhbHVlKTogVmFsdWUge1xuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBJbmV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvSW5leGFjdCgpLnN1YnRyYWN0KG90aGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIFNtYWxsRXhhY3RWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3Qob3RoZXIudG9CaWdFeGFjdCgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlciBpbnN0YW5jZW9mIEJpZ0V4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9ICh0aGlzLm51bSAqIG90aGVyLmRlbikgLSAob3RoZXIubnVtICogdGhpcy5kZW4pO1xuICAgICAgICAgICAgY29uc3QgZGVuID0gdGhpcy5kZW4gKiBvdGhlci5kZW47XG5cbiAgICAgICAgICAgIGlmIChpc1NhZmVJbnRlZ2VyKG51bSkgJiYgaXNTYWZlSW50ZWdlcihkZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEV4YWN0VmFsdWUoTnVtYmVyKG51bSksIE51bWJlcihkZW4pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdFeGFjdFZhbHVlKG51bSwgZGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHN1YnRyYWN0ICR7dGhpc30gYW5kICR7b3RoZXJ9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbXVsdGlwbHkob3RoZXI6IFZhbHVlKTogVmFsdWUge1xuICAgICAgICBpZiAoKG90aGVyLmlzRXhhY3QoKSAmJiBvdGhlci5pc1plcm8oKSkgfHwgdGhpcy5pc1plcm8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIFpFUk9fVkFMO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgSW5leGFjdFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0luZXhhY3QoKS5tdWx0aXBseShvdGhlcik7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBTbWFsbEV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG90aGVyLnRvQmlnRXhhY3QoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBCaWdFeGFjdFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSB0aGlzLm51bSAqIG90aGVyLm51bTtcbiAgICAgICAgICAgIGNvbnN0IGRlbiA9IHRoaXMuZGVuICogb3RoZXIuZGVuO1xuXG4gICAgICAgICAgICBpZiAoaXNTYWZlSW50ZWdlcihudW0pICYmIGlzU2FmZUludGVnZXIoZGVuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxFeGFjdFZhbHVlKE51bWJlcihudW0pLCBOdW1iZXIoZGVuKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnRXhhY3RWYWx1ZShudW0sIGRlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBtdWx0aXBseSAke3RoaXN9IGFuZCAke290aGVyfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpdmlkZShvdGhlcjogVmFsdWUpOiBWYWx1ZSB7XG4gICAgICAgIGlmICh0aGlzLmlzWmVybygpKSB7XG4gICAgICAgICAgICByZXR1cm4gWkVST19WQUw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBJbmV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvSW5leGFjdCgpLmRpdmlkZShvdGhlcik7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBTbWFsbEV4YWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpdmlkZShvdGhlci50b0JpZ0V4YWN0KCkpO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyIGluc3RhbmNlb2YgQmlnRXhhY3RWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gdGhpcy5udW0gKiBvdGhlci5kZW47XG4gICAgICAgICAgICBjb25zdCBkZW4gPSB0aGlzLmRlbiAqIG90aGVyLm51bTtcblxuICAgICAgICAgICAgaWYgKGlzU2FmZUludGVnZXIobnVtKSAmJiBpc1NhZmVJbnRlZ2VyKGRlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsRXhhY3RWYWx1ZShOdW1iZXIobnVtKSwgTnVtYmVyKGRlbikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0V4YWN0VmFsdWUobnVtLCBkZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGl2aWRlICR7dGhpc30gYW5kICR7b3RoZXJ9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBudW1lcmF0b3IoKTogVmFsdWUge1xuICAgICAgICByZXR1cm4gbmV3IEJpZ0V4YWN0VmFsdWUodGhpcy5udW0pO1xuICAgIH1cbiAgICBkZW5vbWluYXRvcigpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiBuZXcgQmlnRXhhY3RWYWx1ZSh0aGlzLmRlbilcbiAgICB9XG5cbiAgICBpbnRlZ2VyU3FydCgpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNxcnQoKS5mbG9vcigpO1xuICAgIH1cbiAgICBzcXJ0KCk6IFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TbWFsbEV4YWN0KCkuc3FydCgpO1xuICAgIH1cbiAgICBhYnMoKTogVmFsdWUge1xuICAgICAgICBpZiAodGhpcy5pc05lZ2F0aXZlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnRXhhY3RWYWx1ZSh0aGlzLm51bSAqIC0xbiwgdGhpcy5kZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmxvb3IoKTogVmFsdWUge1xuICAgICAgICBpZiAodGhpcy5kZW4gPT09IDFuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnRXhhY3RWYWx1ZSh0aGlzLm51bSAvIHRoaXMuZGVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjZWlsaW5nKCk6IFZhbHVlIHtcbiAgICAgICAgaWYgKHRoaXMuZGVuID09PSAxbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0V4YWN0VmFsdWUoKHRoaXMubnVtIC8gdGhpcy5kZW4pICsgMW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJvdW5kKCk6IFZhbHVlIHtcbiAgICAgICAgaWYgKHRoaXMuZGVuID09PSAxbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmbG9vciA9IHRoaXMuZmxvb3IoKTtcbiAgICAgICAgICAgIGNvbnN0IGZsb29yZGlmZiA9IHRoaXMuc3VidHJhY3QoZmxvb3IpLmFicygpO1xuXG4gICAgICAgICAgICBjb25zdCBjZWlsID0gdGhpcy5jZWlsaW5nKCk7XG4gICAgICAgICAgICBjb25zdCBjZWlsZGlmZiA9IGNlaWwuc3VidHJhY3QodGhpcykuYWJzKCk7XG5cbiAgICAgICAgICAgIGlmIChjZWlsZGlmZi5ncmVhdGVyVGhhbk9yRXF1YWwoZmxvb3JkaWZmKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjZWlsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmxvb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2coKTogVmFsdWUge1xuICAgICAgICByZXR1cm4gdGhpcy50b1NtYWxsRXhhY3QoKS5sb2coKTtcbiAgICB9XG4gICAgZXhwdChwb3dlcjogVmFsdWUpOiBWYWx1ZSB7XG4gICAgICAgIHBvd2VyID0gcG93ZXIudG9JbmV4YWN0KCk7XG4gICAgICAgIGlmIChwb3dlci5pc0ludGVnZXIoKSkge1xuICAgICAgICAgICAgY29uc3QgZXhwID0gQmlnSW50KHBvd2VyLm51bSk7XG4gICAgICAgICAgICBjb25zdCBudW0gPSBiaWdFeHB0KHRoaXMubnVtLCBleHApO1xuICAgICAgICAgICAgY29uc3QgZGVuID0gYmlnRXhwdCh0aGlzLmRlbiwgZXhwKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnRXhhY3RWYWx1ZShudW0sIGRlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9TbWFsbEV4YWN0KCkuZXhwdChwb3dlcik7XG4gICAgfVxuICAgIGV4cCgpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU21hbGxFeGFjdCgpLmV4cCgpO1xuICAgIH1cblxuICAgIGFuZ2xlKCk6IFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdFeGFjdFZhbHVlKDBuKTtcbiAgICB9XG4gICAgdGFuKCk6IFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TbWFsbEV4YWN0KCkudGFuKCk7XG4gICAgfVxuICAgIGNvcygpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU21hbGxFeGFjdCgpLmNvcygpO1xuICAgIH1cbiAgICBzaW4oKTogVmFsdWUge1xuICAgICAgICByZXR1cm4gdGhpcy50b1NtYWxsRXhhY3QoKS5zaW4oKTtcbiAgICB9XG4gICAgYXRhbigpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU21hbGxFeGFjdCgpLmF0YW4oKTtcbiAgICB9XG4gICAgYWNvcygpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU21hbGxFeGFjdCgpLmFjb3MoKTtcbiAgICB9XG4gICAgYXNpbigpOiBWYWx1ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU21hbGxFeGFjdCgpLmFzaW4oKTtcbiAgICB9XG59XG5cbmNvbnN0IEVYQUNUX1pFUk8gPSBuZXcgU21hbGxFeGFjdFZhbHVlKDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIENvbnN0YW50cyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3QgWkVST19WQUwgPSBuZXcgU21hbGxFeGFjdFZhbHVlKDApO1xuZXhwb3J0IGNvbnN0IE9ORV9WQUwgPSBuZXcgU21hbGxFeGFjdFZhbHVlKDEpO1xuZXhwb3J0IGNvbnN0IFRXT19WQUwgPSBuZXcgU21hbGxFeGFjdFZhbHVlKDIpO1xuXG5leHBvcnQgY29uc3QgTkVHX09ORV9WQUwgPSBuZXcgU21hbGxFeGFjdFZhbHVlKC0xKTtcblxuZXhwb3J0IGNvbnN0IFBJX1ZBTCA9IG5ldyBJbmV4YWN0VmFsdWUoTWF0aC5QSSk7XG5cbmV4cG9ydCBjb25zdCBJTkZfVkFMID0gbmV3IEluZXhhY3RWYWx1ZShOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpO1xuZXhwb3J0IGNvbnN0IE5FR19JTkZfVkFMID0gbmV3IEluZXhhY3RWYWx1ZShOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkpO1xuZXhwb3J0IGNvbnN0IE5BTl9WQUwgPSBuZXcgSW5leGFjdFZhbHVlKE51bWJlci5OYU4pO1xuIiwiaW1wb3J0IHsgQm94ZWROdW1iZXIgfSBmcm9tICcuL0JveGVkTnVtYmVyJztcblxuZXhwb3J0IHR5cGUgUmFja2V0TnVtYmVyID0gSlNJbnRlZ2VyIHwgQm94ZWROdW1iZXI7XG5cbmV4cG9ydCB0eXBlIEpTTnVtYmVyID0gbnVtYmVyIHwgYmlnaW50O1xuXG5leHBvcnQgdHlwZSBKU0ludGVnZXIgPSBKU051bWJlcjtcblxuZXhwb3J0IGVudW0gTGV2ZWwge1xuICAgIElOVEVHRVIsXG4gICAgUkFUSU9OQUwsXG4gICAgUkVBTCxcbiAgICBDT01QTEVYXG59XG4iLCJpbXBvcnQge1xuICAgIEpTSW50ZWdlcixcbiAgICBKU051bWJlclxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7XG4gICAgVmFsdWVcbn0gZnJvbSAnLi9WYWx1ZSc7XG5pbXBvcnQge1xuICAgIGlzSlNJbnRlZ2VyXG59IGZyb20gJy4uL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZWdlcklzT25lKG46IEpTSW50ZWdlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzSW50ZWdlciA9IGlzSlNJbnRlZ2VyKG4pO1xuICAgIGNvbnN0IGlzT25lID0gdHlwZW9mIG4gPT09ICdiaWdpbnQnID8gbiA9PT0gMW4gOiBuID09PSAxO1xuICAgIHJldHVybiBpc0ludGVnZXIgJiYgaXNPbmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJJc1JhdGlvbmFsKG46IEpTTnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNCaWdJbnQgPSB0eXBlb2YgbiA9PT0gJ2JpZ2ludCc7XG4gICAgY29uc3QgaXNSYXRpb25hbEZsb2F0ID0gTnVtYmVyLmlzRmluaXRlKG4pICYmICFOdW1iZXIuaXNOYU4obik7XG4gICAgcmV0dXJuIGlzQmlnSW50IHx8IGlzUmF0aW9uYWxGbG9hdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoRXhhY3RuZXNzKHg6IFZhbHVlLCB5OiBWYWx1ZSk6IFZhbHVlW10ge1xuICAgIHggPSAheS5pc0V4YWN0KCkgPyB4LnRvSW5leGFjdCgpIDogeDtcbiAgICB5ID0gIXguaXNFeGFjdCgpID8geS50b0luZXhhY3QoKSA6IHk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbn1cblxuXG5leHBvcnQgKiBmcm9tICcuLi91dGlsJztcbiIsImV4cG9ydCAqIGZyb20gJy4vbnVtYmVycy90eXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL251bWJlcnMvQm94ZWROdW1iZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mdW5jdGlvbnMvYXJpdGhtZXRpYyc7XG5leHBvcnQgKiBmcm9tICcuL2Z1bmN0aW9ucy9jb21wYXJpc29uJztcbmV4cG9ydCAqIGZyb20gJy4vZnVuY3Rpb25zL3ByZWRpY2F0ZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9mdW5jdGlvbnMvbWlzYyc7XG5leHBvcnQgKiBmcm9tICcuL2Z1bmN0aW9ucy9jb21wbGV4JztcbmV4cG9ydCAqIGZyb20gJy4vZnVuY3Rpb25zL3RyaWdvbm9tZXRyeSc7XG5leHBvcnQgKiBmcm9tICcuL2Z1bmN0aW9ucy9jcmVhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2Z1bmN0aW9ucy9iaXR3aXNlJztcbiIsImltcG9ydCB7XG4gICAgSlNOdW1iZXIsXG4gICAgSlNJbnRlZ2VyXG59IGZyb20gJy4vdG93ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNKU051bWJlcihuOiBhbnkpOiBuIGlzIEpTTnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInIHx8IHR5cGVvZiBuID09PSAnYmlnaW50Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSlNJbnRlZ2VyKG46IGFueSk6IG4gaXMgSlNJbnRlZ2VyIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcihuKSB8fCB0eXBlb2YgbiA9PT0gJ2JpZ2ludCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhZmVJbnRlZ2VyKG46IEpTSW50ZWdlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1heCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIGNvbnN0IG1pbiA9IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSO1xuXG4gICAgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pICYmIG4gPj0gbWluICYmIG4gPD0gbWF4O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuID49IEJpZ0ludChtaW4pICYmIG4gPD0gQmlnSW50KG1heCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkQmVCaWdJbnQobjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSAmJiAhaXNTYWZlSW50ZWdlcihuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpZ0V4cHQobjogYmlnaW50LCBrOiBiaWdpbnQpOiBiaWdpbnQge1xuICAgIGxldCBhY2MgPSAxbjtcbiAgICB3aGlsZSAoayAhPT0gMG4pIHtcbiAgICAgICAgaWYgKGsgJSAybiA9PT0gMG4pIHtcbiAgICAgICAgICAgIG4gPSBuICogbjtcbiAgICAgICAgICAgIGsgPSBrIC8gMm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2MgPSBhY2MgKiBuO1xuICAgICAgICAgICAgayA9IGsgLSAxbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWNjO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90b3dlci50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==