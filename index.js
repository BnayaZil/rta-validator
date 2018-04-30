const rtaValidator = require('./src/art-validator.js')
module.exports = rtaValidator

if (typeof window !== 'undefined') {
    window.rtaValidator = rtaValidator;
}
