function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let opBracket = 0
    let clBracket = 0
    if (expr.indexOf('/ 0') + 1) { throw new Error('TypeError: Division by zero.') }
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '(') { opBracket++ }
        if (expr[i] === ')') { clBracket++ }
    }
    if (opBracket !== clBracket) { throw new Error('ExpressionError: Brackets must be paired') }
}

module.exports = {
    expressionCalculator
}