import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DevMenuComponent } from './dev-menu.component'

describe('DevMenuComponent', () => {
    let component: DevMenuComponent
    let fixture: ComponentFixture<DevMenuComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DevMenuComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(DevMenuComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
