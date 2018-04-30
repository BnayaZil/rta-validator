const rtaValidator = require('../lib/rta-validator')

describe('Boolean validation', () => {
    it('type as string', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'boolean', val}])).toThrowError(/Contract Error/)
    })

    it('type as array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['boolean'], val}])).toThrowError(/Contract Error/)
    })

    it('type as latter', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'b', val}])).toThrowError(/Contract Error/)
    })

    it('type as latter in array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['b'], val}])).toThrowError(/Contract Error/)
    })

    it('number is not boolean', () => {
        const val = 1
        expect(() => rtaValidator([{name: 'test', type: ['b'], val}])).toThrowError(/Contract Error/)
    })

    it('to pass', () => {
        const val = true
        expect(() => rtaValidator([{name: 'test', type: ['b'], val}])).not.toThrowError(/Contract Error/)
    })
})