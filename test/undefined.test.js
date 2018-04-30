const rtaValidator = require('../lib/rta-validator')

describe('Undefined validation', () => {
    it('type as string', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'undefined', val}])).toThrowError(/Contract Error/)
    })

    it('type as array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['undefined'], val}])).toThrowError(/Contract Error/)
    })

    it('type as latter', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'u', val}])).toThrowError(/Contract Error/)
    })

    it('type as latter in array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['u'], val}])).toThrowError(/Contract Error/)
    })

    it('null is not undefined', () => {
        const val = null
        expect(() => rtaValidator([{name: 'test', type: ['u'], val}])).toThrowError(/Contract Error/)
    })

    it('to pass', () => {
        const val = undefined
        expect(() => rtaValidator([{name: 'test', type: ['u'], val}])).not.toThrowError(/Contract Error/)
    })
})