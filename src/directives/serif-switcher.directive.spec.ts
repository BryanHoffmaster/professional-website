import { SerifSwitcherDirective } from './serif-switcher.directive'

describe('SerifSwitcherDirective', () => {
    it('should create an instance', () => {
        const el = document.createElement('div')
        const directive = new SerifSwitcherDirective(el)
        expect(directive).toBeTruthy()
    })
})
