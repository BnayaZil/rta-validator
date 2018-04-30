const rtaValidator = require('../lib/rta-validator')

describe('String validation', () => {
    it('type as string', () => {
        const val = ['test']
        expect(() => rtaValidator([{name: 'test', type: 'string', val}])).toThrowError(/Contract Error/)
    })

    it('type as array', () => {
        const val = ['test']
        expect(() => rtaValidator([{name: 'test', type: ['string'], val}])).toThrowError(/Contract Error/)
    })

    it('type as latter', () => {
        const val = ['test']
        expect(() => rtaValidator([{name: 'test', type: 's', val}])).toThrowError(/Contract Error/)
    })

    it('type as latter in array', () => {
        const val = ['test']
        expect(() => rtaValidator([{name: 'test', type: ['s'], val}])).toThrowError(/Contract Error/)
    })

    it('to pass', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['s'], val}])).not.toThrowError(/Contract Error/)
    })
})