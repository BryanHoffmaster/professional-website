import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DemoComponentsLibraryComponent } from './demo-components-library.component'

describe('DemoComponentsLibraryComponent', () => {
    let component: DemoComponentsLibraryComponent
    let fixture: ComponentFixture<DemoComponentsLibraryComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DemoComponentsLibraryComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(DemoComponentsLibraryComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
