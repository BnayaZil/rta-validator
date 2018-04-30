const rtaValidator = require('../lib/rta-validator')

describe('Object validation', () => {
    it('type as string', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'Object', val}])).toThrowError(/Contract Error/)
    })

    it('type as array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['Object'], val}])).toThrowError(/Contract Error/)
    })

    it('type as latter', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'O', val}])).toThrowError(/Contract Error/)
    })

    it('type as latter in array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['O'], val}])).toThrowError(/Contract Error/)
    })

    it('array is not object', () => {
        const val = []
        expect(() => rtaValidator([{name: 'test', type: 'Object', val}])).toThrowError(/Contract Error/)
    })

    it('error is not object', () => {
        const val = new Error()
        expect(() => rtaValidator([{name: 'test', type: 'Object', val}])).toThrowError(/Contract Error/)
    })

    it('null is not object', () => {
        const val = null
        expect(() => rtaValidator([{name: 'test', type: 'Object', val}])).toThrowError(/Contract Error/)
    })

    it('to pass', () => {
        const val = {foo: 'bar'}
        expect(() => rtaValidator([{name: 'test', type: 'Object', val}])).not.toThrowError(/Contract Error/)
    })
})