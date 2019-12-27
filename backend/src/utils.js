import fs from 'fs'

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
/*
 * Gets apartment images
 * @param id<String> Apartment id from mongodb
 * @return images[] Array of images
 * */
export async function getImages(id) {
    try {
        const dirContent = await new Promise((resolve, reject) => {
            fs.readdir(__dirname + `/../images/${id}/`, (err, files) => {
                if (files) {
                    resolve(files)
                } else if (err) {
                    resolve(err)
                }
            })
        })
        const images = dirContent.map(image => {
            return `http://localhost:${process.env.PORT}/apartments/images/${id}/${image}`
        })
        return images
    } catch (err) {
        return []
    }
}
