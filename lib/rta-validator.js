const flatten = require('lodash/flatten')
const isObject = require('lodash/isObject')
const isFunction = require('lodash/isFunction')
const isString = require('lodash/isString')
const isNumber = require('lodash/isNumber')
const isUndefined = require('lodash/isUndefined')
const isBoolean = require('lodash/isBoolean')
const isError = require('lodash/isError')

const isPOJO = (element) => isObject(element) && !method.Array(element) && !method.Error(element)

const method = {
    Object: isPOJO,
    O: isPOJO,
    Function: isFunction,
    F: isFunction,
    String: isString,
    S: isString,
    Number: isNumber,
    N: isNumber,
    Array: Array.isArray,
    A: Array.isArray,
    Undefined: isUndefined,
    U: isUndefined,
    Boolean: isBoolean,
	B: isBoolean,
	Error: isError,
	E: isError
}

const supportedTypes = ['Object', 'Function', 'String', 'Number', 'Array', 'Undefined', 'Boolean', 'Error']

const defaultErrorHandler = (err) => {
    throw err
}

const validateArguments = (options = [], errorHandler = defaultErrorHandler) => {
	return options
		.filter((option) => {
			const types = isString(option.type) ? supportedTypes.includes(option.type) ? [option.type] : option.type.split('') : flatten([option.type])
			// Check every validation
			const regularValidations = types
				.filter((method) => !isFunction(method))
				.map((type) => !method[type](option.val))
			const customValidations = types
				.filter((method) => isFunction(method))
				.map((validation) => !validation(option.val))
			return [
				...regularValidations,
				...customValidations
			]
			// Check if all argument validations pass
			.every((val) => val)

		})
		.map((option) => {
			const types = flatten([option.type]).join(' or ')
			const validations = (flatten([option.type]).some(isFunction)) ? `pass the follow validations '${types}'` : `be '${types}'`
			const err = new Error(`Contract Error: ${option.name} should ${validations}, you pass: ${option.val}`)
			return errorHandler(err)
		})
}

module.exports = validateArguments