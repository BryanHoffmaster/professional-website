import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-demo-components-library',
    standalone: true,
    imports: [],
    templateUrl: './demo-components-library.component.html',
    styleUrl: './demo-components-library.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponentsLibraryComponent {}
