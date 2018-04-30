const rtaValidator = require('./lib/rta-validator.js')
module.exports = rtaValidator

if (typeof window !== 'undefined') {
    window.rtaValidator = rtaValidator;
}
