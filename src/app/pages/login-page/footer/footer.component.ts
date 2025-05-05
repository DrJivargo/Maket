import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SvgIconComponent} from '../../../helpers/svg-icon.component';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLinkActive,
    RouterLink,
    SvgIconComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
