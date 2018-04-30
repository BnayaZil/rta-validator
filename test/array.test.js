const rtaValidator = require('../lib/rta-validator')

describe('Array validation', () => {
    it('type as string', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'array', val}])).toThrowError(/Contract Error/)
    })

    it('type as array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['array'], val}])).toThrowError(/Contract Error/)
    })

    it('type as latter', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'a', val}])).toThrowError(/Contract Error/)
    })

    it('type as latter in array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['a'], val}])).toThrowError(/Contract Error/)
    })
    
    it('arguments is not array', () => {
        function test() {
            const val = arguments
            expect(() => rtaValidator([{name: 'test', type: 'array', val}])).toThrowError(/Contract Error/)
        }
        
        test('foo')
    })

    it('to pass', () => {
        const val = ['test']
        expect(() => rtaValidator([{name: 'test', type: ['a'], val}])).not.toThrowError(/Contract Error/)
    })
})