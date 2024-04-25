import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-demos',
    standalone: true,
    imports: [],
    templateUrl: './demo.component.html',
    styleUrl: './demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {}
