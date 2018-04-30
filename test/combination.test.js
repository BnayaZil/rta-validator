const rtaValidator = require('../lib/rta-validator')

describe('Combination validation', () => {
    it('type as array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['object', 'array'], val}])).toThrowError(/Contract Error/)
    })

    it('type as latter', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: 'oa', val}])).toThrowError(/Contract Error/)
    })

    it('type as latter in array', () => {
        const val = 'test'
        expect(() => rtaValidator([{name: 'test', type: ['o', 'a'], val}])).toThrowError(/Contract Error/)
    })

    it('type as array', () => {
        const val = ['test']
        expect(() => rtaValidator([{name: 'test', type: ['object', 'array'], val}])).not.toThrowError(/Contract Error/)
    })

    it('type as latter', () => {
        const val = ['test']
        expect(() => rtaValidator([{name: 'test', type: 'oa', val}])).not.toThrowError(/Contract Error/)
    })

    it('type as latter in array', () => {
        const val = ['test']
        expect(() => rtaValidator([{name: 'test', type: ['o', 'a'], val}])).not.toThrowError(/Contract Error/)
    })

    it('type as array', () => {
        const val = {foo: 'bar'}
        expect(() => rtaValidator([{name: 'test', type: ['object', 'array'], val}])).not.toThrowError(/Contract Error/)
    })

    it('type as latter', () => {
        const val = {foo: 'bar'}
        expect(() => rtaValidator([{name: 'test', type: 'oa', val}])).not.toThrowError(/Contract Error/)
    })

    it('type as latter in array', () => {
        const val = {foo: 'bar'}
        expect(() => rtaValidator([{name: 'test', type: ['o', 'a'], val}])).not.toThrowError(/Contract Error/)
    })
})