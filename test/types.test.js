const rtaValidator = require('../lib/rta-validator')

describe('rtaValidator', () => {
    describe('Object validation', () => {
        it('type as string', () => {
            const val = []
            expect(() => rtaValidator([{name: 'test', type: 'Object', val}])).toThrowError(/Contract Error/)
        })

        it('type as array', () => {
            const val = []
            expect(() => rtaValidator([{name: 'test', type: ['Object'], val}])).toThrowError(/Contract Error/)
        })

        it('type as latter', () => {
            const val = []
            expect(() => rtaValidator([{name: 'test', type: 'O', val}])).toThrowError(/Contract Error/)
        })
    })
})