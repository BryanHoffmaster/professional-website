import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DemoLocalStorageComponent } from './demo-local-storage.component'

describe('DemoLocalStorageComponent', () => {
    let component: DemoLocalStorageComponent
    let fixture: ComponentFixture<DemoLocalStorageComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DemoLocalStorageComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(DemoLocalStorageComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
