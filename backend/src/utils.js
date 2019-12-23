export function responseFactory(statusCode, body) {
    return {
        statusCode,
        data: {
            ...body,
        },
    }
}
/*
 * Receives an operator in arithmetic form and returns it in mongo format
 * @param operator<String> Arithmetic operator
 * @return mongoOperator<String>
 * */
export function resolveOperator(operator) {
    switch (operator) {
        case '>':
            return '$gt'
        case '<':
            return '$lt'
        case '>=':
            return '$gte'
        case '<=':
            return '$lte'
        case '=':
            return '$eq'
    }
}
