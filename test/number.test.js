const rtaValidator = require('../lib/rta-validator')

describe('Number validation', () => {
    it('type as string', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'number', val}])).toThrowError(/Contract Error/)
    })

    it('type as array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['number'], val}])).toThrowError(/Contract Error/)
    })

    it('type as latter', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'n', val}])).toThrowError(/Contract Error/)
    })

    it('type as latter in array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['n'], val}])).toThrowError(/Contract Error/)
    })

    it('number as string is not number', () => {
        const val = '123'
        expect(() => rtaValidator([{name: 'test', type: ['n'], val}])).toThrowError(/Contract Error/)
    })

    it('NaN to pass', () => {
        const val = NaN
        expect(() => rtaValidator([{name: 'test', type: ['n'], val}])).not.toThrowError(/Contract Error/)
    })

    it('to pass', () => {
        const val = 123
        expect(() => rtaValidator([{name: 'test', type: ['n'], val}])).not.toThrowError(/Contract Error/)
    })
})