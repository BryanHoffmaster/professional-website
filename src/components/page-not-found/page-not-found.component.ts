import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    imports: [],
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {
    // TODO: You will have to change the SVG to match the background/color of the site them mode/color scheme
    // you can do so similar ot the following:
    // Get the SVG element
    // const svg = document.getElementById('robot-svg');
    // // Change stroke color
    // svg.querySelectorAll('[stroke]').forEach(element => {
    //   element.setAttribute('stroke', '#ff0000'); // Change to red stroke color
    // });
}
