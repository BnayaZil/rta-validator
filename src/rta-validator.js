const flatten = require('lodash/flatten')
const isObject = require('lodash/isObject')
const isFunction = require('lodash/isFunction')
const isString = require('lodash/isString')
const isNumber = require('lodash/isNumber')
const isArray = require('lodash/isArray')
const isUndefined = require('lodash/isUndefined')
const isBoolean = require('lodash/isBoolean')

const method = {
    Object: isObject,
    O: isObject,
    Function: isFunction,
    F: isFunction,
    String: isString,
    S: isString,
    Number: isNumber,
    N: isNumber,
    Array: isArray,
    A: isArray,
    Undefined: isUndefined,
    U: isUndefined,
    Boolean: isBoolean,
    B: isBoolean,
}

const availableTypes = ['Object', 'Function', 'String', 'Number', 'Array', 'Undefined', 'Boolean']

const defaultErrorHandler = (err) => {
    throw err
}

const validateArguments = (options = [], errorHandler = defaultErrorHandler) => {
	return options
		.filter((option) => {
			const types = isString(option.type) ? availableTypes.includes(option.type) ? [option.type] : option.type.split('') : flatten([option.type])
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