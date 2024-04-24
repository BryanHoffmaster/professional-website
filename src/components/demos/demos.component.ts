import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-demos',
    standalone: true,
    imports: [],
    templateUrl: './demos.component.html',
    styleUrl: './demos.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemosComponent {}
