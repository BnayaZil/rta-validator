const rtaValidator = require('../lib/rta-validator')

describe('Error validation', () => {
    it('type as string', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'error', val}])).toThrowError(/Contract Error/)
    })

    it('type as array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['error'], val}])).toThrowError(/Contract Error/)
    })

    it('type as latter', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'e', val}])).toThrowError(/Contract Error/)
    })

    it('type as latter in array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['e'], val}])).toThrowError(/Contract Error/)
    })

    it('to pass', () => {
        const val = new Error()
        expect(() => rtaValidator([{name: 'test', type: ['e'], val}])).not.toThrowError(/Contract Error/)
    })
})