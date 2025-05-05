import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {HeaderComponent} from '../../header/header.component';

@Component({
  selector: 'app-info-page',
  imports: [
    RouterLink,
    HeaderComponent
  ],
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.scss'
})
export class InfoPageComponent {

}
