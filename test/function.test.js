const rtaValidator = require('../lib/rta-validator')

describe('Function validation', () => {
    it('type as string', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'function', val}])).toThrowError(/Contract Error/)
    })

    it('type as array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['function'], val}])).toThrowError(/Contract Error/)
    })

    it('type as latter', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'f', val}])).toThrowError(/Contract Error/)
    })

    it('type as latter in array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['f'], val}])).toThrowError(/Contract Error/)
    })

    it('to pass', () => {
        const val = () => {}
        expect(() => rtaValidator([{name: 'test', type: ['f'], val}])).not.toThrowError(/Contract Error/)
    })
})