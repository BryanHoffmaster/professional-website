import { FontSwitcherDirective } from './font-switcher.directive'

describe('FontSwitcherDirective', () => {
    it('should create an instance', () => {
        const el = document.createElement('div')
        const directive = new FontSwitcherDirective(el)
        expect(directive).toBeTruthy()
    })
})
